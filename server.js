const express = require("express");
const path = require("path");
const http = require("http");
const fs = require("fs");
​
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up Express App to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Code to serve images, CSS files, and JavaScript files in a directory named publi
app.use(express.static("public"));

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

// GET /notes >> goes to notes.html
// GET * (everything) >> goes to index.html 
//      * goes last because its everything after you should  get


//URLs matter and key value pairs matter in index.js

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`)  
})