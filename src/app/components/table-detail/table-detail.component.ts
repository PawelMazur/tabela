import { AfterViewInit, ContentChild, OnInit } from '@angular/core';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { TableVirtualScrollDataSource } from 'ng-table-virtual-scroll';
import { Observable } from 'rxjs';
import { Column } from '../../table-column/column';


@Component({
  selector: 'app-table-detail',
  templateUrl: './table-detail.component.html',
  styleUrls: ['./table-detail.component.scss'],
})
export class TableDetailComponent implements OnInit, AfterViewInit {

  @ContentChild(MatPaginator) paginator!: MatPaginator;
  @Output() completed = new EventEmitter();
  @Input() tableData!: Observable<Array<any>>;
  @Input() pageSizeOptions!: Array<number>;
  @Input() pageSize!: number;
  @Input() tableColumns: Array<Column> = [];

  dataSource = new TableVirtualScrollDataSource();
  displayedColumns: Array<string> = [];

  isLoaded: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.displayedColumns = this.tableColumns.map((c) => c.columnDef);
    this.tableData.subscribe(data => {
      this.dataSource.data = data;
      this.isLoaded = true;
      this.completed.emit();
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
