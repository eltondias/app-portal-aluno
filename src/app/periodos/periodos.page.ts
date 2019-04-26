import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-periodos',
  templateUrl: './periodos.page.html',
  styleUrls: ['./periodos.page.scss'],
})
export class PeriodosPage implements OnInit {

  constructor() { }
  semestres = [];

  ngOnInit() {
    this.semestres =  JSON.parse(localStorage.getItem('semestres'));
    console.log(this.semestres );
  }

}
