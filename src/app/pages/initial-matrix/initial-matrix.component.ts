import { Component, OnInit } from '@angular/core';
import { STEP } from '@configs/constants';
import { Router } from '@angular/router';
@Component({
  selector: 'app-initial-matrix',
  templateUrl: './initial-matrix.component.html',
  styleUrls: ['./initial-matrix.component.scss']
})
export class InitialMatrixComponent implements OnInit {
  step = STEP.INITIAL;

  matrixTypeList = [
    {
      value: 'new',
      label: 'Create new Matrix'
    },
    {
      value: 'existing',
      label: 'Use Existing Matrix'
    },
    {
      value: 'newExisting',
      label: 'Create new from Existing Matrix'
    }
  ];

  matrixType = 'new';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToStep(n: number): void {
    if (n < 2) {
      this.step = n + 1;
    } else {
      this.router.navigate(['/setup-matrix']);
    }
  }

}
