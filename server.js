const express = require("express");
const path = require("path");

const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up Express App to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//============= Notes DATA
// Obj Array need to go to db.json 
// write just the path to it so dont have to type constantly
const db = "./db/db.json";

// API Routes
// GET api/notes 
app.get("/api/notes", function (req, res) {
    res.sendFile(path.join(__dirname, db));
});

// GET to assign an ID for the ID part of the object input
app.get("/api/notes/:id", function (req, res) {
    fs.readFile(db, "utf8", function (error, data) {
        let savedNotes = JSON.parse(data);
        // sends response in json of the number of the savedNote for the specific ID
        res.json(savedNotes[Number(req.params.id)]);
    });
})

// POST /api/notes
app.post("/api/notes", function (req, res) {
    // reading through all title and note text in db.json.
    fs.readFile(db, "utf8", function (error, data) {
        //setting variable for the data retrieved
        let savedNotes = JSON.parse(data);
        //setting variable to the newly inputed title and text
        let newNote = req.body;
        // using the number of notes saved and setting an id number to string
        let ID = (savedNotes.length).toString();
        // using that number to assign the number for the ID for the next note
        newNote.id = ID;
        // pushing the newly typed note into the left hand tab to be visible
        savedNotes.push(newNote);
        // writing the new note into the db.json
        fs.writeFile(db, JSON.stringify(savedNotes), function (error) {
            if (error)
                throw error;
            console.log("Your new note has been saved!");
        });
        // response to json savedNotes
        res.json(savedNotes);
    });
});

// DELETE /api/notes/:id
// /api/notes/1 << ref back to db.json
app.delete('/api/notes/:id', function (req, res) {
    // reading all the notes currecntly in db.json
    fs.readFile(db, "utf8", function (error, data) {
        // assigning variable to data read
        let savedNotes = JSON.parse(data);
        // assigning variable to locate id no.
        let noteID = req.params.id;
        // setting new id to reset after delete
        let newID = 0;
        // logging note was deleted with ID position of note
        console.log(`Note with ID:${noteID} has been deleted!`);
        // filter through all notes read and taking off the one that was deleted
        savedNotes = savedNotes.filter(function (currentNote) {
            return currentNote.id != noteID;
        });
        // looping through the new batch of notes to set a new ID for each in the saved pile and relaying the info to the next
        for (currentNote of savedNotes) {
            currentNote.id = newID.toString();
            newID++;
        }
        // writing new ID into the notes in the pile to reshuffle back in the shelve
        fs.writeFile(db, JSON.stringify(savedNotes), function (error) {
            if (error) throw error;
            res.end();
        });
    });
});

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


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`)
})