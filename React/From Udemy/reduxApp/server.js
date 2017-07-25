"use strict"
var express = require('express');
var path = require('path');

var app = express();

//MIDDLEWARE TO DEFINE FOLDER FOR STATIC FIELS
app.use(express.static('public'));

app.get('/', function(req, res){
	res.sendFile(path.resolve(__dirname, 'public', index.html));
});

app.listen(3000, function(){
	console.log('Server start...');
});