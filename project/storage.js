import fs from "fs"

const FILE_NAME = 'notes.json'

export function loadNotes() {
    try {
        const data = fs.readFileSync(FILE_NAME, 'utf-8')
        return JSON.parse(data)
    } catch(error) {
        console.error(`Failed to load notes: ${error}`)
        return []
    }
}

export function saveNotes (notes) {
    fs.writeFileSync(FILE_NAME, JSON.stringify(notes, null, 2))
}

export const notes = loadNotes()

export function deleteNote (id) {
    const index = Number(id)-1
    if(notes[index] === null || notes[index] === undefined) {
        return false 
    }

    notes[index] = null
    saveNotes(notes)
    return true 
}

export function searchNotes (searchText) {
    const foundNotes = []
    notes.forEach((note, index) => {
        if (note !== null && (note.body.includes(searchText) || note.title.includes(searchText))) {
                foundNotes.push({index, note})
        }
    })
    return foundNotes
}

export function addNote (title, body) {
    const newNote = {
        title: title,
        body: body,
        createdAt: new Date().toLocaleString()
    }

    for(let i = 0; i < notes.length; i++) {
        if(notes[i] === null) {
            notes[i] = newNote
            saveNotes(notes)
            return
        }
    }
    notes.push(newNote)
    saveNotes(notes)
}

export function getAllNotes () {
    const notesList = []
    notes.forEach((note, index) => {
        if(note !== null) {
            notesList.push({index, note})
        }
    })
    return notesList
}


