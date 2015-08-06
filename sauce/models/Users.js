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

  return UserModel;
}
