import { Component, OnInit } from '@angular/core';

import { Cafe } from '../Cafe';
import { CafeService } from '../Cafe.service';

@Component({
  selector: 'app-Cafe-list',
  templateUrl: './Cafe-list.component.html',
  styleUrls: ['./Cafe-list.component.css']
})
export class CafeListComponent implements OnInit {
  cafes: Array<Cafe> = [];

  constructor(private cafeService: CafeService) { }

  getCafes(): void {
    this.cafeService.getCafes().subscribe((cafes) => {
      this.cafes = cafes;
    })
  }

  ngOnInit(): void {
    this.getCafes();
  }

}
