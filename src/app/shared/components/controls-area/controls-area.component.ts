import { RiskMatrix } from './../../models/risk-matrix';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { InitRiskMatrix, RiskMatrixType, OrderAxis } from '../../constants/risk-matrix';

@Component({
  selector: 'app-controls-area',
  templateUrl: './controls-area.component.html',
  styleUrls: ['./controls-area.component.scss']
})
export class ControlsAreaComponent implements OnInit {
  orderAxis = OrderAxis;
  riskMatrix: RiskMatrix = InitRiskMatrix;
  riskMatrixType = RiskMatrixType;
  isShowMatrix = true;
  @Output() setupMatrix: EventEmitter<RiskMatrix> = new EventEmitter<RiskMatrix>();

  constructor() { }

  ngOnInit(): void {
  }

  checkPositiveInt(e): void {
    console.log(e);
    // console.log(+e.target.value++);
    switch (e.keyCode) {
      // case (8 || 37 || 39) : break;
      case 38 : e.target.value = ++e.target.value; break;
      case 40 : e.target.value = +e.target.value === 0 ? 0 : --e.target.value; break;
      default: {
        console.log(e.target.value);
        e.target.value = +e.target.value.replace(/[^\d].+/, '');
        if ((e.which < 48 || e.which > 57)) {
          e.preventDefault();
        }
      }
    }
  }

  checkNull(e): void {
    const value = e.target.value;
    e.target.value = value === '' ? 0 : +value;
  }
  // setMatrix(): void {
  //   console.log('aaaa');
  //   this.setupMatrix.emit(this.riskMatrix);
  // }
}
