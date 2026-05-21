# Notes CLI App

Simple command-line notes application built with Node.js.

## Features

- Add notes
- List notes
- Search notes
- Delete notes
- Save notes to JSON file
- Reuse empty note slots (`null`)

## Project Structure

```txt
project/
├── index.js
├── commands.js
├── handlers.js
├── storage.js
└── notes.json
```

## Technologies

- JavaScript
- Node.js
- ES Modules (`import/export`)
- File System (`fs`)

## Storage

Notes are stored in:

```txt
notes.json
```

Deleted notes are replaced with `null` and reused when adding new notes.

## Installation

Clone repository:

```bash
git clone <repository-url>
```

Go to project folder:

```bash
cd cli
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

### Search note

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