import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../../../services';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  loginForm: FormGroup = new FormGroup({
    "userName": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required)
  });

  submit() {
    this.userService.loginUser(this.loginForm.get("userName").value, this.loginForm.get("password").value);
  }
}
