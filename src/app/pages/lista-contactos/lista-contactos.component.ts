import { Component, Input, ViewChild } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { Contacto } from 'src/app/domain/contacto';
import { ActivatedRoute,Router } from '@angular/router';
import { ContactoService } from 'src/app/services/contacto.services';
import { MatTable } from '@angular/material/table';


@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss']
})
export class ListaContactosComponent {
listadoContactos: Contacto[]=[]
listadoContactosFire:any;
displayedColumns: string[] = ['Cedula', 'Nombre', 'Apellido', 'Correo', 'Celular','Direccion','Accion'];
dataSource = this.contactoService.contactos;
  @ViewChild(MatTable)
  table!: MatTable<Contacto>;

constructor(private contactoService: ContactoService,
 private router:Router){
  this.listadoContactos = contactoService.getList()
  console.log('listadoContactos', this.listadoContactos)
  this.listadoContactosFire=contactoService.getAll()
 }

 editar(contacto: Contacto){
  console.log(contacto)
  let params: NavigationExtras = {
    queryParams: {
      contacto: contacto,
    }
  }
  this.router.navigate(['paginas/nuevo-contacto'],params)
 }
 eliminar(contacto: Contacto){
this.contactoService.delete(contacto)
this.table.renderRows();
 }



 /*borrarContacto(cedula: String){
this.listadoContactos=this.listadoContactos.filter(Contacto => Contacto.cedula != cedula)
 }
 mensajeContacto(cedula: String){
  this.listadoContactos=this.listadoContactos.filter(Contacto => Contacto.cedula == cedula)
  console.log("perro")
 }*/

 

}
