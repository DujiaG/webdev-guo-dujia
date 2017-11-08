import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
// import {User} from '../../../../models/user.model.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // properties

  @ViewChild('f') RegisterForm: NgForm;
  username: string;
  password: string;
  verifyPassword: string;

  userId: string;
  user = {};
  errorFlag: boolean;
  errorMsg: string;
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
    this.username = username;
    this.password = password;
    console.log([this.username, this.password]);
    this.userService.findUserByUsername(username)
      .subscribe((user) => {
      if (user === null) {
        const newUser = {
          username: this.username,
          email: '',
          password: this.password,
          firstName: '',
          lastName: '',
          phone: '',
          website: [],
          dateCreated: new Date()
        };
        this.userService.createUser(newUser)
          .subscribe((userFromServer) => {
          console.log(userFromServer);
          this.router.navigate(['/user', userFromServer._id]);
          });
      }
      });



  }
    /*    const userNew = {'_id': '123', 'username': username, 'email': '', 'password': password, 'firstname': '', 'lastname': ''};
        console.log(userNew);
        this.userService.createUser(userNew);
        this.router.navigate(['/user', userNew._id]);
      }*/
/*    if (username === '' || password === '' || password !== verifyPassword ) {
      this.errorFlag = true;
      this.errorMsg = 'Invalid username/password or password not the same!';
    } else {
      // asking the server to navigate at a time when it is convenient, while returning its own thing from client at the same time
      return this.userService.createUser(new User('', username, '', password, '', ''))
        .subscribe((user: User) => {
          this.router.navigate(['user/', user._id]);
        });
    }
  }*/
}
