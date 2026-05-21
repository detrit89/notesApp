import { notes, saveNotes } from "./storage.js"

export function deleteNote (id) {
    if(notes[Number(id)-1] === null || notes[Number(id)-1] === undefined) {
        console.log("Note not found")
        return
    }

    notes[Number(id)-1] = null
    saveNotes(notes)
    console.log(`Note deleted`)
}

export function searchNote (searchText) {
    let hasSearch = false 
    notes.forEach((text, index) => {
        if (text !== null && text.includes(searchText)) {
                hasSearch = true
                console.log(`${index + 1} - ${text}`)
        }

    })
    if(!hasSearch) {
        console.log("notes not found")
    }
}

export function addNote (note) {
    for(let i = 0; i < notes.length; i++) {
        if(notes[i] === null) {
            notes[i] = note
            saveNotes(notes)
            console.log("New note added")
            return
        }
    }
    notes.push(note)
    saveNotes(notes)
    console.log(`New note added`)
}

export function checkList () {
    let hasNotes = false
    notes.forEach((note, index) => {
        if(note !== null) {
            hasNotes = true
            console.log(`${index + 1} - ${note}`)
        }
    })
    if(!hasNotes) {
        console.log("notes empty")
    }
}

export function helpCommand() {
    console.log(`Available commands:
    
    node project/index.js add "text"      -> add new note
    node project/index.js list            -> show all notes
    node project/index.js search "text"   -> search notes
    node project/index.js delete ID       -> delete note
    node project/index.js help            -> show help       
    `)
}