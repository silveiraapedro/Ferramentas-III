import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'usuario-list',
    pathMatch: 'full',
  },
  {
    path: 'usuario-list',
    loadComponent: () => import('./usuario-list/usuario-list.page').then( m => m.UsuarioListPage)
  },
  {
    path: 'usuario-cadastro',
    loadComponent: () => import('./usuario-cadastro/usuario-cadastro.page').then( m => m.UsuarioCadastroPage)
  },
];
