import { RiskMatrix, SizeRiskMatrix } from '../models/risk-matrix';
export const InitSizeRiskMatrix: SizeRiskMatrix = {
  row: 0,
  column: 0
};

export const InitRiskMatrix: RiskMatrix = {
  name: '',
  type: '',
  size: InitSizeRiskMatrix,
  x: {
    label: '',
    order: 'Ascending Order',
    count: 0,
    criteriaData: [],
    prefix: 'P'
  },
  y: {
    label: '',
    order: 'Descending Order',
    count: 0,
    criteriaData: [],
    prefix: 'T'
  }

};

export const OrderAxis = [
  'Ascending Order',
  'Descending Order'
];

export const RiskMatrixType = ['Thread', 'Opportunity'];
