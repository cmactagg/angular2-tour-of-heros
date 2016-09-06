'use strict';
var express = require('express');
var fallback = require('express-history-api-fallback');
var app = express();

//find static web files here
var root = __dirname + '/'
app.use(express.static(root));
app.use(fallback('/index.html', { root: root }));

var server = require('http').createServer(app);

module.exports = app;
const API_PORT = process.env.PORT || 3000;
server.listen(API_PORT, function () {
  console.log('API server listening on port ' + API_PORT);
});