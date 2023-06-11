import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private disableMatInputsSubject = new BehaviorSubject<boolean>(false);
  disableMatInputs$ = this.disableMatInputsSubject.asObservable();

  setDisableMatInputs(disabled: boolean): void {
    this.disableMatInputsSubject.next(disabled);
  }
}
