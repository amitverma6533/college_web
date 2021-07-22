import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CmsService } from '../cms.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  uform:FormGroup;

  constructor(private fb:FormBuilder, private cmsService:CmsService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.uform = this.fb.group({
      //image:['']
      name:['']
    })
  }

  image:string;
  selectFile(event:any){
    this.image = event.target.files[0];
    console.log(this.image)
  }

 /* onSubmit(){
    this.cmsService.upload(this.image).subscribe(
      result => {
        console.log(result);
      }
    )
  }*/

  onSubmit(){
    this.cmsService.send(this.uform.value).subscribe(
      result => {
        console.log(result);
      }
    )
  }

}
