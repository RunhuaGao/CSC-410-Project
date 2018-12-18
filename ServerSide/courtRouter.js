const express = require('express'); // Express library, to establish a RESTful Web API
const bodyparser = require("body-parser"); // body-parser, auxiliary library to parse request body
const jsonparser = bodyparser.json(); // JSON Body parser
const courtRouter = express.Router(); // Create court Router object from Express Router class
courtRouter.use(jsonparser); // Use json body parser in courtRouter

const court1 = new court(1, "Runhua Gao", "Xingxing Li");
const court2 = new court(2, "Jixun Xu", "Runhua Gao");
const court3 = new court(3, "Xingxing li", "Jixun Xu");


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
            res.send(court1.getjson());
        } else if (id === 2) {
            res.send(court2.getjson());
        } else if (id === 3) {
            res.send({ "court3": court3.getjson() })
        } else {
            res.send({
                "court1": court1.getjson(),
                "court2": court2.getjson(),
                "court3": court3.getjson()
            });
        }
    })
    .post((req, res, next) => {
        res.end();
    })

module.exports = courtRouter;