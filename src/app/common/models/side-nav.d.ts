declare interface SideNavItemDTO {
  name: string;
  code: string;
  children?: SideNavItemDTO[];
}
