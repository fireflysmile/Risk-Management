import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input, OnDestroy,
  OnInit,
  Output, QueryList,
  Renderer2,
  ViewChild, ViewChildren
} from '@angular/core';

import { getElement } from '@utils/element.util';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T> implements OnInit, AfterViewInit, OnDestroy {
  // loading state
  @Input() loading = false;
  // no select and sort state
  @Input() isNoSelectAndSortFlag = false;
  // select all state
  @Input() selectAll = false;
  // use sort
  @Input() useSort = true;
  // total column length
  @Input() set totalColumnLength(length: number) {
    this.totalColumns = [];

    for (let i = 0; i < length; i++) {
      this.totalColumns.push(i);
    }
  }
  // set data
  @Input() set data(data: T[]) {
    this._data = data;
    this.changeDetectorRef.detectChanges();
    this._calculatesTable();
    this._timers.push(setTimeout(() => this._calculatesTable()));
  }
  // set columns
  @Input() set columns(columns: []) {
    this._columns = columns || [];
    this.changeDetectorRef.detectChanges();
    this._calculatesTable();
    this._timers.push(setTimeout(() => this._calculatesTable()));
  }
  // select all change
  @Output() selectAllChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  // data table header
  @ViewChild('dataTable') dataTableRef: ElementRef<HTMLTableElement>;
  // selection table header
  @ViewChild('selectionTable') selectionTableRef: ElementRef<HTMLTableElement>;
  // corner table
  @ViewChild('cornerTable') cornerTableRef: ElementRef<HTMLTableElement>;
  // table container
  @ViewChild('tableContainer') tableContainerRef: ElementRef<HTMLElement>;
  // static header
  @ViewChild('staticHeader') staticHeaderRef: ElementRef<HTMLElement>;
  // static column
  @ViewChild('staticColumn') staticColumnRef: ElementRef<HTMLElement>;
  // static corner
  @ViewChild('staticCorner') staticCornerRef: ElementRef<HTMLElement>;
  // total columns
  totalColumns: number[] = [];
  // scroll left
  scrollLeft = 0;
  // container width
  containerWidth = 0;
  // data
  private _data: T[] = [];
  // table columns
  private _columns: [];
  // timers
  private _timers: number[] = [];
  // display timer
  private _displayTimer;
  // instrument types constants
  instrumentTypes: {};

  constructor(
    private renderer: Renderer2,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
    this._setStaticTablePositions = this._setStaticTablePositions.bind(this);
    this.instrumentTypes = {
      'Cash': [],
      'Non-Cash': []
    };
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this._setContainerWidth();
    this._setScrollEvent();
    this._calculatesTable();
  }

  ngOnDestroy(): void {
    this._removeScrollEvent();
    this._timers.forEach(timer => clearTimeout(timer));
    clearTimeout(this._displayTimer);
  }

  /**
   * return data
   */
  get data(): T[] {
    return this._data;
  }

  /**
   * return columns
   */
  get columns(): [] {
    return this._columns;
  }

  /**
   * set container width
   */
  private _setContainerWidth(): void {
    const tableContainer = getElement(this.tableContainerRef);

    this.containerWidth = tableContainer.offsetWidth;
    this.changeDetectorRef.detectChanges();
  }

  /**
   * set scroll event
   */
  private _setScrollEvent(): void {
    const tableContainer = getElement(this.tableContainerRef);
    tableContainer.addEventListener('scroll', this._setStaticTablePositions);
  }

  /**
   * remove scroll event
   */
  private _removeScrollEvent(): void {
    const tableContainer = getElement(this.tableContainerRef);
    if (tableContainer) {
      tableContainer.removeEventListener('scroll', this._setStaticTablePositions);
    }
  }

  /**
   * calculate row heights
   */
  private _calculateRowHeights(): void {
    const dataTable = getElement(this.dataTableRef);
    const selectionTable = getElement(this.selectionTableRef);
    const cornerTable = getElement(this.cornerTableRef);

    dataTable.querySelectorAll('tr').forEach((row, index) => {
      const height = row.offsetHeight + 'px';
      const selectionRow = selectionTable.querySelectorAll('tr')[index];

      if (selectionRow) {
        this.renderer.setStyle(selectionRow, 'height', height);
      }

      const cornerRow = cornerTable.querySelectorAll('tr')[index];

      if (cornerRow) {
        this.renderer.setStyle(cornerRow, 'height', height);
      }
    });

    const firstHeaderHeight = (dataTable.querySelector('thead tr:first-child') as HTMLElement).offsetHeight;

    dataTable.querySelectorAll('thead tr:last-child th').forEach(header => {
      this.renderer.setStyle(header, 'top', firstHeaderHeight + 'px');
    });

    this.changeDetectorRef.detectChanges();
  }

  /**
   * calculate header/corner column widths
   */
  private _calculateColumnWidths(): void {
    const dataTable = getElement(this.dataTableRef);
    const staticHeader = getElement(this.staticHeaderRef);
    const staticColumn = getElement(this.staticColumnRef);
    const staticCorner = getElement(this.staticCornerRef);

    dataTable.querySelectorAll('tr:nth-child(1) th').forEach((column, index) => {
      if (column.classList.contains('cm-fake-column')) {
        return;
      }

      const width = (column as HTMLElement).offsetWidth + 'px';

      const staticHeaderCell = staticHeader.querySelector(`tr:nth-child(1) th:nth-child(${index + 1})`);

      this.renderer.setStyle(staticHeaderCell, 'width', width);

      const staticColumnCell = staticColumn.querySelector(`tr:nth-child(1) th:nth-child(${index + 1})`);

      if (staticColumnCell) {
        this.renderer.setStyle(staticColumnCell, 'width', width);
      }

      this.renderer.setStyle(staticColumn, 'width', width);

      const staticCornerCell = staticCorner.querySelector(`tr:nth-child(1) th:nth-child(${index + 1})`);

      if (staticCornerCell) {
        this.renderer.setStyle(staticCornerCell, 'width', width);
      }

      this.renderer.setStyle(staticCorner, 'width', width);
    });
  }

  /**
   * calculate table properties
   */
  private _calculatesTable(): void {
    this._calculateRowHeights();
    this._calculateColumnWidths();
    this._setStaticTablePositions();
    this.changeDetectorRef.detectChanges();
  }

  /**
   * listen window resize to calculate heights
   */
  @HostListener('window:resize')
  onWindowResize(): void {
    this._calculatesTable();
    this._timers.push(setTimeout(() => this._calculatesTable()));
  }

  /**
   * set static table positions
   */
  private _setStaticTablePositions(): void {
    const tableContainer = getElement(this.tableContainerRef);
    const staticHeader = getElement(this.staticHeaderRef);
    const staticColumn = getElement(this.staticColumnRef);
    const staticCorner = getElement(this.staticCornerRef);

    this.scrollLeft = tableContainer.scrollLeft;
    this.containerWidth = tableContainer.offsetWidth;
    this.changeDetectorRef.detectChanges();

    clearTimeout(this._displayTimer);
  }

  setHeaderZIndex(header: HTMLTableHeaderCellElement, index: number): void {
    this.renderer.setStyle(header, 'z-index', index);
  }
}