import { Injectable } from '@angular/core';
import { Data } from '../common/models';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map } from "rxjs/operators";
import { UserService } from './user.service';

const API_URL = environment.apiUrl;

const DATA_API = '/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private userService: UserService) { }

  getData() {
    let header = new HttpHeaders({
      'Content-Type': 'application/json', 'Authorization':
        `Bearer ${this.userService.token}`
    });
    return this.http
      .get(API_URL + DATA_API, { headers: header });
  }

  public createData(data: Data) {
    return this.http
      .post(API_URL + DATA_API, data);
  }

  public getDataById(dataId: number) {
    return this.http
      .get(API_URL + DATA_API + '/' + dataId);
  }
}
