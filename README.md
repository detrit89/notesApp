# Notes CLI

Simple CLI application for managing notes using Node.js.

## Features

- Add notes
- List all notes
- Search notes
- Delete notes
- Save notes in JSON file

## Installation

Clone repository:

```bash
git clone <your-repository-url>
cd notes-cli
```

## Available Commands

### Add new note

```bash
node project/index.js add "title" "body"
```

Example:

```bash
node project/index.js add "Shopping" "Buy milk and eggs"
```

### Show all notes

```bash
node project/index.js list
```

### Search notes

```bash
node project/index.js search "text"
```

Example:

```bash
node project/index.js search "milk"
```

Search checks both note title and body.

### Delete note

```bash
node project/index.js delete ID
```

Example:

```bash
node project/index.js delete 1
```

### Show help

```bash
node project/index.js help
```

## Project Structure

```txt
.
├── README.md
├── notes.json
└── project
    ├── index.js
    ├── commands.js
    ├── handlers.js
    └── storage.js
```

## Note Format

Notes are stored in `notes.json`.

Example:

```json
[
  {
    "title": "Shopping",
    "body": "Buy milk and eggs",
    "createdAt": "5/29/2026, 12:00:00 PM"
  }
]
```

## Technologies

- JavaScript
- Node.js
- File System (`fs`)