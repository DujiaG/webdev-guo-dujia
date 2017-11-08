var mongoose = require('mongoose');
var WebsiteSchema = require('../website/website.schema.server');
var UserSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  phone: String,
  websites: [WebsiteSchema],
  dateCreated: Date
  // websites: {type: mongoose.Schema.Types.ObjectId, ref: 'WebsiteModel'}
  // dob: Date,
  // salary: Number
}, {collection: 'user'
});

module.exports = UserSchema;
