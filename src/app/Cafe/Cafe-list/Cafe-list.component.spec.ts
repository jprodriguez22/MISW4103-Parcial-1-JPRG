/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { CafeListComponent } from './Cafe-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Cafe } from '../Cafe';
import { CafeService } from '../Cafe.service';

describe('CafeListComponent', () => {
  let component: CafeListComponent;
  let fixture: ComponentFixture<CafeListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CafeListComponent ],
      providers: [CafeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeListComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 3; i++){
      const cafe = new Cafe(
        faker.number.int(),
        faker.string.alpha(10),
        faker.string.alpha(10),
        faker.string.alpha(10),
        faker.string.alpha(10),
        faker.number.int(),
        faker.image.url()  
      );
      component.cafes.push(cafe)
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 1 <table> element', () => {
    expect(debug.queryAll(By.css('table'))).toHaveSize(1)
  });

  it('should have 4 <table-header-col> elements', () => {
    expect(debug.queryAll(By.css('th.table-header-col'))).toHaveSize(4)
  });

  it('should have 3 <table-rows> elements', () => {
    expect(debug.queryAll(By.css('tr.cafe-entry-row'))).toHaveSize(3)
  });

});
