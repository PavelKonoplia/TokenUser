import { Injectable } from '@angular/core';
import { Data } from '../common/models';
import { environment } from '../../environments/environment';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { map } from "rxjs/operators";

const API_URL = environment.apiUrl;

const DATA_API = '/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http
      .get(API_URL + DATA_API);
  }

  public createData(data: Data){
    return this.http
      .post(API_URL + DATA_API, data);
  }

  public getDataById(dataId: number) {
    return this.http
      .get(API_URL + DATA_API + '/' + dataId);
  }
}