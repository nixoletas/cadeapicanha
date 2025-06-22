# 🥩 App de Medição de Carnes

Um aplicativo completo de planejamento de festas que calcula automaticamente a quantidade perfeita de carne para suas reuniões baseado no número de convidados e suas preferências.

## ✨ Funcionalidades

- **Geração Inteligente de Cardápio**: Cria automaticamente cardápios diversos de carnes baseado no número de convidados
- **Preferências Personalizáveis**: 
  - Níveis de orçamento (Baixo, Médio, Alto)
  - Opções de variedade (Mínima, Moderada, Extensa)
  - Dificuldade de preparo (Fácil, Médio, Difícil)
  - Restrições alimentares (Sem Porco, Sem Carne Bovina, Sem Frutos do Mar)
- **Base de Dados Completa de Carnes**: 18 tipos diferentes de carnes em 6 categorias
  - Carne Bovina (Brisket, Costelas, Bife, Hambúrgueres)
  - Porco (Paleta, Costelas, Costeletas, Bacon)
  - Frango (Peito, Coxas, Asas, Frango Inteiro)
  - Cordeiro (Costeletas, Paleta)
  - Peixe (Salmão, Atum)
  - Frutos do Mar (Camarão, Vieiras)
- **Cálculos Detalhados**:
  - Tamanhos de porção por pessoa
  - Peso total necessário
  - Estimativas de custo
  - Tempos de cozimento
  - Classificações de dificuldade
- **Interface Bonita**: Design moderno e responsivo com controles intuitivos
- **Dicas de Cozimento**: Orientação útil para preparação e segurança alimentar

## 🚀 Como Começar

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositório>
cd meat-measure
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra seu navegador e navegue para `http://localhost:5173`

### Construindo para Produção

```bash
npm run build
```

## 📱 Como Usar

1. **Insira os Detalhes da Festa**: Digite o número de convidados que participarão da sua festa
2. **Defina as Preferências**: Escolha seu nível de orçamento, variedade desejada, dificuldade de preparo e quaisquer restrições alimentares
3. **Gere o Cardápio**: Clique em "Gerar Cardápio" para criar uma seleção personalizada de carnes
4. **Revise os Resultados**: Veja o detalhamento completo incluindo:
   - Resumo com custo total, peso e tempo de cozimento
   - Itens individuais de carne com quantidades e custos
   - Dicas de cozimento e informações de segurança
5. **Regenere**: Use o botão "Regenerar" para criar um novo cardápio com as mesmas preferências

## 🍖 Categorias de Carne e Porções

O aplicativo inclui tamanhos de porção e preços realistas para vários tipos de carne:

- **Carne Bovina**: 6-12 oz por pessoa (dependendo do corte)
- **Porco**: 4-12 oz por pessoa
- **Frango**: 6-12 oz por pessoa
- **Cordeiro**: 8-10 oz por pessoa
- **Peixe**: 6-8 oz por pessoa
- **Frutos do Mar**: 4-6 oz por pessoa

## 🛠️ Detalhes Técnicos

- **Framework**: React 19 com TypeScript
- **Ferramenta de Build**: Vite
- **Estilização**: CSS com design responsivo
- **Arquitetura**: Baseada em componentes com funções utilitárias
- **Gerenciamento de Dados**: Dados estáticos com utilitários de cálculo
- **Idioma**: Português (Brasil) com formatação localizada (BRL, kg, etc.)

### Estrutura do Projeto

```
src/
├── components/
│   ├── PartyPlanner.tsx      # Interface principal de planejamento
│   ├── PartyPlanner.css      # Estilização do planejador
│   ├── MenuDisplay.tsx       # Exibição dos resultados do cardápio
│   └── MenuDisplay.css       # Estilização do menu
├── data/
│   └── meatData.ts           # Base de dados de carnes
├── types/
│   └── meat.ts               # Interfaces TypeScript
├── utils/
│   └── calculations.ts       # Funções utilitárias de cálculo
├── i18n/
│   ├── I18nContext.tsx       # Contexto de internacionalização
│   └── translations/
│       └── pt-BR.ts          # Traduções em português
├── App.tsx                   # Componente principal do app
└── main.tsx                  # Ponto de entrada do app
```

## 🎯 Funcionalidades Principais Explicadas

### Geração Inteligente de Cardápio
O aplicativo usa algoritmos inteligentes para:
- Filtrar carnes baseado em preferências e restrições
- Garantir variedade entre diferentes categorias de carne
- Calcular quantidades apropriadas com 20% de margem para variedade
- Otimizar para restrições de orçamento mantendo qualidade

### Design Responsivo
- Funciona perfeitamente em desktop, tablet e dispositivos móveis
- Layouts adaptativos que se ajustam ao tamanho da tela
- Controles amigáveis ao toque para usuários móveis

### Cálculos Realistas
- Tamanhos de porção baseados em recomendações padrão
- Estimativas de preço usando taxas atuais de mercado
- Tempos de cozimento para planejamento adequado de refeições
- Classificações de dificuldade para ajudar na preparação

## 🤝 Contribuindo

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/feature-incrivel`)
3. Commit suas mudanças (`git commit -m 'Adiciona feature incrível'`)
4. Push para a branch (`git push origin feature/feature-incrivel`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.

## 🙏 Agradecimentos

- Recomendações de porção de carne baseadas nas diretrizes do USDA
- Tempos de cozimento e classificações de dificuldade de melhores práticas culinárias
- Estimativas de preço baseadas em médias atuais de mercado
