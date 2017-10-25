export class Widget {
  _id: String;
  widgetType: String;
  pageId: String;
  size: number;
  text: String;

  // email: String;
  // address; String;
  // constructor(_id, username, password) {
  //   this._id = _id;
  //   this.username = username;
  //   this.password = password;
  // }

  constructor(_id, widgetType, pageId) {
    this._id = _id;
    this.widgetType = widgetType;
    this.pageId = pageId;
  }
}
