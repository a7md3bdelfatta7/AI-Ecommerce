export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  date: string;
  comment: string;
  verifiedPurchase: boolean;
  helpful: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  brand: string;
  specifications: {
    [key: string]: string;
  };
  features: string[];
  inStock: boolean;
  stockCount: number;
  discount?: {
    percentage: number;
    validUntil: string;
  };
  shipping: {
    free: boolean;
    estimatedDays: string;
  };
  warranty: string;
  customerReviews: Review[];
  relatedProducts: string[];
} 