import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStdComponent } from './add-std/add-std.component';
import { StdListComponent } from './std-list/std-list.component';
import { UpdateStdComponent } from './update-std/update-std.component';

const routes: Routes = [
  {path:'std-list',component:StdListComponent},
  {path:'add',component:AddStdComponent},
  {path:'update/:id',component:AddStdComponent}
  //{path:'update/:id',component:UpdateStdComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StdRoutingModule { }
