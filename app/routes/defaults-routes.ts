import {Routes} from '@angular/router';

export const DEFAULTS_ROUTES: Routes = [
    {path:'', loadChildren:() => import('../cms/cms.module').then(m => m.CmsModule)},
    {path:'auth', loadChildren:() => import('../auth/auth.module').then(m => m.AuthModule)},
    //{path:'a',loadChildren:() => import('../authonticate/authonticate.module').then(m => m.AuthonticateModule)}
]