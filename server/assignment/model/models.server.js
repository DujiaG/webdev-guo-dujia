var mongoose = require('mongoose');
//connection string change to reflect local or remote
var db = mongoose.connect('mongodb://localhost/cs5610', { useMongoClient: true});
module.exports = db;
