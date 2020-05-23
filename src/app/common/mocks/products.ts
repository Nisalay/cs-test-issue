/**
 * Мок для получения продуктов
 * На уровне сервиса, фильтруется по категории
 */
export const productsMock: { [categoryName: string]: ProductDTO[] } = {
  sneakers: [
    {
      id: '1',
      name: 'Adidas Yeezy Boost 2',
      size: '42',
      price: 1500
    },
    {
      id: '2',
      name: 'Reebok Classic',
      size: '42',
      price: 1500
    },
    {
      id: '3',
      name: 'Nike React 7.0',
      size: '42',
      price: 1500
    }
  ],
  dresses: [
    {
      id: '1',
      name: 'GIORGIO ARMANI',
      size: 'S',
      price: 2500
    },
    {
      id: '2',
      name: 'BOTTEGA VENETA',
      size: 'L',
      price: 2100
    },
    {
      id: '3',
      name: 'OSCAR DE LA RENTA',
      size: 'XS',
      price: 3500
    }
  ]
}
