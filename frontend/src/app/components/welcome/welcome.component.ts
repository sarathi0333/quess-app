import { Component, OnInit } from '@angular/core';
import { ScrollTopService } from './../../services/shared/scrollToTop/scroll-top.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [ScrollTopService]
})
export class WelcomeComponent implements OnInit {

  languages:string[] = ["English", "தமிழ்", "മലയാളം", "తెలుగు"];
  langOption: string;
  constructor(private scrollToTop: ScrollTopService, private router: Router) { }

  ngOnInit() {
    this.langOption = "English";
    this.scrollToTop.setScrollTop();
  }

  startTest() {
    this.router.navigate(['/quiz']);
  }

}
