import { createSelector } from "@ngrx/store";

const selectSideNavStore = (state: AppState) => state.sideNav;

export const selectSideNav = createSelector(
  selectSideNavStore,
  (state: AppState['sideNav']) => state.data
)

export const selectSideNavItem = createSelector(
  selectSideNavStore,
  selectSideNav,
  (state: AppState['sideNav'], items: SideNavItemDTO[]) => {
    const { selectedItemCode } = state;
    let found: SideNavItemDTO;
    const getChild = <T extends SideNavItemDTO>(item: T, code: string): T => {
      if (item.code !== code) {
        if (item.children) {
          item.children.forEach(el => getChild(el, code))
        }
      } else {
        found = item
        return
      }
    }

    items?.forEach(item => getChild(item, selectedItemCode));
    return found
  }
)
