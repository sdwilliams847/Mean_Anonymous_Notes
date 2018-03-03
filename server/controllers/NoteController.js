let Note = require("mongoose").model("Note");

module.exports = {
    addNote:function(req,res){
      console.log("made it to Notecontroller" +req.body.note);
        let note = new Note(req.body);
        note.save(function(err){
            if(err){
                res.json(err);
            } else{
                res.json(note);
            }
        });
    },

    all:function(req,res){
        Note.find({}, function(err,note){
            if(err){
                console.log("This error is coming from your NoteController.js file")
                res.json(err);
            } else{
                res.json(note);
            }
        });
    },

    delete:function(req,res){Note.remove({}, function(err,note){
      if(err){
          res.json(err);
      } else{
          res.json({note:note});
      }
  });
}
    
}
