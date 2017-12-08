import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../../models/user.model.client';
import {environment} from '../../../../environments/environment';
import {SharedService} from '../../../services/shared.service.client';
const baseUrl = environment.baseUrl;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  // @ViewChild('f') loginForm: NgForm;

  username: string;
  password: string;
  errorFlag: boolean;
  errorMsg: string;

  constructor(private router: Router, private userService: UserService, private sharedService: SharedService) {
  }

  ngOnInit() {
  }

  /*    this.activatedRoute.params
        .subscribe(
          (params: any) => {
            this.username = params['username'];
          }
        );
      this.user = this.userService.findUserByUsername(this.username);
    }*/

  login() {
    // this.username = this.loginForm.value.username;
    // this.password = this.loginForm.value.password;
    this.errorFlag = false;

    this.userService
      .login(this.username, this.password)
      .subscribe((user) => {
      this.sharedService.user = user;
      this.router.navigate(['/user']);
      });
/*    this.userService.findUserByCredential(this.username, this.password)
      .subscribe((user: User) => {
        if (user) {
          this.router.navigate(['user/', user._id]);
        }
      });*/
  }
}

/*
import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
// import {User} from '../../../models/user.model.client';
import {UserService} from '../../../services/user.service.client';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  @ViewChild('f') loginForm: NgForm;

  username: string;
  password: string;
  errorFlag: boolean;
  errorMsg: string;

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
  }

  /!*    this.activatedRoute.params
        .subscribe(
          (params: any) => {
            this.username = params['username'];
          }
        );
      this.user = this.userService.findUserByUsername(this.username);
    }*!/

    /!*
        this.userService.findUserByCredential(username, this.password)
          .subscribe((user: User) => {
            if (user) {
              this.router.navigate(['user/', user._id]);
            }
          });
      }*!/
  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this.errorFlag = false;

    const user = this.userService.findUserByUsername(this.username);
    if (user && user.password === this.password) {
      this.router.navigate(['user/', user._id]);
    } else {
      this.errorFlag = true;
      this.errorMsg = 'Invalid username or password!';

    }
  }
}

/!*
    } else {
      this.errorFlag = true;
      this.errorMsg = 'Invalid username or password!';
*!/




*/
