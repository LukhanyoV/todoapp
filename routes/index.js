module.exports = service => {
    return {
        view: async (req, res) => {
            const {items: notes} = await service.getNotes()
            res.render("index", {
                notes
            })
        },
        add: async (req, res) => {
            await service.addNote(req.body)
            res.redirect("back")
        },
        remove: async (req, res) => {
            let {key} = req.body
            await service.removeNote(key)
            res.redirect("back")
        },
        viewEdit: async (req, res) => {
            let {key} = req.params
            let {note} = await service.getNote(key)
            res.render("edit", {
                key,
                note
            })
        },
        editNote: async (req, res) => {
            let {key, note} = req.body
            let updateNote = {
                key,
                note
            }
            await service.editNote(updateNote)
            res.render("/")
        }
    }
}