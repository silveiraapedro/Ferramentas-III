import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSearchbar, IonList, IonItem, IonLabel, IonButton, IonCol, IonGrid, IonRow } from '@ionic/angular';
import { UserService } from '../api/user.service';
import { Products } from '../modelo/products';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.page.html',
  imports: [IonCol, IonLabel, IonList, IonSearchbar, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonSearchbar, IonList, IonItem, IonButton, IonGrid, IonRow]
})
export class ProdutoListPage implements OnInit {
  

  private userService = inject(UserService);
  protected brandpesquisa = '';

  protected products: WritableSignal<Products[]> = signal([]);




  constructor() { 
    this.obterProdutos();
  }

  ngOnInit() {
  }

  private obterProdutos(){
    this.userService.obterTodos().subscribe({
      next: (r: Products[]) =>{
        console.log(r);
        this.products.set(r);
      },
      error: (e)=>{
        console.log(e);
      }
    })
  }

  protected buscaBrand(nome: string){
    
    this.userService.obterPorNome(nome).subscribe({
      next: (r: Products[]) =>{
        this.products.set(r);
      },
      error: (e) =>{
        console.log(e);
      }
    })
  }

  protected excluir(id:number){
    this.userService.removerId(id).subscribe({
      next: () =>{
        this.obterProdutos();
      },
      error: (e) =>{
        console.log(e);
      }
    })
  }

}
