import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  storageGlobal: string = '';

  constructor(public router : Router) {}

  register() {

    let correo = JSON.stringify(this.email);
    let contrasena = JSON.stringify(this.password);

    console.log(this.email);
    console.log(this.password);
    console.log(this.confirmPassword);

    //Validar Campos
    if (this.email == '' && this.password == '' && this.confirmPassword == '') {
      console.log("Campos vacios, por favor rellenar los formatos")
      alert("Campos vacios, por favor rellenar los formatos")
    } else if (this.email == '') {
      console.log("Por favor, ingresa un correo con @")
      alert("Por favor, ingresa un correo con @")
    } else if (this.password == '') {
      console.log("Por favor, ingresa una contraseña valida")
      alert("Por favor, ingresa una contraseña valida")
    } else if (this.confirmPassword == '') {
      console.log(this.password)
      console.log("Por favor, ingresa la contraseña nuevamente")
      alert("Por favor, ingresa la contraseña nuevamente")
    } else if (this.confirmPassword != this.password) {
      console.log("Las contraseñas deben coincidir")
      alert("Las contraseñas deben coincidir")
    } else {

      console.log("Registro exitoso");
      console.log("--------------------");
      //Datos
      console.log('Email: ' + this.email)
      console.log('Password: ' + this.password)
      console.log('Confirmación: ' + this.confirmPassword)
      console.log("--------------------")
      
  
      localStorage.setItem('email',correo);
      localStorage.setItem('password',contrasena);

      //Redirección
      console.log("Redireccionando al Login...")
      this.router.navigateByUrl('/');

    }
  }

  getStorage(){

    let texto = JSON.stringify(localStorage.getItem('email'));

    this.storageGlobal = JSON.parse(texto);
  }

  UserStatus(){
    console.log("Redireccionando a Login...")
    this.router.navigateByUrl('/');
  }
}
