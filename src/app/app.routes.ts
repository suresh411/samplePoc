import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: Home}
    // {path:'home', loadComponent: () => import('./home/home').then(m => m.Home)}
];
