import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetupMatrixComponent } from './setup-matrix.component';

const routes: Routes = [{ path: '', component: SetupMatrixComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupMatrixRoutingModule { }
