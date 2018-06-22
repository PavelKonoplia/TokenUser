import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserService } from '.';

@Injectable()
export class AuthenticationService {

    token: string;
    redirectUrl: string;

    constructor(private http: HttpClient, private userService: UserService) { }

    login(username: string, password: string) {
       this.userService.loginUser(username, password).subscribe((token) => this.token = token.toString());
    }

    logout() {
        this.token = undefined;
    }
}