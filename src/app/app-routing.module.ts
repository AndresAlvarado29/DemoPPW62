import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaContactosComponent } from './pages/lista-contactos/lista-contactos.component';
import { HeaderComponent } from './template/header/header.component';

const routes: Routes = [
  {path:"paginas/ListaContactos", component: ListaContactosComponent},
  {path:"template/header", component: HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
