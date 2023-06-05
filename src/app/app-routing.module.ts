import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaContactosComponent } from './pages/lista-contactos/lista-contactos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CarreraComponent } from './pages/carrera/carrera.component';
import { ListaCarreraComponent } from './pages/lista-carrera/lista-carrera.component';

const routes: Routes = [
  {path:"paginas/listacontactos", component: ListaContactosComponent},
  {path:"paginas/nuevo-contacto", component: ContactoComponent},
  {path:"paginas/crear-contacto", component: ContactoComponent},
  {path:"paginas/crear-carrera", component: CarreraComponent},
  {path:"paginas/listacarreras",component:ListaCarreraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
