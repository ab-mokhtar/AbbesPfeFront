import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }
  private objectSource = new Subject<string>();
  object$ = this.objectSource.asObservable();

  setObject(object: string) {
    this.objectSource.next(object);
  }
}
