import { Component, OnInit } from '@angular/core';
import { NetworkService } from './../../services/network.service';
import { DataService } from './../../services/data/data.service';
import {TranslateService} from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  details: object;
  i18n = ["en", "tn"];
  first_name: string;
  constructor(private data: DataService, 
    private networkservice: NetworkService, 
    private translate: TranslateService,
    private router: Router
  ) { 
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.data.currentDetail.subscribe(data => this.details = data);
    var userData = sessionStorage.getItem('user');
    var lang = sessionStorage.getItem('language');
    this.translate.use(this.i18n[parseInt(lang)]);
    let userDatatojson = JSON.parse(userData);


    this.networkservice.getMessage('/api/login', {
      lang,
      user_id: userDatatojson.user_id,
      token: userDatatojson.token
    }).subscribe(response => {
      if (response.status == "failure") {
        console.log("response");
        //handle error
      } else {
        this.data.changeuser(response.data.details);
      }
    })
  }

  tempNext() {
    this.router.navigate(['/quiz']);
  }

}