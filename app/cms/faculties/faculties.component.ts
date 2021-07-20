import { Component, OnInit } from '@angular/core';
import { CmsService } from '../cms.service';
import { Faculty } from '../models/faculty';

@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.css']
})
export class FacultiesComponent implements OnInit {

  faculties:Faculty[] = [];

  constructor(private cmsService:CmsService) { }

  ngOnInit(): void {
    this.getFaculties();
  }

  getFaculties(){
    this.cmsService.getFaculties().subscribe(
      result => {
        this.faculties = result
        console.log(result)
      }
    )
  }

}
