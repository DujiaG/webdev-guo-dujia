var mongoose = require("mongoose");
var UserSchema = require("./user.schema.server.js");
// declare a local model that allowed  us to communicate with the database,
// used to create an instance of the data model
var UserModel = mongoose.model("UserModel", UserSchema);
UserModel.findUserById = findUserById;
UserModel.createUser = createUser;
UserModel.findAllUsers = findAllUsers;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.findUserByUsername = findUserByUsername;
UserModel.deleteUser = deleteUser;
UserModel.updateUser = updateUser;


function findUserByCredentials(username, password){
  return UserModel.findOne({username: username, password: password});
}

function createUser(user) {
  return UserModel.create(user);
}

function findAllUsers() {
  UserModel.find(function (err, docs) {
    console.log(docs);
  });
}

function findUserById(userId){
  return UserModel.findById(userId)

}

function findUserByUsername(username){
  return UserModel.findOne({username: username});
}

function deleteUser(userId){
  return UserModel.remove({_id: userId});
}

function updateUser(userId, user){
  // update object at userID
  return UserModel.update({_id: userId}, user);
}



module.exports = UserModel;
