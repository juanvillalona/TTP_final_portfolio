
	var express = require("express"); 
	var parser = require('body-parser');

	var app = express(); 
	app.use(express.static('public')); 
	app.set('view engine', 'ejs');

	app.use(parser.json());

	app.use(parser.urlencoded({extended: true}));
	app.use(parser.text());
	app.set('view engine', 'ejs');

	const {Pool,Client} = require('pg');

	const pool = new Pool({
	user: 'postgres',
	host:'localhost',
	database: 'portfolio',
	password: 'Yunaelin4',
	port: 5432,
	});

	var blog;
	pool.query('SELECT * FROM blog', (err, res) => {
		blog = res.rows;
	})
		
	
	
	app.get('/', function(req, res){       
		res.render('about_me') 
	});

	app.get('/about_me', function(req, res) {
		res.render('about_me');
	});

	app.get('/contact_me', function(req, res) {
		res.render('contact_me');
	});

	app.get('/projects', function(req, res) {
		res.render('projects');
	})

	app.get('/novel', function(req, res) {
		res.render('novel');
	});

	app.get('/blog', function(req, res) {
		res.render('blog', {blog:blog});
	});

	app.post('/submit', function(req, res) {
		var t = req.body;
		var d = new Date();
		var month = d.getMonth() + 1;
		var day = d.getDate();
		var date = d.getFullYear() + '/' + (month < 10 ? '0' : '') + month +'/' + (day < 10 ? '0' : '') + day;
		var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
		pool.query(`INSERT INTO blog(date, time, poster, topic, content) VALUES('${date}' ,  '${time}' , 'Me', '${t.topic}', '${t.subject}')`);
		console.log("success");
		res.redirect('blog');
	});


	app.listen(8080);
	console.log("listening in port 8080");


  

