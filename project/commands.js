import { error } from 'node:console'
import { deleteNote, searchNote, addNote, checkList, helpCommand} from './handlers.js'

export function runCommand(command, argument) {
    if (!command) {
        console.log("Write command")
        return
    }
    if (command === "add") {
        if (!argument) {
            console.log("Write note text")
            return
        }
        addNote(argument)
        return
    }
    if (command === "list") {
        checkList()
        return
    }
    if (command === "search") {
        if (!argument) {
            console.log("Write search text")
            return
        }
        searchNote(argument)
        return
    }
    if (command === "delete") {
        if (!argument) {
            console.log("Write note id")
            return
        }
        deleteNote(argument)
        return
    }
    if (command === "help") {
        helpCommand()
        return
    }
    console.log("Unknown command")
}