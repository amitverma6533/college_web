import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StdRoutingModule } from './std-routing.module';
import { StdListComponent } from './std-list/std-list.component';
import { StdService } from './std.service';
import { MaterialModule } from '../material/material.module';
import { UpdateStdComponent } from './update-std/update-std.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddStdComponent } from './add-std/add-std.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    StdListComponent,
    UpdateStdComponent,
    AddStdComponent
  ],
  imports: [
    CommonModule,
    StdRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers:[StdService]
})
export class StdModule {
  constructor(){
    console.log("StdModel Loaded!");
  }
 }
