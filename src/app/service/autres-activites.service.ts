import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from './user-storage.service';
const BASIC_URL = "api/AutresActivites/";

@Injectable({
  providedIn: 'root'
})
export class AutresActivitesService {
  constructor(private http: HttpClient) { }

  createAutresActivites(AutresActivites: any) {
    return this.http.post(BASIC_URL + `/createAutresActivites/${UserStorageService.getUserId()}`, AutresActivites, {
      headers: this.createdAuthorizationHeader(),
    });
  }

  getAllAutresActivites(): Observable<any> {
    return this.http.get(BASIC_URL + `/getAllAutresActivites`, {
      headers: this.createdAuthorizationHeader(),
    });
  }

  deleteAutresActivites(id: any): Observable<any> {
    return this.http.delete(BASIC_URL + `deleteAutresActivites/${id}`, {
      headers: this.createdAuthorizationHeader(),
    });
  }

  getAutresActivitesById(id: any): Observable<any> {
    return this.http.get(BASIC_URL + `getAutresActivitesById/${id}`, {
      headers: this.createdAuthorizationHeader(),
    });
  }

  updateAutresActivites(id: any, AutresActivites: any) {
    return this.http.put(BASIC_URL + `updateAutresActivites/${id}`, AutresActivites, {
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
