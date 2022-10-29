import { Component, ElementRef, ViewChild } from '@angular/core';
import { IHeaderAngularComp } from 'ag-grid-angular';
import { IHeaderParams } from 'ag-grid-community';
import { Subject } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-custom-header',
  templateUrl: './grid-header.component.html',
})
export class GridHeader implements IHeaderAngularComp {
  public params!: IHeaderParams;
  

   constructor(public dataService:DataService){

   }

  agInit(params: IHeaderParams): void {
    this.params = params;
    console.log(params);
  
  }

  onSelectionChange(deviceValue) {
    //console.log(deviceValue);
    this.dataService.selectionMade$.next(deviceValue);
  }

  refresh(params: IHeaderParams) {
    return false;
  }
}
