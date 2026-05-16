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

    notes.push(note)
    saveNotes(notes)
    console.log(`New note added`)
    console.log(notes)
}

function checkList () {
    if (notes.length == 0) {
        console.log(`notes empty`)
        return
    }
    notes.forEach((note, index) => {
        console.log(`${index + 1} - ${note}`)
    })
}

function searchNote (searchText) {
    const notesWithIndex = notes.map((note, index) => {
        return {
            note: note,
            index: index
        }
    })
     const filt = notesWithIndex.filter((text) => {
        return text.note.includes(searchText)
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
    const indexId = notes.map((note, index) => {
        return {
            note: note,
            id: index
        }
    })

    const finds = indexId.find((notes) => {
        return notes.id+1 === Number(id)
    })
    if (!finds) {
        console.log(`Note not found`)
        return
    }

    const filt = indexId.filter((note) => {
        return note.id+1  !== Number(id)
    })
    const del = filt.map((text) => {
        return text.note
    })

    notes.length = 0
    notes.push(...del)
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