import { DatabaseSync } from "node:sqlite"
const database = new DatabaseSync("notes.db")


database.exec(`
    CREATE TABLE IF NOT EXISTS notes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    body TEXT,
    createdAt TEXT
    )
`)

export function deleteNote (id) {
    const statement = database.prepare(`
        DELETE FROM notes
        Where id = ?
        `)
       const deleteResult = statement.run(id)
       if (deleteResult.changes === 0) {
        return false
       }
    return true
}

export function searchNotes (searchText) {
    const query = `%${searchText}%`
    const statement = database.prepare(`
        SELECT * FROM notes
        WHERE title LIKE ? OR body LIKE ?
        `)
       return statement.all(query, query)
}


export function addNote(title, body) {
    const insertNoteStatement = database.prepare(`
        INSERT INTO notes (title, body, createdAt)
        VALUES (?, ?, ?)
        `)
    insertNoteStatement.run(title, body, new Date().toLocaleString())
}


export function getAllNotes () {
    const statement = database.prepare(`
        SELECT * FROM notes
    `)
    return statement.all()
}

export function editNote(id, newTitle, newBody) {
    const statement = database.prepare (`
        UPDATE notes
        SET title = ?,
            body = ?
        WHERE id = ?
        `)
    const editResult = statement.run(newTitle, newBody, Number(id))
   if (editResult.changes === 0) {
    return false
   }
   return true
}