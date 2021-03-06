import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDataComponent } from './add-data/add-data.component';
import { DataListComponent } from './data-list/data-list.component';
import { DataDisplayComponent } from './data-display/data-display.component';
import { DataRoutingModule } from './data-routing.module';
import { DataService } from '../../services/data.service';

@NgModule({
  imports: [
    CommonModule,
    DataRoutingModule
  ],
  declarations: [AddDataComponent, DataListComponent, DataDisplayComponent],
  exports: [AddDataComponent, DataListComponent, DataDisplayComponent],
  providers: [DataService],
})
export class DataModule { }
