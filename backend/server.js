var express = require('express');
var server = express();

var messages = [];
var responses = [];

server.get('/', function (req, res) {
	debugger;
	res.send('hello world');
});


server.listen(3000);