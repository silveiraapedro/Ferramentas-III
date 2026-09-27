import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSelect, IonSelectOption, IonButton, IonGrid, IonRow, IonCol, IonLabel, IonItem, IonAlert } from '@ionic/angular';
import { VendasService } from '../api/vendas.service';
import { Venda } from '../modelos/venda.models';
import { ItemVenda } from '../modelos/item.models';

@Component({
  selector: 'app-venda-list',
  templateUrl: './venda-list.page.html',
  styleUrls: ['./venda-list.page.scss'],
  imports: [IonContent, CurrencyPipe, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonSelect, IonSelectOption, IonButton, IonGrid, IonRow, IonCol, IonLabel, IonItem, IonAlert]
})
export class VendaListPage implements OnInit {

  private vendaService = inject(VendasService);

  protected vendas = signal<Venda[]>([]);

  protected itens = signal<ItemVenda[]>([]);

  protected vendaSelecionada: Venda | null = null;

  protected openAlert = false;

  protected idVendaDeleted: number  = -1;

  protected alertButtons = [
    {
      text: 'Sim',
      role: 'confirm',
      handler: () => {
        if(this.vendaSelecionada && this.vendaSelecionada.id){
        this.vendaService.apagar(this.idVendaDeleted).subscribe({
          next: () =>{
            this.obterVendas();
            this.itens.set([]);
            this.idVendaDeleted = -1;
          },
          error: (e) =>{
            console.error(e);
          }
        })
        }
      }
    },
    {
      text: 'Não',
      role: 'cancel',
    }
  ]

  constructor() { 
    this.obterVendas();
  }

  ngOnInit() {
  }

  protected obterVendas(){
    this.vendaService.buscarTodos().subscribe({
      next: (r: Venda[]) =>{
        console.log(r);
        this.vendas.set(r);
      },
      error: (e) =>{
        console.error(e);
      }
    })
  }

  protected excluir(){
    if(this.vendaSelecionada){
    this.setOpen(true);
    this.idVendaDeleted = this.vendaSelecionada.id;
    }
  }

  protected selecionarVenda(event: any){
    const venda = event.detail.value

    if(venda){
      this.vendaService.buscarVenda(venda).subscribe({
      next: (vendaC : Venda) => {
        this.vendaSelecionada = vendaC;
        if(vendaC.itens){
          this.itens.set(vendaC.itens);
        }
        else{
          this.itens.set([]);
        }
      },
      error: (e)=>{
        console.log(e);
        this.itens.set([]);
      }
    })
    }
    else{
      console.log("Deu merda");
    }
  }

  protected setOpen(value: boolean){
    this.openAlert = value;
  }

  protected calcularTotal() : number{
    let total = 0;

    for(let item of this.itens()){
      total += item.quantidade * item.valorUnitario;
    }

    return total;
  }

}
