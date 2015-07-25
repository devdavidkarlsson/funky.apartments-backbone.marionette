var express = require('express');
//var server = express.createServer();
// express.createServer()  is deprecated.
var server = express(); // better instead
  //server.use('/assets/css', express.static(__dirname + '/assets/css'));
  //server.use('/assets/images', express.static(__dirname + '/assets/images'));
  server.use(express.static(__dirname + '/'));

server.listen(3000);