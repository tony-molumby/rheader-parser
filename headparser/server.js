'use strict';

var fs = require('fs');
var express = require('express');
var app = express();
var headParser = require('./headParser');

app.get('/', function(req, res) {
      var header = req.headers;
		  res.json(headParser(header));
    });


// Respond not found to all the wrong routes
app.use(function(req, res, next){
  res.status(404);
  res.type('txt').send('Not found');
});

// Error Middleware
app.use(function(err, req, res, next) {
  if(err) {
    res.status(err.status || 500)
      .type('txt')
      .send(err.message || 'SERVER ERROR');
  }  
})

app.listen(process.env.PORT, function () {
  console.log('Node.js listening ...');
});