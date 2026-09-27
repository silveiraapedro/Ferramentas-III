import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { environment } from '../../environments/environment';
import { Venda } from '../modelos/venda.models';

@Service()
export class VendasService {
    private http = inject(HttpClient);

    private urlBase = environment.api;

    public buscarTodos(){
        return this.http.get<Venda[]>(this.urlBase);
    }

    public apagar(id: number){
        return this.http.delete<Venda>(`${this.urlBase}/${id}`);
    }

    public buscarVenda(nome: string){
        return this.http.get<Venda>(`${this.urlBase}/${nome}`);
    }
}
