import {Component, OnInit, ViewChild} from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import {UserService} from '../../../services/user.service.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  pageName: string;
  pageDescription: string;


  userId: string;
  pageId: string;
  websiteId: string;

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
          this.pages = this.pageService.findPagesByWebsiteId(this.websiteId);
          // console.log(this.pageId);
          // this.page = this.pageService.findPageById(this.pageId);
          // console.log(this.page);
          // this.pageName = this.page['name'];
          // this.pageDescription = this.page['description'];
          }
        )
      );
  }

  addNewPage(name, description) {
    const pageNew = {'_id': '123', 'name': name, 'websiteId': this.websiteId, 'description': description};
    console.log(pageNew);
    this.pageService.createPage(this.websiteId, pageNew);
    this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
  }

}
