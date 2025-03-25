import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'home',
        loadComponent: ()=> import('./pages/home/home.component')
    },
    {
        path: 'usuarios',
        title: 'Usuarios',
        loadComponent: () => import('./pages/home-users/home-users.component').then(m => m.HomeUsersComponent)
    }
];
