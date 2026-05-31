import { addNote, getAllNotes, searchNotes, deleteNote, editNote } from "./storage.js"

export function formatNote(note, index) {
    return `${index} - ${note.title} - ${note.body} - ${note.createdAt} `
}

export function handleSearchNotes(searchText) {
    const foundNotes = searchNotes(searchText)
    if(foundNotes.length === 0) {
        console.log("No notes found")
        return
    }
    foundNotes.forEach((item) => {
        console.log(formatNote(item.note, item.index))
    })
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
    if (notes.length === 0) {
        console.log(`Notes not found`)
        return
    }

    notes.forEach((item) => {
        console.log(formatNote(item.note, item.index))
    })
}

export function handleEditNote(id, title, body) {
    const isEdited = editNote(id, title, body)
    if (!isEdited) {
        console.log("Note not found")
        return
    } 
    console.log("Note edited")
}

export function helpCommand() {
    console.log(`Available commands:
    
    node project/index.js add "title" "body"     -> add new note
    node project/index.js list                   -> show all notes
    node project/index.js search "text"          -> search notes
    node project/index.js delete ID              -> delete note
    node project/index.js help                   -> show help    
    node project/index.js edit id "title" "body" -> edit note   
    `)
}

