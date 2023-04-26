import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableDetailComponent } from './components/table-detail/table-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule} from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { ScrollingModule} from '@angular/cdk/scrolling';
import { MatTableModule} from '@angular/material/table';
import { TableVirtualScrollModule} from 'ng-table-virtual-scroll';

@NgModule({
  declarations: [
    AppComponent,
    TableDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatPaginatorModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    ScrollingModule,
    MatTableModule,
    TableVirtualScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
