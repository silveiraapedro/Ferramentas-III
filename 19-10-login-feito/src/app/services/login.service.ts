import { inject, Service } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Login } from '../modelos/login.modelo';
import { LoginResponse } from '../modelos/login-response.model';
import { jwtDecode } from "jwt-decode";


@Service()
export class LoginService {

    private urlBase = environment.api + "/pessoa";
    private httpClient = inject(HttpClient);
    //LocalStorage, cookie
    // Atualmente estamos armazenando em memoria
    private token: string|null = null;

    public login(login: Login) {

        return this.httpClient.post<LoginResponse>(this.urlBase + "/login", login);
    }

    public setToken(token: string){
        this.token = token;
        localStorage.setItem("TOKEN", this.token);
    }

    public getToken(){
        console.log(localStorage.getItem("TOKEN"));
        return localStorage.getItem("TOKEN");
        // return this.token;
    }

    public removeToken(){
        localStorage.removeItem("TOKEN");
    }

    public getPayLoad(){
        try{
            return jwtDecode(this.getToken()!);
        } catch (error){
            return null;
        }
    }
}
