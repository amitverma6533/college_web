import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { ADMIN_ROUTES } from './routes/admin-routes';
import { DEFAULTS_ROUTES } from './routes/defaults-routes';
import { STD_ROUTES } from './routes/std_routes';

const routes: Routes = [
  {path:'',component:DefaultLayoutComponent,children:DEFAULTS_ROUTES},
  {path:'backend',component:DefaultLayoutComponent,children:STD_ROUTES},
  {path:'admin',component:AdminLayoutComponent,children:ADMIN_ROUTES}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
