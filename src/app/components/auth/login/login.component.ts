import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  logUser: FormGroup;
  errors = [];

  get email() {
    return this.logUser.get('email');
  }
  get password() {
    return this.logUser.get('password');
  }

  constructor(private _auth: AuthService, private fb: FormBuilder) {}

  ngOnInit() {
    this.logUser = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  loginUser() {
    let logUserData = this.logUser.value;
    this._auth.loginUser(logUserData).subscribe(
      (res) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('role', res.user.roleID);
        location.href = '/';
      },
      (err) => {
        // console.log(err);
        this.errors = err.error;
      }
    );
  }
}
