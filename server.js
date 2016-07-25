'use strict';

// Requires
var express     = require('express');
var bodyParser  = require('body-parser');
var path        = require('path');
var compression = require('compression');
var cookieParser= require('cookie-parser');
var session     = require('express-session');
var http        = require('http');
var fs          = require('fs');

// Dependencies (files)
var rest = require('./app/api/rest');

// Init Server
var app = express();
 
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

// API RestFull
app.use('/api', rest);

// Set PORT
var port = process.env.PORT || 80;
console.log('Server is now running on port ' + port);
// Listen PORT
app.listen(port);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Founnnnd'); // as secure view
  err.status = 404;
  next(err);
});
