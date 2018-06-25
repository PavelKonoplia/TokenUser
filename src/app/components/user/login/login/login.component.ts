import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '../../../../services/authentication.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  loginForm: FormGroup = new FormGroup({
    "userName": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required)
  });

  submit() {
    this.authService.login(this.loginForm.get("userName").value, this.loginForm.get("password").value);
  }

  logout(){
    this.authService.logout();
  }
}
