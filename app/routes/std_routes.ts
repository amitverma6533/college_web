import {Routes} from '@angular/router';
import { AuthGuard } from '../auth/guard/auth.guard';

export const STD_ROUTES:Routes = [
    {
        path:'dashboard',
        loadChildren: ()=> import('../dashboard/dashboard.module').then(m => m.DashboardModule),
        canLoad:[AuthGuard]
    }
]