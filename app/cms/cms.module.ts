import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { MaterialModule } from '../material/material.module';
import { CmsService } from './cms.service';
import { DialogComponent } from './dialog/dialog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FacultiesComponent } from './faculties/faculties.component';
import { DepartmentsComponent } from './departments/departments.component';


@NgModule({
  declarations: [
    HomeComponent,
    CoursesComponent,
    DialogComponent,
    ContactUsComponent,
    FacultiesComponent,
    DepartmentsComponent
  ],
  imports: [
    CommonModule,
    CmsRoutingModule,
    MaterialModule
  ],
  providers:[CmsService]
})
export class CmsModule { 
  constructor(){
    console.log("CmsModel Loaded!");
  }
}
