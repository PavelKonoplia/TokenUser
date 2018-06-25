import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';


interface IToken{
    access_token:string
}

@Injectable()
export class AuthenticationService {

    public token: string;
    redirectUrl: string;

    constructor(private userService: UserService) { }

    login(username: string, password: string) {
       this.userService.loginUser(username, password).subscribe((token:IToken) => this.token = token.access_token.toString());
    }

    logout() {
        this.token = undefined;
    }
}