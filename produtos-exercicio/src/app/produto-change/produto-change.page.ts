import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonButton, IonInput } from '@ionic/angular';
import { ProdutoService } from '../api/produto.service';
import { Produto } from '../modelos/produtos.models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produto-change',
  templateUrl: './produto-change.page.html',
  styleUrls: ['./produto-change.page.scss'],
  imports: [IonContent, IonHeader, ReactiveFormsModule, FormsModule, CommonModule ,IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonButton, IonInput]
})
export class ProdutoChangePage implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private produtoService = inject(ProdutoService);

  protected produtos !: Produto;

  private formBuilder = inject(NonNullableFormBuilder);

  protected form = this.formBuilder.group({
    nome: ['', [Validators.required, Validators.minLength(3)] ],
    fornecedor:[''],
    categoria:[''],
    quantidade:[0],
    id: [0],
    preco: [0],
  })

  constructor() {
    const id = this.route.snapshot.paramMap.get('id');
    if(id) this.obterUsuario(id);
   }

  ngOnInit() {
  }

  protected  obterUsuario(id: string){
    this.produtoService.obterPeloId(id).subscribe({
      next: (produto)=>{
        this.produtos = produto;
        this.form.setValue(this.produtos);
      },
      error: (e)=>{
        console.error(e);
      }
    })
  }

  protected alterar(){
    if(this.form.valid){
      this.produtoService.alterar(this.form.getRawValue()).subscribe({
        next: ()=>{
          this.router.navigate(['/produto-list']);
        },
        error: (e)=>{
          console.error(e);
        }
      })
    }
  } 

}
