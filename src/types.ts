export interface Expense {
  id: string;
  title: string;
  store?: string;
  amount: number;
  date: Date;
}

export interface ChartDataset {
  label: string;
  value: number;
}

