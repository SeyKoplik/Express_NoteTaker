const express = require("express");
const path = require("path");
const http = require("http");
const fs = require("fs");
const app = express();


const PORT = process.env.PORT || 3000;

// Sets up Express App to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//====== Notes DATA
// Obj Array need to go to db.json 
var notes = [];
// API Routes

// GET /api/notes
app.get("/api/notes", function (req, res) {
    return res.json(data);
  });
// get data somehow from db.json
// return res.json(data); << at some point

// POST /api/notes
app.post("/api/notes", function (req, res) {
    var newNote = req.body;

    notes.push(newNote);
});
// receive JSON obj from frontend
//      return rest.end(); << can also be used beside below
//      return res.status(200).end(); << say everything worked correctly

// DELETE /api/notes/:id
    // /api/notes/1 << ref back to db.json
app.delete('/api/notes/:id', function (req, res) {
    const id = req.params._id;
    const eraseNote = req.body;

    //readfile db.json
    //remove the note w/ the id specified

    res.send('Got a DELETE request at /api/notes/:id')
})

// HTML Routes
// Code to serve images, CSS files, and JavaScript files in a directory named public
app.use(express.static("public"));

// GET /notes >> goes to notes.html
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

// GET * >> goes to index.html 
// * goes last because its everything after you should get
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});


//URLs matter and key value pairs matter in index.js

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`)  
})