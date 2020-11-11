import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitialMatrixRoutingModule } from './initial-matrix-routing.module';
import { InitialMatrixComponent } from './initial-matrix.component';


@NgModule({
  declarations: [InitialMatrixComponent],
  imports: [
    CommonModule,
    InitialMatrixRoutingModule
  ]
})
export class InitialMatrixModule { }
