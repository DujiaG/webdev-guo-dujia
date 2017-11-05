import {Injectable } from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {Website} from '../../models/website.model.client';
const baseUrl = environment.baseUrl;
// Injecting service into Module

@Injectable()

export class WebsiteService {
  constructor(private http: Http) {
  }
/*
  websites = [
    { '_id': '123', 'name': 'Facebook' , 'developerId': '456', 'description': 'Lorem' },
    { '_id': '234', 'name': 'Tweeter' , 'developerId': '456', 'description': 'Lorem' },
    { '_id': '456', 'name': 'Gizmodo' , 'developerId': '456', 'description': 'Lorem' },
    { '_id': '890', 'name': 'Go' , 'developerId': '123', 'description': 'Lorem' },
    { '_id': '567', 'name': 'Tic Tac Toe' , 'developerId': '123', 'description': 'Lorem' },
    { '_id': '678', 'name': 'Checkers' , 'developerId': '123', 'description': 'Lorem' },
    { '_id': '789', 'name': 'Chess' , 'developerId': '234', 'description': 'Lorem' },
  ]*/

  api = {
    'createWebsite': this.createWebsite,
    'findAllWebsitesForUser': this.findAllWebsitesForUser,
    'findWebsiteById': this.findWebsiteById,
    'updateWebsite': this.updateWebsite,
    'deleteWebsite': this.deleteWebsite
  };

  // add the website parameter instance to the local websites array. the new website's developerID is set to the
  // userId parameter
  createWebsite(userId: string, website: Website) {
    website._id = (new Date()).getTime() + '';
    const url = baseUrl + '/api/user/' + userId + '/website';
    return this.http.post(url, website)
      .map((response: Response) => {
        return response.json();
      });
  }

  // Retrieves the websites in local websites array whose developerId matches the parameter userId
  findAllWebsitesForUser(userId: string) {
    const url = baseUrl + '/api/user/' + userId + '/website';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  // retrieves the website in local websites array whose _id matches the websiteId parameter
  findWebsiteById(userId: string, websiteId: string) {
    const url = baseUrl + '/api/website/' + websiteId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }


  // updates the user in local users array whose id matches the userID parameter
  updateWebsite(websiteId: string, newWebsite: Website) {
    const url = baseUrl + '/api/website/' + websiteId;
    return this.http.put(url, newWebsite)
      .map((response: Response) => {
        return response.json();
      });
  }
  // removes the website from local websites array whose _id matches the websiteId parameter
  deleteWebsite(websiteId: string) {
    const url = baseUrl + '/api/website/' + websiteId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json();
      });
  }
}
