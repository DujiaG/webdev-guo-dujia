import {Injectable } from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

// Injecting service into Module

@Injectable()

export class WebsiteService {
  constructor() {
  }

  websites = [
    { '_id': '123', 'name': 'Facebook' , 'developerId': '456', 'description': 'Lorem' },
    { '_id': '234', 'name': 'Tweeter' , 'developerId': '456', 'description': 'Lorem' },
    { '_id': '456', 'name': 'Gizmodo' , 'developerId': '456', 'description': 'Lorem' },
    { '_id': '890', 'name': 'Go' , 'developerId': '123', 'description': 'Lorem' },
    { '_id': '567', 'name': 'Tic Tac Toe' , 'developerId': '123', 'description': 'Lorem' },
    { '_id': '678', 'name': 'Checkers' , 'developerId': '123', 'description': 'Lorem' },
    { '_id': '789', 'name': 'Chess' , 'developerId': '234', 'description': 'Lorem' },
  ]

  api = {
    'createWebsite': this.createWebsite,
    'findWebsitesByUser': this.findWebsitesByUser,
    'findWebsiteById': this.findWebsiteById,
    'updateWebsite': this.updateWebsite,
    'deleteWebsite': this.deleteWebsite
  };

  // add the website parameter instance to the local websites array. the new website's developerID is set to the
  // userId parameter
  createWebsite(userId, website) {
    website._id = Math.random();
    website.developerId = userId;
    this.websites.push(website);
    return website;
  }

  // Retrieves the websites in local websites array whose developerId matches the parameter userId
  findWebsitesByUser(userId: string) {
    return this.websites;
/*        for (let x = 0; x < this.websites.length; x++) {
              if (this.websites[x].developerId === userId) {
                sites.push(this.websites[x]);*!/*/
    // return this.websites.filter(websites => websites.developerId === userId);
  }

  // retrieves the website in local websites array whose _id matches the websiteId parameter
  findWebsiteById(websiteId: string) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {
        return this.websites[x];
      }
    }
  }

  // updates the user in local users array whose id matches the userID parameter
  updateWebsite(websiteId, website) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {
        this.websites[x] = website;
      }
    }
  }
  // removes the website from local websites array whose _id matches the websiteId parameter
  deleteWebsite(userId) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === userId) {
        this.websites.splice(x, 1);
      }
    }
  }
}

