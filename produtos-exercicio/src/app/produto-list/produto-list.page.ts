import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonLabel, IonCol, IonButton, IonSelect, IonSelectOption, IonAlert, IonSearchbar } from '@ionic/angular';
import { ProdutoService } from '../api/produto.service';
import { Produto } from '../modelos/produtos.models';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.page.html',
  styleUrls: ['./produto-list.page.scss'],
  imports: [IonContent, IonHeader, RouterLink, IonTitle, IonToolbar, CommonModule, FormsModule, IonGrid, IonRow, IonLabel, IonCol, IonButton, IonSelect, IonSelectOption, IonAlert, IonSearchbar]
})
export class ProdutoListPage implements OnInit {
  private produtoService = inject(ProdutoService);

  protected produtos = signal<Produto[]>([]);

  protected openAlert = false;

  protected idApagar = -1;

  categorias = [
  'Informática',
  'Periféricos',
  'Celulares',
  'Eletrônicos',
  'Áudio e Vídeo',
  'Acessórios',
  ''
  ];

  protected alertButtons = [
    {
      text: 'Sim',
      role: 'confirm',
      handler: ()=> {
        this.produtoService.apagar(this.idApagar).subscribe({
          next: ()=>{
            this.obterProdutos();
          },
          error: (e) =>{
            console.error(e);
          }
        })
      }
    },
    {
      text: 'Não',
      role: 'cancel',
    }
  ]

  constructor() {
    this.obterProdutos();
   }

  ngOnInit() {
  }

  protected obterProdutos(){
    this.produtoService.buscarTodos().subscribe({
      next: (r: Produto[])=>{
        console.log(r);
        const dadosOrdenado = r.sort((a,b) => a.nome.localeCompare(b.nome));
        this.produtos.set(dadosOrdenado);
      },
      error: (e)=>{
        console.error(e);
      }
    })
  }

  

  protected pesquisarCategoria(event: any){
    const categoria = event.detail.value;
    if(!categoria){
      this.obterProdutos();
      return
    }

    this.produtoService.pesquisarCategoria(categoria).subscribe({
      next: (r: Produto[])=>{
        console.log(r);
        this.produtos.set(r);
      },
      error: (e) =>{
        console.log(e);
      }
    })
  }

  protected pesquisarNome(event: any){
    const nome = event.detail.value;

    if(nome){
      this.produtoService.pesquisar(nome).subscribe({
        next: (r: Produto[])=>{
          const dadosOrdenado = r.sort((a,b)=> a.nome.localeCompare(b.nome));
          this.produtos.set(dadosOrdenado);
        },
        error: (e)=>{
          console.error(e);
        }

      })
    }else{
      this.obterProdutos();
    }
  }

  protected setOpen(value: boolean){
    this.openAlert = value;
  }

  protected excluir(id: number){
    this.setOpen(true);
    this.idApagar = id;
  } 

}
