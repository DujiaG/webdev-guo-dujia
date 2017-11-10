import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {UserService} from '../../../services/user.service.client';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';


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
  widgetType: string; enum: ['HEADING', 'IMAGE', 'YOUTUBE', 'HTML', 'INPUT'];
  pageId: string;
  widget: any;
  widgets: any[];
  widgetSize: number;
  widgetText: string;
  widgetUrl: string;
  widgetWidth: string;

  errorFlag: boolean;
  errorMsg: string;


  constructor(private widgetService: WidgetService, private userService: UserService, private pageService: PageService,
              private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
        this.userId = params['uid'];
        this.websiteId = params['wid'];
        this.pageId = params['pid'];
      }
    );
    this.widgetService.findWidgetsByPageId(this.pageId)
      .subscribe((widgets: Widget[]) => {
        this.widgets = widgets;
        /*      this.widgetType = this.widget['widgetType'];
              this.widgetSize = this.widget['size'];
              this.widgetText = this.widget['text'];
              this.widgetUrl = this.widget['url'];
              this.widgetWidth = this.widget['width'];*/
      });
  }

  createWidget(widgetType) {
    /*    if (name === '' || description === '') {
          this.errorFlag = true;
          this.errorMsg = 'Invalid name or description';
        } else {*/
    // const widgetNew = new Widget(widgetType, this.pageId, null, null, null, null, null);
/*    const widgetNew = {'widgetType' : widgetType, 'page': this.pageId, 'size': null,
      'text': null, 'width': null, 'url': null, 'height': null, 'rows': null, 'formatted': false, placeholder: null};*/

      const widgetNew = new Widget(widgetType, this.pageId, null, null, null, null, null, null, false, null, null);
      this.widgetService.createWidget(this.pageId, widgetNew)
        .subscribe((widget) => {
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page',
          this.pageId, 'widget', widget._id]);
      });
    }
  }
/*
    this.widgetService.findWidgetsByPageId(this.pageId)
     .subscribe((widgets) => {
      if (widget)
      this.widgets = widgets;
      this.widget = this.widgets[widgets.length];
     }
       this.widgetService.createWidget(this.pageId, widgetNew)
         .subscribe((WidgetFromServer) => {
           console.log(WidgetFromServer);
           this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', WidgetFromServer._id]);
         }); */


// http://localhost:4200/user/5a02138ec1e0c306ce216ac8/website/5a03459cbd4d930c21524ba7/page/5a049c67e45454033e9cea2e/widget/new

/*   if (widgetType === 'HEADER') {
      return this.widgetService.createWidget(this.pageId, widgetHeaderNew)
        .subscribe((widget: Widget) => {
          this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', widget._id]);
        });
    } else {
     return this.widgetService.createWidget(this.pageId, widgetImageNew)
       .subscribe((widget: Widget) => {
       this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', widget._id]);
       });
   }*/
/*

  createWidget(widgetType) {
    const widgetNew = {'_id': '456', 'widgetType': widgetType, 'pageId': this.pageId, 'size': 2, 'text': ''};
    this.widgetService.createWidget(this.pageId, widgetNew);
    console.log(widgetNew);
    this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page',
      this.pageId, 'widget', widgetNew._id]);
  }
*/
/*

} else {
  this.widgetService.createWidget(this.pageId, widgetImageNew)
    .subscribe((imageWidgetFromServer) => {
      console.log(imageWidgetFromServer);
      this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    });*/
