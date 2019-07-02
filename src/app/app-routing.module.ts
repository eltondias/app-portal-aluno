import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {   AuthGuardService as AuthGuard  } from './auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule',
    canActivate: [AuthGuard]
  }, 
  { path: 'login', loadChildren:  './login/login.module#LoginPageModule'},
  { path: 'mensalidade', loadChildren: './mensalidade/mensalidade.module#MensalidadePageModule', canActivate: [AuthGuard] },
  { path: 'boletim', loadChildren: './boletim/boletim.module#BoletimPageModule', canActivate: [AuthGuard] },
  { path: 'declaracao-ir', loadChildren: './declaracao-ir/declaracao-ir.module#DeclaracaoIrPageModule', canActivate: [AuthGuard] },
  { path: 'frame', loadChildren: './frame/frame.module#FramePageModule' },
  { path: 'pagina/:page', loadChildren: './pagina/pagina.module#PaginaPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
