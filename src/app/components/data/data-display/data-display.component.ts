import { Component, OnInit, Input } from '@angular/core';
import { Data } from 'src/app/common/models';

@Component({
  selector: 'data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent {

  @Input()
  data: Data;

  constructor() { }
}
