export class Website {
  _id: String;
  name: String;
  developerId: String;
  description: String;

  // email: String;
  // address; String;
  // constructor(_id, username, password) {
  //   this._id = _id;
  //   this.username = username;
  //   this.password = password;
  // }

  constructor(_id, name, developerId, description) {
    this._id = _id;
    this.name = name;
    this.developerId = developerId;
    this.description = description;
  }
}
