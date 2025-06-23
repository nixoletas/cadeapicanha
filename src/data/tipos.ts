export interface Carne {
  id: string;
  nome: string;
  categoria: 'carne' | 'porco' | 'frango' | 'cordeiro' | 'peixe';
  porcao: number; // in ounces
  preco: number;
  descricao: string;
  imagem?: string;
}

export interface PaoAlho {
  id: string;
  name: string;
  category: 'complementos';
  porcao: number; // in ounces
  pricePerPound: number;
  description: string;
  image?: string;
}

export interface MenuItem {
  meat: Carne;
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