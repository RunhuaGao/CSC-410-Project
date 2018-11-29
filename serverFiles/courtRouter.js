const express = require('express');
const bodyparser = require("body-parser");
const jsonparser = bodyparser.json();
const textparser = bodyparser.text();

const courtRouter = express.Router();

courtRouter.route('/')
    .get((req,res,next) => {
        if(req.query.id===null){
            res.end("No court id recieved");
        }
        var id = req.query.id;
        var resstr = "";
        if(id < 3){resstr = `Will send you the first court ${id} info`;}
        else{resstr = "Will send you both court's info";}
        res.setHeader("Access-Control-Allow-Origin","*");
        res.send(id);
        res.end(); // End Connection
    })

module.exports = courtRouter;