declare type StoreStateDTO<T> = { pending: boolean; data: T };

interface State {
  products: ProductDTO[],
  sideNav: SideNavItemDTO[]
}

declare type AppState = { [P in keyof State]: StoreStateDTO<State[P]> }
