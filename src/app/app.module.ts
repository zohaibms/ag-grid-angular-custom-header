import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';

@NgModule({
  imports: [BrowserModule, FormsModule, AgGridModule, HttpClientModule],
  providers: [
    DataService 
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
