var mongoose = require('mongoose');
var widgetSchema = require('../widget/widget.schema.server');
var pageSchema = mongoose.Schema({
  name: String,
  title: String,
  website: {type: mongoose.Schema.Types.ObjectId, ref: 'WebsiteModel'},
  description: String,
  widgets: [widgetSchema],
  dateCreated: Date
}, {collection: 'page'
});

module.exports = pageSchema;
