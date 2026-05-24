import { error } from 'node:console'
import { deleteNotes, search, addNotes, checkList, helpCommand} from './handlers.js'

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
        addNotes(argument)
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
        search(argument)
        return
    }
    if (command === "delete") {
        if (!argument) {
            console.log("Write note id")
            return
        }
        deleteNotes(argument)
        return
    }
    if (command === "help") {
        helpCommand()
        return
    }
    console.log("Unknown command")
}