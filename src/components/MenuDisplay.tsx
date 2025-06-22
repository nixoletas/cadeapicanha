import type { PartyPlan } from '../types/meat';
import { formatCurrency, formatWeight, formatTime } from '../utils/calculations';
import { useI18n } from '../i18n/I18nContext';
import './MenuDisplay.css';

interface MenuDisplayProps {
  partyPlan: PartyPlan;
}

export default function MenuDisplay({ partyPlan }: MenuDisplayProps) {
  const { t } = useI18n();

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return '#4CAF50';
      case 'medium': return '#FF9800';
      case 'hard': return '#F44336';
      default: return '#666';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'beef': return '🐄';
      case 'pork': return '🐷';
      case 'chicken': return '🐔';
      case 'lamb': return '🐑';
      case 'fish': return '🐟';
      case 'seafood': return '🦐';
      default: return '🥩';
    }
  };

  return (
    <div className="menu-display">
      <div className="menu-summary">
        <div className="summary-card">
          <h3>{t('summary')}</h3>
          <div className="summary-grid">
            <div className="summary-item">
              <span className="label">{t('guests')}</span>
              <span className="value">{partyPlan.guestCount}</span>
            </div>
            <div className="summary-item">
              <span className="label">{t('totalCost')}</span>
              <span className="value">{formatCurrency(partyPlan.totalCost)}</span>
            </div>
            <div className="summary-item">
              <span className="label">{t('totalWeight')}</span>
              <span className="value">{formatWeight(partyPlan.totalMeatWeight)}</span>
            </div>
            <div className="summary-item">
              <span className="label">{t('cookingTime')}</span>
              <span className="value">{formatTime(partyPlan.estimatedCookingTime)}</span>
            </div>
          </div>
        </div>

        {partyPlan.dietaryNotes.length > 0 && (
          <div className="dietary-notes">
            <h4>{t('dietaryNotes')}</h4>
            <ul>
              {partyPlan.dietaryNotes.map((note, index) => {
                let translatedNote = note;
                if (note === 'Pork-free menu') translatedNote = t('porkFreeMenu');
                if (note === 'Beef-free menu') translatedNote = t('beefFreeMenu');
                if (note === 'Seafood-free menu') translatedNote = t('seafoodFreeMenu');
                
                return <li key={index}>{translatedNote}</li>;
              })}
            </ul>
          </div>
        )}
      </div>

      <div className="menu-items">
        <h3>{t('menuItems')}</h3>
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
                <div 
                  className="difficulty-badge"
                  style={{ backgroundColor: getDifficultyColor(item.meat.difficulty) }}
                >
                  {item.meat.difficulty === 'easy' ? t('difficultyEasy') : 
                   item.meat.difficulty === 'medium' ? t('difficultyMedium') : 
                   t('difficultyHard')}
                </div>
              </div>

              <div className="item-details">
                <div className="detail-row">
                  <span className="detail-label">{t('quantity')}</span>
                  <span className="detail-value">{formatWeight(item.quantity)}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">{t('portions')}</span>
                  <span className="detail-value">{item.totalPortions} {t('people')}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">{t('pricePerLb')}</span>
                  <span className="detail-value">{formatCurrency(item.meat.pricePerPound)}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">{t('totalCostItem')}</span>
                  <span className="detail-value total-cost">{formatCurrency(item.totalCost)}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">{t('cookingTimeItem')}</span>
                  <span className="detail-value">{formatTime(item.meat.cookingTime)}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">{t('portionPerPerson')}</span>
                  <span className="detail-value">{item.meat.portionPerPerson} {t('oz')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cooking-tips">
        <h3>{t('cookingTips')}</h3>
        <div className="tips-content">
          <p>
            <strong>{t('preparationTime')}</strong> {t('preparationTimeText', { time: formatTime(partyPlan.estimatedCookingTime) })}
          </p>
          <p>
            <strong>{t('storage')}</strong> {t('storageText')}
          </p>
          <p>
            <strong>{t('safety')}</strong> {t('safetyText')}
          </p>
        </div>
      </div>
    </div>
  );
} 