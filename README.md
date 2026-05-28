# Notes CLI App

Simple command-line notes application built with Node.js.

## Features

- Add notes with title and body
- Show all notes
- Search notes by title or body
- Delete notes
- Save notes to JSON file
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

The project follows a modular architecture with separated responsibilities.

### index.js

Entry point of the application.

Responsibilities:

- Reads command-line arguments (`process.argv`)
- Passes data to command router

### commands.js

Command router.

Responsibilities:

- Validates user input
- Routes commands to handlers

Supported commands:

- `add`
- `list`
- `search`
- `delete`
- `help`

### handlers.js

Application logic layer.

Responsibilities:

- Handles note operations
- Formats output
- Works with storage through functions

Handlers do not know how data is stored internally.

Example:

Instead of:

```js
notes[index] = null
saveNotes(notes)
```

Handlers use:

```js
deleteNote(id)
```

This reduces coupling between modules.

### storage.js

Data layer.

Responsibilities:

- Load notes from file
- Save notes
- Add notes
- Delete notes
- Search notes
- Return all notes

Data is stored inside:

```txt
notes.json
```

Each note has the following structure:

```json
{
  "title": "Shopping",
  "body": "Buy milk",
  "createdAt": "26.05.2026, 23:10:00"
}
```

Deleted notes are replaced with:

```json
null
```

and reused later when new notes are added.

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
node project/index.js add "Shopping" "Buy milk"
```

### Show all notes

```bash
node project/index.js list
```

### Search notes

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

## Example Output

```txt
1 - Shopping - Buy milk - 26.05.2026, 23:10:00
2 - Work - Finish project - 26.05.2026, 23:15:00
```

## Concepts Practiced

- Modular architecture
- Separation of concerns
- Low coupling
- High cohesion
- DRY principle
- File system (`fs`)
- JSON persistence
- CLI arguments (`process.argv`)
- Functions and modules