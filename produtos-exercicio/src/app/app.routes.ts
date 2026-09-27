import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'produto-list',
    loadComponent: () => import('./produto-list/produto-list.page').then( m => m.ProdutoListPage)
  },
  {
    path: 'produto-change/:id',
    loadComponent: () => import('./produto-change/produto-change.page').then( m => m.ProdutoChangePage)
  },
  {
    path: 'produto-register',
    loadComponent: () => import('./produto-register/produto-register.page').then( m => m.ProdutoRegisterPage)
  },
];
