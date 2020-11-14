import { Component, OnInit } from '@angular/core';
import { InitRiskMatrix } from '@app/shared/constants/risk-matrix';
import { RiskMatrix } from '@app/shared/models/risk-matrix';

@Component({
  selector: 'app-matrix-table',
  templateUrl: './matrix-table.component.html',
  styleUrls: ['./matrix-table.component.scss']
})
export class MatrixTableComponent implements OnInit {

  riskMatrix: RiskMatrix = InitRiskMatrix;
  constructor() { }

  ngOnInit(): void {
  }

}
