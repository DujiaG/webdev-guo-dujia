
 import {Injectable } from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
 import {Page} from '../../models/page.model.client';
 const baseUrl = environment.baseUrl;

// Injecting service into Module

@Injectable()

export class PageService {
  constructor(private http: Http) {
  }

/*  pages = [
    { _id: '321', name: 'Post 1' , websiteId: '456', 'description': 'Lorem' },
    { '_id': '432', 'name': 'Post 2' , 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '543', 'name': 'Post 3' , 'websiteId': '456', 'description': 'Lorem' },

  ]*/

  api = {
    'createPage': this.createPage,
    'findPagesByWebsiteId': this.findPagesByWebsiteId,
    'findPageById': this.findPageById,
    'updatePage': this.updatePage,
    'deletePage': this.deletePage
  };


  createPage(websiteId: string, page: Page) {
/*    page._id = Math.random().toString();
    page.websiteId = websiteId;
    this.pages.push(page);
    return page;*/

    page._id = (new Date()).getTime() + '';
    const url = baseUrl + '/api/website/' + websiteId + '/page';
    return this.http.post(url, page)
      .map((response: Response) => {
        return response.json();
      });
  }


  findPagesByWebsiteId(websiteId: string) {
    const url = baseUrl + '/api/website/' + websiteId + '/page';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }
  findPageById(pageId: string) {
    const url = baseUrl + '/api/page/' + pageId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  updatePage(pageId: string, newPage: Page) {
    const url = baseUrl + '/api/page/' + pageId;
    return this.http.put(url, newPage)
      .map((response: Response) => {
        return response.json();
      });
  }

  deletePage(pageId) {
    const url = baseUrl + '/api/page/' + pageId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json();
      });
  }
}
