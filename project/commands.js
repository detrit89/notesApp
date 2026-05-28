import {handleAddNote, handleDeleteNote, handleListNotes, handleSearchNotes, helpCommand} from './handlers.js'

export function runCommand(command, argument, title) {
    if (!command) {
        console.log("Write command")
        return
    }
    if (command === "add") {
        if (!argument) {
            console.log("Write note text")
            return
        }
        if(!title) {
            console.log("Write note title")
            return
        }
        handleAddNote(title, argument)
        return
    }
    if (command === "list") {
        handleListNotes()
        return
    }
    if (command === "search") {
        if (!argument) {
            console.log("Write search text")
            return
        }
        handleSearchNotes(argument)
        return
    }
    if (command === "delete") {
        if (!argument) {
            console.log("Write note id")
            return
        }
        handleDeleteNote(argument)
        return
    }
    if (command === "help") {
        helpCommand()
        return
    }
    console.log("Unknown command")
}