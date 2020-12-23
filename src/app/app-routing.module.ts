import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListProduitsComponent } from './list-produits/list-produits.component';
import { ListeVenteComponent } from './liste-vente/liste-vente.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'list-vente',component:ListeVenteComponent},
  {path:'login', component:LoginComponent},
  {path:'list-produits', component:ListProduitsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
