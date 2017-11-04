import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {UserService} from '../../../services/user.service.client';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {
  userId: string;
  user: {};
  widgetId: string;
  websiteId: string;
  widgetType: string;
  pageId: string;
  widget: any;
  widgets: any[];



  constructor(private widgetService: WidgetService, private userService: UserService, private pageService: PageService,
              private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.
    subscribe(params => {
        this.userId = params['uid'];
        this.websiteId = params['wid'];
        this.pageId = params['pid'];
      }
    );
    this.widgets = this.widgetService.findWidgetsByPageId(this.pageId);
  }

  createWidget(widgetType) {
    const widgetNew = {'_id': '456', 'widgetType': widgetType, 'pageId': this.pageId, 'size': 2, 'text': ''};
    this.widgetService.createWidget(this.pageId, widgetNew);
    console.log(widgetNew);
    this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page',
      this.pageId, 'widget', widgetNew._id]);
  }

}
