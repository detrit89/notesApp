# Notes API

Simple REST API for notes built with **Bun** and **SQLite**.

## Features

- Create notes
- Get all notes
- Search notes
- Update notes
- Delete notes
- SQLite storage
- HTTP status codes and error handling

## Tech Stack

- Bun
- SQLite
- JavaScript

## Project Structure

```txt
project/
├── server.js      # HTTP server and routes
├── storage.js     # Database logic

package.json
README.md
.gitignore
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd notes-api
```

Install dependencies:

```bash
bun install
```

## Run

```bash
bun project/server.js
```

Server starts on:

```txt
http://localhost:3000
```

## Database

The SQLite database file (`notes.db`) is created automatically on first run.

No manual setup is required.

## API Endpoints

### Get all notes

```http
GET /notes
```

### Search notes

```http
GET /notes?search=text
```

### Create note

```http
POST /notes
```

Body:

```json
{
  "title": "Gym",
  "body": "Push day"
}
```

### Update note

```http
PUT /notes/:id
```

Body:

```json
{
  "title": "Gym",
  "body": "Pull day"
}
```

### Delete note

```http
DELETE /notes/:id
```

## Status Codes

| Code | Description |
|--------|------------|
| 200 | OK |
| 201 | Created |
| 400 | Bad Request |
| 404 | Not Found |
| 500 | Internal Server Error |

## Author

Learning backend development with Bun and SQLite.