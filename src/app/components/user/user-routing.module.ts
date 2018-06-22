import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login/login.component";
import { RegistrationComponent } from "./registration/registration/registration.component";
import { Guard } from "../../services/guard.service";
// import { CanDeactivateGuard } from "../../services/can-deactivate-guard.service";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: "login",
                component: LoginComponent                
            },
            {
                path: "registration",
                component: RegistrationComponent ,
                canDeactivate: [Guard]     
            },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class UserRoutingModule { }
