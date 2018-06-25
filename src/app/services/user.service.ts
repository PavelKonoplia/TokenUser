import { Injectable } from '@angular/core';
import { User } from '../common/models';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = environment.apiUrl;

const USER_API = '/user';
const TOKEN_API = '/token';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public loginUser(username: string, password: string) {
    let request = `grant_type=password&username=${username}&password=${password}`;
    return this.http
      .post(API_URL + TOKEN_API, request);
  }

  public registrateUser(user: User) {
    return this.http
      .post(API_URL + USER_API, user).subscribe((response)=>{
        console.log(response)
      });
  }

  public getUserByName(userName: string) {
    return this.http
      .get(API_URL + USER_API + '/' + userName);
  }
}