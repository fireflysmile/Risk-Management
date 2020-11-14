import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ModalWrapperComponent } from './modal-wrapper/modal-wrapper.component';
import { ModalOutletComponent } from './modal-outlet/modal-outlet.component';
import { ModalContentWrapperComponent } from './modal-content-wrapper/modal-content-wrapper.component';
import { ModalBackgroundComponent } from './modal-background/modal-background.component';
import { ModalHeaderComponent } from './components/modal-header/modal-header.component';
import { ModalContentComponent } from './components/modal-content/modal-content.component';
import { ModalContainerComponent } from './components/modal-container/modal-container.component';
import { ModalActionsComponent } from './components/modal-actions/modal-actions.component';



@NgModule({
  declarations: [
    ModalComponent,
    ModalWrapperComponent,
    ModalOutletComponent,
    ModalContentWrapperComponent,
    ModalBackgroundComponent,
    ModalHeaderComponent,
    ModalContentComponent,
    ModalContainerComponent,
    ModalActionsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalOutletComponent,
    ModalHeaderComponent,
    ModalContentComponent,
    ModalActionsComponent,
    ModalContainerComponent,
    ModalComponent,
  ],
})
export class ModalModule { }
