export class User {
  _id: String;
  username: String;
  email: String;
  password: String;
  firstName: String;
  lastName: String;
  // email: String;
  // address; String;
  // constructor(_id, username, password) {
  //   this._id = _id;
  //   this.username = username;
  //   this.password = password;
  // }

  constructor(_id, username, email, password, firstName, lastName) {
    this._id = _id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;

  }
}
