import type { Carne } from './interfaces';

export const tiposDeCarne: Carne[] = [
  {
    id: 'picanha',
    nome: 'Picanha',
    categoria: 'carne',
    porcao: 10,
    preco: 22.99,
    descricao: 'A rainha do churrasco brasileiro, picanha grelhada na brasa',
  },
  {
    id: 'maminha',
    nome: 'Maminha',
    categoria: 'carne',
    porcao: 8,
    preco: 18.99,
    descricao: 'Corte suculento e macio, perfeito para churrasco',
  },
  {
    id: 'cupim',
    nome: 'Cupim',
    categoria: 'carne',
    porcao: 6,
    preco: 16.99,
    descricao: 'Carne gordurosa e saborosa, especialidade do churrasco',
  },
  {
    id: 'alcatra',
    nome: 'Alcatra',
    categoria: 'carne',
    porcao: 8,
    preco: 15.99,
    descricao: 'Corte tradicional brasileiro, grelhado na brasa',
  },
  {
    id: 'costela',
    nome: 'Costela de Boi',
    categoria: 'carne',
    porcao: 12,
    preco: 12.99,
    descricao: 'Costela assada lentamente, carne desfiada e saborosa',
  },

  // Porco
  {
    id: 'linguiça',
    nome: 'Linguiça',
    categoria: 'porco',
    porcao: 6,
    preco: 8.99,
    descricao: 'Linguiça tradicional brasileira, grelhada na brasa',
  },
  {
    id: 'pernil',
    nome: 'Pernil de Porco',
    categoria: 'porco',
    porcao: 10,
    preco: 7.99,
    descricao: 'Pernil assado com temperos brasileiros',
  },
  {
    id: 'costela-porco',
    nome: 'Costela de Porco',
    categoria: 'porco',
    porcao: 10,
    preco: 6.99,
    descricao: 'Costela de porco assada lentamente',
  },
  {
    id: 'bacon',
    nome: 'Bacon',
    categoria: 'porco',
    porcao: 4,
    preco: 9.99,
    descricao: 'Bacon crocante para aperitivos',
  },

  // Frango
  {
    id: 'frango-coracao',
    nome: 'Coração de Frango',
    categoria: 'frango',
    porcao: 4,
    preco: 5.99,
    descricao: 'Coração de frango grelhado, especialidade brasileira',
  },
  {
    id: 'frango-coxa',
    nome: 'Coxa de Frango',
    categoria: 'frango',
    porcao: 8,
    preco: 4.99,
    descricao: 'Coxa de frango grelhada com temperos',
  },
  {
    id: 'frango-asa',
    nome: 'Asa de Frango',
    categoria: 'frango',
    porcao: 6,
    preco: 5.49,
    descricao: 'Asa de frango grelhada na brasa',
  },
  {
    id: 'frango-inteiro',
    nome: 'Frango Inteiro',
    categoria: 'frango',
    porcao: 12,
    preco: 3.99,
    descricao: 'Frango inteiro assado no espeto',
  },

  // carneiro
  {
    id: 'carneiro-perna',
    nome: 'Perna de Carneiro',
    categoria: 'cordeiro',
    porcao: 10,
    preco: 18.99,
    descricao: 'Perna de carneiro assada com ervas',
  },
  {
    id: 'carneiro-costela',
    nome: 'Costela de Carneiro',
    categoria: 'cordeiro',
    porcao: 8,
    preco: 16.99,
    descricao: 'Costela de carneiro grelhada na brasa',
  }
];

export const getMeatByCategory = (category: Carne['categoria']) => {
  return tiposDeCarne.filter(meat => meat.categoria === category);
};

export const getMeatById = (id: string) => {
  return tiposDeCarne.find(meat => meat.id === id);
};