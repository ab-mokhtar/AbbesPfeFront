import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  constructor(private http: HttpClient) { }

  motpasseoub(user: string): Observable<HttpResponse<any>> {
    return this.http.post<any>("http://localhost:8088/mdpoub", user, { observe: 'response' });
  }
}
