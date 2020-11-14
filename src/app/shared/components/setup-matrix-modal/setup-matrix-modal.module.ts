import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from '@components/modal/modal.module';
import { SetupMatrixModalComponent } from './setup-matrix-modal.component';


@NgModule({
  declarations: [SetupMatrixModalComponent],
  imports: [
    CommonModule,
    ModalModule
  ],
  exports: [
    SetupMatrixModalComponent,
  ],
})
export class SetupMatrixModalModule { }
