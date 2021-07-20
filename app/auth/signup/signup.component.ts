import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  regForm:FormGroup;
  hide:boolean = true;
  success:boolean = false;

  constructor(private fb:FormBuilder, private authService:AuthService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.regForm = this.fb.group({
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

  onSubmit(){
    //console.log(this.regForm.value);
    this.authService.Signup(this.regForm.value).subscribe(
      result => {
        console.log(result)
        if(!result.error){
          this.success = true;
        }
      }, error => {
        console.log(error),
        alert(error);
      }
    )
  }

}
