import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { DataModule } from './components/data/data.module';

import { HttpClientModule }   from '@angular/common/http';
import { UserModule } from './components/user/user.module';
import { LoginComponent } from 'src/app/components/user/login/login/login.component';
import { RegistrationComponent } from 'src/app/components/user/registration/registration/registration.component';
import { Guard } from './services/guard.service';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from 'src/app/services/user.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DataModule,
    UserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService, Guard, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
