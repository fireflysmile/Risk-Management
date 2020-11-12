
// RiskMatrix
export interface RiskMatrix {
  name: string;
  type: string;
  size: SizeRiskMatrix;
}


// SizeRiskMatrix
export interface SizeRiskMatrix {
  row: number; // Y
  column: number; // X
}

