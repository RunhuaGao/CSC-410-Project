const express = require("express");
const http = require("http");
const hostname = 'localhost';
const port = 4000;
const app = express();

app.use((req, res, next) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  var date = new Date();
  res.send(`Hello World: ${date.toLocaleDateString()}`);
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});