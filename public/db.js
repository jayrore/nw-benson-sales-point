var config = require('./config.js').config;
var mongoose = require('mongoose');

mongoose.connect(config.mongo.getConnectionString());

var locals = {
	title : config.storeName
};

window.moongose = mongoose;
