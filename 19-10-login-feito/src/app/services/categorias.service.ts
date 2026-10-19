import { inject, Service } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../modelos/categoria.models';

@Service()
export class CategoriasService {

    private urlBase = environment.api + '/categori';
    private httpCliente = inject(HttpClient);

    public obterTodos(){
        return this.httpCliente.get<Categoria[]>(this.urlBase);
    }
}
