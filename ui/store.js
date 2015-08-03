var React = require('react');
var Components = require('./Components.js');


var ToolBar = Components.ToolBar;

var toolBar = ["Punto de venta","Usuarios","Mercancia","Ventas"];

/**
 * Store React app view 
 * @return {function} this is the store main page
 */
module.exports = function(){
	
  React.render(<ToolBar options={toolBar} name="kittu"/>, document.getElementById('main-head'));

};