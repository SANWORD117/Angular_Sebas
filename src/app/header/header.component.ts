import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(public router : Router) {}

  dashboard(){
    console.log("Redireccionando al inicio...");
    this.router.navigateByUrl("/dashboard")
  }

  user(){
    console.log("Redireccionando al perfil...");
    this.router.navigateByUrl("/profile")
  }

  offer(){
    console.log("Redireccionando a las ofertas...");
    this.router.navigateByUrl("/offer")
  }

  logout(){
    console.log("Cerrando sesión...")
    console.log("Redireccionando al Login...");
    this.router.navigateByUrl('/');
  }

}
