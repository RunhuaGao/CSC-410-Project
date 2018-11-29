const express = require('express');
const bodyParser = require('body-parser');
const userrouter = express.Router();
const User = require('./user');
userrouter.use(bodyParser.json());
var user1 = 
userrouter.route('/')
    .get((req, res, next) => {
        res.statusCode = 200;
        res.setHeader("Access-Control-Allow-Origin","*");
        res.send('Will send all the users to you!');
    })
    .post((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin","*");
        console.log(req.body);
        res.send(User.createUser(req.body).getJson());
    })
module.exports = userrouter;