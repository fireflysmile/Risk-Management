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
  // root path
  private readonly _rootPath = '/';

  constructor() {
    console.log(this._rootPath);
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
  }

  ngOnInit() {
  }
}
