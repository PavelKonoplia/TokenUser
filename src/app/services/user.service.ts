import { Injectable } from '@angular/core';
import { User } from '../common/models';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

const API_URL = environment.apiUrl;

const USER_API = '/user';
const TOKEN_API = '/token';

interface IToken {
  access_token: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {


  public token: string;

  constructor(private http: HttpClient, private router: Router) { }

  public login(username: string, password: string) {
    let request = `grant_type=password&username=${username}&password=${password}`;
    return this.http
      .post(API_URL + TOKEN_API, request).subscribe((token: IToken) => this.token = token.access_token.toString());
  }

  logout() {
    this.token = undefined;
  }

  public registrateUser(user: User) {
    return this.http
      .post(API_URL + USER_API, user).subscribe((userResponse: User) => {
        this.login(userResponse.UserName, userResponse.PasswordHash)
        this.router.navigate(["/login"]);
      });
  }

  public getUserByName(userName: string) {
    return this.http
      .get(API_URL + USER_API + '/' + userName);
  }
}