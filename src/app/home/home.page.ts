import { Component } from '@angular/core';
import { UtilProvider } from '../services/util';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  aluno = JSON.parse(localStorage.getItem('aluno'));

  constructor(
 
    private util: UtilProvider,
 
) { }




}


