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
    let index = Number(id)-1
    if(notes[index] === null || notes[index] === undefined) {
        return false 
    }

    notes[index] = null
    saveNotes(notes)
    return true 
}

export function searchNote (searchText) {
    let result = []
    notes.forEach((text, index) => {
        if (text !== null && text.includes(searchText)) {
                result.push({index, text})
        }
    })
    return result
}

export function addNote (note) {
    for(let i = 0; i < notes.length; i++) {
        if(notes[i] === null) {
            notes[i] = note
            saveNotes(notes)
            return
        }
    }
    notes.push(note)
    saveNotes(notes)
}

export function getAllNotes () {
    let result = []
    notes.forEach((note, index) => {
        if(note !== null) {
            result.push({index, note})
        }
    })
    return result
}


