import { Component, OnInit } from '@angular/core';
import { ComponentCanDeactivate } from '../../../../services/auth-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements ComponentCanDeactivate {

  saved: boolean = false;

  constructor() { }

  save() {
    this.saved = true;
  }

  canDeactivate(): boolean | Observable<boolean> {

    if (!this.saved) {
      return confirm("Вы хотите покинуть страницу?");
    }
    else {
      return true;
    }
  }

  ngOnInit() {
  }

}
