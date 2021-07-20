import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { MaterialModule } from '../material/material.module';
import { CmsService } from './cms.service';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  declarations: [
    HomeComponent,
    CoursesComponent,
    DialogComponent
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
