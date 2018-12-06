const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
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
    }
});

var player = mongoose.model('player',playerSchema);
module.exports = player;