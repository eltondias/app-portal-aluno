import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodosPage } from './periodos.page';

describe('PeriodosPage', () => {
  let component: PeriodosPage;
  let fixture: ComponentFixture<PeriodosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
