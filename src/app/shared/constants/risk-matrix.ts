import { RiskMatrix, SizeRiskMatrix } from '../models/risk-matrix';
export const InitSizeRiskMatrix: SizeRiskMatrix = {
  row: 1,
  column: 1
};

export const InitRiskMatrix: RiskMatrix = {
  name: '',
  type: '',
  size: InitSizeRiskMatrix,
  x: {
    value: 'x axis',
    order: 'Ascending Order',
    count: 0
  },
  y: {
    value: 'y axis',
    order: 'Descending Order',
    count: 1
  }

};

export const OrderAxis = [
  'Ascending Order',
  'Descending Order'
];

export const RiskMatrixType = ['Thread', 'Opportunity'];
