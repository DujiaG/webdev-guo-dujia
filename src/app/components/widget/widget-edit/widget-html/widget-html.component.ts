import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {WidgetService} from '../../../../services/widget.service.client';
import {UserService} from '../../../../services/user.service.client';
import {PageService} from '../../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../../../models/widget.model.client';

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlComponent implements OnInit {


  @ViewChild('f') widgetForm: NgForm;
  // properties
  widget: any;


  userId: string;
  user: {};
  widgets: any[];
  widgetId: string;
  pageId: string;
  widgetSize: number;
  widgetText: string;
  widgetName: string;
  websiteId: string;
  widgetType: string;

  constructor(private widgetService: WidgetService, private userService: UserService, private pageService: PageService,
              private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
        this.userId = params['uid'];
        this.pageId = params['pid'];
        this.widgetId = params['wgid'];
        this.websiteId = params['wid'];
        console.log(this.websiteId);
      }
    );
    this.widgetService.findWidgetsByPageId(this.pageId)
      .subscribe((widgets: Widget[]) => {
        this.widgets = widgets;
      });
    this.widgetService.findWidgetById(this.widgetId)
      .subscribe((widget: Widget) => {
        this.widget = widget;
        console.log(this.widget);
        this.widgetText = this.widget['text'];
        this.widgetType = this.widget['widgetType'];
        this.widgetSize = this.widget['size'];
        this.widgetName = this.widget['name'];
      });
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId)
      .subscribe((widget: Widget) => {
        this.router.navigate(['/user', this.userId, 'website', this.websiteId,
          'page', this.pageId, 'widget']);
      });
  }

  updateWidget(widgetName: string, widgetText: string) {
    const newWidget = new Widget('HTML', this.pageId, null, widgetText, null, null, null, null, false, null, widgetName);
    this.widgetService.updateWidget(this.widgetId, newWidget)
      .subscribe((widget: Widget) => {
        this.widgetText = widgetText;
        this.widgetName = widgetName;
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId,
          'widget']);
      });
  }
}
