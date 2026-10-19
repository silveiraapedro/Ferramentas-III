import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonCol } from '@ionic/angular';
import { CategoriasService } from '../services/categorias.service';
import { Categoria } from '../modelos/categoria.models';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  imports: [IonCol, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonRow]
})
export class CategoriasPage implements OnInit {

  private categoriaService = inject(CategoriasService);
  protected categorias = signal<Categoria[]>([]);

  constructor() { }

  ngOnInit() {
    this.buscarTodos();
  }

  private buscarTodos(){
    this.categoriaService.obterTodos().subscribe({
      next: (categorias) => {
        console.log(categorias);
        this.categorias.set(categorias);
      },
      error: (e) =>{
        console.error(e);
      }
    })
  }

}
