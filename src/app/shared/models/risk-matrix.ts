
export interface RiskMatrix {
  name: string;
  type: '' | 'Thread' | 'Opportunity';
  size: SizeRiskMatrix;
  x: AxisProps;
  y: AxisProps;
}

export interface SizeRiskMatrix {
  row: number; // X
  column: number; // Y
}

export interface AxisProps {
  value: string;
  order: 'Ascending Order' | 'Descending Order';
  count: number;
}
