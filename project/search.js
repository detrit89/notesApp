import { notes, saveNotes } from './notes.js'
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