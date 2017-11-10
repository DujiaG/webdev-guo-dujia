export class Widget {
  page: String;
  widgetType: String;
  text: String;
  placeholder: String;
  url: String;
  width: String;
  height: String;
  rows: Number;
  size: Number;
  formatted: Boolean;
  name: String;
// email: String;
// address; String;
// constructor(_id, username, password) {
//   this._id = _id;
//   this.username = username;
//   this.password = password;
// }

constructor(widgetType, page, size, text, width, url, height, rows, formatted, placeholder, name) {
  this.widgetType = widgetType;
  this.page = page;
  this.size = size;
  this.text = text;
  this.width = width;
  this.url = url;
  this.height = height;
  this.rows = rows;
  this.formatted = formatted;
  this.placeholder = placeholder;
  this.name = name;
}
}
