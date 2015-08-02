var React = require('react');
var _ = require('underscore');

var OptionItem = React.createClass({
	getDefaultProps:function(){
		return{name:"no name"}
	},
	changeScreen: function(data){
		window.alert(data);
	},
	render: function() {
		return (
			<li className="active role" role="presentation">
		 		<a href="#" onClick={this.changeScreen.bind(this,this.props.name)}> {this.props.name} </a>
		 	</li>
		);
	}
});

var OptionBar = React.createClass({
	render: function() {
		this.props.options;	
		return (
			<ul className="nav nav-pills">
				{ 	
					this.props.options.map(function(option){
						return <OptionItem key={option} name={option}></OptionItem>
					})

				}
        	</ul>
		);
	}
});


module.exports = React.createClass({
    displayName: "HelloMessage",
    render: function() {
        return( 
        	<head>
        		<div className="col-lg-8 col-lg-offset-2" >
        			<OptionBar options={this.props.options}></OptionBar>
        		</div>
        	</head>);
    }
});



// head.row
// 	.col-lg-8.col-lg-offset-2
// 		ul.nav.nav-pills
// 			li.active(role="presentation")
// 				a(href="#") users list
// 			li(role="presentation")
// 				a(href="#") client list
// 			li(role="presentation")
// 				a(href="#") others
// 	#main-content.col-lg-8.col-lg-offset-2
// 		h1 contenido principal