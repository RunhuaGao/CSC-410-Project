const express = require('express');
const bodyparser = require("body-parser");
const jsonparser = bodyparser.json();
const court = require("./courtScore");
const courtRouter = express.Router();
courtRouter.use(jsonparser);

const court1 = new court(1,"Runhua Gao","Xingxing Li");
const court2 = new court(2,"Jixun Xu","Runhua Gao");
const court3 = new court(3,"Xingxing li","Jixun Xu");

courtRouter.route('/')
    .get((req,res,next) => {
        if(req.query.id===null){
            res.end("No court id recieved");
        }
        console.log.apply(req.query.id);
        var id = parseInt(req.query.id);
        console.log(Number.isInteger(id));
        console.log(id);
        res.setHeader("Content-Type","application/json");
        if(id===1){
            res.send(court1.getjson());
        } else if (id===2){
            res.send(court2.getjson());
        } else if (id===3){
            res.send({"court3":court3.getjson()})
        } else{
            res.send({
                "court1":court1.getjson(),
                "court2":court2.getjson(),
                "court3":court3.getjson()
            });
        }
    })
    .post((req,res,next)=>{
        res.end();
    })

module.exports = courtRouter;