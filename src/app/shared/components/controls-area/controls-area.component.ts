import { Component, OnInit } from '@angular/core';
import { initRiskMatrix } from '../../constants/risk-matrix';
import { RiskMatrix } from '../../models/risk-matrix';

@Component({
  selector: 'app-controls-area',
  templateUrl: './controls-area.component.html',
  styleUrls: ['./controls-area.component.scss']
})
export class ControlsAreaComponent implements OnInit {

  riskMatrix: RiskMatrix = initRiskMatrix;
  constructor() { }

  ngOnInit(): void {
  }

}
