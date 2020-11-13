import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupMatrixComponent } from './setup-matrix.component';
import { SetupMatrixRoutingModule } from './setup-matrix-routing.module';
import { ControlsAreaModule } from '@components/controls-area/controls-area.module';
import { TabRouterModule } from '@components/tab-router/tab-router.module'


@NgModule({
  declarations: [SetupMatrixComponent],
  imports: [
    CommonModule,
    SetupMatrixRoutingModule,
    ControlsAreaModule,
    TabRouterModule
  ]
})
export class SetupMatrixModule { }
