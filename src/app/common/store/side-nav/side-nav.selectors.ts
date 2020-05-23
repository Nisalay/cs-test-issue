import { createSelector } from "@ngrx/store";

const selectSideNavStore = (state: AppState) => state.sideNav;

export const selectSideNav = createSelector(
  selectSideNavStore,
  (state: AppState['sideNav']) => state.data
)

/**
 * Селекттор для получения выбранного элемента меню по коду продукта
 * Используется рекурсия функции getChild
 * Производит поиск в полном списке меню
 */
export const selectSideNavItem = createSelector(
  selectSideNavStore,
  selectSideNav,
  (state: AppState['sideNav'], items: SideNavItemDTO[]) => {
    const { selectedItemCode } = state;
    /**
     * Найденный элемент меню
     */
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
