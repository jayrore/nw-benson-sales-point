'use strict';

module.exports = model;
model.$inject = ['mongoose'];

function model(mongoose){
  var Schema = mongoose.Schema;

  var userSchema = new Schema({
    name:  String,
    email: String,
    password: String
  });

  var UserModel = mongoose.model("User",userSchema);

  return {
    getUsers: getUsers,
    addUser: addUser
  }

  function getUsers(){
    return UserModel.find({}).exec().then(function(users){
      return users;
    }, function(err){
      return {error: err}
    });
  };

  function addUser(userName, userPassword){
    var User = new UserModel({name:userName, password: userPassword});
    return User.save().then(function(user) {
      return user;
    }, function(err){
      return {error: error };
    });
  };
}
