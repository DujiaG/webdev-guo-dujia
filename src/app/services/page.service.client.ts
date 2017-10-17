
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
    page.websiteId = websiteId;
    this.pages.push(page);
    return page;
  }


  findPagesByWebsiteId(websiteId: string) {
    const p = [];
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x].websiteId === websiteId) {
        p.push(this.pages[x]);
      }
    }
    return p;
  }
  findPageById(pageId: string) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {
        return this.pages[x];
      }
    }
  }

  updatePage(pageId, page) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {
        this.pages[x] = page;
      }
    }
  }

  deletePage(pageId) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {
        this.pages.splice(x, 1);
      }
    }
  }
}
