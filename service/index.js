module.exports = db => {
    return {
        addNote: async note => {
            await db.put(note)
        },
        editNote: async note => {
            await this.removeNote(note.key)
            await this.addNote(note)
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