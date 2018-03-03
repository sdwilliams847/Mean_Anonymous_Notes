let mongoose = require("mongoose");

let Note = mongoose.model("Note",new mongoose.Schema({
    note:{type:String,required:true,minlength:3,maxlength:255}    
},{timestamps:true}));