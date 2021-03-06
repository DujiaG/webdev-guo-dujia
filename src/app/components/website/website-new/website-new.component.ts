import {Component, OnInit, ViewChild} from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Website} from '../../../../models/website.model.client';
import {User} from '../../../../models/user.model.client';
import {SharedService} from "../../../services/shared.service.client";

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

  @ViewChild('f') websiteNewForm: NgForm;
  websiteName: string;
  websiteDescription: string;

  // properties
  userId: string;
  user = {};
  websites = [];
  username: string;
  websiteId: string;
  website = {};
  errorFlag: boolean;
  errorMsg: string;

  /*  websiteName: string;
    websiteDescription: string;*/
  constructor(private sharedService: SharedService, private userService: UserService,
              private websiteService: WebsiteService, private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => {
        this.user = this.sharedService.user;
      });    this.userId = this.user['_id'];
    this.activatedRoute.params.subscribe(params => {
      this.websiteId = params['wid'];
    });
    this.websiteService.findAllWebsitesForUser(this.userId)
      .subscribe((websites: Website[]) => {
        this.websites = websites;
      });
/*    this.userService.findUserById(this.userId)
      .subscribe((user: User) => {
      this.user = user;
      });*/
    // this.websites = this.websiteService.findAllWebsitesForUser(this.userId);
    // this.websiteService.findWebsiteById(this.userId, this.websiteId);
  }

   createWebsite(name: String, description: String) {
    this.websiteService.findAllWebsitesForUser(this.userId)
       .subscribe((website) => {
         const newWebsite = {
           _id: '',
           name: name,
           developerId: this.userId,
           description: description,
           pages: [],
           dateCreated: new Date(),
         };
         this.websiteService.createWebsite(this.userId, newWebsite)
           .subscribe((websiteFromServer) => {
             console.log(websiteFromServer);
             this.router.navigate(['/user', 'website']);
           });
       });
   }
}


/*  createWebsite(name, description) {
    if (name === '' || description === '') {
      this.errorFlag = true;
      this.errorMsg = 'Invalid name or description';
    } else {
      return this.websiteService.createWebsite(this.userId, new Website('', name, '', description))
        .subscribe((website: Website) => {
          this.router.navigate(['/user', this.userId, 'website']);
        });
    }
  }*/
