import { Injectable } from '@angular/core';
import { Contacto } from '../domain/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  contactos: Contacto[] = [];

  constructor() { }

  save(contacto: Contacto){
  this.contactos.push(contacto) 
  console.log(this.contactos)   
  }
update(contacto: Contacto){
let index = this.contactos.indexOf(contacto)
this.contactos.splice(index,1,contacto)
}

 delete(contacto: Contacto){
let index = this.contactos.indexOf(contacto)
this.contactos.splice(index,1)
 }

  getList(){
    return this.contactos
  }
}
