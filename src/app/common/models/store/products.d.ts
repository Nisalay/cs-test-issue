/**
 * Параметры для получения продуктов
 * @property categoryName - Код категории продукта (dresses, sneakers)
 */
declare interface ReadProductsDTO {
  categoryName: string;
}

/**
 * Параметры для удаления продукта
 * @property id - id - продукта
 */
declare interface DeleteProductDTO {
  id: string;
}
