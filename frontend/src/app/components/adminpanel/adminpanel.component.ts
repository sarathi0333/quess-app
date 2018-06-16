import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {

  results: any[] = [
    {
      name: "Eshwar",
      dob: "08/10/96",
      date: new Date (2017, 5, 3),
      zone: "Coimbatore",
      grade: "Good",
      action: ""
    }, {
      name: "Kumar",
      dob: "08/10/96",
      date: new Date (2018, 1, 17),
      zone: "Chennai",
      grade: "Good",
      action: ""
    }, {
      name: "Sheethal",
      dob: "08/10/96",
      date: new Date(2018, 6, 15),
      zone: "Coimbatore",
      grade: "Poor",
      action: ""
    }, {
      name: "Kiran",
      dob: "08/10/96",
      date: new Date(),
      zone: "Madurai",
      grade: "Moderate",
      action: ""
    }, {
      name: "Ramesh",
      dob: "08/10/96",
      date: new Date(2016, 10, 10),
      zone: "Madurai",
      grade: "Poor",
      action: ""
    }
  ]
  sortGradeSatus : boolean = false;
  sortDateStatus : boolean = false;
  sortZoneStatus : boolean = false;
  constructor() { }

  ngOnInit() {
  }

  swapGrade() {
    this.sortGradeSatus = !this.sortGradeSatus;
  }
  swapDate() {
    this.sortDateStatus = !this.sortDateStatus;
  }
  swapZone() {
    this.sortZoneStatus = !this.sortZoneStatus;
  }
}
