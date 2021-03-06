import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from './select.component';
import { OptionComponent } from './option/option.component';
import { AutoScrollModule } from '@directives/auto-scroll/auto-scroll.module';
import { AutoCloserModule } from '@directives/auto-closer/auto-closer.module';
import { AutoPositionerModule } from '@directives/auto-positioner/auto-positioner.module';



@NgModule({
  declarations: [SelectComponent, OptionComponent],
  exports: [
    SelectComponent,
    OptionComponent,
    FormsModule,
    AutoScrollModule,
    AutoCloserModule,
    AutoPositionerModule
  ],
  imports: [
    CommonModule,
    AutoScrollModule,
    AutoCloserModule,
    AutoPositionerModule
  ],
})
export class SelectModule { }
