/*
var mongoose = require('mongoose');
//connection string change to reflect local or remote
var db = mongoose.connect('mongodb://localhost/cs5610', { useMongoClient: true});
module.exports = db;
*/
var mongoose = require("mongoose");
var connectionString = 'mongodb://localhost/cs5610';
if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
  var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += 'ds129434.mlab.com:29434/heroku_bk6cmpn8';
}

var connectionString = 'mongodb://DujiaG:Gdjia.1993a@ds129434.mlab.com:29434/heroku_bk6cmpn8';
var db = mongoose.connect(connectionString, { useMongoClient: true});
module.exports = db;
