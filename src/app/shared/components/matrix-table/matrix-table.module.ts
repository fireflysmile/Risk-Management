import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatrixTableComponent } from './matrix-table.component';



@NgModule({
  declarations: [MatrixTableComponent],
  imports: [
    CommonModule
  ],
  exports: [MatrixTableComponent]
})
export class MatrixTableModule { }
