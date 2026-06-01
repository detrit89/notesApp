import {handleAddNote, handleDeleteNote, handleListNotes, handleSearchNotes, helpCommand, handleEditNote} from './handlers.js'

export function runCommand(command, arg1, arg2, arg3) {
    if (!command) {
        helpCommand()
        return
    }
    switch (command) {
        case "add": {
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
         }
        case "list": {
            handleListNotes()
            break
        }
        case "search": {
            const searchText = arg1
            if (!searchText) {
                console.log("Write search text")
                return
            }
            handleSearchNotes(searchText)
            break
        }
        case "delete": {
            const id = arg1
            if (!id) {
                console.log("Write note id")
                return
            }
            handleDeleteNote(id)
            break
        }
        case "help": {
            helpCommand()
            break
        }
        case "edit": {
            const id = arg1
            const title = arg2
            const body = arg3
            if(!id) {
                console.log("Write note id")
                return
            } 
            if (!title) {
                console.log("Write note title")
                return
            } 
            if (!body) {
                console.log("Write note body")
                return
            }
            handleEditNote(id, title, body)
            break
        }
        default:
            console.log("Unknown command")
    }
}
