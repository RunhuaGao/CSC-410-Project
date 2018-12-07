const express = require("express");
const game = require('../models/game');
const player = require("../models/player");
const bodyparser = require("body-parser");

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
        if(players.length===0 | players[0].password!=p){
            res.send({"validation":false});
        } else{
            var playerinfo = players[0];
            var gamekey = playerinfo.fullname;
            console.log("name is "+gamekey);
            var sendinfo = {"validation":1,"info":playerinfo,"game":null};
            game.find().or([{player1:gamekey},{player2:gamekey}])
            .then((games)=>{
                console.log(games);
                if(games.length===0){
                    console.log("Donot find games");
                    res.send(sendinfo);
                }
                else{
                    sendinfo["game"] = games;
                    res.send(sendinfo);
                }
            })
            .catch(err=>{
                console.log(err);
                res.send(sendinfo);
            });
        }
    })
    .catch(err=>{
        console.log(err);
        res.send("find error")
    });
});

module.exports = loginRouter;
