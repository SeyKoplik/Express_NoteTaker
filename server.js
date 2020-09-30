const express = require("express");
//add path
var http = require("http");
const fs = require("fs");
​
var app = express();
var PORT = 5000;


/// check starwars activities to get clues

// API Routes

// GET /api/notes
// get data somehow from db.json
//      return res.json(data); << at some point

// POST /api/notes
// receive JSON obj from frontend
//      return rest.end(); << can also be used beside below
//      return res.status(200).end(); << say everything worked correctly

// DELETE /api/notes/:id
    // /api/notes/1 << ref back to db.json

// HTML Routes
app.use(express.static("public"));

// GET /notes >> goes to notes.html
// GET * (everything) >> goes to index.html 
//      * goes last because its everything after you should  get


//URLs matter and key value pairs matter in index.js

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`)  
})