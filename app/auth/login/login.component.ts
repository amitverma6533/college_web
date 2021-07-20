import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  hide:boolean = true;

  constructor(private fb:FormBuilder, private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.loginForm = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }

  get username() {return this.loginForm.get('username');}
  get password() {return this.loginForm.get('password');}

  onSubmit(){
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe(
      result => {
        console.log(result),
        this.router.navigateByUrl('/backend/dashboard');
      }, error => {
        console.log(error),
        alert('Username and Password are Incorrect!');
      }
    )
  }

}
