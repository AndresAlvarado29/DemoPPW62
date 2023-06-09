import { Component, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Producto } from 'src/app/domain/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.scss']
})
export class ListaProductoComponent {
listadoProductos:Producto[]=[]
listadoProductosFire:any;
displayedColumns: string[]=['Codigo','Nombre','Cantidad','Precio','Accion']
dataSource=this.productoService.getAll();
@ViewChild(MatTable)
table!: MatTable<Producto>;
constructor(private productoService: ProductoService, private router:Router){
this.listadoProductos= productoService.getList()
console.log('listadoProductos',this.listadoProductos)
this.listadoProductosFire=productoService.getAll()
}
editar(producto: Producto){
  console.log(producto)
  let params:NavigationExtras={
    queryParams:{
      producto: producto,
    }
  }
  this.router.navigate(['paginas/nuevo-producto'],params)
}
eliminar(producto: Producto){
  this.productoService.delete(producto.uid)
}
}
