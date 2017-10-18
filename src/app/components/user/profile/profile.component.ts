import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import { Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // properties
  userId: string;
  user = {};
  username: string;
  firstname: string;
  lastName: string;
  email: string;

  constructor(private userService: UserService, private websiteService: WebsiteService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
        (params: any) => {this.userId = params['uid'];
          this.user = this.userService.findUserById(this.userId);
          console.log(this.user);
          this.username = this.user['username'];
          this.firstname = this.user['firstname'];
          this.lastName = this.user['lastName'];
          this.email = this.user['email'];
        }
      );

  }
/*
Find the websites linked to a user account
 */
  findWebsites() {
/*    const Websites = this.websiteService.findWebsitesByUser(this.userId);
    for (const Website of Websites) {
      if (Website.developerId === this.userId) {*/
        this.router.navigate(['user/', this.userId, 'website']);
      }
    }
