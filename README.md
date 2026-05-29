# Notes App

A simple CLI notes application built with JavaScript.

Features:

- Add notes
- View all notes
- Search notes
- Delete notes
- Store data in `notes.json`

This project was created as a learning CLI app to practice:

- JavaScript
- Node.js
- File system (`fs`)
- Command-line arguments (`process.argv`)
- Data structures (`Map`)

---

## Project Structure

```txt
notesApp/
│── project/
│   ├── index.js
│   ├── commands.js
│   ├── handlers.js
│   ├── storage.js
│
│── notes.json
│── README.md
```

### File Description

- `index.js` — application entry point, receives command-line arguments
- `commands.js` — command handler (`add`, `list`, `search`, `delete`, `help`)
- `handlers.js` — business logic for commands
- `storage.js` — notes storage, loading and saving logic
- `notes.json` — local notes storage
- `README.md` — project documentation

---

## Installation

Clone the repository:

```bash
git clone https://github.com/detrit89/notesApp.git
```

Go to the project folder:

```bash
cd notesApp
```

---

## Available Commands

### Add a Note

```bash
node project/index.js add "Title" "Body"
```

Example:

```bash
node project/index.js add "Shopping" "Buy milk"
```

---

### Show All Notes

```bash
node project/index.js list
```

Example output:

```txt
1 - Shopping - Buy milk - 29.05.2026, 20:00:00
2 - Work - Finish project - 29.05.2026, 20:05:00
```

---

### Search Notes

Search works by `title` and `body`.

```bash
node project/index.js search "milk"
```

---

### Delete a Note

```bash
node project/index.js delete ID
```

Example:

```bash
node project/index.js delete 1
```

---

### Help

```bash
node project/index.js help
```

---

## Data Storage

Notes are stored inside `notes.json`.

The application uses `Map` internally:

- **key** → note ID
- **value** → note object

Example:

```js
Map {
  1 => {
    title: "Shopping",
    body: "Buy milk",
    createdAt: "29.05.2026, 20:00:00"
  }
}
```

Before saving, `Map` is converted into an object using:

```js
Object.fromEntries(notes)
```

When loading data, the object is converted back into `Map`.

---

## Technologies Used

- JavaScript (ES Modules)
- Node.js
- `fs`
- `process.argv`
- `Map`
- JSON

---

## Future Improvements

- Edit notes (`edit`)
- Note sorting
- Colored console output
- Better validation
- Automated tests
- UUID instead of numeric IDs