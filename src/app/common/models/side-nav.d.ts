/**
 * Данные элемента списка
 * @property name - отображаемое название
 * @property code - соответствующий код
 * @property children - дочерние элементы
 */
declare interface SideNavItemDTO {
  name: string;
  code: string;
  children?: SideNavItemDTO[];
}
