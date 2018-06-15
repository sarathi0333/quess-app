import { Component, OnInit } from '@angular/core';
import { ScrollTopService } from './../../services/shared/scrollToTop/scroll-top.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [ScrollTopService]
})
export class WelcomeComponent implements OnInit {

  languages:string[] = ["English", "தமிழ்", "മലയാളം", "తెలుగు"];
  langOption: string;
  constructor(private scrollToTop: ScrollTopService) { }

  ngOnInit() {
    this.langOption = "English";
    this.scrollToTop.setScrollTop();
  }

}
