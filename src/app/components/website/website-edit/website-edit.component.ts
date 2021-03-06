import {Component, OnInit, ViewChild} from '@angular/core';
import { WebsiteService} from '../../../services/website.service.client';
import { UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Website} from '../../../../models/website.model.client';
import {NgForm} from '@angular/forms';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  // properties
  @ViewChild('f') ProfileForm: NgForm;
  userId: string;
  user = {};
  websites = [];
  username: string;
  website = {};
  websiteId: string;
  websiteName: string;
  websiteDescription: string;
  errorFlag: boolean;
  errorMsg: string;

  constructor(private sharedService: SharedService, private userService: UserService, private websiteService: WebsiteService, private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => {
        this.user = this.sharedService.user;
        this.userId = this.user['_id'];
      });
    this.activatedRoute.params.subscribe(params => {
      this.websiteId = params['wid'];
      // this.websites = this.websiteService.findWebsitesByUser(this.userId);
    });
    this.websiteService.findWebsiteById(this.userId, this.websiteId)
      .subscribe((website: Website) => {
        this.website = website;
        this.websiteName = this.website['name'];
        this.websiteDescription = this.website['description'];
        // console.log(this.websiteId);
      });
    this.websiteService.findAllWebsitesForUser(this.userId)
      .subscribe((websites: Website[]) => {
      this.websites = websites;
      });
  }

  deleteWebsite(websiteId) {
    this.websiteService.deleteWebsite(websiteId)
      .subscribe((status) => {
      console.log(status);
        this.router.navigate(['/user',  'website']);
      });
  }

  updateWebsite(name: string, description: string) {
    const newWebsite = new Website(this.websiteId, name, this.userId, description, [], new Date);
    if (name === '') {
      this.errorFlag = true;
      this.errorMsg = 'Invalid new website name!';
    } else {
      this.websiteService.updateWebsite(this.websiteId, newWebsite)
        .subscribe((status) => {
        console.log(status);
          this.router.navigate(['/user', 'website']);
        });
    }
  }
}
