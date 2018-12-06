const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const player = require('../models/player');
const playerRouter = express.Router();

playerRouter.use(bodyparser.json());

playerRouter.route('/')
    .get((req, res, next) => {
        player.findOne({ name: req.query.name })
            .then((players) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(players);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        res.send.statusCode = 201;
        console.log(req.body);
        player.find({ "email": req.body.email })
            .then(players => {
                if(players.length ===0){
                    player.create((req.body)).then((document)=>{
                        console.log("Data insert successfully!");
                        res.statusCode = 201;
                        res.setHeader("Content-Type","text/plain")
                        res.end("1");
                        console.log("Data stored: "+document);
                    }).catch(err=>{
                        console.log("Data stored error");
                        res.setHeader("Content-Type","text/plain")
                        res.end("0");
                    });
                } else{
                    console.log("Data stored error");
                    res.setHeader("Content-Type","text/plain")
                    res.end("0");
                }
             })
            .catch(err => { console.log(err); res.send("0"); })
    })
module.exports = playerRouter;