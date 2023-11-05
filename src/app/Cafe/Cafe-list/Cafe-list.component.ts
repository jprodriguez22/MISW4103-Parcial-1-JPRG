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
  cafesOrigen: number = 0;
  cafesBlend: number = 0;

  constructor(private cafeService: CafeService) { }

  getCafes(): void {
    const tipoBlend = "Blend";
    const tipoOrigen = "Café de Origen"
    this.cafeService.getCafes().subscribe((cafes) => {
      this.cafes = cafes;
      this.cafesBlend = this.cafes.reduce((a, c) =>  c.tipo === tipoBlend ? ++a: a,0);
      this.cafesOrigen = this.cafes.reduce((a, c) =>  c.tipo === tipoOrigen ? ++a: a,0);
    })
  }
 
  ngOnInit(): void {
    this.getCafes();
  }

}
