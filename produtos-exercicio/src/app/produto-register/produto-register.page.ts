import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonInput, IonButton, IonItem } from '@ionic/angular';
import { ProdutoService } from '../api/produto.service';
import { Produto } from '../modelos/produtos.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-register',
  templateUrl: './produto-register.page.html',
  styleUrls: ['./produto-register.page.scss'],
  imports: [IonContent, IonHeader, ReactiveFormsModule, IonTitle, IonToolbar, CommonModule, CommonModule, FormsModule, IonList, FormsModule, IonInput, IonButton, IonItem]
})
export class ProdutoRegisterPage implements OnInit {

  private produtoService = inject(ProdutoService);
  private router = inject(Router);

  protected produtos = signal<Produto[]>([]);

  private formBuilder = inject(NonNullableFormBuilder);

  protected form = this.formBuilder.group({
    nome: ['', [Validators.required, Validators.minLength(3)] ],
    fornecedor:[''],
    categoria:[''],
    quantidade:[0],
    id: [0],
    preco: [0],
  })



  constructor() { }

  ngOnInit() {
  }

  protected cadastrar(){

    console.log(this.formBuilder);
    if(this.form.valid){
      const produto: Produto = this.form.getRawValue();


      this.produtoService.cadastrar(produto).subscribe({
        next: (produto)=>{
          console.log(produto);
          this.router.navigate(['/produto-list']);
        },
        error: (e) =>{
          console.error(e);
        }
      });
    }

    
  }

}
