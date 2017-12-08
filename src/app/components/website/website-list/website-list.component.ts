import {Component, OnInit, ViewChild} from '@angular/core';
import { WebsiteService } from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';
import { Router} from '@angular/router';
import { UserService} from '../../../services/user.service.client';
import {Website} from '../../../../models/website.model.client';
import {NgForm} from '@angular/forms';
import {SharedService} from '../../../services/shared.service.client';


@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {
  @ViewChild('f') websiteForm: NgForm;
  userId: string;
  websites = [];
  name: string;
  websiteId: string;
  user = {};

  constructor(private sharedService: SharedService, private websiteService: WebsiteService, private userService: UserService,
              private activatedRoute: ActivatedRoute, private router: Router) {
}

ngOnInit() {
  this.activatedRoute.params
    .subscribe(params => {
      this.user = this.sharedService.user;
    });
      this.userId = this.user['_id'];
      console.log(this.userId);
      this.router.navigate(['/user']);
  this.websiteService.findAllWebsitesForUser(this.userId)
    .subscribe((websites: Website[]) => {
      this.websites = websites;
      this.router.navigate(['/user/website']);
    });
}

    goToNewWebsite() {
        this.router.navigate(['user/', 'website', 'new']);
    }

    /*    deleteWebsite(websiteId: String){
          this.websiteService.deleteWebsite(websiteId)

        }
      }*/


    /*
      ngOnInit(){
        this.activatedRoute.params.subscribe(params => userId){
          const url = "http://localhost3100/ + "userId" + '/website/' + websiteId;
        }
      }
    */


    /*
      editWebsite() {
        /!*    const Websites = this.websiteServ ice.findWebsitesByUser(this.userId);
            for (const Website of Websites) {
              if (Website.developerId === this.userId) {*!/
        this.router.navigate(['user/', this.userId, 'website', this.websiteId]);
      }*/


    /*  click() {
        this.router.navigate('user/', this.userId,)
     */
  }
