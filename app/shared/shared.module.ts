import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { StdModule } from '../std/std.module';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AdminHeaderComponent,
    AdminFooterComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule
  ],
  exports:[HeaderComponent,FooterComponent,AdminHeaderComponent,AdminFooterComponent]
})
export class SharedModule {
  constructor(){
    console.log("SharedModel Loaded!");
  }
 }
