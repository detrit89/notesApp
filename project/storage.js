import fs from "fs"

const FILE_NAME = 'notes.json'

function loadNotes() {
    try {
        const data = fs.readFileSync(FILE_NAME, 'utf-8')
        return new Map( Object.entries(JSON.parse(data))
            .map(([id, note]) => [Number(id), note])
)
    } catch(error) {
        console.error(`Failed to load notes: ${error}`)
        return new Map()
    }
}

export function saveNotes (notes) {
    fs.writeFileSync(FILE_NAME, JSON.stringify(Object.fromEntries(notes), null, 2))
}

export const notes = loadNotes()

let noteId = 1
for (const id of notes.keys()) {
    if (Number(id) >= noteId) {
        noteId = Number(id) + 1
    }
}

export function deleteNote (id) {
    const isDeleted = notes.delete(Number(id))
    if (isDeleted) {
        saveNotes(notes)
    }
    return isDeleted
}

export function searchNotes (searchText) {
    const query = searchText.toLowerCase()
    const foundNotes = new Map()
    for (const [id, note] of notes) {
        if (note.body.toLowerCase().includes(query) || note.title.toLowerCase().includes(query)) {
               foundNotes.set(id, note)
        }
    }
    return foundNotes
}

export function addNote (title, body) {
    const newNote = {
        title: title,
        body: body,
        createdAt: new Date().toLocaleString()
    }

    notes.set(noteId, newNote)
    noteId++
    saveNotes(notes)
}

export function getAllNotes () {
    return new Map(notes)
}


