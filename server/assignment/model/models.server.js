var mongoose = require('mongoose');
//connection string change to reflect local or remote
if(process.env.MLAB_USERNAME_WEBDEV) {
  var username = process.env.MLAB_USERNAME_WEBDEV;
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += '@ds129434.mlab.com:29434/heroku_bk6cmpn8';
}
// var db = mongoose.connect('mongodb://localhost/cs5610', { useMongoClient: true});
// module.exports = db;
