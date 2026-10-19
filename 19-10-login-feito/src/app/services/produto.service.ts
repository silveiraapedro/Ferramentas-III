import { inject, Service } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service';
import { Produtos } from '../modelos/produtos.models';

@Service()
export class ProdutoService {

    private urlBase = environment.api + '/produtos';
    private httpClient = inject(HttpClient);
    private loginService = inject(LoginService);

    public obterTodos(){
        return this.httpClient.get<Produtos[]>(this.urlBase);
    }

    //private getHttpOptions(){
    //    const httpOptions = {
    //        headers: new HttpHeaders({
    //            Authorization: 'Bearer ' + this.loginService.getToken(),
    //        }),
    //    };
    //    return httpOptions;
    //}

}
