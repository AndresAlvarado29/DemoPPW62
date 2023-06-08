import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Producto } from '../domain/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
private dbPath = '/productos';
productos: Producto[]=[];
productosRef: AngularFirestoreCollection<Producto>;

  constructor(private db: AngularFirestore) {
    this.productosRef=db.collection(this.dbPath);
   }
   save(producto: Producto){
    this.productos.push(producto)
    producto.uid= this.db.createId()
    this.create(producto);
  }
  create(producto: Producto):any{
    return this.productosRef.doc(producto.uid).set({...producto});
  }
  update(id: string,data:any): Promise<void>{
    let actualizacion:any;
    this.getList().forEach(element => {
      if(element.uid===id){
      actualizacion= this.productosRef.doc(id).update(data);
      }else{
        console.log("valor no encontrado")
      }
    });
    return actualizacion;
  }
  delete(id: string):Promise<void>{
    this.getList().forEach(element => {
      if(element.uid!=id){
        console.log("valor no encontrado")
      }
    });
    return this.productosRef.doc(id).delete();
  }

  getList(){
    return this.productos
  }
  getAll(){
    return this.productosRef.valueChanges();
  }

}


