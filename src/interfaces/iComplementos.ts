export interface iComplementos {
  id: string;
  nome: string;
  categoria: 'massa' | 'tempero' | 'outros';
  porcao: number;
  preco: number;
  descricao: string;
  image?: string;
}