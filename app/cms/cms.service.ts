import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course } from './models/course';
import { Faculty } from './models/faculty';

@Injectable({
  providedIn: 'root'
})
export class CmsService {

  private apiUrl = `${environment.apiUrl}/cms`;
  private Url = `${environment.apiUrl}/image`;

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  getCourses():Observable<Course[]>{
    return this.http.get<Course[]>(`${this.apiUrl}`)
  }

  getFaculties():Observable<Faculty[]>{
    return this.http.get<Faculty[]>(`${this.apiUrl}/faculties`)
  }

  getByDepartmentId(did:number):Observable<Faculty[]>{
    return this.http.get<Faculty[]>(`${this.apiUrl}/faculties/${did}`)
  }

  getFacultyById(id:number):Observable<Faculty>{
    return this.http.get<Faculty>(`${this.apiUrl}/${id}`)
  }

  upload(file:any):Observable<any>{
    const formData = new FormData();
    formData.append('image',file,file.name);
    return this.http.post<any>(`${this.apiUrl}/upload`,formData);
  }

  send(file:any):Observable<any>{
    return this.http.post<any>(`${this.Url}/add`,file,this.httpOptions)
  }
}
