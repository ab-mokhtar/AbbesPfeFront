import { Injectable } from '@angular/core';
import { UserStorageService } from './user-storage.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IEvent } from '../Model/event.model';
const BASIC_URL = "http://localhost:8080/api/Planning";
@Injectable({
  providedIn: 'root'
})
export class PlanningService {

  constructor(private http: HttpClient) { }
  private url: string;
  private eventsList: IEvent[] = [];
 

  createPlanning(Planning: any) {
    return this.http.post(BASIC_URL + `/createPlanning`, Planning, {
      headers: this.createdAuthorizationHeader(),
    });
  }

  getAllPlanning(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
  }
  // getEvents(): Observable<IEvent[]>
  // {
  //   this.url = 'http://localhost:8088/api/Planning/getAllPlanning/';
  //   return this.http.get<IEvent[]>(this.url);
  // }

  deletePlanning(id: any): Observable<any> {
    return this.http.delete(BASIC_URL + `deletePlanning/${id}`, {
      headers: this.createdAuthorizationHeader(),
    });
  }

  getPlanningById(id: any): Observable<any> {
    return this.http.get(BASIC_URL + `getPlanningById/${id}`, {
      headers: this.createdAuthorizationHeader(),
    });
  }

  updatePlanning(id: any, Planning: any) {
    return this.http.put(BASIC_URL + `updatePlanning/${id}`, Planning, {
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
