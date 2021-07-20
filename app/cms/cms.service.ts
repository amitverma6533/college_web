import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course } from './models/course';

@Injectable({
  providedIn: 'root'
})
export class CmsService {

  private apiUrl = `${environment.apiUrl}/cms`;

  constructor(private http:HttpClient) { }

  getCourses():Observable<Course[]>{
    return this.http.get<Course[]>(`${this.apiUrl}`)
  }
}
