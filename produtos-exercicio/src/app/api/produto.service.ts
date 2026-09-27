import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { environment } from '../../environments/environment';
import { Produto } from '../modelos/produtos.models';

@Service()
export class ProdutoService {

    private http = inject(HttpClient);

    private urlBase = environment.api;

    public buscarTodos(){
        return this.http.get<Produto[]>(this.urlBase);
    }

    public pesquisar(nome: string){
        return this.http.get<Produto[]>(`${this.urlBase}?nome:contains=${nome}`)
    }

    public pesquisarCategoria(categoria: string){
        return this.http.get<Produto[]>(`${this.urlBase}?categoria=${categoria}`);
    }

    public apagar(id: number){
        return this.http.delete<Produto>(`${this.urlBase}/${id}`);
    }

    public alterar(produto: Produto){
        return this.http.put<Produto>(`${this.urlBase}/${produto.id}`, produto);
    }

    public cadastrar(produto: Produto){
        return this.http.post<Produto>(this.urlBase, produto);
    }

    public obterPeloId(id: string){
        return this.http.get<Produto>(`${this.urlBase}/${id}`);
    }
}
