import { createSelector } from "@ngrx/store";

const selectProductsStore = (state: AppState) => state.products;

export const selectProducts = createSelector(
  selectProductsStore,
  (state: AppState['products']) => state.data
)

export const selectPending = createSelector(
  selectProductsStore,
  (state: AppState['products']) => state.pending
)
