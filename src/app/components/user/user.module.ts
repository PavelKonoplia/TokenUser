import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login/login.component';
import { RegistrationComponent } from './registration/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [LoginComponent, RegistrationComponent],
  exports: [LoginComponent, RegistrationComponent]
})
export class UserModule { }
