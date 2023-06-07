import { Injectable } from '@angular/core';
import { Contacto } from '../domain/contacto';
/*import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';*/

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  contactos: Contacto[] = [];
  /*contactoRef: AngularFirestoreCollection<Contacto>;
  constructor(private db: AngularFirestore) {
    this.contactoRef=this.db.collection('contactos');
   }

  saveFS(contacto: Contacto){
    this.contactoRef.add(contacto)
    .then(() => {
      console.log('Datos subidos correctamente');
    })
    .catch((error) => {
      console.error('Error al subir datos: ', error);
    });
  }*/
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
