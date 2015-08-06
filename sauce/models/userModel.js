'use strict';

module.exports = model;
model.$inject = ['mongoose'];

function model(mongoose){
  var Schema = window.mongoose.Schema;

  var userSchema = new Schema({
    name:  String,
    email: String,
    password: String
  });

  var UserModel = window.mongoose.model("User",userSchema);

  return UserModel;
}
