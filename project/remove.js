import { notes, saveNotes } from './notes.js'
export function deleteNote (id) {
    if(notes[Number(id)-1] === null || notes[Number(id)-1] === undefined) {
        console.log("Note not found")
        return
    }

    notes[Number(id)-1] = null
    saveNotes(notes)
    console.log(`Note deleted`)
}