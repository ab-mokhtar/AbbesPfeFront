import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from './user-storage.service';
import { Charge } from '../Model/charge';

const BASIC_URL = 'http://localhost:8088/api/v1/Charge/';

@Injectable({
  providedIn: 'root'
})
export class ChargeService {

  constructor(private http: HttpClient) { }
  
   newCharge(Charge: any): Observable<any> {
    console.log(Charge);
    return this.http.post(BASIC_URL + 'createCharge', Charge);
  }

  getAllCharges():Observable<Charge[]>{
    return this.http.get<Charge[]>(BASIC_URL+'getAllCharge');
      }
    
  deleteCharge(id:any):Observable<any>{
    return this.http.delete(BASIC_URL+'deleteCharge/'+id)
  }
  updateCharge(id:any,body:any){
    return this.http.put(BASIC_URL+"updateCharge"+id,body);
  }
 
}
