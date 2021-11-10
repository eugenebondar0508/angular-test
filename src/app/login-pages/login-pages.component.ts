import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-login-pages',
  templateUrl: './login-pages.component.html',
  styleUrls: ['./login-pages.component.scss']
})
export class LoginPagesComponent implements OnInit {
  loginForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  })
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          this.router.navigate(['profile'])
        },
        (err: Error) => {
          alert(err.message)
        }
      );
    }
  }

}
