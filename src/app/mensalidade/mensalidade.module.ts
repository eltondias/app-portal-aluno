import { BoletimPage } from './../boletim/boletim.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MensalidadePage } from './mensalidade.page';
import { MaterialModule } from '../material.module';

const routes: Routes = [
  {
    path: '',
    component: MensalidadePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MaterialModule
  ],
  declarations: [MensalidadePage],
  entryComponents: []
})
export class MensalidadePageModule {}
