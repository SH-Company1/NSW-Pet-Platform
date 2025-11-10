export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export const MAIN_CATEGORIES: Category[] = [
  {
    id: 'pet_food',
    name: '펫푸드',
    icon: '🍖',
    color: '#FF9800',
  },
  {
    id: 'pet_supplies',
    name: '펫용품',
    icon: '🐾',
    color: '#2196F3',
  },
  {
    id: 'pet_service',
    name: '펫서비스',
    icon: '💊',
    color: '#4CAF50',
  },
  {
    id: 'pet_lifestyle',
    name: '펫라이프스타일',
    icon: '🏠',
    color: '#9C27B0',
  },
  {
    id: 'pet_entertainment',
    name: '펫 엔터',
    icon: '🎉',
    color: '#E91E63',
  },
  {
    id: 'pet_funeral',
    name: '펫 장례',
    icon: '💝',
    color: '#757575',
  },
];

