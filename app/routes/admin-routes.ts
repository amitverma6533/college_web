import {Routes} from '@angular/router';

export const ADMIN_ROUTES: Routes = [
    {path:'', loadChildren:() => import('../std/std.module').then(m => m.StdModule)}
]