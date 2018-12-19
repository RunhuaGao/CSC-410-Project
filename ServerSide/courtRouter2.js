const express = require('express'); // Express library, to establish a RESTful Web API
const bodyparser = require("body-parser"); // body-parser, auxiliary library to parse request body
const jsonparser = bodyparser.json(); // JSON Body parser
const courtRouter = express.Router(); // Create court Router object from Express Router class
const court = require("./courtScore");
const game = require("../models/game");
courtRouter.use(jsonparser); // Use json body parser in courtRouter

const court1 = new court(1, "Runhua Gao", "Xingxing Li");
const court2 = new court(2, "Jixun Xu", "Runhua Gao");
const court3 = new court(3, "Xingxing li", "Jixun Xu");

const scores = {
    court1:{
        player1:null,
        player2:null,
        score1:0,
        score2:0,
        occupied:false
    },
    court2:{
        player1:null,
        player2:null,
        score1:0,
        score2:0,
        occupied:false
    },
    court3:{
        player1:null,
        player2:null,
        score1:0,
        score2:0,
        occupied:false,
    },
}


// Configure courtRouter methods to process different types of requests
courtRouter.route('/') // Bind router to a spcific path
    // Configure court Router to process request with "GET" action
    .get((req, res, next) => {
        if (req.query.id === null) {
            res.end("No court id recieved");
        }
        console.log.apply(req.query.id);
        var id = parseInt(req.query.id);
        console.log(Number.isInteger(id));
        console.log(id);
        res.setHeader("Content-Type", "application/json");
        if (id === 1) {
            res.send(scores.court1);
        } else if (id === 2) {
            res.send(scores.court2);
        } else if (id === 3) {
            res.send(scores.court3);
        } else {
            res.send(scores);
        }
    });

courtRouter.post("/update",(req,res)=>{
    var info = req.body;
    var action = req.query.action;
    console.log(info);
    if(action==="initial"){
        scores[info.court].player1 = info.player1;
        scores[info.court].player2 = info.player2;
        res.send("Initialization of "+info.court+"Successfully");
    }
    if(action==="updatescore"){
        scores[info.court].score1 = info.score1;
        scores[info.court].score2 = info.score2;
        if(info.score1 > 0 & info.score1 < 21 & info.score2 > 0 & info.score2 < 21){
            scores[info.court].occupied = true;
        }
        else{
            scores[info.court].occupied = false;
            if(info.score1===21 | info.score2===21){
                if(info.score1===21){
                    scores[info.court].result = 1;
                } else{
                    scores[info.court].result = 2;
                }
            }
            game.create(scores[info.court])
            .then((document)=>{
                console.log(document);
                console.log("Game Stores Successfully!")
            })
            .catch(err=>{
                console.log("Game Stores Error!")
            })
            res.send("Update score of "+info.court+"Successfully");
        }
    }
    console.log(scores);
})

module.exports = courtRouter;