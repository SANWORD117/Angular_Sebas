import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer/footer.component";
import { Router } from '@angular/router';
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [CommonModule, FooterComponent, HeaderComponent]
})
export class DashboardComponent {

    constructor(public router : Router) {}


}
