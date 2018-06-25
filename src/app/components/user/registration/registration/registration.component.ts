import { Component, OnInit } from '@angular/core';
import { ComponentCanDeactivate } from '../../../../services/guard.service';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { User } from '../../../../common/models';
import { UserService } from '../../../../services/user.service';


@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements ComponentCanDeactivate {

  saved: boolean = false;
  registrationForm: FormGroup;

  constructor(private userService: UserService, private formBuilder: FormBuilder) {
    this.createForm();
  }

  canDeactivate(): boolean | Observable<boolean> {
    if (!this.saved && this.checkForm()) {
      return confirm("You have unsaved changes, do you want to leave and discard them?");
    }
    else {
      return true;
    }
  }

  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('passwordConfirm').value) {
      return { invalid: true };
    }
  }

  createForm() {
    this.registrationForm = this.formBuilder.group({
      userName: new FormControl("", Validators.required),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}")
      ]),
      passwords: this.formBuilder.group({
        password: ['', [Validators.required]],
        passwordConfirm: ['', [Validators.required]],
      }, { validator: this.passwordConfirming }),
    })
  }

  checkForm() {
    for (let control in this.registrationForm.controls) {
      if (this.registrationForm.get(control).value.length) {
        return true;
      }
    }
    return false;
  }

  submit() {
    console.log("trying to registr");
    let user = new User(null, this.registrationForm.get("email").value, this.registrationForm.get("userName").value, this.registrationForm.get("passwords.password").value)
    this.userService.registrateUser(user);
    this.saved = true;
  }
}
