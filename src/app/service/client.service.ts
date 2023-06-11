import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
 
 
  getClientById(id: any) :Observable<any> {
    return this.http.get(this.url+ 'createPriorite/'+id)
  }
   url ="http://localhost:8088/api/v1/Client/"

  constructor(private http: HttpClient) { }

  getAllClients():Observable<any[]>{
    return this.http.get<any[]>(this.url+'getAlls');
      }
      createClient(body:any):Observable<any>{
        return this.http.post(this.url+ 'create', body)
      }
      deleteClient(id: any):Observable<any> {
        return this.http.delete(this.url+ 'delete/'+id)
      }
}
