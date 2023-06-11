import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from './user-storage.service';
const BASIC_URL = "/api/RessourceLivraison";
@Injectable({
  providedIn: 'root'
})
export class RessourceLivraisonService {
  constructor(private http: HttpClient) { }

  createRessourceLivraison(RessourceLivraison: any) {
    return this.http.post(BASIC_URL + `/createRessourceLivraison/${UserStorageService.getUserId()}`, RessourceLivraison, {
      headers: this.createdAuthorizationHeader(),
    });
  }

  getAllRessourceLivraison(): Observable<any> {
    return this.http.get(BASIC_URL + `/getAllRessourceLivraison`, {
      headers: this.createdAuthorizationHeader(),
    });
  }

  deleteRessourceLivraison(id: any): Observable<any> {
    return this.http.delete(BASIC_URL + `deleteRessourceLivraison/${id}`, {
      headers: this.createdAuthorizationHeader(),
    });
  }

  getRessourceLivraisonById(id: any): Observable<any> {
    return this.http.get(BASIC_URL + `getRessourceLivraisonById/${id}`, {
      headers: this.createdAuthorizationHeader(),
    });
  }

  updateRessourceLivraison(id: any, RessourceLivraison: any) {
    return this.http.put(BASIC_URL + `updateRessourceLivraison/${id}`, RessourceLivraison, {
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




