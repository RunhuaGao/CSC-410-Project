var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var playerRouter = require('./routes/playerRouter');
var courtRouter = require('./routes/courtRouter');
var gameRouter = require('./routes/gameRouter');
var loginRouter = require('./routes/loginRouter');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// bind spcific paths to different routers
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/player',playerRouter);
app.use('/court',courtRouter);
app.use('/game',gameRouter);
app.use('/login',loginRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// mongo db section
const mongoose = require('mongoose');
// connect to mongodb, database name: player
const playerurl = "mongodb://localhost:27017/player";
const playercon = mongoose.connect(playerurl,{useNewUrlParser:true});
playercon.then((db)=>{
  console.log("Connected to player database successfully!");
}).catch(err=>{
  console.log(err,connect);
  connect.close();
});
module.exports = app;
