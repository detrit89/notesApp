const fs = require("fs")

const FILE_NAME = 'notes.json'

function loadNotes() {
    try {
        const data = fs.readFileSync(FILE_NAME, 'utf-8')
        return JSON.parse(data)
    } catch(error) {
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
    const newNotes = {
        id: notes.length + 1,
        text: note
    }

    notes.push(newNotes)
    saveNotes(notes)
    console.log(`New note added`)
    console.log(notes)
}

function checkList () {
    if (notes.length == 0) {
        console.log(`notes empty`)
        return
    }
    notes.forEach((note) => {
        console.log(`${note.id} - ${note.text}`)
    })
}

function searchNote (searchText) {
    const filt = notes.filter((text) => {
        return text.text.includes(searchText)
    })
    if (filt.length === 0) {
        console.log(`Nothing found`)
        return
    }
    filt.forEach((note) => {
       console.log(`${note.id} - ${note.text}`)
    })
}

function deleteNote (id) {
    const finds = notes.find((notes) => {
        return notes.id === Number(id)
    })
    if (!finds) {
        console.log(`Note not found`)
        return
    }

    const filt = notes.filter((note) => {
        return note.id !== Number(id)
    })

    notes.length = 0
    notes.push(...filt)
    saveNotes(notes)
    console.log(`Note deleted`)
}

function helpCommand() {
    console.log(`Availabe commands:
    
    node index.js add "text"      -> add new note
    node index.js list            -> show all notes
    node index.js search "text"   -> search notes
    node index.js delete ID       -> delete note
    node index.js help            -> show help       
    `)
}


if (command == "add") {
    addNote(argument)
}
if (command == "list") {
    checkList()
}
if (command == "search") {
    searchNote(argument)
}
if (command == "delete") {
    deleteNote(argument)
}

if (command == "help") {
    helpCommand()
}