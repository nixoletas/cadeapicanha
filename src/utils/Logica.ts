import type { iCarne } from '../interfaces/iCarne';

export const calcularQtCarne = (carne: iCarne, nrConvidados: number): number => {
  const totalKg = carne.porcao * nrConvidados;

  return Math.ceil(totalKg * 1);
}