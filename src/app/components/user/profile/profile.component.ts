import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import { Router} from '@angular/router';
import {subscribeOn} from 'rxjs/operator/subscribeOn';
import {User} from '../../../../models/user.model.client';
import {NgForm} from '@angular/forms';
import {Website} from '../../../../models/website.model.client';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // properties
  @ViewChild('f') ProfileForm: NgForm;
  username: string;
  firstName: string;
  lastName: string;
  email: string;

  userId: string;
  user = {};
  password: string;
  errorFlag: boolean;
  errorMsg: string;

  constructor(private userService: UserService, private websiteService: WebsiteService, private sharedService: SharedService,
              private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
/*    this.route.params.subscribe(
      (params: any) => {
        this.userId = params['uid'];
      }
    );*/

    this.route.params
      .subscribe(params => {
        this.user = this.sharedService.user;
      });
    console.log(this.user);
    this.userId = this.user['_id'];
    this.username = this.user['username'];
    this.password = this.user['password'];
    this.firstName = this.user['firstName'];
    this.lastName = this.user['lastName'];
    this.email = this.user['email'];
/*    this.userService.findUserById(this.userId)
      .subscribe((user) => {
        this.user = this.sharedService.user;
        console.log(this.user);
        this.username = this.user['username'];
        this.password = this.user['password'];
        this.firstName = this.user['firstName'];
        this.lastName = this.user['lastName'];
        this.email = this.user['email'];
      });*/
  }

  /*
  Find the websites linked to a user account
   */
  findWebsites() {
    this.websiteService.findAllWebsitesForUser(this.userId)
      .subscribe((websites) => {
        console.log(websites);
        this.router.navigate(['/user', this.userId, 'website']);
      });
/*    this.websiteService.findAllWebsitesForUser(this.userId)
      .subscribe((websites: Website[]) => {*/
        // this.router.navigate(['user/', this.userId, 'website']);
      // });
  }

  logout() {
    this.userService.logout()
      .subscribe((status) => {
      this.router.navigate(['login']);
      });
  }

  deleteUser(userId) {
    this.userService.deleteUser(userId)
      .subscribe((status) => {
        console.log(status);
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

  updateUser(username: string, email: string, firstName: string, lastName: string) {
    const newUser = new User(this.userId, username, email, this.password, firstName, lastName, '', [], new Date());
    this.userService.updateUser(newUser)
      .subscribe((status) => {
      console.log(status);
      });
/*    if (username === '') {
      this.errorFlag = true;
      this.errorMsg = 'Invalid new username!';
    } else {
      this.userService.updateUser(this.userId, newUser)
        .subscribe((user: User) => {
          this.user = user;
          this.username = username;
          // this.router.navigate(['/user' + this.userId]);
        });
    }*/
  }
}


