import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../../services/user.service.client';
import {PageService} from '../../../../services/page.service.client';
import {Widget} from '../../../../../models/widget.model.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {


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
              private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.
    subscribe(params => {
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
        this.widgetText = this.widget['text'] ;
        this.widgetType = this.widget['widgetType'];
        this.widgetSize = this.widget['size'];
      });
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId)
      .subscribe((widget: Widget) => {
      this.router.navigate(['/user', this.userId, 'website', this.websiteId,
        'page', this.pageId, 'widget']);
    });
  }

  updateWidget(widgetText: string, widgetSize: number) {
    const newWidget = new Widget('HEADING', this.pageId, widgetSize, widgetText, null, null, null, null, false, null, null);
      this.widgetService.updateWidget(this.widgetId, newWidget)
        .subscribe((widget: Widget) => {
          this.widgetSize = widgetSize;
          this.widgetText = widgetText;
          this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId,
          'widget']);
        });
    }
/*
    const newWidget = {'_id': this.widgetId, 'widgetType': 'HEADING', 'pageId': this.pageId, 'size': widgetSize, 'text': widgetText}
    this.widgetService.updateWidget(this.widgetId, newWidget);
    this.router.navigate(['/user', this.userId, 'website', this.websiteId,
      'page', this.pageId, 'widget']);
  }
*/
/*    if (name === '') {
      this.errorFlag = true;
      this.errorMsg = 'Invalid new website name!';
    } else {*/
}
