export interface Carne {
  id: string;
  nome: string;
  categoria: 'carne' | 'porco' | 'frango' | 'cordeiro' | 'peixe';
  porcao: number;
  preco: number;
  descricao: string;
  imagem?: string;
}

export interface PaoAlho {
  id: string;
  name: string;
  category: 'complementos';
  porcao: number;
  preco: number;
  descricao: string;
  image?: string;
}

export interface MenuItem {
  tipo: Carne;
  quantidade: number;
  custoTotal: number;
  totalPorcoes: number;
}

export interface Churrasco {
  guestCount: number;
  menuItems: MenuItem[];
  totalCost: number;
  totalMeatWeight: number;
  estimatedCookingTime: number;
  dietaryNotes: string[];
} 