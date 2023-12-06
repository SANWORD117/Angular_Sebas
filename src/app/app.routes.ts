import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OfferComponent } from './offer/offer.component';
import { ProfileComponent } from './profile/profile.component';


export const routes: Routes = [
    {path: '', component:LoginComponent, pathMatch: "full"},
    {path: 'register', component:RegisterComponent, pathMatch: "full"},
    {path: 'dashboard', component:DashboardComponent, pathMatch: "full"},
    {path: 'offer', component:OfferComponent, pathMatch: "full"},
    {path: 'profile', component:ProfileComponent, pathMatch: "full"}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }