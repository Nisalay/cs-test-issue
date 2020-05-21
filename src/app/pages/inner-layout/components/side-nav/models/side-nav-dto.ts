import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener } from '@angular/material/tree';

export interface NodeOptionsDTO {
  expandable: boolean;
  name: string;
  level: number;
}

export type TreeControl = FlatTreeControl<NodeOptionsDTO>
export type TreeFlattener = MatTreeFlattener<SideNavItemDTO, NodeOptionsDTO>
