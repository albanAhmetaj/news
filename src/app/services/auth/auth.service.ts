import { Injectable } from '@angular/core';
import { Constant } from 'src/app/helpers/constants/constant';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import jwtDecode from 'jwt-decode';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  _loginUrl: string = Constant.login_url;
  _registerUrl: string = Constant.register_url;

  constructor(private http: HttpClient, private router: Router) {}

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/']);
  }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getRole() {
    return parseInt(localStorage.getItem('role'), 10);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  decodeToken(item) {
    if(this.isAuthenticated()) {
      const token = this.getToken();
      const decode = jwtDecode(token)
      return decode[item];
    }
  }
}
