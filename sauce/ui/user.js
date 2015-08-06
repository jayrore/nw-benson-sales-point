'use strict';

module.exports = userComponent;
userComponent.$inject = ['React', 'userStore']


function userComponent(React, userStore){
  var NewUserForm = React.createClass({
  	displayName:"NewUserForm",
  	clickHandler: function(){
  		userStore.addUser(this.refs.userName.getDOMNode().value, this.refs.userPassword.getDOMNode().value);
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

  return React.createClass({
    displayName: "UsersSection",
    getInitialState: function() {
    	return {users: []};
  	},
    componentDidMount: function() {
      userStore.getUsers().then(function(users){
        this.setState({users:users});
      }.bind(this));
      userStore.addChangeListener(this.onUsersChanged);
  	},

    componentWillUnmount: function() {
      userStore.removeChangeListener(this.onUsersChanged);
    },

    onUsersChanged: function(){
      console.log('changed');
      this.setState({users: userStore.getUsers()});
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
}
