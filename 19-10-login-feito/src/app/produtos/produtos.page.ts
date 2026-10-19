import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonRow, IonCol } from '@ionic/angular';
import { ProdutoService } from '../services/produto.service';
import { Produtos } from '../modelos/produtos.models';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
  imports: [IonCol, IonRow, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCol]
})
export class ProdutosPage implements OnInit {

  private produtoService = inject(ProdutoService);
  protected produtos = signal<Produtos[]>([]);



  constructor() { }

  ngOnInit() {
    this.obterProdutos();
  }

  private obterProdutos(){
    this.produtoService.obterTodos().subscribe({
      next: (produtos) =>{
        console.log(produtos)
        this.produtos.set(produtos);
      },
      error: (e) =>{
        console.error(e);
      }
    })
  }

}
