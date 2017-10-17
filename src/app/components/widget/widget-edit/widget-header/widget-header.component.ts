import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../../services/user.service.client';
import {PageService} from '../../../../services/page.service.client';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {

  // properties
  userId: string;
  user: {};
  widgetId: string;
  pageId: string;
  widgetSize: string;
  widgetText: string;
  widgetName: string;
  widget: any;
  websiteId: string;
  constructor(private widgetService: WidgetService, private userService: UserService, private pageService: PageService,
              private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.
    subscribe(params => {
        this.userId = params['uid'];
        this.pageId = params['pid'];
        this.widgetId = params['wgid'];
        this.websiteId = params['wid'];
      }
    );
    this.widget = this.widgetService.findWidgetById(this.widgetId);
    this.widgetSize = this.widget['size'];
    this.widgetText = this.widget['text'];
    this.widgetName = this.widget['name'];
  }

}
