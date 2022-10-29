import { Component, OnInit, ViewChild } from '@angular/core';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { Subject } from 'rxjs';
import { DataService } from './data.service';
import { GridHeader } from './grid-header/grid-header.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
  @ViewChild('customButton') customButton: GridHeader;

  public columnDefs: ColDef[] = [
    { field: 'make', sortable: false },
    { field: 'model', sortable: false },
    { field: 'price', sortable: false },
  ];

  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 100,
    sortable: true,
    resizable: true,
  };
 

  public rowData!: IData[];
  selection$: Subject<string> = new Subject<string>();

  public components = {
    agColumnHeader: GridHeader,
  };

  constructor(public dataService:DataService) {}
ngOnInit(): void {
  this.dataService.selectionMade$.subscribe((e)=>{
    console.log(e);
  })
}

  onGridReady(params: GridReadyEvent<IData>) {
  
    

    this.rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 },
    ];
  }
  
   
}

export interface IData {
  make: string;
  model: string;
  price: number;
}
