'use strict';

// Requires
var express     = require('express');
var middleware  = express.Router();
var bodyParser  = require('body-parser');
var path        = require('path');
var compression = require('compression');
var cookieParser= require('cookie-parser');
var session     = require('express-session');
var http        = require('http');
var fs          = require('fs');

// Init Server
var app = express();
 
// Debug for dev 
//app.use(morgan('combined'))

// Join public rep to use css, img, etc
app.use(express.static(path.join(__dirname, 'public')));
// Set parameters
app.use(cookieParser());
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }))

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.raw());
app.use(bodyParser.json());
app.use(compression());


app.get('/', function(req, res) {
  res.send('hello world');
});

// Create Server
http.createServer(app).listen(80);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Founnnnd'); // as secure view
  err.status = 404;
  next(err);
});

