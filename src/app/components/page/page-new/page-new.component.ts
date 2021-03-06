import {Component, OnInit, ViewChild} from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import {UserService} from '../../../services/user.service.client';
import {NgForm} from '@angular/forms';
import {Page} from '../../../../models/page.model.client';
import {Website} from '../../../../models/website.model.client';
import {SharedService} from "../../../services/shared.service.client";

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  @ViewChild('f') pageNewForm: NgForm;
  pageName: string;
  pageDescription: string;


  userId: string;
  pageId: string;
  websiteId: string;

  errorFlag: boolean;
  errorMsg: string;
  user = {};
  page = {};
  pages = [];

  // properties: page edit should retrieve the information given from the page
  constructor(private sharedService: SharedService,
    private pageService: PageService, private activatedRoute: ActivatedRoute,
              private websiteService: WebsiteService, private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params => {
            // this.pageId = params['pid'];
          this.user = this.sharedService.user;
          this.userId = this.user['_id'];
          this.websiteId = params['wid'];
          // this.pages = this.pageService.findAllPagesForWebsite(this.websiteId);
          // console.log(this.pageId);
          // this.page = this.pageService.findPageById(this.pageId);
          // console.log(this.page);

          }
        )
      );
    this.pageService.findAllPagesForWebsite(this.websiteId)
      .subscribe((pages: Page[]) => {
        this.pages = pages;
        this.pageName = this.page['name'];
        this.pageDescription = this.page['description'];
      });
  }

/*  createPage(name, description) {
    const pageNew = {'_id': '123', 'name': name, 'websiteId': this.websiteId, 'description': description};
    console.log(pageNew);
    this.pageService.createPage(this.websiteId, pageNew);
    this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
  }*/

  createPage(name, description) {
    if (name === '' || description === '') {
      this.errorFlag = true;
      this.errorMsg = 'Invalid name or description';
    } else {
      this.pageService.findAllPagesForWebsite(this.websiteId)
        .subscribe((page) => {
          const newPage = {
            name: name,
            title: '',
            website: this.websiteId,
            description: description,
            widgets: [],
            dateCreated: new Date(),
          };
          this.pageService.createPage(this.websiteId, newPage)
            .subscribe((Page) => {
            console.log(Page);
            this.router.navigate(['/user', 'website', this.websiteId, 'page']);
            });
        });
    }
  }

/*
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
              this.router.navigate(['/user', this.userId, 'website']);
            });
        });
    }
  }
*/


}
    /*      return this.pageService.createPage(this.websiteId, new Page('', name, this.websiteId, description))
            .subscribe((page: Page) => {
              this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
            });
        }*/
