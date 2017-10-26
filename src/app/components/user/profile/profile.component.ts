import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import { Router} from '@angular/router';
import {subscribeOn} from 'rxjs/operator/subscribeOn';
import {User} from '../../../../models/user.model.client';

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
  firstName: string;
  lastName: string;
  email: string;
  password: string;

  constructor(private userService: UserService, private websiteService: WebsiteService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
        (params: any) => {this.userId = params['uid'];
          this.user = this.userService.findUserById(this.userId);
          console.log(this.user, 'from Profile');
          this.username = this.user['username'];
          this.password = this.user['password'];
          this.firstName = this.user['firstName'];
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

  deleteUser(userId) {
    this.userService.deleteUser(this.userId)
    .subscribe((user: User) => {
      this.router.navigate(['login/']);
    });
    }
/*  selectUser(userId) {
    this.userService.findUserById(this.userId)
      .subscribe((user: User) => {
      this.username = user.username;
      this.firstName = user.firstName;
      this.password = user.password;
      this.lastName = user.lastName;
      this.email = user.email;
      });
  }*/

  updateUser(username: string) {
    const newUser = new User(this.userId, username, this.email, this.password, this.firstName, this.lastName);
    this.userService.updateUser(this.userId, newUser)
      .subscribe((user: User) => {
      this.user = user;
      this.username = username;
      // this.router.navigate(['/user' + this.userId]);
      });
  }
  }


