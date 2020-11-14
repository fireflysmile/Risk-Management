import { Component, OnInit } from '@angular/core';
import { TabRouterItem } from '@components/tab-router/tab-router.component';
import { Ranks } from '@components/legend-table/legend-table.component';

@Component({
  selector: 'app-setup-matrix',
  templateUrl: './setup-matrix.component.html',
  styleUrls: ['./setup-matrix.component.scss']
})
export class SetupMatrixComponent implements OnInit {
  // routes
  routes: TabRouterItem[] = [];
  subRoutes: TabRouterItem[] = [];
  legend: Ranks[] = [];

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
    this.legend = [
      {
        label: 'Low',
        numberStart: 1,
        numberEnd: 2,
      },
      {
        label: 'Medium',
        numberStart: 3,
        numberEnd: 4,
      },
      {
        label: 'High',
        numberStart: 6,
        numberEnd: 9,
      },
    ];
  }

  ngOnInit(): void {}
}
