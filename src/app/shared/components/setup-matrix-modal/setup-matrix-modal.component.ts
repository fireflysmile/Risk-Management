import { Component, Inject, OnInit } from '@angular/core';
import { TS_MODAL_DATA, TS_MODAL_REF } from '@components/modal/models/ts-modal-options';
import { TsModalRef } from '@components/modal/models/ts-modal-ref';

export interface SetupMatrixModal {
  title?: string;
  content: string;
}

@Component({
  selector: 'app-setup-matrix-modal',
  templateUrl: './setup-matrix-modal.component.html',
  styleUrls: ['./setup-matrix-modal.component.scss']
})
export class SetupMatrixModalComponent implements OnInit {

  constructor(
    @Inject(TS_MODAL_REF) public tsModalRef: TsModalRef<SetupMatrixModalComponent>,
    @Inject(TS_MODAL_DATA) public data: SetupMatrixModal,
  ) {
  }

  ngOnInit(): void {
  }

}