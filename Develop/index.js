const express = require("express");
const path = require("path");
const notesJSON = require("./db/db.json")

console.log(notesJSON);
const app = express();
const PORT = 3000;

// serve static 
app.use(express.static("public"));
// json middleware
// url encoded middleware

// API routes//(save/rewrite and load)
app.get("/api/notes", (req, res) => {
    console.log("/api/notes");
    res.json(notesJSON)
});
// get API notes

// POST API notes

//html routes
app.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "public/notes.html")))

// start
app.listen(PORT, () => console.log ("Server Running on http://localhost:3000"))