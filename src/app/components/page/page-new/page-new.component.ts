import {Component, OnInit, ViewChild} from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import {UserService} from '../../../services/user.service.client';
import {NgForm} from '@angular/forms';
import {Page} from '../../../../models/page.model.client';
import {Website} from '../../../../models/website.model.client';

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


  page = {};
  pages = [];

  // properties: page edit should retrieve the information given from the page
  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute,
              private websiteService: WebsiteService, private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params => {
            // this.pageId = params['pid'];
            this.userId = params['uid'];
            this.websiteId = params['wid'];
          // this.pages = this.pageService.findPagesByWebsiteId(this.websiteId);
          // console.log(this.pageId);
          // this.page = this.pageService.findPageById(this.pageId);
          // console.log(this.page);

          }
        )
      );
    this.pageService.findPagesByWebsiteId(this.websiteId)
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
      return this.pageService.createPage(this.websiteId, new Page('', name, this.websiteId, description))
        .subscribe((page: Page) => {
          this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
        });
    }
  }

}
