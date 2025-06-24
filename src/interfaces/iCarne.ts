export interface iCarne {
  id: string;
  nome: string;
  categoria: 'carne' | 'porco' | 'frango' | 'cordeiro' | 'peixe';
  porcao: number;
  preco: number;
  descricao: string;
  imagem?: string;
}