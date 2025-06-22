import { useState } from 'react';
import type { PartyPlan } from '../types/meat';
import { generateAutoMenu } from '../utils/calculations';
import MenuDisplay from './MenuDisplay';
import './PartyPlanner.css';

export default function PartyPlanner() {
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
          <h1>🥩 App de Medição de Carnes</h1>
          <p>Calcule a quantidade perfeita de carne para sua festa!</p>
        </div>
      </div>

      <div className="planner-form">
        <div className="form-section">
          <h2>Detalhes da Festa</h2>
          
          <div className="form-group">
            <label htmlFor="guestCount">Número de Convidados:</label>
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
          <h2>Preferências</h2>
          
          <div className="form-group">
            <label>Nível de Orçamento:</label>
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
            <label>Nível de Variedade:</label>
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
            <label>Dificuldade de Preparo:</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="difficulty"
                  value="easy"
                  checked={difficulty === 'easy'}
                  onChange={(e) => setDifficulty(e.target.value as 'easy' | 'medium' | 'hard')}
                />
                <span>Fácil</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="difficulty"
                  value="medium"
                  checked={difficulty === 'medium'}
                  onChange={(e) => setDifficulty(e.target.value as 'easy' | 'medium' | 'hard')}
                />
                <span>Médio</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="difficulty"
                  value="hard"
                  checked={difficulty === 'hard'}
                  onChange={(e) => setDifficulty(e.target.value as 'easy' | 'medium' | 'hard')}
                />
                <span>Difícil</span>
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>Restrições Alimentares:</label>
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
              <label>
                <input
                  type="checkbox"
                  checked={dietary.includes('no-seafood')}
                  onChange={() => handleDietaryChange('no-seafood')}
                />
                <span>Sem Frutos do Mar</span>
              </label>
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button 
            className="generate-btn"
            onClick={generateMenu}
          >
            🍖 Gerar Cardápio
          </button>
        </div>
      </div>

      {partyPlan && (
        <div className="menu-section">
          <div className="menu-header">
            <h2>Seu Cardápio da Festa</h2>
            <button 
              className="regenerate-btn"
              onClick={regenerateMenu}
            >
              🔄 Regenerar
            </button>
          </div>
          <MenuDisplay partyPlan={partyPlan} />
        </div>
      )}
    </div>
  );
} 