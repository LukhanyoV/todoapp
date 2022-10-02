const express = require("express")
const exphbs = require("express-handlebars")
const { Base } = require("deta")

const app = express()
const db = require("./config")(Base)

// set templating engine
app.engine("handlebars", exphbs.engine({
    defaultLayout: "main",
    helpers: {
        // create custom helpers if needed
    }
}))
app.set("view engine", "handlebars")

// set the middleware
app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())

// get routes and service
const service = require("./service")(db)
const routes = require("./routes")(service)


app.get("/", routes.view)
app.post("/add", routes.add)
app.post("/remove", routes.remove)

app.get("/edit/:key", routes.viewEdit)
app.post("/edit/:key", routes.editNote)

module.exports = app