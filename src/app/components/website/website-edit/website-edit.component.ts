import { Component, OnInit } from '@angular/core';
import { WebsiteService} from '../../../services/website.service.client';
import { UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  // properties
  userId: string;
  user = {};
  websites = [];
  username: string;
  website = {};
  websiteId: string;
  websiteName: string;
  websiteDescription: string;
  constructor(private userService: UserService, private websiteService: WebsiteService, private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.
    subscribe(params => {
      this.websiteId = params['wid'];
      this.userId = params['uid'];
    }
    );
    console.log(this.websiteId);
    this.website = this.websiteService.findWebsiteById(this.websiteId);
    this.websiteName = this.website['name'];
    this.websiteDescription = this.website['description'];
    this.websites = this.websiteService.findWebsitesByUser(this.userId);
  }



}
