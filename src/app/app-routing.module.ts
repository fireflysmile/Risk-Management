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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
