import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute} from '@angular/router';

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

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
        (params: any) => {
          this.userId = params['userId'];
        }
      );
    this.user = this.userService.findUserById(this.userId);
    this.username = this.user['username'];
  }

}
