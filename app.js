
	var express = require("express"); 
	var app = express(); 
	app.use(express.static('public')); 
	app.set('view engine', 'ejs');
	
	
	
	app.get('/', function(req, res){       
		res.render('about_me') 
	});

	app.get('/about_me', function(req, res) {
		res.render('about_me');
	});

	app.get('/contact_me', function(req, res) {
		res.render('contact_me');
	});

	app.get('/novel', function(req, res) {
		res.render('novel');
	});

	app.listen(8080);
	console.log("listening in port 8080");


  

