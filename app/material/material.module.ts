import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
 
const a =[MatButtonModule,MatSelectModule,MatDialogModule,MatTooltipModule,MatExpansionModule,MatListModule,MatCardModule,MatToolbarModule,MatSidenavModule,MatFormFieldModule,MatInputModule,MatIconModule];

@NgModule({
  imports: [a],
  exports: [a]
})
export class MaterialModule { }
