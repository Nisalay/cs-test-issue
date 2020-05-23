/**
 * Мок бокового меню
 */
export const sideNavMock: SideNavItemDTO[] = [
  {
    name: 'Мужчины',
    code: 'male',
    children: [
      {
        name: 'Обувь',
        code: 'shoes',
        children: [
          {
            name: 'Кроссовки',
            code: 'sneakers'
          }
        ]
      }
    ]
  },
  {
    name: 'Женщины',
    code: 'female',
    children: [
      {
        name: 'Одежда',
        code: 'clothes',
        children: [
          {
            name: 'Платья',
            code: 'dresses',
          }
        ]
      }
    ]
  }
];
