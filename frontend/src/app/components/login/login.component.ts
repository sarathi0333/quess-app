import { Component, OnInit } from '@angular/core';
import { NetworkService } from './../../services/network.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  phnPattern:string = "^[0-9]{10}$";
  user:boolean = true;
  form:string = "admin"

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

  onSubmitAdmin(adminUsername: string, adminPassword: string) {
    this.networkservice.postMessage('./api/admin', {username: adminUsername, password: adminPassword})
    .subscribe((response: any) => {
      if(response.status == "success") {
        localStorage.clear();
        localStorage.setItem("token", response.data.token);
        this.router.navigate(['/admin']);
      }
    })
  }

  swap() {
    if(this.form == "admin") {
      this.form = "user";
    } else {
      this.form ="admin";
    }
  }

}
