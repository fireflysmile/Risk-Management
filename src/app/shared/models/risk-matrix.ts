
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
  label: string;
  order: 'Ascending Order' | 'Descending Order';
  count: number;
  criteriaData: CriteriaData[];
  prefix: string;
}

export interface CriteriaData {
  shortTitle: string;
  title: string | string[];
  checked: boolean;
  text: string[];
}
// export interface CriteriaDataX {
//   title: string[];
// }
