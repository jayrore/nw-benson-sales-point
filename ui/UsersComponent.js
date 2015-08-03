var React = require('react');

module.exports = React.createClass({
    displayName: "UsersSection",
    getInitialState: function() {
    	return {users: []};
  	},
    componentDidMount: function() {
    	var usuarios = getUsers();
    	console.log('usuarios',usuarios);
    	usuarios.exec(function(error, users){
    		this.setState({users: users});
    		console.log("users",users);
    		console.log("state", this.state);
    	}.bind(this));
  	},
    render: function() {
        return( 
        	<div className="col-xs-12">
    			<div className="col-xs-4">
    				<h1>Add New User</h1>
    				<NewUserForm></NewUserForm>
    			</div>
    			<div className="col-xs-8">
    				<h1>User List</h1>
    				<UserList users={this.state.users}></UserList>
    			</div>
    		</div>);
    }
});

var NewUserForm = React.createClass({
	displayName:"NewUserForm",
	clickHandler: function(){
		addUser(this.refs.userName.getDOMNode().value, this.refs.userPassword.getDOMNode().value);
	},
	render: function(){
		return(
			<div className="row">
			<input ref="userName" className="col-xs-7" type="text" placeholder="name"></input>
    		<input ref="userPassword" className="col-xs-7" type="password" placeholder="password"></input>
    		<input className="col-xs-5" type="button" onClick={this.clickHandler} value="Add"></input>
    		</div>
    		);
	}
});

var UserList = React.createClass({
	displayName:"NewUserForm",
	render: function(){
		var row = this.props.users.map(function(user){
			return <tr><td>{user.name}</td></tr>;
		});
		return(
			<div className="row">
				<h1>la Lista</h1>
				<table>
					{row}
				</table>
    		</div>
    		);
	}
});

function getUsers(){
	return UserModel.find({});
};

function addUser(userName, userPassword){
	var User = new UserModel({name:userName, password: userPassword});
		User.save(function (err) {
		  if (err) // ...
		  console.log('shit!!', err);
		});
};



