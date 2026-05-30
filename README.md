# Notes CLI App

A simple command-line notes application built with Node.js.

## Features

- Add notes
- Edit notes
- Delete notes
- Search notes
- List all notes
- Save notes to JSON file
- Store notes using `Map`

## Project Structure

```txt
project/
│── index.js
│── commands.js
│── handlers.js
│── storage.js

notes.json
README.md
```

### File Description

- `index.js` — receives command-line arguments and starts the app
- `commands.js` — handles commands and validation
- `handlers.js` — contains business logic handlers
- `storage.js` — works with notes storage, file system, and `Map`
- `notes.json` — stores notes data

## Installation

Clone repository:

```bash
git clone https://github.com/detrit89/notesApp.git
```

Go to project folder:

```bash
cd notesApp
```

Run commands with Node.js.

## Commands

### Add note

```bash
node project/index.js add "title" "body"
```

Example:

```bash
node project/index.js add "Shopping" "Buy milk"
```

---

### Edit note

```bash
node project/index.js edit ID "new title" "new body"
```

Example:

```bash
node project/index.js edit 1 "Gym" "Go workout"
```

---

### List notes

```bash
node project/index.js list
```

---

### Search notes

```bash
node project/index.js search "text"
```

Example:

```bash
node project/index.js search "milk"
```

---

### Delete note

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

## Technologies

- JavaScript (ES Modules)
- Node.js
- File System (`fs`)
- `Map` data structure
- JSON storage

## How it works

Notes are stored in memory using JavaScript `Map`.

Each note has:

```json
{
  "title": "Shopping",
  "body": "Buy milk",
  "createdAt": "date"
}
```

Notes are automatically saved to `notes.json`.