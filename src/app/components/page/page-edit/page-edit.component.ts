import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {WebsiteService} from '../../../services/website.service.client';
import {Page} from '../../../../models/page.model.client';
import { PageService} from '../../../services/page.service.client';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  // properties
  @ViewChild('f') PageEditForm: NgForm;
  userId: string;
  pageId: string;
  websiteId: string;
  pageName: string;
  page = {};
  pageDescription: string;
  pages = [];
  errorFlag: boolean;
  errorMsg: string;

  // properties: page edit should retrieve the information given from the page
  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute,
              private websiteService: WebsiteService, private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params => {
            this.pageId = params['pid'];
            this.userId = params['uid'];
            this.websiteId = params['wid'];
          }
        )
      );
    this.pageService.findAllPagesForWebsite(this.websiteId)
      .subscribe((pages: Page[]) => {
        this.pages = pages;
      });
    this.pageService.findPageById(this.pageId)
      .subscribe((page: Page) => {
      this.page = page;
        this.pageName = this.page['name'];
        this.pageDescription = this.page['description'];
      });
  }

  deletePage(PageId) {
    this.pageService.deletePage(this.pageId)
      .subscribe((page: Page) => {
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
      });
  }

  updatePage(name: string, description: string) {
    const newPage = new Page(name, '', this.websiteId, description, [], new Date());
    if (name === '') {
      this.errorFlag = true;
      this.errorMsg = 'Invalid new website name!';
    } else {
      this.pageService.updatePage(this.websiteId, newPage)
        .subscribe((status) => {
        console.log(status);
        });
    }
/*      this.pageService.updatePage(this.pageId, newPage)
        .subscribe((page: Page) => {
          this.pageName = name;
          this.pageDescription = description;
        });
    }*/
  }

}



