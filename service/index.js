module.exports = db => {
    const addNote = async note => {
        await db.put(note)
    }
    const editNote = async note => {
        let oldNote = getNote(note.key)
        await removeNote(note.key)
        let newNote = {...oldNote, ...note}
        await addNote(newNote)
    }
    const getNote = async key => {
        return await db.get(key)
    }
    const getNotes = async () => {
        return await db.fetch()
    }
    const removeNote = async key => {
        await db.delete(key)
    }
    return {
        addNote,
        editNote,
        getNote,
        getNotes,
        removeNote
    }
}