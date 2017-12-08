import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {WidgetService} from '../../../../../services/widget.service.client';
import {UserService} from '../../../../../services/user.service.client';
import {PageService} from '../../../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../../../../models/widget.model.client';
import {FlickrService} from '../../../../../services/flickr.service.client';
import {Photo} from '../../../../../../models/photo.model.client';
import {SharedService} from '../../../../../services/shared.service.client';

@Component({
  selector: 'app-flickr-image-search',
  templateUrl: './flickr-image-search.component.html',
  styleUrls: ['./flickr-image-search.component.css']
})
export class FlickrImageSearchComponent implements OnInit {
  @ViewChild('f') widgetFlickrForm: NgForm;
  searchText: string;

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
  photos: {};
  photo: any[];
  photoFromFlickr: {};

  constructor(private sharedService: SharedService,
    private widgetService: WidgetService, private userService: UserService, private pageService: PageService,
              private activatedRoute: ActivatedRoute, private router: Router, private flickrService: FlickrService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.user = this.sharedService.user;
      this.userId = this.user['_id'];
      this.pageId = params['pid'];
        this.widgetId = params['wgid'];
        this.websiteId = params['wid'];
      }
    );
  }

  searchPhotos(searchText) {
    this.flickrService
      .searchPhotos(searchText)
      .subscribe(
        (data: any) => {
          console.log(data);
          let val = data._body;
          val = val.replace('jsonFlickrApi(', '');
          val = val.substring(0, val.length - 1);
          val = JSON.parse(val);
          console.log(val);
          this.photos = val.photos;
          this.photo = this.photos['photo'];
          console.log(this.photo);
        }
      );
  }

  selectPhoto(photo: Photo) {
    let url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
    url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
    const widget = new Widget('IMAGE', this.pageId, null, null, '100%', url, null, null, false, null, null);
    this.widgetService.updateWidget(this.widgetId, widget)
      .subscribe((widgetFromServer: Widget) => {
        this.router.navigate(['/user', 'website', this.websiteId,
          'page', this.pageId, 'widget']);
      });
  }
}



/*   this.widgetService
     .selectPhoto(photo)
     .subscribe((photoFromFlickr: any) => {
     this.photoFromFlickr = photoFromFlickr;
     });*/
