import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DataListComponent } from "./data-list/data-list.component";
import { AddDataComponent } from "./add-data/add-data.component";
// import { CanDeactivateGuard } from "../../services/can-deactivate-guard.service";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: "data-list",
                component: DataListComponent 
                //canDeactivate: [CanDeactivateGuard],                
            },
            {
                path: "add-data",
                component: AddDataComponent 
                //canDeactivate: [CanDeactivateGuard],                
            },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class DataRoutingModule { }
