const express = require("express");
const game = require('../models/game');
const player = require("../models/player");
const bodyparser = require("body-parser");
const gameRouter = express.Router();

const loginRouter = express.Router();
loginRouter.use(bodyparser.json());

loginRouter.route('/')
.get((req,res,next)=>{
    res.send("This in internal page.");
})
.post((req,res)=>{
    var e = req.body.email;
    var p = req.body.password;
    player.find({email:e})
    .then(players=>{
        console.log(players);
        if(players.length===0){
            res.send("0");
        } else if(players[0].password!=p){
            res.send("0");
        } else{
            res.send("1");
        }
    })
    .catch(err=>res.send("0"));
});

module.exports = loginRouter;
