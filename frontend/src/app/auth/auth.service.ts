import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  data: any;
  constructor() { }

  isAuthenticated() {
   this.data = localStorage.getItem("quess");
   if(this.data) {
    this.data = JSON.parse(this.data);
    if(this.data.token) {
      return true;
    }
   } else return false;
  }
}
