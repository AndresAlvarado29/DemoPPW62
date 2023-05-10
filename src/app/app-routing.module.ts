import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaContactosComponent } from './pages/lista-contactos/lista-contactos.component';

const routes: Routes = [
  {path:"paginas/ListaContactos", component: ListaContactosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
