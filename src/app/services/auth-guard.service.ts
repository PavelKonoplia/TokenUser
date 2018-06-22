import { Injectable } from "@angular/core";
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanDeactivate
} from "@angular/router";
import { AuthenticationService } from "./authentication.service";
import { Observable } from "rxjs/internal/Observable";

export interface ComponentCanDeactivate{
    canDeactivate: () => boolean | Observable<boolean>;
}

@Injectable()
export class AuthGuard implements CanActivate, CanDeactivate<ComponentCanDeactivate> {

    constructor(private authService: AuthenticationService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (this.authService.token) {
            return true;
        }
        else {
            this.authService.redirectUrl = state.url;

            this.router.navigate(["/login"]);
            return false;
        }        
    }

    canDeactivate(component: ComponentCanDeactivate) {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}
