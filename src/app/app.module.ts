import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { ListaContactosComponent } from './pages/lista-contactos/lista-contactos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FormsModule } from '@angular/forms';
import { ContactoPutComponent } from './contacto-put/contacto-put.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaContactosComponent,
    ContactoComponent,
    ContactoPutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
