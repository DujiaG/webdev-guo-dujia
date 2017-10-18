import { Component, OnInit } from '@angular/core';
import { PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {WebsiteService} from '../../../services/website.service.client';


@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  userId: string;
  pageId: string;
  websiteId: string;
  pageName: string;
  page = {};
  pageDescription: string;
  pages = [];

  // properties: page edit should retrieve the information given from the page
  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute,
              private websiteService: WebsiteService, private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params => {
        this.pageId = params['pid'];
        this.userId = params['uid'];
        this.websiteId = params['wid'];
      }
      )
      );
    this.pages = this.pageService.findPagesByWebsiteId(this.websiteId);
    this.page = this.pageService.findPageById(this.pageId);
    this.pageName = this.page['name'];
  }


  delete() {
    this.pageService.deletePage(this.pageId);
    this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
  }

}
