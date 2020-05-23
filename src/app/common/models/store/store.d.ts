/**
 * Тип хранимых данных в Store
 * @template T - Тип сущности Store
 * @property pending - идентификатор загрузки
 * @property data - данные сущности
 * @property [error] - ошибка. Заполняется в случае если запрос вернул ошибку
 */
declare type StoreStateDTO<T> = {
  pending: boolean;
  data: T;
  error?: StateErrorDTO;
};

/**
 * Тип ошибки возвращаемой сервисами
 * @property details - текст ошибки
 */
declare interface StateErrorDTO {
  details: string;
}

/**
 * Описание Store
 * @property products - список продуктов (хранятся только активные)
 * @property sideNav - пункты меню
 * @property sideNav.selectedItemCode - выбранный пункт меню
 * @property login - данные авторизации
 */
declare interface AppState {
  products: StoreStateDTO<ProductDTO[]>,
  sideNav: StoreStateDTO<SideNavItemDTO[]> & {
    selectedItemCode: string;
  };
  login: StoreStateDTO<LoginDTO>
}

/**
 * Данные, возвращаемые action в эффектах
 * @template T - данные передаваемые в action
 * @property type - Тип action. Добавляется автоматически сторой
 */
declare type ActionPayloadDTO<T> = T & { type: string; }
