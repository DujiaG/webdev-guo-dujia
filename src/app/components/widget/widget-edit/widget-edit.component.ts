import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../../../services/widget.service.client';
import { UserService} from '../../../services/user.service.client';
import { PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {

  // properties
  userId: string;
  user: {};
  widgetId: string;
  widgetType: string;
  pageId: string;
  widget: any;
  websiteId: string;


  constructor(private sharedService: SharedService,
              private widgetService: WidgetService, private userService: UserService, private pageService: PageService,
              private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.user = this.sharedService.user;
      this.userId = this.user['_id'];
      this.pageId = params['pid'];
        this.websiteId = params['wid'];
        this.widgetId = params['wgid'];
        console.log(this.widgetId);
      }
    );
    this.widgetService.findWidgetById(this.widgetId)
      .subscribe((widget) => {
      this.widget = widget;
      console.log(this.widget);
      this.widgetType = this.widget['widgetType'];
      });
  }
}
