var React = require('react');
var Components = require('./Components.js');
var config = require('../config.js').config;
var Store = Components.Store;
/**
 * Store React app view 
 * @return {function} this is the store main page
 */
module.exports = function(){

	React.render(<Store options={config.toolBarItems}/>,document.getElementById('main'))

};