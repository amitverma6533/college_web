import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { StdDashboardComponent } from './std-dashboard/std-dashboard.component';
import { MaterialModule } from '../material/material.module';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    StdDashboardComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ]
})
export class DashboardModule { }
