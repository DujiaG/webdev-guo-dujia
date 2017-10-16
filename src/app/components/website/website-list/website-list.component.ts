import { Component, OnInit } from '@angular/core';
import { WebsiteService } from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {
  userId: string;
  websites = [];

  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params[':uid'];
      }
    );
    this.websites = this.websiteService.findWebsitesByUser(this.userId);
  }

/*  function WebsiteListController($routeParams, WebsiteService) {
    var vm = this;
    var vm.userId = $routeParams[":uid"];
    function init() {
      vm.websites = WebsiteService.findWebsitesByUser(userId);
    }
    init();
  }*/
}
