import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { CheckboxModule } from '@components/checkbox/checkbox.module';


@NgModule({
  declarations: [TableComponent],
  exports: [TableComponent],
  imports: [
    CommonModule,
    CheckboxModule
  ]
})
export class TableModule { }
