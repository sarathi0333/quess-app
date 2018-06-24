import { Component, OnInit } from '@angular/core';
import { ScrollTopService } from './../../services/shared/scrollToTop/scroll-top.service';
import { Router } from '@angular/router';

import { NetworkService } from './../../services/network.service';
import { DataService } from './../../services/data/data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [ScrollTopService]
})
export class WelcomeComponent implements OnInit {

  languages = [{
    language: "English",
    inEng: "English"
  }, {
    language: "தமிழ்",
    inEng: "Tamil"
  }, {
    language: "मराठी",
    inEng: "Marathi",
  }, {
    language: "ਪੰਜਾਬੀ",
    inEng: "Punjabi",
  }, {
    language: "کأشُر‬",
    inEng: "Kashmiri",
  }, {
    language: "മലയാളം",
    inEng: "Malayalam",
  }, {
    language: "ଓଡ଼ିଆ",
    inEng: "Oriya",
  }, {
    language: "বাংলা",
    inEng: "Bengali",
  }, {
    language: "অসমীয়া",
    inEng: "Assamese",
  }, {
    language: "ಕನ್ನಡ",
    inEng: "Kannada",
  }, {
    language: "తెలుగు",
    inEng: "Telugu",
  }, {
    language: "ગુજરાતી",
    inEng: "Gujarati",
  }, {
    language: "हिन्दी",
    inEng: "Hindi",
  }]
  slectedLanguage: number = 0;
  details: object;

  constructor(private scrollToTop: ScrollTopService,
    private router: Router,
    private networkservice: NetworkService,
    private dataservice: DataService
  ) { }

  ngOnInit() {
    this.scrollToTop.setScrollTop();
    this.dataservice.currentDetail.subscribe(data => this.details = data);
  }

  onlangSelect(langOption) {
    console.log(langOption.value);
    this.slectedLanguage = langOption.value;
  }

  startTest() {
    sessionStorage.setItem('language', this.slectedLanguage.toString());
    this.router.navigate(['/details']);
  }

}
