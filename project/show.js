import { notes, saveNotes } from './notes.js'
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
    
    node main.js add "text"      -> add new note
    node main.js list            -> show all notes
    node main.js search "text"   -> search notes
    node main.js delete ID       -> delete note
    node main.js help            -> show help       
    `)
}