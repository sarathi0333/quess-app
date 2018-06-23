import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  details: object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentDetail.subscribe(data => this.details = data);
    console.log(this.details);
  }

}
