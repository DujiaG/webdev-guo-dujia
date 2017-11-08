import {Website} from './website.model.client';
import {Widget} from './widget.model.client';

export class Page {
  _id: String;
  name: String;
  title: String;
  website: String;
  description: String;
  widgets: Widget[];
  dateCreated: Date;
  // email: String;
  // address; String;
  // constructor(_id, username, password) {
  //   this._id = _id;
  //   this.username = username;
  //   this.password = password;
  // }

  constructor(_id, name, title, website, description, widgets, dateCreated) {
    this._id = _id;
    this.title = title;
    this.name = name;
    this.website = website;
    this.description = description;
    this.widgets = widgets;
    this.dateCreated = dateCreated;
  }
}



