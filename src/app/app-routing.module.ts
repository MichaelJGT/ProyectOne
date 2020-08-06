import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { ListaComponent } from './lista/lista.component';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [
  {
    path:"",
    component: InicioComponent
  },
  {
    path:"registro",
    component: RegistroComponent
  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"lista",
    component: ListaComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
