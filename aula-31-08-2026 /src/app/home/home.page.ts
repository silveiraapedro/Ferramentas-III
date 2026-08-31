import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonList, IonItem, IonInput, IonGrid, IonRow, IonCol, ToastController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart, trash} from 'ionicons/icons';
import { UsersService } from '../api/users.service';
import { AsyncPipe } from '@angular/common';

// nome?:string - siginifica q é algo opcional e não precisaria inicializar no construtor
// nome:string - tem que declarar no construtor para que seja inicializado 
  interface Pessoa{
    nome?:string;
    endereco?:string;
    salario?:number
  }

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonCol, IonRow, IonGrid, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonList, IonItem, IonInput, FormsModule, AsyncPipe],
})
export class HomePage {
//protected nome = '';
//protected endereco = '';
protected pessoas: Pessoa[] = [];
protected pessoa: Pessoa = {};
private usersService = inject(UsersService);
// Pode ser feito dessa forma ou injetando no contrutor igual no site do ionic
private toastcontroller: ToastController = inject(ToastController);

// $ - serve para denominar um Observable
protected users$ = this.usersService.obterTodos();

//Observable --> API
//Signal


  constructor() {
    addIcons({ heart, trash });
    this.users$;
    //this.pessoa = {
    //  nome:'',
    //  endereco:''
    //};
  }
  protected async exibirMensagem(mensagem:string) {
    const toast = await this.toastcontroller.create({
      message: mensagem,
      duration: 1500,
      position: 'top',
    });

    await toast.present();
  }

  protected exibir(){
    console.log("Exibindo");
    //console.log(this.pessoa.);
    //console.log(this.endereco);
  }

  // Como ele esta vinculado ao atributo ja so basta adicionar no vetor
  protected adicionar(){
    this.pessoas.push(this.pessoa);
    this.exibirMensagem("Pessoa cadastrada");

    console.log(this.pessoa);
    this.pessoa = {};

  }

  // Vai excluir a partir do index q o identifica no vetor, no melhor dos casos usar o splice(index,1) excluindo uma posição
  protected excluir(index:number){
    this.pessoas.splice(index,1);
    this.exibirMensagem("Pessoa excluida");
  }

  protected remover(id:number){
    this.usersService.remover(id).subscribe({
      next: ()=>{
        console.log("Usuario apagado do sistema");
        this.users$ = this.usersService.obterTodos();
      },
      error:(e)=>{
        console.error(e);
      }
    });
  }
}
