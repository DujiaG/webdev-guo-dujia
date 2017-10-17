import {Component, OnInit, ViewChild} from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;
  websiteName: string;
  websiteDescription: string;

  // properties
  userId: string;
  user = {};
  websites = [];
  username: string;
  websiteId: string;
/*  websiteName: string;
  websiteDescription: string;*/
  constructor(private userService: UserService, private websiteService: WebsiteService, private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.
    subscribe(params => {
        this.userId = params['uid'];
      }
    );
    this.websites = this.websiteService.findWebsitesByUser(this.userId);
  }


  click(name, description) {
    const websiteNew = [{ '_id': '123', 'name': name, 'developerId': this.userId, 'description': description}];
    console.log(description);
    this.websiteService.createWebsite(this.userId, websiteNew);
    this.router.navigate(['/user', this.userId, 'website']);
  }
}
