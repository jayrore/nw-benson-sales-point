var config = require('./config.js').config;
var jade = require('jade');
var $ = require('jquery');
var mongoose = require('mongoose');
console.log(config);

var locals = {
	title : config.storeName
};

var db = mongoose.createConnection(config.mongo.getConnectionString());

// Compile a function
var fn = jade.compileFile('./templates/index.jade', {});

// Render the function
var html = fn(locals);
$('#main').html(html);

var ticketFn = jade.compileFile('templates/ticket.jade', {});
var ticket = ticketFn();
$('#main').append(ticket);
