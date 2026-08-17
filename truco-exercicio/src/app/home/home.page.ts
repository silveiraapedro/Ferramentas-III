import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonCol, IonRow, IonGrid, IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {
  constructor() {}
  protected jogador1 = 0;
  protected jogador2 = 0;
  protected vitorias1 = 0;
  protected vitorias2 = 0;

  protected adicionar1(){
    this.jogador1 += 1;
    if(this.jogador1 == 12)
    {
      this.vitorias1 += 1;
      this.jogador1 = 0;
    }
  }
  protected adicionar2(){
    this.jogador2 += 1;
    if(this.jogador2 == 12)
    {
      this.vitorias2 += 1;
      this.jogador2 = 0;
    }
  }

  protected remover1(){
    this.jogador1 -= 1;
    if(this.jogador1 == -1)
    {
      this.jogador1 = 0;
    }
  }
  protected remover2(){
    this.jogador2 -= 1;
    if(this.jogador2 == -1)
    {
      this.jogador2 = 0;
    }
  }

  protected truco(){
    if(this.jogador1 == 12 || this.jogador2 == 12)
    {
      this.vitorias1 += 1;
    } 
    else if(this.jogador2 == 12)
    {
      this.vitorias2 += 1;
    }
    this.jogador1 += 3;
    this.jogador2 += 3; 
  }

  protected zerarPontos(){
    this.jogador1 = 0;
    this.jogador2 = 0;
  }

  protected zerarVitorias(){
    this.vitorias1 = 0;
    this.vitorias2 = 0;
  }

}
