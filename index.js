const fs = require("fs")

const FILE_NAME = 'notes.json'

function loadNotes() {
    try {
        const data = fs.readFileSync(FILE_NAME, 'utf-8')
        return JSON.parse(data)
    } catch(error) {
        console.error(`Failed to load notes: ${error}`)
        return []
    }
}

function saveNotes (notes) {
    fs.writeFileSync(FILE_NAME, JSON.stringify(notes, null, 2))
}

const notes = loadNotes()
const command = process.argv[2]
const argument = process.argv[3]

function addNote (note) {
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

function checkList () {
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

function searchNote (searchText) {
    const notesWithIndex = notes.map((note, index) => {
        return {
            note: note,
            index: index
        }
    })
     const filt = notesWithIndex.filter((text) => {
        if (text.note !== null){
            return text.note.includes(searchText)
        }
    })
    if (filt.length === 0) {
        console.log(`Nothing found`)
        return
    }
    filt.forEach((item) => {
       console.log(`${item.index + 1} - ${item.note}`)
    })
}

function deleteNote (id) {
    if(notes[Number(id)-1] === null || notes[Number(id)-1] === undefined) {
        console.log("Note not found")
        return
    }

    notes[Number(id)-1] = null
    saveNotes(notes)
    console.log(`Note deleted`)
}

function helpCommand() {
    console.log(`Available commands:
    
    node index.js add "text"      -> add new note
    node index.js list            -> show all notes
    node index.js search "text"   -> search notes
    node index.js delete ID       -> delete note
    node index.js help            -> show help       
    `)
}


if (command === "add") {
    addNote(argument)
}
if (command === "list") {
    checkList()
}
if (command === "search") {
    searchNote(argument)
}
if (command === "delete") {
    deleteNote(argument)
}

if (command === "help") {
    helpCommand()
}