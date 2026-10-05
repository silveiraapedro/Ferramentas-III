import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { environment } from '../../environments/environment';
import { Users } from '../../modelos/users.modelo';

@Service()
export class UsersService {

    private http = inject(HttpClient);

    private urlBase = environment.api + '/users'

    public login(login: Users){
        return this.http.post<any>(this.urlBase, login);
    }

}
