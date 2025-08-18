export interface PricingItem {
  title: string;
  originalPrice: number;
  discountedPrice?: number;
  description: string;
  features: string[];
}