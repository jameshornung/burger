// Inside the burgers_controller.js file, import the following:
// express
// method-override
// body-parser
// Create the router for the app, and export the router at the end of your file.

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
	burger.all(function (data) {
		var hbsObject = { burgers: data };
		// console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.put('/create', function(req, res){
	console.log('create ran');
	burger.create( function(){
		res.redirect('/burgers');
	});
});

router.put('/burgers/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	burger.update({ devoured: req.body.devoured }, condition, function () {
		res.redirect('/burgers');
	});
});

module.exports = router;