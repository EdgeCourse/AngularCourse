import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  isLoggedIn: boolean = false;

  login(){
      this.isLoggedIn = true;
      console.log('AuthService: logging in');
  }

  logout(){
      this.isLoggedIn = false;
      console.log('AuthService: logging out');
  }

  constructor() {}

  canActivate() {
    return this.isLoggedIn;
  }
}
