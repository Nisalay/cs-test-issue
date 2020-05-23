/**
 * Данные о продукте
 * @property id - id продукта
 * @property name - название продукта
 * @property size - размер
 * @property price - стоимость
 */
declare interface ProductDTO {
  id: string;
  name: string;
  size: string;
  price: number;
}

/**
 * Данные поступаемые в модальное окно при изменении таблицы
 * @property event - название действия (добавить, изменить, удалить)
 * @property [data] - продукт
 */
declare interface EditTableDialogConfigDTO {
  event: 'add' | 'edit' | 'delete',
  data?: ProductDTO;
}
