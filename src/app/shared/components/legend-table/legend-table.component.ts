import { Component, OnInit, Input } from '@angular/core';

export interface Ranks {
  // label
  label: string;
  // number
  numberStart: number;
  numberEnd: number;
}

@Component({
  selector: 'app-legend-table',
  templateUrl: './legend-table.component.html',
  styleUrls: ['./legend-table.component.scss']
})
export class LegendTableComponent implements OnInit {
  @Input() ranks: Ranks[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
