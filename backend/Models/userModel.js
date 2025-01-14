const mongoose = require("mongoose");

// create schema
const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        unique : true,
        required : true,
    },
    age : {
        type : Number,
        required : true 
    },
},
{timestamps:true}
);  

//  create Model 
const user  = mongoose.model('user' , userSchema);
module.exports = user;