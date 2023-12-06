import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-offer',
    standalone: true,
    templateUrl: './offer.component.html',
    styleUrl: './offer.component.css',
    imports: [FooterComponent, HeaderComponent]
})
export class OfferComponent {
    postuled: Number = 0;
    postuledNumber: Number = 0;

    constructor(public router : Router) {}

    postular1(){
        console.log("Postulado")
        alert("Te postulaste para: Teleperformance")
        this.postuled = 1
        this.postuledNumber = this.postuled
        let postulado = JSON.stringify(this.postuled)
        console.log(postulado)
        localStorage.setItem("postuled",postulado)
    }

    postular2(){
        console.log("Postulado")
        alert("Te postulaste para: Comdata")
        this.postuled = 2
        this.postuledNumber = this.postuled
        let postulado = JSON.stringify(this.postuled)
        console.log(postulado)
        localStorage.setItem("postuled",postulado)
    }

    postular3(){
        console.log("Postulado")
        alert("Te postulaste para: Unisono")
        this.postuled = 3
        this.postuledNumber = this.postuled
        let postulado = JSON.stringify(this.postuled)
        console.log(postulado)
        localStorage.setItem("postuled",postulado)
    }

    postular4(){
        console.log("Postulado")
        alert("Te postulaste para: Konecta")
        this.postuled = 4
        this.postuledNumber = this.postuled
        let postulado = JSON.stringify(this.postuled)
        console.log(postulado)
        localStorage.setItem("postuled",postulado)
    }
}
