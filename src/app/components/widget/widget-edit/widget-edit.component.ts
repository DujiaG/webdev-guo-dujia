import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../../../services/widget.service.client';
import { UserService} from '../../../services/user.service.client';
import { PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';

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



  constructor(private widgetService: WidgetService, private userService: UserService, private pageService: PageService,
              private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.
      subscribe(params => {
        this.userId = params['uid'];
        this.pageId = params['pid'];
        this.widgetId = params['wid'];
    }
    );
    this.widget = this.widgetService.findWidgetById(this.widgetId);
    this.widgetType = this.widget['widgetType'];
  }
}
