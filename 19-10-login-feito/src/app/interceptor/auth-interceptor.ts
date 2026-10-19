import { HttpInterceptorFn } from '@angular/common/http';
import { LoginService } from '../services/login.service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Interceptor', req);

  const authToken = inject(LoginService).getToken();
  console.log(authToken);

  const newReq = req.clone({
    headers: req.headers.append('Authorization', 'Bearer ' + authToken),
  })

  console.log(newReq);

  return next(newReq);
};
