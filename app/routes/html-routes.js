// //APIs
// var admin = require('../app/data/admin-data.js'); 
// var waitinglist = require('../app/data/waitinglist-data.js'); 
// var table = require('../app/data/table-data.js');  

var path = require('path');
var express = require('express');


module.exports = function(app){
	//css and images
	app.use('/static', express.static(__dirname + '/../public'));


	//HTML Routes
	app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/../public/index.html'));
	});

	app.get('/portfolio', function(req, res){
		//res.send("portfolio");
		res.sendFile(path.join(__dirname + '/../public/portfolio.html'));
	});

	app.get('/contact', function(req, res){
		//res.send("contact");
		res.sendFile(path.join(__dirname + '/../public/contact.html'));
	});

	app.get('/crystal', function(req, res){
		//res.send("contact");
		res.sendFile(path.join(__dirname + '/../public/crystal.html'));
	});

	// If no matching route is found default to home
	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/index.html'));
	});

	
}
