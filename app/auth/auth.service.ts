import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Std } from './model/std';
import {catchError, mapTo, tap} from 'rxjs/operators';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.apiUrl}/autho`;

  redirectUrl:string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type':'application/json'
    })
  }

  constructor(private http:HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {

    } else {
      console.error(`Backend returned code ${error.status},`+`body was; ${error.error}`);
    }
    return throwError('Something bad happened try again later.');
  }

  Signup(std:Std):Observable<Std>{
    console.log(std)
    return this.http.post<Std>(`${this.apiUrl}/add`,std,this.httpOptions)
    .pipe(
       catchError(this.handleError)
    )
  }

  login(user:Std):Observable<boolean>{
    return this.http.post<boolean>(`${this.apiUrl}/login`,user,this.httpOptions)
    .pipe(
      tap(user => this.doLogin(user)),
      mapTo(true),
      catchError(this.handleError)
    )
  }

  doLogin(user:any){
    localStorage.setItem('CurrentUser',JSON.stringify(user))
  }

  getCurrentUser(){
    return JSON.parse(localStorage.getItem('CurrentUser'));
  }

  getDecodeToken(token:any){
    return jwtDecode(token);
  }

  isLoggedIn(){
    const CurrentUser = this.getCurrentUser();
    if(CurrentUser){
      const token:any = this.getDecodeToken(CurrentUser.token);
      const CurrentTime = Math.round((new Date()).getTime()/1000);
      if(token.exp > CurrentTime){
        return true;
      } else{
        this.logout();
      }
    } return false
  }

  logout(){
    localStorage.removeItem('CurrentUser');
  }
}