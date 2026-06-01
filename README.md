# Notes CLI App

Simple CLI application for managing notes using SQLite and Node.js.

## Features

- Add notes
- List all notes
- Search notes
- Edit notes
- Delete notes
- SQLite storage

## Tech Stack

- Node.js
- SQLite (`node:sqlite`)

## Installation

Clone repository: https://github.com/detrit89/notesApp

```bash
git clone YOUR_REPOSITORY_URL
```

Go to project folder:

```bash
cd project-folder
```

Run the application:

```bash
node project/index.js
```

## Available Commands

### Add new note

```bash
node project/index.js add "title" "body"
```

Example:

```bash
node project/index.js add "Gym" "Push day"
```

---

### Show all notes

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
node project/index.js search "gym"
```

---

### Edit note

```bash
node project/index.js edit ID "title" "body"
```

Example:

```bash
node project/index.js edit 1 "Gym" "Leg day"
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

## Project Structure

```txt
project/
  ├── index.js       # entry point
  ├── commands.js    # command orchestration
  ├── handlers.js    # command handling
  ├── storage.js    # SQLite logic
├─ notes.db       # database
```

## Future Improvements

- Validation improvements
- Better CLI UX
- Tests
- Async database support