import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PaginaPage, SafePipe } from './pagina.page';


const routes: Routes = [
  {
    path: '',
    component: PaginaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PaginaPage, SafePipe]
})
export class PaginaPageModule {}
