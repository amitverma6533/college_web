import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-std-dashboard',
  templateUrl: './std-dashboard.component.html',
  styleUrls: ['./std-dashboard.component.css']
})
export class StdDashboardComponent implements OnInit {

  deocdedToken;

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    const helper = new JwtHelperService();
    const token = localStorage.getItem('CurrentUser');
    this.deocdedToken = helper.decodeToken(token);
    console.log(this.deocdedToken);
  }


  Logout(){
    this.authService.logout();
    this.router.navigateByUrl('/auth/login');
  }
}
