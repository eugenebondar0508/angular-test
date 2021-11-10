import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  setToken(token: string): void {
    localStorage.setItem('token', token)
  }

  getToken():string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  login({ login, password }: any): Observable<any> {
    if(login === 'admin' && password === '12345') {
      this.setToken('asdfghjkllkjhgfdsa');
      return of({ login: 'login', password: 'password'})
    }
    return throwError(new Error('Failed to login'))
  }
}
