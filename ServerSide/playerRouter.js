const express = require('express'); // Express library, to establish a RESTful Web API
const bodyparser = require('body-parser');//body-parser, auxiliary library to parse request body
const player = require('../models/player');// player data prototype defined by mongoose
const playerRouter = express.Router();// Create player Router object from Express Router class

playerRouter.use(bodyparser.json());// use json body parser in player Router

// Configure playertRouter methods to process different types of requests 
playerRouter.route('/')// bind game router to spcific path
    // Methods to process request with "GET" action
    .get((req, res, next) => {
        player.findOne({ name: req.query.name }) // find a player info according to it's fullname
            .then((players) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(players);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    // Method to process request with "POST" action
    // Used for registration
    .post((req, res, next) => {
        res.send.statusCode = 201;
        console.log(req.body);
        player.find({ "email": req.body.email }) // find if the info has already been used
                                                 // here use the email as the key
            .then(players => {
                if (players.length === 0) {
                    player.create((req.body)).then((document) => {
                        console.log("Data insert successfully!");
                        res.statusCode = 201;
                        res.setHeader("Content-Type", "text/plain")
                        res.end("1");
                        console.log("Data stored: " + document);
                    }).catch(err => {
                        console.log("Data stored error");
                        res.setHeader("Content-Type", "text/plain")
                        res.end("0");
                    });
                } else {
                    console.log("Data stored error");
                    res.setHeader("Content-Type", "text/plain")
                    res.end("0");
                }
            })
            .catch(err => { console.log(err); res.send("0"); })
    })
module.exports = playerRouter;