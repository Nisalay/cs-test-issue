declare type StoreStateDTO<T> = {
  pending: boolean;
  data: T;
  error?: StateErrorDTO;
};

declare interface StateErrorDTO {
  details: string;
}

declare interface AppState {
  products: StoreStateDTO<ProductDTO[]>,
  sideNav: StoreStateDTO<SideNavItemDTO[]> & {
    selectedItemCode: string;
  };
  login: StoreStateDTO<LoginDTO>
}

declare type ActionPayloadDTO<T> = T & { type: string; }
