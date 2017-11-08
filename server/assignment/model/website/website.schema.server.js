var mongoose = require('mongoose');
var pageSchema = require('../page/page.schema.server');
var WebsiteSchema = mongoose.Schema({
  name: String,
  developerId: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  description: String,
   pages: [{type: mongoose.Schema.Types.ObjectId, ref: 'pageModel'}],
 //   pages: [pageSchema],
  dateCreated: Date
}, {collection: 'website'
});

module.exports = WebsiteSchema;
