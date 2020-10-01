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

fs.readFile('./db/db.json', (err, data) => {
    if (err) throw err;
    const dbJSON = JSON.parse(data);
    console.log(dbJSON);
});




// // API Routes

// // GET /api/notes // get data from db.json
// app.get("/api/notes", function (req, res) {
//     return res.json(dbJSON); //<< data is db.json file data
// });

// // POST /api/notes
// app.post("/api/notes", function (req, res) {
//     var newNote = req.body;
//     // console.log(newNote); < returns what I want it to
//     // readfile
//     // give note new id of biggest id+1
//     dbJSON.push(newNote);
//     return res.status(200).end();
// });
// // receive JSON obj from frontend
// // say everything worked correctly

// // DELETE /api/notes/:id
// // /api/notes/1 << ref back to db.json
// app.delete('/api/notes/:id', function (req, res) {
//     // for (var i = 0; i < dbJSON.length; i++) {
//     // const id = req.indexOf(params[i]);
//     // const id = req.findIndex(params);
//     const id = req.params.id;
//     console.log(id);
//     // }

//     //readfile db.json
//     // fs.readFile(__dirname + "./db/db.json", 'utf8', function (err,  {
//     //     data = dbJSON;
//     //     delete data[data.indexOf(data.filter(function () {
//     //         return fs.writeFile("db.json", data, function (err) {
//     //             if (err) { return console.log(err) };
//     //         })
//     //     }))]
//     // })
//     // //remove the note w/ the id specified


//     // var newDbJSON = dbJSON.filter(id);
//     // console.log(newDbJSON);

//     //   return res.json(newDbJSON);
// });

// // HTML Routes
// // Code to serve images, CSS files, and JavaScript files in a directory named public
// app.use(express.static("public"));

// // GET /notes >> goes to notes.html
// app.get("/notes", (req, res) => {
//     res.sendFile(path.join(__dirname, "public/notes.html"));
// });

// // GET * >> goes to index.html 
// // * goes last because its everything after you should get
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "public/index.html"));
// });


//URLs matter and key value pairs matter in index.js

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`)
})