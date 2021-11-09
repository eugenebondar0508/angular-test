import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login-pages',
  templateUrl: './login-pages.component.html',
  styleUrls: ['./login-pages.component.scss']
})
export class LoginPagesComponent implements OnInit {

  login!: string;
  password!: string;
  constructor(private authService: AuthService ) { }

  ngOnInit(): void {
  }

  userSignIn(): any {
   const user = {
     login: this.login,
     password: this.password,
   };
   if(!this.authService.checkLogin(user.login)) {
     return false;
   } else if (!this.authService.checkPassword(user.password)) {
    return false;
  }
  }
}
