import {Injectable } from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {Widget} from '../../models/widget.model.client';

// Injecting service into Module

@Injectable()

export class WidgetService {
  constructor(private http: Http) {
  }
/*
   widgets = [
  { '_id': '123', 'widgetType': 'HEADING', 'pageId': '321', 'size': 2, 'text': 'GIZMODO'},
  { '_id': '234', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
  { '_id': '345', 'widgetType': 'IMAGE', 'pageId': '321', 'width': '100%',
    'url': 'http://lorempixel.com/400/200/'},
  { '_id': '456', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'},
  { '_id': '567', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
  { '_id': '678', 'widgetType': 'YOUTUBE', 'pageId': '321', 'width': '100%',
    'url': 'https://youtu.be/AM2Ivdi9c4E' },
  { '_id': '789', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'}];
*/

  api = {
    'createWidget': this.createWidget,
    'findWidgetsByPageId': this.findWidgetsByPageId,
    'findWidgetById': this.findWidgetById,
    'updateWidget': this.updateWidget,
    'deleteWidget': this.deleteWidget
  };

  createWidget(pageId: string, widget: Widget) {
    widget._id = (new Date()).getTime() + '';
    const url = 'http://localhost:3100/api/page/' + pageId + '/widget';
    return this.http.post(url, widget)
      .map((response: Response) => {
        return response.json();
      });
  }

  // Retrieves the widgets in local widgets array whose developerId matches the parameter pageId
  findWidgetsByPageId(pageId: string) {
    const url = 'http://localhost:3100/api/page/' + pageId + '/widget';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  // retrieves the widget in local widgets array whose _id matches the widgetId parameter
  findWidgetById(widgetId: string) {
    const url = 'http://localhost:3100/api/widget/' + widgetId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  // updates the page in local pages array whose id matches the pageID parameter
  updateWidget(widgetId: string, newWidget: Widget) {
    const url = 'http://localhost:3100/api/widget/' + widgetId;
    return this.http.put(url, newWidget)
      .map((response: Response) => {
        return response.json();
      });
  }
  // removes the widget from local widgets array whose _id matches the widgetId parameter
  deleteWidget(widgetId: string) {
    const url = 'http://localhost:3100/api/widget/' + widgetId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json();
      });
  }
}


/*

  createWidget(pageId, widget) {
    widget._id = Math.random().toString();
    widget.pageId = pageId;
    this.widgets.push(widget);
    return widget;
  }

  findWidgetsByPageId(pageId: string) {
    const w = [];
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x].pageId === pageId) {
        w.push(this.widgets[x]);
      }
    }
    return w;
  }

  findWidgetById(widgetId: string) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
        return this.widgets[x];
      }
    }
  }

  updateWidget(widgetId, widget) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
        this.widgets[x] = widget;
      }
    }
  }

  deleteWidget(pageId) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === pageId) {
        this.widgets.splice(x, 1);
      }
    }
  }
}
*/

// return this.widgets.filter(widgets => widgets.developerId === pageId);

