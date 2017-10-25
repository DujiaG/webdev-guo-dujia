import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {User} from '../../../../models/user.model.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // properties

  @ViewChild('f') loginForm: NgForm;
  username: string;
  password: string;
  verifyPassword: string;

  userId: string;
  user = {};
/*  firstname: string;
  lastName: string;
  email: string;*/

  constructor(private userService: UserService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
/*     this.route.params.subscribe(
       (params: any) => {
         this.userId = params['uid'];
         this.user = this.userService.findUserById(this.userId);
/!*         this.username = this.user['username'];
         this.password = this.user['password'];
         this.verifyPassword = this.user['verifyPassword'];*!/
       }
     );*/
  }

  // write a function that determines if the verify password is the same as password and submit information to profile
  Register(username, password, verifyPassword) {
    /*    const userNew = {'_id': '123', 'username': username, 'email': '', 'password': password, 'firstname': '', 'lastname': ''};
        console.log(userNew);
        this.userService.createUser(userNew);
        this.router.navigate(['/user', userNew._id]);
      }*/
    // asking the server to navigate at a time when it is convenient, while returning its own thing from client at the same time
    return this.userService.createUser(new User('', username, '', password, '' , ''))
      .subscribe((user: User) => {
        this.router.navigate(['user/', user._id]);
      });
  }
}
