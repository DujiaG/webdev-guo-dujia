var mongoose = require('mongoose');
var widgetSchema = mongoose.Schema({
  page: {type: mongoose.Schema.Types.ObjectId, ref: 'PageModel'},
  widgetType: String,
  text: String,
  placeholder: String,
  url: String,
  width: String,
  height: String,
  rows: Number,
  size: Number,
  formatted: Boolean,
}, {collection: 'widget'
});

module.exports = widgetSchema;
