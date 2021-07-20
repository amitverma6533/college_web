import { Component, OnInit } from '@angular/core';
import { CmsService } from '../cms.service';
import { Course } from '../models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses:Course[] = [];

  constructor(private cmsService:CmsService) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(){
    this.cmsService.getCourses().subscribe(
      result => {
        this.courses = result,
        console.log(result)
      }, error => {
        console.log(error);
      }
    )
  }

}
