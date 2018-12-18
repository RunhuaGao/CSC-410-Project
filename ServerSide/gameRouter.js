const express = require("express"); // Express library, to establish a RESTful Web API
const game = require('../models/game'); // Game data prototype,defined by mongoose

const bodyparser = require("body-parser");//body-parser, auxiliary library to parse request body
const gameRouter = express.Router();//Create game Router object from Express Router class
gameRouter.use(bodyparser.json());// Use json body parser in game router


// Configure gametRouter methods to process different types of requests
gameRouter.route('/') // bind game router to spcific path
// Configure game Router to process request with "GET" action
.get((req,res,next)=>{
    var name = req.query.name; // the url contains a query parameter name
    game.find({player_1:name}) // data base find promise action, find game according to player's name
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
// Configure game Router to process request with "POST" action
// Store a game into database
.post((req,res,next)=>{
    var tempgame = req.body; // game's info in stored in request's body
    game.create(tempgame) // use game prototype to create a new document info into database
    .then((document)=>{
        console.log("Data stores successfully:"+document);
        res.setHeader("Access-Control-Allow-Origin","*");
        res.send("Data Stores successfully!");
    })
    .catch(Error=>{
        console.log(Error);
        res.setHeader("Access-Control-Allow-Origin","*");
        res,send("Data store error, some key value pairs are missed.");
    })
});


module.exports = gameRouter;