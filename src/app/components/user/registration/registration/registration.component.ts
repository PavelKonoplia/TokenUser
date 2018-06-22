import { Component, OnInit } from '@angular/core';
import { ComponentCanDeactivate } from '../../../../services/guard.service';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { UserService } from '../../../../services';
import { User } from '../../../../common/models';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements ComponentCanDeactivate {

  saved: boolean = false;

  constructor(private userService: UserService) { }

  canDeactivate(): boolean | Observable<boolean> {

    if (!this.saved) {
      return confirm("You have unsaved changes, do you want to leave and discard them?");
    }
    else {
      return true;
    }
  }

  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('passwordConfirm').value) {
        return {invalid: true};
    }
  }

  registrationForm: FormGroup = new FormGroup({
    "userName": new FormControl("", Validators.required),
    "email": new FormControl("", [
      Validators.required,
      Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}")
    ]),
    "password": new FormControl("", Validators.required),
    "passwordConfirm": new FormControl("", [Validators.required , this.passwordConfirming])
  });

  submit() {
    let user = new User(null, this.registrationForm.get("email").value, this.registrationForm.get("userName").value, this.registrationForm.get("password").value)
    this.userService.registrateUser(user);
    this.saved = true;
  }
}
