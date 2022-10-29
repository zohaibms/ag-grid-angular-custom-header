import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class DataService {
  public selectionMade$: Subject<string> = new Subject<string>();

  constructor() {}
}
