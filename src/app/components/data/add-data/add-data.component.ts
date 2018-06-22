import { Component, OnInit, Input } from '@angular/core';
import { Data } from 'src/app/common/models';

@Component({
  selector: 'add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  data: Data;

  constructor() { }

  ngOnInit() {
  }

}
