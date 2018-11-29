const express = require("express");
const bodyparser = require("body-parser");
const http = require("http");
const hostname = 'localhost';
const port = 4000;
const app = express();
const userrouter = require('./userrrouter');
const courtRouter = require('./courtRouter');

app.use(bodyparser.json({ type: "application/json" }));
app.use(bodyparser.text({ type: 'text/plain' }));

app.get('/', function (req, res) {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send('hello world: ' + new Date().toLocaleTimeString());
})
app.post('/', function (req, res) {
  res.statusCode = 201;
  var result = req.body;
  res.setHeader("Access-Control-Allow-Origin", "*");
  console.log(result.name + " " + result.age);
  res.send(result);
})
app.use('/user',userrouter);
app.use('/court',courtRouter);

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  var site1 = {player1:"1",player2:"2",score1:11,score2:11,occpuied:true}; 
});