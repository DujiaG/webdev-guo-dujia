import {Website} from './website.model.client';

export class User {
  _id: string;
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  websites: String[];
  dateCreated: Date;
  // email: String;
  // address; String;
  // constructor(_id, username, password) {
  //   this._id = _id;
  //   this.username = username;
  //   this.password = password;
  // }

  constructor(_id, username, email, password, firstName, lastName, phone, websites, dateCreated) {
    this._id = _id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.websites = websites;
    this.dateCreated = dateCreated;

  }


  // declare usermodel and require mongoose, build that user schema ;
  // usermodel = mongoose.model;
  // module.exports = userModel;
}
