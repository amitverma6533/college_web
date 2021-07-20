import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CmsService } from '../cms.service';
import { Faculty } from '../models/faculty';

@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.css']
})
export class FacultiesComponent implements OnInit {

  faculties:Faculty;
  id:number;

  constructor(private cmsService:CmsService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getFacultie();
  }

  getFacultie(){
    this.cmsService.getFacultyById(this.id).subscribe(
      result => {
        this.faculties = result
        console.log(result)
      }
    )
  }

}
