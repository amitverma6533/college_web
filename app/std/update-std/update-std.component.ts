import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Std } from '../model/std';
import { StdService } from '../std.service';

@Component({
  selector: 'app-update-std',
  templateUrl: './update-std.component.html',
  styleUrls: ['./update-std.component.css']
})
export class UpdateStdComponent implements OnInit {

  updateForm:FormGroup;
  sid:number;
  std:Std;
  success:boolean = false;

  constructor(private stdService:StdService, private route:ActivatedRoute, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.sid = +this.route.snapshot.paramMap.get('id');
    this.getStd();
    this.createForm();
  }

  createForm(){
    this.updateForm = this.fb.group({
      username:['',Validators.required],
      first_name:['',Validators.required],
      last_name:['',Validators.required],
      password:['',Validators.required],
      address: this.fb.group({
        street:['',Validators.required],
        city:['',Validators.required],
        state:['',Validators.required],
        country:['',Validators.required]  
      })
    })
  }

  getStd(){
    this.stdService.getStd(this.sid).subscribe(
      result => {
        this.updateForm.patchValue(result.data);
      }
    )
  }

  onSubmit(){
    this.std.id = this.sid;
    this.stdService.updateStd(this.updateForm.value).subscribe(
      result => {
        console.log(result),
        this.success = true;
      }
    )
  }

}
