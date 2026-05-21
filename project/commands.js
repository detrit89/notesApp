import { error } from 'node:console'
import { deleteNote, searchNote, addNote, checkList, helpCommand} from './handlers.js'

function runCommand(command, argument) {
    if (command.length <= 0 && argument.length <=0 ) {
        console.log(error)
        return
    }
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