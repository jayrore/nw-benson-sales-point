var React = require('react');
var _ = require('underscore');

/*
    Section Components
 */

var UsersComponent = require('./UsersComponent.js');
console.log(UsersComponent);

/**
 * React menu option
 */
var MenuOption = React.createClass({
	displayName: "MenuOption",
	handleChange: function(name) {
        this.props.onUserInput(name);
    },
	render: function() {
		return (
			<li className="active role" role="presentation">
		 		<a ref="menuButton" onClick={this.handleChange.bind(this, this.props.name)}> {this.props.name} </a>
		 	</li>
		);
	}
});

/**
 * React menu bar componet
 */
var ToolBar = React.createClass({
    displayName: "ToolBar",
    render: function() {
    	console.log(this.props);
    	var _this = this;
        return( 
    			<ul className="nav nav-pills" >
    				{	
    					this.props.options.map(function(name){
    						return  <MenuOption  onUserInput={_this.props.onUserInput} key={name} name={name}></MenuOption>;
    					})
    				}
    			</ul>);
    }
});

var StoreSection = React.createClass({
    displayName: "StoreSection",
    render: function() {
        return( 
        	<div className="jumbotron">
    			<h1>StoreSection</h1>
    		</div>);
    }
});


/**
 * React menu bar componet
 */
module.exports.Store = React.createClass({
    displayName: "Store",
    storeModules:{
    	store : StoreSection,
    	users : UsersComponent
    },
    getInitialState: function() {
       return {
            viewContent: 'store'
       };
    },
    handleUserInput: function(name) {
        this.setState({
            viewContent: name
        });
    },
    render: function() {
    	var storeModule = this.storeModules[this.state.viewContent] || this.storeModules['store'];
        return( 
        	<div className="row">
		 		<div className="col-xs-10 col-xs-offset-1" >
		 			<ToolBar options={this.props.options} onUserInput={this.handleUserInput}/>
		 		</div>
		 		<div className="row">
		 			<div className="col-xs-12">
		 				{React.createElement(storeModule)}
		 			</div>
		 		</div>
		 	</div>
		 	);
    }
});