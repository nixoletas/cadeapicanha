import type { iItem } from "./iItem";

export interface iChurrasco {
  guestCount: number;
  menuItems: iItem[];
  totalCost: number;
  totalMeatWeight: number;
  estimatedCookingTime: number;
  dietaryNotes: string[];
} 