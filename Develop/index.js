const express = require("express");
const path = require("path");
const notesJSON = require("./db/db.json")

console.log(notesJSON);
const app = express();
const PORT = 3000;
// json middleware
app.use(express.json())
app.use(express.urlencoded())

// serve static 
app.use(express.static("public"));

// url encoded middleware

// API routes//(save/rewrite and load)
// get API notes
app.get("/api/notes", (req, res) => {
    console.log("/api/notes");
    res.json(notesJSON)
});
// POST API notes
app.post("/api/notes", (req, res) => {
    notesJSON.push(req.body)
    res.json(notesJSON.length -1)
})

//html routes
app.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "public/notes.html")));
app.get("*", (req, res) => res.send("404"));
// start
app.listen(PORT, () => console.log ("Server Running on http://localhost:3000"))