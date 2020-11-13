import { Component, OnInit } from '@angular/core';
import { InitRiskMatrix, RiskMatrixType, OrderAxis } from '../../constants/risk-matrix';
import { RiskMatrix } from '../../models/risk-matrix';

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
  constructor() { }

  ngOnInit(): void {
  }

}
