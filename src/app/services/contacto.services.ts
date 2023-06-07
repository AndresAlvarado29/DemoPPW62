import { Injectable } from '@angular/core';
import { Contacto } from '../domain/contacto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
private dbPath ='/contactos';
  contactos: Contacto[] = [];
  contactosRef: AngularFirestoreCollection<Contacto>;

  constructor(db: AngularFirestore) {
    this.contactosRef = db.collection(this.dbPath);
   }

  /*saveFS(contacto: Contacto){
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
  this.create(contacto); 
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

 getAll(){
  return this.contactosRef.valueChanges();
 }

 create(contacto: Contacto):any{
  return this.contactosRef.add({...contacto});
 }
 updateF(id: string,data:any): Promise<void>{
  return this.contactosRef.doc(id).update(data);
 }
 deleteF(id: string):Promise<void>{
  return this.contactosRef.doc(id).delete();
 }
}
