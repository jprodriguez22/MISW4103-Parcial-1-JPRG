import { Component, OnInit } from '@angular/core';

import { Cafe } from '../Cafe';

@Component({
  selector: 'app-Cafe-list',
  templateUrl: './Cafe-list.component.html',
  styleUrls: ['./Cafe-list.component.css']
})
export class CafeListComponent implements OnInit {
  cafes: Array<Cafe> = [];

  constructor() { }

  ngOnInit() {
  }

}
