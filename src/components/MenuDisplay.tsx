import type { PartyPlan } from '../types/meat';
import { formatCurrency, formatWeight, formatTime } from '../utils/calculations';
import './MenuDisplay.css';

interface MenuDisplayProps {
  partyPlan: PartyPlan;
}

export default function MenuDisplay({ partyPlan }: MenuDisplayProps) {
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
              <span className="value">{partyPlan.guestCount}</span>
            </div>
            <div className="summary-item">
              <span className="label">Custo Total:</span>
              <span className="value">{formatCurrency(partyPlan.totalCost)}</span>
            </div>
            <div className="summary-item">
              <span className="label">Peso Total:</span>
              <span className="value">{formatWeight(partyPlan.totalMeatWeight)}</span>
            </div>
            <div className="summary-item">
              <span className="label">Tempo de Preparo:</span>
              <span className="value">{formatTime(partyPlan.estimatedCookingTime)}</span>
            </div>
          </div>
        </div>

        {partyPlan.dietaryNotes.length > 0 && (
          <div className="dietary-notes">
            <h4>📝 Observações</h4>
            <ul>
              {partyPlan.dietaryNotes.map((note, index) => (
                <li key={index}>{getDietaryNote(note)}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="menu-items">
        <h3>🍽️ Itens do Cardápio</h3>
        <div className="items-grid">
          {partyPlan.menuItems.map((item, index) => (
            <div key={index} className="menu-item-card">
              <div className="item-header">
                <div className="item-icon">
                  {getCategoryIcon(item.meat.category)}
                </div>
                <div className="item-info">
                  <h4>{item.meat.name}</h4>
                  <p className="item-description">{item.meat.description}</p>
                </div>
              </div>

              <div className="item-details">
                <div className="detail-row">
                  <span className="detail-label">Quantidade:</span>
                  <span className="detail-value">{formatWeight(item.quantity)}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Porções:</span>
                  <span className="detail-value">{item.totalPortions} pessoas</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Preço por kg:</span>
                  <span className="detail-value">{formatCurrency(item.meat.pricePerPound)}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Custo Total:</span>
                  <span className="detail-value total-cost">{formatCurrency(item.totalCost)}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Tempo de Preparo:</span>
                  <span className="detail-value">{formatTime(item.meat.cookingTime)}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Porção por Pessoa:</span>
                  <span className="detail-value">{item.meat.portionPerPerson} oz</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cooking-tips">
        <h3>👨‍🍳 Dicas de Preparo</h3>
        <div className="tips-content">
          <p>
            <strong>Tempo de Preparação:</strong> Comece a cozinhar {formatTime(partyPlan.estimatedCookingTime)} antes do início da sua festa.
          </p>
          <p>
            <strong>Armazenamento:</strong> Mantenha a carne crua refrigerada até estar pronta para cozinhar. Carne cozida pode ser mantida quente em uma panela elétrica ou bandeja de aquecimento.
          </p>
          <p>
            <strong>Segurança:</strong> Use um termômetro de carne para garantir temperaturas adequadas de cozimento. Carnes moídas devem atingir 71°C, aves 74°C, e bifes/assados 63°C.
          </p>
        </div>
      </div>
    </div>
  );
} 