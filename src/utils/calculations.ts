import type { MeatType, MenuItem, PartyPlan } from '../types/meat';
import { meatTypes } from '../data/meatData';

export const calculateMeatQuantity = (meat: MeatType, guestCount: number): number => {
  // Convert ounces to pounds (16 oz = 1 lb)
  const totalOunces = meat.portionPerPerson * guestCount;
  const totalPounds = totalOunces / 16;
  
  // Add 20% buffer for variety and seconds
  return Math.ceil(totalPounds * 1.2);
};

export const calculateMenuItem = (meat: MeatType, guestCount: number): MenuItem => {
  const quantity = calculateMeatQuantity(meat, guestCount);
  const totalCost = quantity * meat.pricePerPound;
  const totalPortions = Math.floor((quantity * 16) / meat.portionPerPerson);
  
  return {
    meat,
    quantity,
    totalCost,
    totalPortions
  };
};

export const generateAutoMenu = (guestCount: number, preferences: {
  budget?: 'low' | 'medium' | 'high';
  variety?: 'minimal' | 'moderate' | 'extensive';
  dietary?: string[];
} = {}): PartyPlan => {
  const { budget = 'medium', variety = 'moderate', dietary = [] } = preferences;
  
  // Filter meats based on preferences
  let availableMeats = meatTypes;
  
  // Filter by budget
  if (budget === 'low') {
    availableMeats = availableMeats.filter(meat => meat.pricePerPound <= 8);
  } else if (budget === 'high') {
    availableMeats = availableMeats.filter(meat => meat.pricePerPound >= 12);
  }
  
  // Filter by dietary restrictions
  if (dietary.includes('no-pork')) {
    availableMeats = availableMeats.filter(meat => meat.category !== 'pork');
  }
  if (dietary.includes('no-beef')) {
    availableMeats = availableMeats.filter(meat => meat.category !== 'beef');
  }
  
  // Determine number of meat types based on variety preference
  let meatTypeCount: number;
  switch (variety) {
    case 'minimal':
      meatTypeCount = Math.min(2, availableMeats.length);
      break;
    case 'extensive':
      meatTypeCount = Math.min(6, availableMeats.length);
      break;
    default: // moderate
      meatTypeCount = Math.min(4, availableMeats.length);
  }
  
  // Select meats ensuring variety across categories
  const selectedMeats: MeatType[] = [];
  const categories = new Set<string>();
  
  // First, try to get one from each category (excluding seafood)
  const categoryOrder = ['beef', 'pork', 'chicken', 'lamb', 'fish'];
  for (const category of categoryOrder) {
    if (selectedMeats.length >= meatTypeCount) break;
    
    const categoryMeats = availableMeats.filter(meat => meat.category === category);
    if (categoryMeats.length > 0) {
      const selected = categoryMeats[Math.floor(Math.random() * categoryMeats.length)];
      selectedMeats.push(selected);
      categories.add(category);
    }
  }
  
  // Fill remaining slots with random meats (prioritizing bread and sides)
  while (selectedMeats.length < meatTypeCount) {
    const remainingMeats = availableMeats.filter(meat => !selectedMeats.includes(meat));
    if (remainingMeats.length === 0) break;
    
    // Prioritize bread and sides for remaining slots
    const breadAndSides = remainingMeats.filter(meat => ['bread', 'sides'].includes(meat.category));
    const otherMeats = remainingMeats.filter(meat => !['bread', 'sides'].includes(meat.category));
    
    const meatsToChooseFrom = breadAndSides.length > 0 ? breadAndSides : otherMeats;
    const selected = meatsToChooseFrom[Math.floor(Math.random() * meatsToChooseFrom.length)];
    selectedMeats.push(selected);
  }
  
  // Calculate maximum total weight allowed (400g per person)
  const maxTotalWeightKg = (guestCount * 400) / 1000; // Convert to kg
  const maxTotalWeightLbs = maxTotalWeightKg / 0.453592; // Convert to pounds
  
  // Calculate initial menu items with standard portions
  let menuItems = selectedMeats.map(meat => calculateMenuItem(meat, guestCount));
  
  // Calculate current total weight
  let currentTotalWeight = menuItems.reduce((sum, item) => sum + item.quantity, 0);
  
  // If total weight exceeds limit, adjust quantities proportionally
  if (currentTotalWeight > maxTotalWeightLbs) {
    const adjustmentFactor = maxTotalWeightLbs / currentTotalWeight;
    
    menuItems = menuItems.map(item => {
      const adjustedQuantity = Math.ceil(item.quantity * adjustmentFactor * 100) / 100; // Round to 2 decimal places
      const adjustedTotalCost = adjustedQuantity * item.meat.pricePerPound;
      const adjustedTotalPortions = Math.floor((adjustedQuantity * 16) / item.meat.portionPerPerson);
      
      return {
        ...item,
        quantity: adjustedQuantity,
        totalCost: adjustedTotalCost,
        totalPortions: adjustedTotalPortions
      };
    });
  }
  
  // Calculate totals
  const totalCost = menuItems.reduce((sum, item) => sum + item.totalCost, 0);
  const totalMeatWeight = menuItems.reduce((sum, item) => sum + item.quantity, 0);
  const estimatedCookingTime = Math.max(...menuItems.map(item => item.meat.cookingTime));
  
  // Generate dietary notes
  const dietaryNotes: string[] = [];
  if (dietary.includes('no-pork')) dietaryNotes.push('Pork-free menu');
  if (dietary.includes('no-beef')) dietaryNotes.push('Beef-free menu');
  
  // Add note if quantities were adjusted
  if (currentTotalWeight > maxTotalWeightLbs) {
    dietaryNotes.push('Quantidades ajustadas para respeitar limite de 400g por pessoa');
  }
  
  return {
    guestCount,
    menuItems,
    totalCost,
    totalMeatWeight,
    estimatedCookingTime,
    dietaryNotes
  };
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount);
};

export const formatWeight = (pounds: number): string => {
  // Convert pounds to kilograms (1 lb = 0.453592 kg)
  const kilograms = pounds * 0.453592;
  if (kilograms < 1) {
    const grams = Math.round(kilograms * 1000);
    return `${grams} g`;
  }
  return `${kilograms.toFixed(1)} kg`;
};

export const formatTime = (minutes: number): string => {
  if (minutes < 60) {
    return `${minutes} min`;
  }
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  if (remainingMinutes === 0) {
    return `${hours} h`;
  }
  return `${hours} h ${remainingMinutes} min`;
}; 