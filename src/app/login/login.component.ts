import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  email: string = '';
  password: string = '';
  storageGlobal: string = '';


  constructor(public router : Router) {}

  login() {

    let correo = localStorage.getItem('email');
    let contrasena = localStorage.getItem('password');

    let correoParsed = JSON.stringify(this.email);
    let contrasenaParsed = JSON.stringify(this.password);

    console.log(this.email);
    console.log(this.password);

    console.log(correo);
    console.log(contrasena);

    //Validar campos
    if (this.email == '' && this.password == ''){
      console.log("Campos vacios, por favor rellenar formatos")
      alert("Campos vacios, por favor rellenar formatos")
    } else if (this.email == '') {
      console.log("Por favor, ingresa un correo con @")
      alert("Por favor, ingresa un correo con @")
      if (this.email != correo){
        console.log("Correo no existe")
      } else {
        console.log("Dato del Localstorage correcto")
      }
    } else if (this.password == '') {
      console.log("Por favor, ingresa una contraseña valida")
      alert("Por favor, ingresa una contraseña valida")

    } else if (correo === correoParsed && contrasena === contrasenaParsed){
      
      console.log("Login exitoso")
      console.log("--------------------")
      //Datos
      console.log('Email: ' + this.email)
      console.log('Password: ' + this.password)
      console.log("--------------------")

      //Redirección
      console.log("Redireccionando al Dashboard...")
      this.router.navigateByUrl('/dashboard');

    } else {
      console.log("Perfil no existe, por favor verifique el correo y/o contraseña")
      alert("Perfil no existe, por favor verifique el correo y/o contraseña")
    }

  }

  getStorage(){

    let texto = JSON.stringify(localStorage.getItem('email'));

    this.storageGlobal = JSON.parse(texto)
  }

  NewUser() {
    console.log("Redireccionando al Registro...");
    this.router.navigateByUrl('/register');
  }
}

  