import { Component, OnInit } from '@angular/core';
import { PageService} from '../../../services/page.service.client';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../services/user.service.client';


@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  userId: string;
  pageId: string;
  pageName: string;
  page = {};
  pageDescription: string;

  // properties: page edit should retrieve the information given from the page
  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params => {
        this.pageId = params['pid'];
        this.userId = params['uid'];
      }
      )
      );
    this.page = this.pageService.findPageById(this.pageId);
    this.pageName = this.page['name'];
    this.pageDescription = this.page['description'];
    console.log(this.pageDescription);
  }

}
