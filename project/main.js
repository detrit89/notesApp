import { addNote } from './add.js'
import { deleteNote } from './remove.js'
import { searchNote } from './search.js'
import { checkList, helpCommand } from './show.js'


const command = process.argv[2]
const argument = process.argv[3]




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