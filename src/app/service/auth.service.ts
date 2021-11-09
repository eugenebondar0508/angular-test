import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  checkLogin(login: any) {
    if(login == undefined || login !== 'admin') {
      return false;
    } else {
      return true;
    }
  }

  checkPassword(password: any) {
    if(password == undefined || password !== '12345') {
      return false;
    } else {
      return true;
    }
  }
}
