import fs from "fs"

export const FILE_NAME = 'notes.json'

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