import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DeclaracaoIrPage } from './declaracao-ir.page';

const routes: Routes = [
  {
    path: '',
    component: DeclaracaoIrPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DeclaracaoIrPage]
})
export class DeclaracaoIrPageModule {}
