import { MatrixTableModule } from '../../shared/components/matrix-table/matrix-table.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupMatrixComponent } from './setup-matrix.component';
import { SetupMatrixRoutingModule } from './setup-matrix-routing.module';
import { ControlsAreaModule } from '@components/controls-area/controls-area.module';
import { TabRouterModule } from '@components/tab-router/tab-router.module';

import { LegendTableModule } from '@components/legend-table/legend-table.module';
import { CheckboxModule } from '@components/checkbox/checkbox.module';
import { SetupMatrixModalModule } from '@components/setup-matrix-modal/setup-matrix-modal.module';


@NgModule({
  declarations: [SetupMatrixComponent],
  imports: [
    CommonModule,
    SetupMatrixRoutingModule,
    ControlsAreaModule,
    TabRouterModule,
    MatrixTableModule,
    LegendTableModule,
    CheckboxModule,
    SetupMatrixModalModule
  ]
})
export class SetupMatrixModule { }
