export interface Discount {
  id: number;
  code: string;
  percentage: number;
  expiryDate: string; // Assuming ISO date string format, adjust if needed
  status: boolean;
}
