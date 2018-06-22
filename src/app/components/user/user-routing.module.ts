import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login/login.component";
import { RegistrationComponent } from "./registration/registration/registration.component";
import { AuthGuard } from "../../services/auth-guard.service";
// import { CanDeactivateGuard } from "../../services/can-deactivate-guard.service";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: "login",
                component: LoginComponent 
                //canDeactivate: [CanDeactivateGuard],                
            },
            {
                path: "registration",
                component: RegistrationComponent ,
               // canDeactivate: [AuthGuard]     
            },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class UserRoutingModule { }
