import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener } from '@angular/material/tree';

/**
 * Данные элемента MatTree
 * @property expandable - раскрываемый ли
 * @property name - отображаемое название
 * @property code - код продукта
 * @property level - уровень вложенности
 */
export interface NodeOptionsDTO {
  expandable: boolean;
  name: string;
  code: string;
  level: number;
}

export type TreeControl = FlatTreeControl<NodeOptionsDTO>
export type TreeFlattener = MatTreeFlattener<SideNavItemDTO, NodeOptionsDTO>
