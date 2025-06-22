import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { ptBR } from './translations/pt-BR';

export type Language = 'pt-BR';

interface I18nContextType {
  language: Language;
  t: (key: keyof typeof ptBR, params?: Record<string, string>) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const translations = {
  'pt-BR': ptBR
};

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language] = useState<Language>('pt-BR');

  const t = (key: keyof typeof ptBR, params?: Record<string, string>): string => {
    const translation = translations[language][key] || key;
    
    if (params) {
      return Object.entries(params).reduce(
        (str, [param, value]) => str.replace(`{${param}}`, value),
        translation
      );
    }
    
    return translation;
  };

  return (
    <I18nContext.Provider value={{ language, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
} 