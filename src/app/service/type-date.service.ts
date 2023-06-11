import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeDateService {
  url="http://localhost:8088/TypeDate/"
  constructor( private http:HttpClient) { }

  getTypeDate():Observable<any[]>{
    return this.http.get<any[]>(this.url+"getAlls");
      }
  AddType(body:any):Observable<any> {
        return this.http.post(this.url+"save", body)
          }
   getTypeById(id:any):Observable<any>{
    return this.http.get<any>(this.url+"getbyid/"+id)
  }
  deleteDType(id:number):Observable<any>{
    return  this .http.delete<void>(this.url+"delete"+id)
  }

  updateType(id:any, body:any):Observable<any>{
    return this.http.put(this.url+"editd/"+id, body)
  }
}
