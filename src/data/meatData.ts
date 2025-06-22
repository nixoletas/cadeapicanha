import type { MeatType } from '../types/meat';

export const meatTypes: MeatType[] = [
  // Carne de Boi
  {
    id: 'picanha',
    name: 'Picanha',
    category: 'beef',
    portionPerPerson: 10, // 10 oz por pessoa
    pricePerPound: 22.99,
    description: 'A rainha do churrasco brasileiro, picanha grelhada na brasa',
    cookingTime: 25, // 25 minutos
    difficulty: 'medium'
  },
  {
    id: 'maminha',
    name: 'Maminha',
    category: 'beef',
    portionPerPerson: 8, // 8 oz por pessoa
    pricePerPound: 18.99,
    description: 'Corte suculento e macio, perfeito para churrasco',
    cookingTime: 30, // 30 minutos
    difficulty: 'medium'
  },
  {
    id: 'cupim',
    name: 'Cupim',
    category: 'beef',
    portionPerPerson: 6, // 6 oz por pessoa
    pricePerPound: 16.99,
    description: 'Carne gordurosa e saborosa, especialidade do churrasco',
    cookingTime: 45, // 45 minutos
    difficulty: 'hard'
  },
  {
    id: 'alcatra',
    name: 'Alcatra',
    category: 'beef',
    portionPerPerson: 8, // 8 oz por pessoa
    pricePerPound: 15.99,
    description: 'Corte tradicional brasileiro, grelhado na brasa',
    cookingTime: 20, // 20 minutos
    difficulty: 'easy'
  },
  {
    id: 'costela',
    name: 'Costela de Boi',
    category: 'beef',
    portionPerPerson: 12, // 12 oz por pessoa
    pricePerPound: 12.99,
    description: 'Costela assada lentamente, carne desfiada e saborosa',
    cookingTime: 360, // 6 horas
    difficulty: 'hard'
  },

  // Porco
  {
    id: 'linguiça',
    name: 'Linguiça',
    category: 'pork',
    portionPerPerson: 6, // 6 oz por pessoa
    pricePerPound: 8.99,
    description: 'Linguiça tradicional brasileira, grelhada na brasa',
    cookingTime: 15, // 15 minutos
    difficulty: 'easy'
  },
  {
    id: 'pernil',
    name: 'Pernil de Porco',
    category: 'pork',
    portionPerPerson: 10, // 10 oz por pessoa
    pricePerPound: 7.99,
    description: 'Pernil assado com temperos brasileiros',
    cookingTime: 240, // 4 horas
    difficulty: 'medium'
  },
  {
    id: 'costela-porco',
    name: 'Costela de Porco',
    category: 'pork',
    portionPerPerson: 10, // 10 oz por pessoa
    pricePerPound: 6.99,
    description: 'Costela de porco assada lentamente',
    cookingTime: 300, // 5 horas
    difficulty: 'medium'
  },
  {
    id: 'bacon',
    name: 'Bacon',
    category: 'pork',
    portionPerPerson: 4, // 4 oz por pessoa
    pricePerPound: 9.99,
    description: 'Bacon crocante para aperitivos',
    cookingTime: 10, // 10 minutos
    difficulty: 'easy'
  },

  // Frango
  {
    id: 'frango-coracao',
    name: 'Coração de Frango',
    category: 'chicken',
    portionPerPerson: 4, // 4 oz por pessoa
    pricePerPound: 5.99,
    description: 'Coração de frango grelhado, especialidade brasileira',
    cookingTime: 8, // 8 minutos
    difficulty: 'easy'
  },
  {
    id: 'frango-coxa',
    name: 'Coxa de Frango',
    category: 'chicken',
    portionPerPerson: 8, // 8 oz por pessoa
    pricePerPound: 4.99,
    description: 'Coxa de frango grelhada com temperos',
    cookingTime: 25, // 25 minutos
    difficulty: 'easy'
  },
  {
    id: 'frango-asa',
    name: 'Asa de Frango',
    category: 'chicken',
    portionPerPerson: 6, // 6 oz por pessoa
    pricePerPound: 5.49,
    description: 'Asa de frango grelhada na brasa',
    cookingTime: 20, // 20 minutos
    difficulty: 'easy'
  },
  {
    id: 'frango-inteiro',
    name: 'Frango Inteiro',
    category: 'chicken',
    portionPerPerson: 12, // 12 oz por pessoa
    pricePerPound: 3.99,
    description: 'Frango inteiro assado no espeto',
    cookingTime: 90, // 90 minutos
    difficulty: 'medium'
  },

  // Carneiro
  {
    id: 'carneiro-perna',
    name: 'Perna de Carneiro',
    category: 'lamb',
    portionPerPerson: 10, // 10 oz por pessoa
    pricePerPound: 18.99,
    description: 'Perna de carneiro assada com ervas',
    cookingTime: 180, // 3 horas
    difficulty: 'medium'
  },
  {
    id: 'carneiro-costela',
    name: 'Costela de Carneiro',
    category: 'lamb',
    portionPerPerson: 8, // 8 oz por pessoa
    pricePerPound: 16.99,
    description: 'Costela de carneiro grelhada na brasa',
    cookingTime: 45, // 45 minutos
    difficulty: 'medium'
  },

  // Peixe
  {
    id: 'peixe-espada',
    name: 'Peixe Espada',
    category: 'fish',
    portionPerPerson: 8, // 8 oz por pessoa
    pricePerPound: 12.99,
    description: 'Peixe espada grelhado na brasa',
    cookingTime: 12, // 12 minutos
    difficulty: 'easy'
  },
  {
    id: 'tilapia',
    name: 'Tilápia',
    category: 'fish',
    portionPerPerson: 6, // 6 oz por pessoa
    pricePerPound: 8.99,
    description: 'Tilápia grelhada com limão e ervas',
    cookingTime: 10, // 10 minutos
    difficulty: 'easy'
  },

  // Frutos do Mar
  {
    id: 'camarao',
    name: 'Camarão',
    category: 'seafood',
    portionPerPerson: 6, // 6 oz por pessoa
    pricePerPound: 19.99,
    description: 'Camarão grelhado na brasa',
    cookingTime: 8, // 8 minutos
    difficulty: 'easy'
  },
  {
    id: 'lula',
    name: 'Lula',
    category: 'seafood',
    portionPerPerson: 4, // 4 oz por pessoa
    pricePerPound: 15.99,
    description: 'Lula grelhada na brasa',
    cookingTime: 6, // 6 minutos
    difficulty: 'medium'
  },

  // Acompanhamentos
  {
    id: 'pao-alho',
    name: 'Pão de Alho',
    category: 'sides',
    portionPerPerson: 2, // 2 unidades por pessoa
    pricePerPound: 3.99,
    description: 'Pão de alho tradicional do churrasco brasileiro',
    cookingTime: 8, // 8 minutos
    difficulty: 'easy'
  },
  {
    id: 'farofa',
    name: 'Farofa',
    category: 'sides',
    portionPerPerson: 3, // 3 oz por pessoa
    pricePerPound: 2.99,
    description: 'Farofa temperada, acompanhamento clássico',
    cookingTime: 5, // 5 minutos
    difficulty: 'easy'
  },
  {
    id: 'vinagrete',
    name: 'Vinagrete',
    category: 'sides',
    portionPerPerson: 3, // 3 oz por pessoa
    pricePerPound: 1.99,
    description: 'Vinagrete fresco para acompanhar as carnes',
    cookingTime: 10, // 10 minutos
    difficulty: 'easy'
  }
];

export const getMeatByCategory = (category: MeatType['category']) => {
  return meatTypes.filter(meat => meat.category === category);
};

export const getMeatById = (id: string) => {
  return meatTypes.find(meat => meat.id === id);
}; 