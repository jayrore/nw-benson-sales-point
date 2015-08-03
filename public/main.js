var config = require('./config.js').config;
var jade = require('jade');
var $ = require('jquery');
var mongoose = require('mongoose');
var UserModel = require('./models/Users.js');

mongoose.connect(config.mongo.getConnectionString());

var locals = {
	title : config.storeName
};



// Compile a function
var fn = jade.compileFile('./templates/main.jade', {});

// Render the function
var html = fn(locals);
$(function() {
	$('#main').html(html);
});
