import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupMatrixComponent } from './setup-matrix.component';
import { SetupMatrixRoutingModule } from './setup-matrix-routing.module';
import { ControlsAreaModule } from 'src/app/shared/components/controls-area/controls-area.module';



@NgModule({
  declarations: [SetupMatrixComponent],
  imports: [
    CommonModule,
    SetupMatrixRoutingModule,
    ControlsAreaModule
  ]
})
export class SetupMatrixModule { }
