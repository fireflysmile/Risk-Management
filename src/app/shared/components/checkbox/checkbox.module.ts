import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox.component';
import { FormControlBaseModule } from '@directives/form-control-base/form-control-base.module';

@NgModule({
  declarations: [CheckboxComponent],
  exports: [CheckboxComponent],
  imports: [
    CommonModule,
    FormControlBaseModule,
  ]
})
export class CheckboxModule { }
