import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserResponse } from '../modelos/user-response.model';
import { User } from '../modelos/user.modelo';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private http = inject(HttpClient);
  // Pode ser dessa forma ou colocando no environment
  // private urlBase = 'https://reqres.in/api/users'
  // Essa é a forma adequada
  private urlBase = environment.api + '/users';
  
  // ele faz com que os dados fiquem tipados
  public obterTodos(){
   return this.http.get<User[]>(this.urlBase);
  }

  public obterId(id: number){
    //return this.http.get(this.urlBase + '/' + id);
    return this.http.get(`${this.urlBase}/${id}`);
  }
  public obterNome(nome: string){
    return this.http.get<User[]>(`${this.urlBase}?first_name:contains=${nome}`);
  }

  public cadastrar(user: any){
    return this.http.post<User>(this.urlBase, user);
  }

  public remover(id:number){
    // Pode se utilizar um dos metodos pra excluir
    //return this.http.delete(this.urlBase + '/' + id);
    return this.http.delete(`${this.urlBase}/${id}`);
  }
}
