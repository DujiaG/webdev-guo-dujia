import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../../services/user.service.client';
import {PageService} from '../../../../services/page.service.client';
import {Widget} from '../../../../../models/widget.model.client';

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {

  @ViewChild('f') widgetTextForm: NgForm;
  // properties
  widget: any;


  userId: string;
  user: {};
  widgets: any[];
  widgetId: string;
  pageId: string;
  widgetSize: number;
  widgetText: string;
  websiteId: string;
  widgetType: string;
  widgetPlaceholder: string;
  widgetRows: number;
  widgetFormatted: boolean;

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
        this.widgetPlaceholder = this.widget['placeholder'];
        this.widgetRows = this.widget['rows'];
        this.widgetFormatted = this.widget['formatted'];
      });
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId)
      .subscribe((widget: Widget) => {
        this.router.navigate(['/user', this.userId, 'website', this.websiteId,
          'page', this.pageId, 'widget']);
      });
  }

  updateWidget(widgetText: string, widgetRows: number, widgetPlaceholder: string, widgetFormatted: boolean) {
    const newWidget = new Widget('TEXT', this.pageId, '', widgetText, null, null, null, widgetRows, widgetFormatted, widgetPlaceholder);
    this.widgetService.updateWidget(this.widgetId, newWidget)
      .subscribe((widget: Widget) => {
        this.widgetText = widgetText;
        this.widgetRows = widgetRows;
        this.widgetPlaceholder = widgetPlaceholder;
        this.widgetFormatted = widgetFormatted;
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
