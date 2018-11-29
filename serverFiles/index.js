const express = require("express");
const bodyparser = require("body-parser");
const http = require("http");
const hostname = 'localhost';
const port = 4000;
const app = express();
const dishRouter = require('./dishRouter');

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

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});