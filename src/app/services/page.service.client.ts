import {Injectable } from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

// Injecting service into Module

@Injectable()

export class PageService {
  constructor() {
  }

  pages = [
    { '_id': '321', 'name': 'Post 1' , 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '432', 'name': 'Post 2' , 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '543', 'name': 'Post 3' , 'websiteId': '456', 'description': 'Lorem' },

  ]

  api = {
    'createPage': this.createPage,
    'findPagesByWebsiteId': this.findPagesByWebsiteId,
    'findPageById': this.findPageById,
    'updatePage': this.updatePage,
    'deletePage': this.deletePage
  };


  createPage(websiteId, page) {
    page._id = Math.random();
    page.
    this.websites.push(website);
    return website;
  }


  findWebsitesByUser(userId: string) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x].developerId === userId) {
        return this.websites[x];
      }
    }
  }
  findWebsiteById(websiteId: string) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {
        return this.websites[x];
      }
    }
  }

  updateWebsite(websiteId, website) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {
        this.websites[x] = website;
      }
    }
  }

  deleteWebsite(userId) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === userId) {
        this.websites.splice(x, 1);
      }
    }
  }
}

