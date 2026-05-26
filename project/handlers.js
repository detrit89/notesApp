import { addNote, getAllNotes, searchNote, deleteNote } from "./storage.js"


export function search(searchText) {
    let found = searchNote(searchText)
    
    if(found.length === 0) {
        console.log("notes not found")
        return
    }
    found.forEach((item) => {
        console.log(`${item.index + 1} - ${item.text.note} - ${item.text.title}`)
    })
}

export function deleteNotes(id) {
    let del = deleteNote(id)
    if (!del) {
        console.log(`Note not found`)
        return
    } 
    console.log("note delete")
}

export function addNotes(text, title) {
    addNote(text, title)
    console.log("New note added")
}

export function checkList() {
    const notes = getAllNotes() 

    if (notes.length === 0) {
        console.log(`notes not found`)
        return
    }

    notes.forEach((item) => {
        console.log(`${item.index +1} - ${item.note.note} - ${item.note.title} - ${item.note.data}`)
    })
}

export function helpCommand() {
    console.log(`Available commands:
    
    node project/index.js add "text" "title"       -> add new note
    node project/index.js list            -> show all notes
    node project/index.js search "text"   -> search notes
    node project/index.js delete ID       -> delete note
    node project/index.js help            -> show help       
    `)
}
