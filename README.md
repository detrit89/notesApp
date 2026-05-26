# Notes CLI App

Simple command-line notes application built with Node.js.

## Features

- Add notes with title and text
- Show all notes
- Search notes by title or text
- Delete notes
- Save notes to JSON file
- Store creation date for every note
- Reuse deleted note slots (`null`)
- Modular architecture

## Project Structure

```txt
CLI/
├── project/
│   ├── commands.js
│   ├── handlers.js
│   ├── index.js
│   └── storage.js
├── notes.json
└── README.md
```

## Architecture

The project uses a modular structure:

- `index.js` — entry point, gets command line arguments
- `commands.js` — routes commands
- `handlers.js` — contains application logic
- `storage.js` — works with note data and `notes.json`

The application follows a layered structure:

```txt
index.js
    ↓
commands.js
    ↓
handlers.js
    ↓
storage.js
```

### Responsibilities

`handlers.js` contains business logic and does not know how notes are stored.

`storage.js` is responsible for working with data and provides an interface through functions:

- `addNote()`
- `deleteNote()`
- `searchNote()`
- `getAllNotes()`

This structure makes the project easier to maintain, refactor, and extend.

## Technologies

- JavaScript (ES Modules)
- Node.js
- `fs` module
- JSON file storage

## Installation

Clone repository:

```bash
git clone <repository-url>
```

Go to project folder:

```bash
cd CLI
```

## Usage

### Add note

```bash
node project/index.js add "Buy milk" "Shopping"
```

Example note:

```json
{
  "title": "Shopping",
  "note": "Buy milk",
  "data": "26.05.2026, 18:30"
}
```

### Show all notes

```bash
node project/index.js list
```

Example output:

```txt
1 - Buy milk - Shopping - 26.05.2026, 18:30
```

### Search notes

Search works by note text and title.

```bash
node project/index.js search "milk"
```

### Delete note

```bash
node project/index.js delete 1
```

### Help

```bash
node project/index.js help
```

## Storage

Notes are stored in:

```txt
notes.json
```

Example structure:

```json
[
  {
    "title": "Shopping",
    "note": "Buy milk",
    "data": "26.05.2026, 18:30"
  },
  null,
  {
    "title": "Work",
    "note": "Finish CLI project",
    "data": "26.05.2026, 20:10"
  }
]
```

Deleted notes are replaced with `null` and reused later when new notes are added.