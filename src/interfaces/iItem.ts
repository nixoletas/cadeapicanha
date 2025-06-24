import type { Carne } from "../data/interfaces";

export interface iItem {
  tipo: Carne;
  quantidade: number;
  custoTotal: number;
  totalPorcoes: number;
}