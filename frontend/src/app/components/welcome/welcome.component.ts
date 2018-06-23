import { Component, OnInit } from '@angular/core';
import { ScrollTopService } from './../../services/shared/scrollToTop/scroll-top.service';
import { Router } from '@angular/router';

import { NetworkService } from './../../services/network.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [ScrollTopService]
})
export class WelcomeComponent implements OnInit {

  languages = [{
    language: "English",
    inEng: "English",
    option: 1
  }, {
    language: "தமிழ்",
    inEng: "Tamil",
    option: 2
  }, {
    language: "मराठी",
    inEng: "Marathi",
    option: 3
  }]
  slectedLanguage: Number = 1;
  constructor(private scrollToTop: ScrollTopService, private router: Router, private networkservice: NetworkService) { }

  ngOnInit() {
    this.scrollToTop.setScrollTop();
  }

  onlangSelect(langOption) {
    this.slectedLanguage = langOption.value;
  }

  startTest() {
    var userData = sessionStorage.getItem('user');
    let userDatatojson = JSON.parse(userData);
    this.networkservice.getMessage('/api/login', { 
      lang: this.slectedLanguage, 
      user_id: userDatatojson.user_id,
      token: userDatatojson.token
     }).subscribe(response => {
      console.log(response);
    })
    this.router.navigate(['/quiz']);
  }

}
