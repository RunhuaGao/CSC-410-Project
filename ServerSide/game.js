const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    player_1:{
        type:String,
        required:true
    },
    player_2:{
        type:String,
        required:true
    },
    result:{
        type:Number,
        required:true
    }
});
gameSchema.statics.validate = (data)=>{
    console.log(data);
    console.log(typeof(data.player_1));
    console.log(typeof(data.result));
    if(typeof(data.player_1)===undefined | typeof(data.player_1)!=="string"){return false;}
    if(typeof(data.player_2)===undefined | typeof(data.player_2)!=="number"){return false;}
    if(typeof(data.result)===undefined | typeof(parseInt(data.result))===NaN){return false;}
    return true;
}
const game = mongoose.model('game',gameSchema);
module.exports = game;