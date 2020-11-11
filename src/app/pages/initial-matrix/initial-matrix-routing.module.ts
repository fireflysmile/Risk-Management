import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialMatrixComponent } from './initial-matrix.component';

const routes: Routes = [{ path: '', component: InitialMatrixComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InitialMatrixRoutingModule { }
