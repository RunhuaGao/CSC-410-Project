const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    player1:{
        type:String,
        required:true
    },
    player2:{
        type:String,
        required:true
    },
    score1:{
        type:Number,
        required:true
    },
    score2:{
        type:Number,
        required:true
    },
    result:{
        type:Number,
        required:true
    }
});
const game = mongoose.model('game',gameSchema);
module.exports = game;