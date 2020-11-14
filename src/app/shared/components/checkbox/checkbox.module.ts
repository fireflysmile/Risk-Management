import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from './checkbox.component';
import { FormControlBaseModule } from '@directives/form-control-base/form-control-base.module';

@NgModule({
  declarations: [CheckboxComponent],
  exports: [CheckboxComponent, FormsModule],
  imports: [
    CommonModule,
    FormControlBaseModule,
  ]
})
export class CheckboxModule { }
