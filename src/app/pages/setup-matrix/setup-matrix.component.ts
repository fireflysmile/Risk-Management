import { Component, OnInit } from '@angular/core';
import { TabRouterItem } from '@components/tab-router/tab-router.component';

@Component({
  selector: 'app-setup-matrix',
  templateUrl: './setup-matrix.component.html',
  styleUrls: ['./setup-matrix.component.scss']
})
export class SetupMatrixComponent implements OnInit {
  // routes
  routes: TabRouterItem[] = [];
  subRoutes: TabRouterItem[] = [];
  // root path
  // tslint:disable-next-line:variable-name
  private readonly _rootPath = '/';
  // tslint:disable-next-line:variable-name
  private readonly _rootSubPath = '/setup-matrix';

  constructor() {
    this.routes = [
      {
        label: 'Set Up Matrix',
        route: [this._rootPath, 'setup-matrix'],
      },
      {
        label: 'Review Matrix',
        route: [this._rootPath , 'review-matrix'],
      },
      {
        label: 'Set Up Risk Register Table',
        route: [this._rootPath , 'setup-Table'],
      },
      {
        label: 'Review Risk Register Table',
        route: [this._rootPath , 'review-Table'],
      },
    ];
    this.subRoutes = [
      {
        label: 'Set Up Matrix',
        route: [this._rootSubPath],
      },
      {
        label: 'Set Up Matrix',
        route: [this._rootSubPath , 'two'],
      },
      {
        label: 'Set Up Matrix',
        route: [this._rootSubPath , 'three'],
      },
      {
        label: 'Set Up Matrix',
        route: [this._rootSubPath , 'for'],
      },
    ];
  }

  ngOnInit(): void {
  }

  setMatrix(e): void {
    console.log(e);
  }
}
