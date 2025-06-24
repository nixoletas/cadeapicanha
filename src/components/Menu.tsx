import { useState } from 'react';
import type { Churrasco } from '../data/interfaces';
import { generateAutoMenu } from '../utils/Calculos';
import MenuDisplay from './Form';
import './Menu.css';

export default function Menu() {
  const [guestCount, setGuestCount] = useState(10);
  const [budget, setBudget] = useState<'low' | 'medium' | 'high'>('medium');
  const [variety, setVariety] = useState<'minimal' | 'moderate' | 'extensive'>('moderate');
  const [dietary, setDietary] = useState<string[]>([]);
  const [partyPlan, setPartyPlan] = useState<Churrasco | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleDietaryChange = (restriction: string) => {
    setDietary(prev => 
      prev.includes(restriction) 
        ? prev.filter(item => item !== restriction)
        : [...prev, restriction]
    );
  };

  const generateMenu = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      const plan = generateAutoMenu(guestCount, {
        budget,
        variety,
        dietary
      });
      setPartyPlan(plan);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="party-planner">
      <div className="planner-header">
        <div className="header-content">
          <h1>🥩 Cadê a picanha</h1>
          <p>App que te ajuda a calcular a quantidade de carne para sua festa!</p>
          <p className='smaller-description'>Insira a quantidade de convidados e as preferências para gerar um cardápio personalizado.</p>
        </div>
      </div>

      <div className="planner-form">
        <div className="form-section">
          <h2>Detalhes da Festa</h2>
          
          <div className="form-group">
            <label htmlFor="guestCount">Número de Convidados</label>
            <div className="number-input-container">
              <input
                type="number"
                id="guestCount"
                min="1"
                max="100"
                value={guestCount}
                onChange={(e) => setGuestCount(parseInt(e.target.value) || 1)}
                className="number-input"
              />
              <div className="number-input-arrows">
                <button
                  type="button"
                  className="number-input-arrow up"
                  onClick={() => setGuestCount(prev => Math.min(prev + 1, 100))}
                  aria-label="Aumentar número de convidados"
                >
                  ▲
                </button>
                <button
                  type="button"
                  className="number-input-arrow down"
                  onClick={() => setGuestCount(prev => Math.max(prev - 1, 1))}
                  aria-label="Diminuir número de convidados"
                >
                  ▼
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h2>Preferências</h2>
          
          <div className="form-group">
            <label>Nível de Orçamento</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="budget"
                  value="low"
                  checked={budget === 'low'}
                  onChange={(e) => setBudget(e.target.value as 'low' | 'medium' | 'high')}
                />
                <span>Baixo (R$)</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="budget"
                  value="medium"
                  checked={budget === 'medium'}
                  onChange={(e) => setBudget(e.target.value as 'low' | 'medium' | 'high')}
                />
                <span>Médio (R$$)</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="budget"
                  value="high"
                  checked={budget === 'high'}
                  onChange={(e) => setBudget(e.target.value as 'low' | 'medium' | 'high')}
                />
                <span>Alto (R$$$)</span>
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>Nível de Variedade</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="variety"
                  value="minimal"
                  checked={variety === 'minimal'}
                  onChange={(e) => setVariety(e.target.value as 'minimal' | 'moderate' | 'extensive')}
                />
                <span>Mínima (2 tipos)</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="variety"
                  value="moderate"
                  checked={variety === 'moderate'}
                  onChange={(e) => setVariety(e.target.value as 'minimal' | 'moderate' | 'extensive')}
                />
                <span>Moderada (4 tipos)</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="variety"
                  value="extensive"
                  checked={variety === 'extensive'}
                  onChange={(e) => setVariety(e.target.value as 'minimal' | 'moderate' | 'extensive')}
                />
                <span>Extensa (6 tipos)</span>
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>Restrições Alimentares</label>
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  checked={dietary.includes('no-pork')}
                  onChange={() => handleDietaryChange('no-pork')}
                />
                <span>Sem Porco</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={dietary.includes('no-beef')}
                  onChange={() => handleDietaryChange('no-beef')}
                />
                <span>Sem Carne Bovina</span>
              </label>
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button 
            className="generate-btn"
            onClick={generateMenu}
            disabled={isLoading}
          >
            {isLoading ? '⏳ Gerando...' : '🍖 Gerar Cardápio'}
          </button>
        </div>
      </div>

      {partyPlan && (
        <div className="menu-section">
          <div className="menu-header">
            <h2>Seu Cardápio da Festa</h2>
          </div>
          <MenuDisplay churras={partyPlan} />
        </div>
      )}
    </div>
  );
} 