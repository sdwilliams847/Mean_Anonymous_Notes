let path              = require("path");
let mongoose          = require("mongoose");

let NoteController    = require("../controllers/NoteController.js");

module.exports = function(app){

    app.get("/server/notes",NoteController.all);
    app.post("/server/notes/new",NoteController.addNote);
    app.get("/delete",NoteController.delete);


    app.all("*",(req,res,next)=>{
        res.sendFile(path.resolve("./client/public/dist/index.html"))
    });
}