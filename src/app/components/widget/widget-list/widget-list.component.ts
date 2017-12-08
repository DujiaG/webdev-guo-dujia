import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {UserService} from '../../../services/user.service.client';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {Widget} from '../../../../models/widget.model.client';
import {environment} from '../../../../environments/environment';
import {SharedService} from '../../../services/shared.service.client';



@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  // properties
  userId: string;
  user: {};
  // widgetId: string;
  widgetType: string;
  pageId: string;
  widget: any;
  widgets: any[];
  websiteId: string;
  widgetSize: string;
  widgetText: string;
  widgetUrl: string;
  widgetWidth: string;
  baseUrl: string = environment.baseUrl;



  constructor(private sharedService: SharedService,
    private widgetService: WidgetService, private userService: UserService, private pageService: PageService,
              private activatedRoute: ActivatedRoute, private router: Router, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.activatedRoute.params.
    subscribe(params => {
      this.user = this.sharedService.user;
      this.userId = this.user['_id'];
      this.pageId = params['pid'];
        this.websiteId = params['wid'];
      });
    this.widgetService.findWidgetsByPageId(this.pageId)
      .subscribe((widgets: Widget[]) => {
        this.widgets = widgets;
        // this.widgetType = this.widget['widgetType'];
        // this.widgetSize = this.widget['size'];
        // this.widgetText = this.widget['text'];
        // this.widgetUrl = this.widget['url'];
        // this.widgetWidth = this.widget['width'];
      });
  }

  cleanURL(url: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }


}

