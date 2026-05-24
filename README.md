# Notes CLI App

Simple command-line notes application built with Node.js.

## Features

- Add notes
- Show all notes
- Search notes
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

The project uses a modular structure:

- `index.js` — entry point, gets command line arguments
- `commands.js` — routes commands
- `handlers.js` — contains application logic
- `storage.js` — works with note data and `notes.json`

`handlers` do not know how notes are stored.

`storage` provides a data access interface through functions such as:

- `addNote()`
- `deleteNote()`
- `searchNote()`
- `getAllNotes()`

This makes the project easier to maintain, refactor, and extend.

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
node project/index.js add "Buy milk"
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

## Storage

Notes are stored in:

```txt
notes.json
```

Deleted notes are replaced with `null` and reused later when new notes are added.