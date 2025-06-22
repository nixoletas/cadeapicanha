import { useState } from 'react';
import type { PartyPlan } from '../types/meat';
import { generateAutoMenu } from '../utils/calculations';
import { useI18n } from '../i18n/I18nContext';
import MenuDisplay from './MenuDisplay';
import './PartyPlanner.css';

export default function PartyPlanner() {
  const { t } = useI18n();
  const [guestCount, setGuestCount] = useState(10);
  const [budget, setBudget] = useState<'low' | 'medium' | 'high'>('medium');
  const [variety, setVariety] = useState<'minimal' | 'moderate' | 'extensive'>('moderate');
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');
  const [dietary, setDietary] = useState<string[]>([]);
  const [partyPlan, setPartyPlan] = useState<PartyPlan | null>(null);

  const handleDietaryChange = (restriction: string) => {
    setDietary(prev => 
      prev.includes(restriction) 
        ? prev.filter(item => item !== restriction)
        : [...prev, restriction]
    );
  };

  const generateMenu = () => {
    const plan = generateAutoMenu(guestCount, {
      budget,
      variety,
      difficulty,
      dietary
    });
    setPartyPlan(plan);
  };

  const regenerateMenu = () => {
    generateMenu();
  };

  return (
    <div className="party-planner">
      <div className="planner-header">
        <div className="header-content">
          <h1>{t('title')}</h1>
          <p>{t('subtitle')}</p>
        </div>
      </div>

      <div className="planner-form">
        <div className="form-section">
          <h2>{t('partyDetails')}</h2>
          
          <div className="form-group">
            <label htmlFor="guestCount">{t('numberOfGuests')}</label>
            <input
              type="number"
              id="guestCount"
              min="1"
              max="100"
              value={guestCount}
              onChange={(e) => setGuestCount(parseInt(e.target.value) || 1)}
              className="number-input"
            />
          </div>
        </div>

        <div className="form-section">
          <h2>{t('preferences')}</h2>
          
          <div className="form-group">
            <label>{t('budgetLevel')}</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="budget"
                  value="low"
                  checked={budget === 'low'}
                  onChange={(e) => setBudget(e.target.value as 'low' | 'medium' | 'high')}
                />
                <span>{t('budgetLow')}</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="budget"
                  value="medium"
                  checked={budget === 'medium'}
                  onChange={(e) => setBudget(e.target.value as 'low' | 'medium' | 'high')}
                />
                <span>{t('budgetMedium')}</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="budget"
                  value="high"
                  checked={budget === 'high'}
                  onChange={(e) => setBudget(e.target.value as 'low' | 'medium' | 'high')}
                />
                <span>{t('budgetHigh')}</span>
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>{t('varietyLevel')}</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="variety"
                  value="minimal"
                  checked={variety === 'minimal'}
                  onChange={(e) => setVariety(e.target.value as 'minimal' | 'moderate' | 'extensive')}
                />
                <span>{t('varietyMinimal')}</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="variety"
                  value="moderate"
                  checked={variety === 'moderate'}
                  onChange={(e) => setVariety(e.target.value as 'minimal' | 'moderate' | 'extensive')}
                />
                <span>{t('varietyModerate')}</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="variety"
                  value="extensive"
                  checked={variety === 'extensive'}
                  onChange={(e) => setVariety(e.target.value as 'minimal' | 'moderate' | 'extensive')}
                />
                <span>{t('varietyExtensive')}</span>
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>{t('cookingDifficulty')}</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="difficulty"
                  value="easy"
                  checked={difficulty === 'easy'}
                  onChange={(e) => setDifficulty(e.target.value as 'easy' | 'medium' | 'hard')}
                />
                <span>{t('difficultyEasy')}</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="difficulty"
                  value="medium"
                  checked={difficulty === 'medium'}
                  onChange={(e) => setDifficulty(e.target.value as 'easy' | 'medium' | 'hard')}
                />
                <span>{t('difficultyMedium')}</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="difficulty"
                  value="hard"
                  checked={difficulty === 'hard'}
                  onChange={(e) => setDifficulty(e.target.value as 'easy' | 'medium' | 'hard')}
                />
                <span>{t('difficultyHard')}</span>
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>{t('dietaryRestrictions')}</label>
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  checked={dietary.includes('no-pork')}
                  onChange={() => handleDietaryChange('no-pork')}
                />
                <span>{t('noPork')}</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={dietary.includes('no-beef')}
                  onChange={() => handleDietaryChange('no-beef')}
                />
                <span>{t('noBeef')}</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={dietary.includes('no-seafood')}
                  onChange={() => handleDietaryChange('no-seafood')}
                />
                <span>{t('noSeafood')}</span>
              </label>
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button 
            className="generate-btn"
            onClick={generateMenu}
          >
            {t('generateMenu')}
          </button>
        </div>
      </div>

      {partyPlan && (
        <div className="menu-section">
          <div className="menu-header">
            <h2>{t('yourPartyMenu')}</h2>
            <button 
              className="regenerate-btn"
              onClick={regenerateMenu}
            >
              {t('regenerate')}
            </button>
          </div>
          <MenuDisplay partyPlan={partyPlan} />
        </div>
      )}
    </div>
  );
} 