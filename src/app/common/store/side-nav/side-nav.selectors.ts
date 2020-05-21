import { createSelector } from "@ngrx/store";

const selectSideNavStore = (state: AppState) => state.sideNav;

export const selectSideNav = createSelector(
  selectSideNavStore,
  (state: StoreStateDTO<SideNavItemDTO[]>) => state.data
)
