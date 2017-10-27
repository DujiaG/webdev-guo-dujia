export class Page {
  _id: String;
  name: String;
  websiteId: String;
  description: String;
  // email: String;
  // address; String;
  // constructor(_id, username, password) {
  //   this._id = _id;
  //   this.username = username;
  //   this.password = password;
  // }

  constructor(_id, name, websiteId, description) {
    this._id = _id;
    this.name = name;
    this.websiteId = websiteId;
    this.description = description;
  }
}



