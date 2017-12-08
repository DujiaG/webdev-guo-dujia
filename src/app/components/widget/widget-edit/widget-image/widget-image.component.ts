import {Component, Input, OnInit} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {UserService} from '../../../../services/user.service.client';
import {PageService} from '../../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../../../models/widget.model.client';
import {environment} from '../../../../../environments/environment';
import {SharedService} from "../../../../services/shared.service.client";


@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {
  @Input()
  widget: any;


  userId: string;
  user: {};
  widgetId: string;
  pageId: string;
  widgetSize: number;
  widgetText: string;
  widgetName: string;
  websiteId: string;
  widgetUrl: string;
  widgetType: string;
  widgetWidth: string;
  baseUrl: string = environment.baseUrl;

  constructor(private sharedService: SharedService, private widgetService: WidgetService, private userService: UserService,
              private pageService: PageService,
              private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.user = this.sharedService.user;
      this.userId = this.user['_id'];
      this.pageId = params['pid'];
        this.widgetId = params['wgid'];
        this.websiteId = params['wid'];
      }
    );
    this.widgetService.findWidgetById(this.widgetId)
      .subscribe((widget: Widget) => {
      this.widget = widget;
        this.widgetUrl = this.widget['url'] ;
        this.widgetType = this.widget['widgetType'];
        this.widgetWidth = this.widget['width'];
      });
  }



  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId)
      .subscribe((widget: Widget) => {
        this.router.navigate(['/user', 'website', this.websiteId,
          'page', this.pageId, 'widget']);
      });
  }

  updateWidget(widgetWidth: string, widgetUrl: string) {
    const newWidget = new Widget('IMAGE', this.pageId, null, null, widgetWidth, widgetUrl, null, null, false, null, null);
    this.widgetService.updateWidget(this.widgetId, newWidget)
      .subscribe((widget: Widget) => {
        this.widgetWidth = widgetWidth;
        this.widgetUrl = widgetUrl;
        console.log(this.widgetUrl);
        this.router.navigate(['/user', 'website', this.websiteId,
          'page', this.pageId, 'widget']);
      });
  }

/*
  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId);
    this.router.navigate(['/user', this.userId, 'website', this.websiteId,
      'page', this.pageId, 'widget']);
  }

  updateWidget(width, widgetUrl) {
    const newWidget = {'_id': this.widgetId, 'widgetType': 'IMAGE', 'pageId': this.pageId, 'width': width, 'url': widgetUrl}
    this.widgetService.updateWidget(this.widgetId, newWidget);
    this.router.navigate(['/user', this.userId, 'website', this.websiteId,
      'page', this.pageId, 'widget']);
  }*!/
*/


}
