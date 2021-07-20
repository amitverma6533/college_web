import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CmsService } from '../cms.service';
import { Faculty } from '../models/faculty';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  faculties:Faculty[] = [];
  did:number;

  constructor(private cmsService:CmsService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getFaculties();
    this.did = +this.route.snapshot.paramMap.get('did');
    this.getFaculties();
  }

  getFaculties(){
    this.cmsService.getByDepartmentId(this.did).subscribe(
      result => {
        this.faculties = result
        console.log(result)
        console.log(this.did);                                    
      }
    )
  }

}
