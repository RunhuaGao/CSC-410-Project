const mongoose = require('mongoose'); // mongoose library, JavaScript MongoDB driver
const Schema = mongoose.Schema; // Schema, a class that stands for a type of data


// created game data prototype
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
// Use mongoose to model game data type
const game = mongoose.model('game',gameSchema);
// export game data type
module.exports = game;