import type { MeatType } from '../types/meat';

export const meatTypes: MeatType[] = [
  // Beef
  {
    id: 'beef-brisket',
    name: 'Beef Brisket',
    category: 'beef',
    portionPerPerson: 8, // 8 oz per person
    pricePerPound: 12.99,
    description: 'Slow-cooked, tender beef brisket perfect for BBQ parties',
    cookingTime: 480, // 8 hours
    difficulty: 'hard'
  },
  {
    id: 'beef-ribs',
    name: 'Beef Ribs',
    category: 'beef',
    portionPerPerson: 12, // 12 oz per person
    pricePerPound: 15.99,
    description: 'Meaty beef ribs with rich flavor',
    cookingTime: 360, // 6 hours
    difficulty: 'medium'
  },
  {
    id: 'beef-steak',
    name: 'Beef Steak (Ribeye)',
    category: 'beef',
    portionPerPerson: 10, // 10 oz per person
    pricePerPound: 18.99,
    description: 'Premium ribeye steaks grilled to perfection',
    cookingTime: 15, // 15 minutes
    difficulty: 'medium'
  },
  {
    id: 'beef-burger',
    name: 'Beef Burger Patties',
    category: 'beef',
    portionPerPerson: 6, // 6 oz per person
    pricePerPound: 8.99,
    description: 'Juicy beef burger patties for casual dining',
    cookingTime: 10, // 10 minutes
    difficulty: 'easy'
  },

  // Pork
  {
    id: 'pork-shoulder',
    name: 'Pork Shoulder',
    category: 'pork',
    portionPerPerson: 8, // 8 oz per person
    pricePerPound: 6.99,
    description: 'Pulled pork shoulder for sandwiches and tacos',
    cookingTime: 420, // 7 hours
    difficulty: 'medium'
  },
  {
    id: 'pork-ribs',
    name: 'Pork Ribs',
    category: 'pork',
    portionPerPerson: 12, // 12 oz per person
    pricePerPound: 9.99,
    description: 'BBQ pork ribs with fall-off-the-bone tenderness',
    cookingTime: 300, // 5 hours
    difficulty: 'medium'
  },
  {
    id: 'pork-chops',
    name: 'Pork Chops',
    category: 'pork',
    portionPerPerson: 8, // 8 oz per person
    pricePerPound: 7.99,
    description: 'Thick-cut pork chops with herbs and spices',
    cookingTime: 20, // 20 minutes
    difficulty: 'easy'
  },
  {
    id: 'pork-bacon',
    name: 'Bacon',
    category: 'pork',
    portionPerPerson: 4, // 4 oz per person
    pricePerPound: 8.99,
    description: 'Crispy bacon for appetizers or sides',
    cookingTime: 15, // 15 minutes
    difficulty: 'easy'
  },

  // Chicken
  {
    id: 'chicken-breast',
    name: 'Chicken Breast',
    category: 'chicken',
    portionPerPerson: 6, // 6 oz per person
    pricePerPound: 5.99,
    description: 'Lean chicken breast, versatile and healthy',
    cookingTime: 25, // 25 minutes
    difficulty: 'easy'
  },
  {
    id: 'chicken-thighs',
    name: 'Chicken Thighs',
    category: 'chicken',
    portionPerPerson: 8, // 8 oz per person
    pricePerPound: 4.99,
    description: 'Juicy chicken thighs with crispy skin',
    cookingTime: 35, // 35 minutes
    difficulty: 'easy'
  },
  {
    id: 'chicken-wings',
    name: 'Chicken Wings',
    category: 'chicken',
    portionPerPerson: 6, // 6 oz per person
    pricePerPound: 6.99,
    description: 'Crispy chicken wings with various sauces',
    cookingTime: 30, // 30 minutes
    difficulty: 'easy'
  },
  {
    id: 'whole-chicken',
    name: 'Whole Chicken',
    category: 'chicken',
    portionPerPerson: 12, // 12 oz per person
    pricePerPound: 3.99,
    description: 'Roasted whole chicken for family-style dining',
    cookingTime: 90, // 90 minutes
    difficulty: 'medium'
  },

  // Lamb
  {
    id: 'lamb-chops',
    name: 'Lamb Chops',
    category: 'lamb',
    portionPerPerson: 8, // 8 oz per person
    pricePerPound: 16.99,
    description: 'Tender lamb chops with mint and herbs',
    cookingTime: 20, // 20 minutes
    difficulty: 'medium'
  },
  {
    id: 'lamb-shoulder',
    name: 'Lamb Shoulder',
    category: 'lamb',
    portionPerPerson: 10, // 10 oz per person
    pricePerPound: 12.99,
    description: 'Slow-roasted lamb shoulder with Mediterranean flavors',
    cookingTime: 360, // 6 hours
    difficulty: 'hard'
  },

  // Fish
  {
    id: 'salmon',
    name: 'Salmon Fillets',
    category: 'fish',
    portionPerPerson: 6, // 6 oz per person
    pricePerPound: 14.99,
    description: 'Fresh salmon fillets with lemon and herbs',
    cookingTime: 15, // 15 minutes
    difficulty: 'easy'
  },
  {
    id: 'tuna',
    name: 'Tuna Steaks',
    category: 'fish',
    portionPerPerson: 8, // 8 oz per person
    pricePerPound: 18.99,
    description: 'Fresh tuna steaks seared to perfection',
    cookingTime: 8, // 8 minutes
    difficulty: 'medium'
  },

  // Seafood
  {
    id: 'shrimp',
    name: 'Shrimp',
    category: 'seafood',
    portionPerPerson: 4, // 4 oz per person
    pricePerPound: 12.99,
    description: 'Large shrimp grilled or sautéed',
    cookingTime: 5, // 5 minutes
    difficulty: 'easy'
  },
  {
    id: 'scallops',
    name: 'Sea Scallops',
    category: 'seafood',
    portionPerPerson: 6, // 6 oz per person
    pricePerPound: 24.99,
    description: 'Fresh sea scallops seared with butter',
    cookingTime: 6, // 6 minutes
    difficulty: 'medium'
  }
];

export const getMeatByCategory = (category: MeatType['category']) => {
  return meatTypes.filter(meat => meat.category === category);
};

export const getMeatById = (id: string) => {
  return meatTypes.find(meat => meat.id === id);
}; 