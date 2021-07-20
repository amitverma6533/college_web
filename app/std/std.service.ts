import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Std } from './model/std';

@Injectable({
  providedIn: 'root'
})
export class StdService {

  private apiUrl = `${environment.apiUrl}/std`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type':'application/json'
    })
  }

  constructor(private http:HttpClient) { }

  getStds():Observable<Std[]>{
    return this.http.get<Std[]>(`${this.apiUrl}`)
  }

  getStd(id:number):Observable<Std>{
    return this.http.get<Std>(`${this.apiUrl}/${id}`)
  }

  addStd(std:Std):Observable<Std>{
    return this.http.post<Std>(`${this.apiUrl}/add`,std,this.httpOptions)
  }

  updateStd(std:Std):Observable<Std>{
    return this.http.put<Std>(`${this.apiUrl}/update`,std,this.httpOptions)
  }

  deleteStd(id:number):Observable<Std>{
    return this.http.delete<Std>(`${this.apiUrl}/delete/${id}`)
  }
}
