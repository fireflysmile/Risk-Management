import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'initial-matrix',
  },
  {
    path: 'initial-matrix',
    loadChildren: () => import('./pages/initial-matrix/initial-matrix.module').then(m => m.InitialMatrixModule)
  },
  {
    path: 'setup-matrix',
    loadChildren: () => import('./pages/setup-matrix/setup-matrix.module').then(m => m.SetupMatrixModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
