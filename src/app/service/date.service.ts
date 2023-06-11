import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from './user-storage.service';

const BASIC_URL = 'api/Date/';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  constructor(private http: HttpClient) { }


  newDate(Date: any): Observable<any> {
    console.log(Date);
    console.log(this.createdAuthorizationHeader());
    return this.http.post(BASIC_URL + `newDate/${UserStorageService.getUserId()}`, Date, {
      headers: this.createdAuthorizationHeader(),
    });
  }


  createdAuthorizationHeader(): HttpHeaders {
    let authHeader: HttpHeaders = new HttpHeaders();
    return authHeader.set(
      "Authorization",
      "Bearer " + UserStorageService.getToken()
    )
  }
}
