import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonInput } from '@ionic/angular';
import { UsersService } from '../api/users.service';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.page.html',
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonInput, ReactiveFormsModule]
})
export class TelaLoginPage implements OnInit {

  private userService = inject(UsersService);
  protected 

  private formBuilder = inject(NonNullableFormBuilder);
  protected form = this.formBuilder.group({
    email:['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    id: [0]
  })
  constructor() { }

  ngOnInit() {
  }

}
