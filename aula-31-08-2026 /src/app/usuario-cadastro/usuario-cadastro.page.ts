import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonInput, IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonButton, IonButtons, IonIcon } from "@ionic/angular/standalone";
import { UsersService } from '../api/users.service';
import { atCircleOutline} from 'ionicons/icons';
import { User } from '../modelos/user.modelo';
import { Router, RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.page.html',
  styleUrls: ['./usuario-cadastro.page.scss'],
  standalone: true,
  imports: [IonIcon, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonInput, FormsModule, ReactiveFormsModule, IonButton, IonButtons, IonButton, RouterLink], 
})
export class UsuarioCadastroPage implements OnInit {

  private usersService = inject(UsersService);
  private router = inject(Router);

  
  // NonNullableFormBuilde - não permite que os campos sejam nulos
  // FormBuilder - permite que os campos sejam nulos
  // UnypedFormGroup - 
  private formBuilder = inject(NonNullableFormBuilder);

  protected form = this.formBuilder.group({
    // Validators.required - o preenchimento do campo é obrigatorio, pode ser dentro de um vetor para ser varios
    first_name:['', [Validators.required, Validators.minLength(3)]],
    last_name:[''],
    email:[''],
    id: [0],
    avatar: []
  });

  constructor() { 
    
  }

  ngOnInit() {
  }

  protected cadastrar(){
    console.log(this.form.valid);
    if(this.form.valid){
      const user: User = this.form.getRawValue();

      this.usersService.cadastrar(user).subscribe({
        next: (user) =>{
          console.log(user);
          //this.form.reset(); - se caso queira que resete os campos
          this.router.navigate(['/usuario-list']);
        },
        error: (e) => {
          console.log(e);
        }
      });

      console.log(this.form.value);
      console.log(this.form.getRawValue());

    }else
    {
      console.log("Formulario invalido");
    }
  }

}
