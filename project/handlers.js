import { addNote, getAllNotes, searchNotes, deleteNote } from "./storage.js"

export function formatNote(id, item) {
    return `${id} - ${item.title} - ${item.body} - ${item.createdAt} `
}


export function handleSearchNotes(searchText) {
    if(!searchText) {
        console.log("Write search text")
        return
    }
    const foundNotes = searchNotes(searchText)
    
    if(foundNotes.size === 0) {
        console.log("No notes found")
        return
    }
    for(const [id, item] of foundNotes) {
        console.log(formatNote(id, item))
    }
}

export function handleDeleteNote(id) {
    const isDeleteSuccessful = deleteNote(id)
    if (!isDeleteSuccessful) {
        console.log(`Note not found`)
        return
    } 
    console.log("Note deleted")
}

export function handleAddNote(title, body) {
    addNote(title, body)
    console.log("New note added")
}

export function handleListNotes() {
    const notes = getAllNotes()
    if (notes.size === 0) {
        console.log(`Notes not found`)
        return
    }

    for (const [id, item] of notes) {
        console.log(formatNote(id, item))
    }
}

export function helpCommand() {
    console.log(`Available commands:
    
    node project/index.js add "title" "body"   -> add new note
    node project/index.js list                -> show all notes
    node project/index.js search "text"       -> search notes
    node project/index.js delete ID           -> delete note
    node project/index.js help                -> show help       
    `)
}
