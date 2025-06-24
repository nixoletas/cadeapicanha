import type { iItem } from "./iItem";

export interface iChurrasco {
  nrConvidados: number;
  itens: iItem[];
  custoTotal: number;
  pesoTotalKg: number;
} 