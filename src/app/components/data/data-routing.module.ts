import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DataListComponent } from "./data-list/data-list.component";
import { AddDataComponent } from "./add-data/add-data.component";
import { Guard } from "../../services/guard.service";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: "data-list",
                component: DataListComponent,
                canActivate: [Guard]
            },
            {
                path: "add-data",
                component: AddDataComponent
            },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class DataRoutingModule { }
