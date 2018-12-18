const mongoose = require('mongoose'); // Mongoose, JavaScript MongoDB driver
const Schema = mongoose.Schema; // Schema, a class that stands for a type of data


// player data type prototype
const playerSchema = new Schema({
    fullname:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    },
    group:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

// Use Schema to model player data type
var player = mongoose.model('player',playerSchema);
// export player data type
module.exports = player;