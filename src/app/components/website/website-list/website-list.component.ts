import { Component, OnInit } from '@angular/core';
import { WebsiteService } from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';
import { Router} from '@angular/router';
import { UserService} from '../../../services/user.service.client';


@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {
  userId: string;
  websites = [];
  name: string;
  websiteId: string;
  user = {};

  constructor(private websiteService: WebsiteService, private userService: UserService,
              private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['uid'];
        this.websiteId = params['wid'];
      });
    this.websites = this.websiteService.findWebsitesByUser(this.userId);
  }


/*
  editWebsite() {
    /!*    const Websites = this.websiteService.findWebsitesByUser(this.userId);
        for (const Website of Websites) {
          if (Website.developerId === this.userId) {*!/
    this.router.navigate(['user/', this.userId, 'website', this.websiteId]);
  }*/


/*  click() {
    this.router.navigate('user/', this.userId,)
 */
}
