import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from './user-storage.service';

const BASIC_URL = "api/Evolution/";

@Injectable({
  providedIn: 'root'
})
export class EvolutionService {
  constructor(private http: HttpClient) { }

  createEvolution(Evolution: any) {
    return this.http.post(BASIC_URL + `/createEvolution/${UserStorageService.getUserId()}`, Evolution, {
      headers: this.createdAuthorizationHeader(),
    });
  }

  getAllEvolution(): Observable<any> {
    return this.http.get(BASIC_URL + `/getAllEvolution`, {
      headers: this.createdAuthorizationHeader(),
    });
  }

  deleteEvolution(id: any): Observable<any> {
    return this.http.delete(BASIC_URL + `deleteEvolution/${id}`, {
      headers: this.createdAuthorizationHeader(),
    });
  }

  getEvolutionById(id: any): Observable<any> {
    return this.http.get(BASIC_URL + `getEvolutionById/${id}`, {
      headers: this.createdAuthorizationHeader(),
    });
  }

  updateEvolution(id: any, Evolution: any) {
    return this.http.put(BASIC_URL + `updateEvolution/${id}`, Evolution, {
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
