import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  console.log("acessou a guarda");
  const loginService = inject(LoginService);
  const router = inject(Router);
  const usuarioLogado: any = loginService.getPayLoad();

  if(usuarioLogado?.nivel == 'Geral'){
    return true
  }


  router.navigate(['/home']);
  return false;
  
};
