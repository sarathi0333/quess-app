import { Component, OnInit } from '@angular/core';
import { NetworkService } from './../../services/network.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  phnPattern = "^[0-9]{10}$";

  constructor(private networkservice: NetworkService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(phoneNumber: number) {
    this.networkservice.postMessage('./api/user', {phoneNumber})
    .subscribe((response: any) => {
      console.log(response);
      // store the seesion in the session storage
      this.router.navigate(['/welcome']);
    })
  }

}
