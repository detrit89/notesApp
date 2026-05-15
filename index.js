const notes = []

const command = process.argv[2]
const argument = process.argv[3]

function addNote (note) {
    const newNotes = {
        id: notes.length + 1,
        text: note
    }

    notes.push(newNotes)
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
    console.log(`Note deleted`)
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