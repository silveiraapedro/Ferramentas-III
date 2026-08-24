import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonAvatar, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonList, IonRow, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { UsersService } from '../api/users.service';
import { UserResponse } from '../modelos/user-response.model';
import { User } from '../modelos/user.modelo';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.page.html',
  styleUrls: ['./usuario-list.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonGrid, IonRow, IonCol, IonList, IonItem, IonAvatar, IonLabel, IonButton]
})
export class UsuarioListPage implements OnInit {
  // ! - Ira ser atribuido posteriormente 
  protected userResponse: UserResponse | undefined;
  protected users: User[] = [];
  private userService = inject(UsersService);
  constructor() { 
    this.obterUsuarios();
  }//não é uma boa pratica colocar as coisas no construtor

  ngOnInit() {
    
  }

  private obterUsuarios(){
    // Chamada Sincrona, enquanto q tiver q fazer algo ele espera essa primeira terminar e vai para a proxima
    console.log("1");
    // Chamada Assincrona, ele não vai aguardar a instrução anterior terminar pra que seja executada
    this.userService.obterTodos().subscribe({
      //sucesso
      next: (resposta: User[]) => {
        console.log("2");
        console.log(resposta);
        this.users = resposta;
        // this.userResponse = resposta;
      },
      //erro
      error: (e) => {
        console.error(e);
      }
    });// o subscribe significa q eu quero ter uma respostas sobre aquela requisição
    // Chamada Sincrona
    console.log("3");
  }

  protected excluir(id:number){
    this.userService.remover(id).subscribe({
      next: ()=>{
        console.log("Usuario apagado do sistema");
        this.obterUsuarios();
      },
      error:(e)=>{
        console.error(e);
      }
    });
  }

}
