import {Injectable } from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {Page} from '../../models/page.model.client';
const baseUrl = environment.baseUrl;

const key = 'a1ba8bdfdacce3f809b80995f95f85ca';
const secret = 'fa0bb8b04e7a9acb';
const urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';


@Injectable()


export class FlickrService {
constructor(private http: Http) {}

searchPhotos(searchTerm: any) {
  const url = urlBase
    .replace('API_KEY', key)
    .replace('TEXT', searchTerm);
  return this.http.get(url);
}
}
