import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerUser: FormGroup;
  errors = [];

  get name() {
    return this.registerUser.get('firstName');
  }
  get lastName() {
    return this.registerUser.get('lastName');
  }
  get email() {
    return this.registerUser.get('email');
  }
  get password() {
    return this.registerUser.get('password');
  }

  constructor(private _auth: AuthService, private fb: FormBuilder) {}

  ngOnInit() {
    this.registerUser = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(5)]],
      roleID: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  registerNewUser() {
    let registerUserData = this.registerUser.value;
    console.log(registerUserData);
    this._auth.registerUser(registerUserData).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        location.href = '/login';
      },
      (err) => console.log(err)
    );
  }
}
