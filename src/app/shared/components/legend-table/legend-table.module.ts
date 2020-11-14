import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegendTableComponent } from './legend-table.component';



@NgModule({
  declarations: [LegendTableComponent],
  exports: [
    LegendTableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LegendTableModule { }
