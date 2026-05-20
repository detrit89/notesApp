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
├── main.js
├── notes.js
├── add.js
├── remove.js
├── search.js
├── show.js
└── notes.json
```

## Technologies

- JavaScript
- Node.js
- File System (`fs`)
- ES Modules (`import/export`)

## Storage

Notes are stored in:

```txt
notes.json
```

Deleted notes are replaced with:

```txt
null
```

and reused when adding new notes.

## Installation

Clone repository:

```bash
git clone <repository-url>
```

Go to project folder:

```bash
cd cli
```

Install dependencies (if needed):

```bash
npm install
```

## Usage

### Add note

```bash
node project/main.js add "Buy milk"
```

### Show all notes

```bash
node project/main.js list
```

### Search notes

```bash
node project/main.js search "milk"
```

### Delete note

```bash
node project/main.js delete 1
```

### Show help

```bash
node project/main.js help
```