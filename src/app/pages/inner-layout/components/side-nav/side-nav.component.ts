import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from "@angular/material/tree";
import { FlatTreeControl } from "@angular/cdk/tree";
import { ActivatedRoute, Router } from "@angular/router";
import { select, Store } from '@ngrx/store';
import { first, tap } from 'rxjs/operators';
import { NodeOptionsDTO, TreeControl, TreeFlattener } from './models/side-nav-dto';
import * as fromSelectors from '@app-common/store/selectors';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  /** данные для mat-tree */
  public dataSource: MatTreeFlatDataSource<SideNavItemDTO, NodeOptionsDTO>;
  public treeControl: TreeControl;
  private treeFlattener: TreeFlattener;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>,

  ) {
    this.treeControl = new FlatTreeControl<NodeOptionsDTO>(
      node => node.level,
      node => node.expandable
    )
    this.treeFlattener = new MatTreeFlattener(
      this.transformer,
      node => node.level,
      node => node.expandable,
      node => node.children
    );
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  }

  ngOnInit() {
    /** Получение текущего элемента списка */
    this.store
      .pipe(
        select(fromSelectors.sideNav.selectSideNav),
        first(),
        tap((sideNavItems: SideNavItemDTO[]) => this.dataSource.data = sideNavItems)
      )
      .subscribe()
  }

  public hasChild = (_: number, node: NodeOptionsDTO) => node.expandable;

  private transformer = (node: SideNavItemDTO, level: number): NodeOptionsDTO => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      code: node.code,
      level: level,
    };
  }

}
