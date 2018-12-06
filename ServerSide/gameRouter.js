const express = require("express");
const game = require('../models/game');

const bodyparser = require("body-parser");
const gameRouter = express.Router();
gameRouter.use(bodyparser.json());
gameRouter.route('/')
.get((req,res,next)=>{
    var name = req.query.name;
    game.find({player_1:name})
    .then((document)=>{
        console.log(document);
        res.setHeader("Content-Type","application/json");
        res.setHeader("Access-Control-Allow-Origin","*");
        if(document.length > 0){
            res.send({foundResult:true,results:document});
        }
        else{
            res.send({foundResult:false});
        }
    })
    .catch(err=>{
        console.log(err);
        res.setHeader("Content-Type","application/json");
        res.setHeader("Access-Control-Allow-Origin","*");
        res.send({foundResult:false});
    });
})
.post((req,res,next)=>{
    var tempgame = req.body;
    if(game.validate(req.body)===false){
        res.send("False data received..");
    } else{
        res.send("Correct data");
    }
    // game.create(tempgame)
    // .then((document)=>{
    //     console.log("Data stores successfully:"+document);
    //     res.setHeader("Access-Control-Allow-Origin","*");
    //     res.send("Data Stores successfully!");
    // })
    // .catch(Error=>{
    //     console.log(Error);
    //     res.setHeader("Access-Control-Allow-Origin","*");
    //     res,send("Data store error, some key value pairs are missed.");
    // })
});


module.exports = gameRouter;