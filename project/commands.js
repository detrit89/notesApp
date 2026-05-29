import {handleAddNote, handleDeleteNote, handleListNotes, handleSearchNotes, helpCommand} from './handlers.js'

export function runCommand(command, arg1, arg2, arg3) {
    if (!command) {
        console.log("Write command")
        return
    }
    switch (command) {
        case "add":
            const title = arg1
            const body = arg2
            if (!title) {
                console.log("Write note title")
                return
            }
             if (!body) {
                console.log("Write note text")
                return
             }
            handleAddNote(title, body)
            break
            
        case "list":
            handleListNotes()
            break

        case "search":
            const searchText = arg1
            if (!searchText) {
                console.log("Write search text")
                return
            }
            handleSearchNotes(searchText)
            break
        case "delete":
            const id = arg1
            if (!id) {
                console.log("Write note id")
                return
            }
            handleDeleteNote(id)
            break
        case "help":
            helpCommand()
            break
        default:
            console.log("Unknown command")
    }
}
