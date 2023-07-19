import { NgModule } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { ListaContactosComponent } from './pages/lista-contactos/lista-contactos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { ContactoPutComponent } from './contacto-put/contacto-put.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { CarreraComponent } from './pages/carrera/carrera.component';
import { ListaCarreraComponent } from './pages/lista-carrera/lista-carrera.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { ProductoComponent } from './pages/producto/producto.component';
import { ListaProductoComponent } from './pages/lista-producto/lista-producto.component';
import { HttpClientModule } from '@angular/common/http';
import { Contacto2Component } from './contacto2/contacto2.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaContactosComponent,
    ContactoComponent,
    ContactoPutComponent,
    CarreraComponent,
    ListaCarreraComponent,
    ProductoComponent,
    ListaProductoComponent,
    Contacto2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [
    {provide: FIREBASE_OPTIONS, useValue: environment.firebase}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
