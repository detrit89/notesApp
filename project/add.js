import { notes, saveNotes } from './notes.js'
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