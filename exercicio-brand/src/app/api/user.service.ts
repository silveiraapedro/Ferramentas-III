import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { environment } from '../../environments/environment';
import { Products } from '../modelo/products';

@Service()
export class UserService {
    private http = inject(HttpClient);

    private urlBase = environment.api;

    public obterTodos(){
        return this.http.get<Products[]>(this.urlBase);
    }

    public obterPorNome(nome: string){
        return this.http.get<Products[]>(`${this.urlBase}?brand:contains=${nome}`)
    }

    public removerId(id:number){
        return this.http.delete(`${this.urlBase}/${id}`);
    }

}
