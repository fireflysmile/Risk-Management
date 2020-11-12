import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ControlsAreaComponent } from './controls-area.component';
import { FormFieldModule } from '../form-field/form-field.module';



@NgModule({
  declarations: [ControlsAreaComponent],
  imports: [
    CommonModule,
    FormFieldModule,
    FormsModule
  ],
  exports: [ControlsAreaComponent]
})
export class ControlsAreaModule { }
