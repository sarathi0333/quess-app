import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  // options: string[] = ["A.    It is a long established fact that a reader will be distracted ", 
  // "B.    It is a long established fact that a reader will be distracted ",
  // "C.    It is a long established fact that a reader will be distracted ",
  // "D.    It is a long established fact that a reader will be distracted "]
  options: object[] = [
    {
      active: false,
      answer: "A.    It is a long established fact that a reader will be distracted"
    }, {
      active: false,
      answer: "B.    It is a long established fact that a reader will be distracted"
    }, {
      active: false,
      answer: "C.    It is a long established fact that a reader will be distracted"
    }, {
      active: false,
      answer: "D.    It is a long established fact that a reader will be distracted"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  activateClass(option){
    option.active = !option.active;    
  }

}
