# Homework 2
_Due on June 13, 2017._

## Notes
* I added `node_modules/` to `.gitignore` so use `npm install` before testing.
* Files modified: `app.js`, `routes/assignment.js`.
* I'm using `mongodb://localhost/cs591/hw2/` as the database. 

## Usage
* **GET**: `localhost:3000/hw2/` returns all strings in the database.
* **GET**: `localhost:3000/hw2/short` checks the database for string `short`. It returns it if it exists, otherwise it creates and returns it.
* **POST**: `localhost:3000/hw2` with url-encoded body `{key:value}` -> `{name:short}` returns the same as **GET** `localhost:3000/hw2/short`.
* **DELETE**: `localhost:3000/hw2/short` checks the database for string `short`. It deletes it if it exists, otherwise it returns an error message.

----
_Updated on June 8, 2017 by Karan Varindani._