declare type StoreStateDTO<T> = { pending: boolean; data: T };

declare interface AppState {
  products: StoreStateDTO<ProductDTO[]>,
  sideNav: StoreStateDTO<SideNavItemDTO[]> & {
    selectedItemCode: string;
  }
}
