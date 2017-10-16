import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
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

  /*    this.activatedRoute.params
        .subscribe(
          (params: any) => {
            this.username = params['username'];
          }
        );
      this.user = this.userService.findUserByUsername(this.username);
    }*/

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



