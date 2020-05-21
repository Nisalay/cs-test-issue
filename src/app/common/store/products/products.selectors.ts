import { createSelector } from "@ngrx/store";

const selectProductsStore = (state: AppState) => state.products;

export const selectProducts = createSelector(
  selectProductsStore,
  (state: StoreStateDTO<ProductDTO[]>) => state.data
)
