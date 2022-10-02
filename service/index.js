module.exports = db => {
    return {
        addNote: async note => {
            await db.put(note)
        },
        editNote: async note => {
            await db.update({"key":note.key, "note":note.note})
        },
        getNote: async key => {
            return await db.get(key)
        },
        getNotes: async () => {
            return await db.fetch()
        },
        removeNote: async key => {
            await db.delete(key)
        }
    }
}