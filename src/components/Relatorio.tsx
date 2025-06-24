import type { Churrasco } from '../data/interfaces';
import { formatCurrency, formatWeight } from '../utils/calculos';
import './Relatorio.css';

interface MenuDisplayProps {
  churras: Churrasco;
}

export default function MenuDisplay({ churras }: MenuDisplayProps) {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'beef': return '🐄';
      case 'pork': return '🐷';
      case 'chicken': return '🐔';
      case 'lamb': return '🐑';
      case 'fish': return '🐟';
      case 'bread': return '🥖';
      default: return '🥩';
    }
  };

  const getDietaryNote = (note: string) => {
    switch (note) {
      case 'Pork-free menu': return '* Sem porco';
      case 'Beef-free menu': return '* Sem carne bovina';
      case 'Quantidades ajustadas para respeitar limite de 400g por pessoa': return '* 400g por pessoa';
      default: return note;
    }
  };

  return (
    <div className="menu-display">
      <div className="menu-summary">
        <div className="summary-card">
          <h3>📊 Resumo</h3>
          <div className="summary-grid">
            <div className="summary-item">
              <span className="label">Convidados:</span>
              <span className="value">{churras.guestCount}</span>
            </div>
            <div className="summary-item">
              <span className="label">Custo Total:</span>
              <span className="value">{formatCurrency(churras.totalCost)}</span>
            </div>
            <div className="summary-item">
              <span className="label">Custo por convidado:</span>
              <span className="value">{formatCurrency(churras.totalCost / churras.guestCount)}</span>
            </div>
            <div className="summary-item">
              <span className="label">Peso Total:</span>
              <span className="value">{formatWeight(churras.totalMeatWeight)}</span>
            </div>
            <div className="summary-item">
              <span className="label">Limite Máximo:</span>
              <span className="value">{formatWeight((churras.guestCount * 400) / 1000 / 0.453592)}</span>
            </div>
            <div className="summary-item">
              <span className="label">Média por Pessoa:</span>
              <span className="value">{formatWeight(churras.totalMeatWeight / churras.guestCount)}</span>
            </div>
          </div>
        </div>

        {churras.dietaryNotes.length > 0 && (
          <div className="dietary-notes">
            <h4>📝 Observações</h4>
            <ul>
              {churras.dietaryNotes.map((note, index) => (
                <li key={index}>{getDietaryNote(note)}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="menu-items">
        <h3>🍽️ Itens do Cardápio</h3>
        <div className="items-grid">
          {churras.menuItems.map((item, index) => (
            <div key={index} className="menu-item-card">
              <div className="item-header">
                <div className="item-icon">
                  {getCategoryIcon(item.tipo.categoria)}
                </div>
                <div className="item-info">
                  <h4>{item.tipo.nome}</h4>
                  <p className="item-description">{item.tipo.descricao}</p>
                </div>
              </div>

              <div className="item-details">
                <div className="detail-row">
                  <span className="detail-label">Quantidade:</span>
                  <span className="detail-value">{formatWeight(item.quantidade)}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Porções:</span>
                  <span className="detail-value">{item.totalPorcoes} pessoas</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Preço por kg:</span>
                  <span className="detail-value">{formatCurrency(item.tipo.preco)}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Custo Total:</span>
                  <span className="detail-value total-cost">{formatCurrency(item.custoTotal)}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Porção por Pessoa:</span>
                  <span className="detail-value">{item.tipo.porcao} oz</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 