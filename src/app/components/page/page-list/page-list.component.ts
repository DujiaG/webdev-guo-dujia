import { Component, OnInit } from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {UserService} from '../../../services/user.service.client';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Page} from '../../../../models/page.model.client';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  pageId: string;
  userId: string;
  websiteId: string;
  pages = [];
  page = {};
  constructor(private pageService: PageService, private userService: UserService, private websiteService: WebsiteService,
              private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params => {
            this.userId = params['uid'];
            this.websiteId = params['wid'];
          }
        )
      );
    // this.pages = this.pageService.findAllPagesForWebsite(this.websiteId);
    this.pageService.findAllPagesForWebsite(this.websiteId)
      .subscribe((pages: Page[]) => {
      this.pages = pages;
      });
  }
}
