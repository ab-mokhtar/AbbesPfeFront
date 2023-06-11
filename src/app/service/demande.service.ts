import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Demande } from '../Model/demande';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
 url="http://localhost:8088/api/v1/Demande/"
  constructor( private http:HttpClient) { }

  getAllDemandes():Observable<any[]>{
return this.http.get<any[]>(this.url+'getAllDemandes');
  }

  AddDemande(body:Demande):Observable<any> {
return this.http.post(this.url+"createDemande", body)
  }

  getDemadeById(id:any):Observable<any>{
    return this.http.get<any>(this.url+"getbyid/"+id)
  }
  deleteDemande(id:number):Observable<any>{
return  this .http.delete<void>(this.url+"deleteDemande/"+id)
  }

  updateDemande(id:any, body:any):Observable<any>{
    return this.http.put(this.url+"updateDemande/"+id, body)
  }
  getnbAllDemandes():Observable<any>{
    return this.http.get(this.url+"nbrDemandes")
  }
  getnbDemandeByStatus(statut:any):Observable<any>{
    return this.http.get(this.url+"nbrDemandes/"+statut)
  }

}
