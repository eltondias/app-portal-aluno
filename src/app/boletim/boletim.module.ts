import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BoletimPage } from './boletim.page';
import { MaterialModule } from '../material.module';
import {NgxPrintModule} from 'ngx-print';
 
const routes: Routes = [
  {
    path: '',
    component: BoletimPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MaterialModule,
    NgxPrintModule    
  ],
  declarations: [BoletimPage]
})
export class BoletimPageModule {}
