export interface MeatType {
  id: string;
  name: string;
  category: 'beef' | 'pork' | 'chicken' | 'lamb' | 'fish' | 'sides' | 'bread';
  portionPerPerson: number; // in ounces
  pricePerPound: number;
  description: string;
  image?: string;
  cookingTime: number; // in minutes
}

export interface MenuItem {
  meat: MeatType;
  quantity: number; // in pounds
  totalCost: number;
  totalPortions: number;
}

export interface PartyPlan {
  guestCount: number;
  menuItems: MenuItem[];
  totalCost: number;
  totalMeatWeight: number;
  estimatedCookingTime: number;
  dietaryNotes: string[];
} 