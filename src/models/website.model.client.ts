/*var mongoose = require(Mongoose);
var websiteSchema = require('/website.schema');
var websiteModel = mongoose.model('WebsiteModel')

websiteModel.createWebsite;*/

import {User} from './user.model.client';
import {Page} from './page.model.client';

export class Website {
  _id: String;
  name: String;
  developerId: String;
  description: String;
  pages: Page[];
  dateCreated: Date;

  // email: String;
  // address; String;
  // constructor(_id, username, password) {
  //   this._id = _id;
  //   this.username = username;
  //   this.password = password;
  // }

  constructor(_id, name, developerId, description, pages, dateCreated) {
    this._id = _id;
    this.name = name;
    this.developerId = developerId;
    this.description = description;
    this.pages = pages;
    this.dateCreated = dateCreated;
  }
}
