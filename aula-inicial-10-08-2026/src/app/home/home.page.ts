import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCol, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonCol, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonInput,FormsModule],
})
export class HomePage {

  // atributos
  public nome: string = "Pedro"; // É utilizado para serviços 
  protected salario: number = 1000; // Pode ser usado dentro do HTML e da classe
  protected fonte:string = 'font-weight: bold; ';
  private telefone: string = "486511";//Só pode ser usado dentro da classe

  constructor() {
    console.log(this.telefone);
    this.exibir();
  }

    // metodos
    private exibir(){
      console.log("metodo exibir:")
    }

    protected exibir2(){
      console.log("saaalve");
    }

    protected alterarEstilo(){
      this.fonte = 'color: red;'
    }


}
