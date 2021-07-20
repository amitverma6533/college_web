import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Std } from '../model/std';
import { StdService } from '../std.service';

@Component({
  selector: 'app-add-std',
  templateUrl: './add-std.component.html',
  styleUrls: ['./add-std.component.css']
})
export class AddStdComponent implements OnInit {

  title:string;
  addForm:FormGroup;
  stdId:number;
  std:Std;
  hide:boolean = false;
  success:boolean = false;
  DataAdded:boolean = false;

  constructor(private stdService:StdService, private route:ActivatedRoute, private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.stdId = +this.route.snapshot.paramMap.get('id');
    this.title = 'Add Student Details';
    this.createForm();

    if(this.stdId){
      this.title = 'Update Student Details';
      this.getStd();
    }
  }

  createForm(){
    this.addForm = this.fb.group({
      username:['',Validators.required],
      first_name:['',Validators.required],
      last_name:['',Validators.required],
      password:['',Validators.required],
      address: this.fb.group({
        street:['',Validators.required],
        city:['',Validators.required],
        state:['',Validators.required],
        country:['',Validators.required],
      })
    })
  }

  onSubmit(){
    this.std = this.addForm.value;
    if(this.stdId){
      this.updateStd();
    } else{
      this.addStd();
    }
  }

  addStd(){
    this.stdService.addStd(this.addForm.value).subscribe(
      result => {
        console.log(result);
        this.DataAdded = true;
      }, error => {
        console.log(error);
      }
    )
  }

  getStd(){
    this.stdService.getStd(this.stdId).subscribe(
      result => {
        this.addForm.patchValue(result.data);
        console.log(result);
      }
    )
  }

  updateStd(){
    this.std.id = this.stdId;
    console.log(this.std.id)
    this.stdService.updateStd(this.addForm.value).subscribe(
      result => {
        console.log(result);
        this.success = true;
      }
    )
  }

  goBack(){
    this.router.navigateByUrl('/admin/std-list');
  }
}
