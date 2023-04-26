import { Component } from '@angular/core';
import { UsersService } from './service/users.service';
import { Observable, delay } from 'rxjs';
import { User } from './models/user.model';
import { Column } from './table-column/column';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';
  dataSource!: Observable<User[]>;

  tableColumns: Array<Column> = [
    { columnDef: 'name', header: 'Name', cell: (element: Record<string, any>) => element['name'] },
    { columnDef: 'symbol', header: 'Symbol', cell: (element: Record<string, any>) => element['symbol'] },
    { columnDef: 'description', header: 'Description', cell: (element: Record<string, any>) => element['description'] },
    { columnDef: 'type', header: 'Type', cell: (element: Record<string, any>) => element['type'] },
  ];


  pageSizeOptions = [10, 25, 50, 100];
  pageSize!: number;


  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
    this.pageSize = 5;
  }

  getUsers() {
    this.dataSource = this.userService.getUsers().pipe(delay(5000));
  }

  onComplete() {
    console.log('loaded');
  }
}
