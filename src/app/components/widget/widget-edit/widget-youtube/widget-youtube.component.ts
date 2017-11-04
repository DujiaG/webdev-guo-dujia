import {Component, Input, OnInit} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {UserService} from '../../../../services/user.service.client';
import {PageService} from '../../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {
  @Input()
  widget: any;

  userId: string;
  user: {};
  widgetId: string;
  pageId: string;
  widgetSize: string;
  widgetText: string;
  widgetName: string;
  websiteId: string;
  widgetUrl: string;
  widgetType: string;
  widgetWidth: string;

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
    this.widgetUrl = this.widget['url'] ;
    this.widgetType = this.widget['widgetType'];
    this.widgetWidth = this.widget['width'];
    // console.log(this.widgetWidth);
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId);
    this.router.navigate(['/user', this.userId, 'website', this.websiteId,
      'page', this.pageId, 'widget']);
  }

  updateWidget(width, widgetUrl) {
    const newWidget = {'_id': this.widgetId, 'widgetType': 'YOUTUBE', 'pageId': this.pageId, 'width': width, 'url': widgetUrl}
    this.widgetService.updateWidget(this.widgetId, newWidget);
    this.router.navigate(['/user', this.userId, 'website', this.websiteId,
      'page', this.pageId, 'widget']);
  }



}
