import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/common/models';
import { DataService } from '../../../services';

@Component({
  selector: 'data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent {

  dataList: Data[];

  constructor(dataService: DataService) {
    dataService.getData().subscribe((dataList: Data[]) => this.dataList = dataList);
  }
}
