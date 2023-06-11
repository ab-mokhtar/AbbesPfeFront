import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from './user-storage.service';

const BASIC_URL = "http://localhost:8088/api/v1/Commentaire";
@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  constructor(private http: HttpClient) { }

  createCommentaire(Commentaire: any) {
    return this.http.post(BASIC_URL + `/createCommentaire/${UserStorageService.getUserId()}`, Commentaire, {
      headers: this.createdAuthorizationHeader(),
    });
  }

  getAllCommentaire(): Observable<any> {
    return this.http.get(BASIC_URL + `/getAllCommentaire`, {
      headers: this.createdAuthorizationHeader(),
    });
  }

  deleteCommentaire(id: any): Observable<any> {
    return this.http.delete(BASIC_URL + `deleteCommentaire/${id}`, {
      headers: this.createdAuthorizationHeader(),
    });
  }

  getCommentaireById(id: any): Observable<any> {
    return this.http.get(BASIC_URL + `getCommentaireById/${id}`, {
      headers: this.createdAuthorizationHeader(),
    });
  }

  updateCommentaire(id: any, Commentaire: any) {
    return this.http.put(BASIC_URL + `updateCommentaire/${id}`, Commentaire, {
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


