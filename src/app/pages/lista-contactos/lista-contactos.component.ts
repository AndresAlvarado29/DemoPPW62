import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { Contacto } from 'src/app/domain/contacto';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactoService } from 'src/app/services/contacto.services';
import { MatTable } from '@angular/material/table';
import { PersonasService } from 'src/app/services/personas.service';


@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss']
})
export class ListaContactosComponent implements OnInit {
  listadoContactos: Contacto[] = []
  listadoContactosFire: any;
  listadoContactosWS: any;
  displayedColumns: string[] = ['Cedula', 'Nombre', 'Apellido', 'Celular', 'Direccion', 'Accion'];//quitamos correo
  dataSource = this.personasService.getAll();
  @ViewChild(MatTable)
  table!: MatTable<Contacto>;

  constructor(private contactoService: ContactoService,
    private personasService: PersonasService,
    private router: Router) {
    this.listadoContactos = contactoService.getList()
    console.log('listadoContactos', this.listadoContactos)
    this.listadoContactosFire = contactoService.getAll()
    this.listadoContactosWS = personasService.getAll()
  }
  ngOnInit(): void {
    this.listadoContactosWS = this.personasService.getAll()
  }

  editar(contacto: Contacto) {
    console.log(contacto)
    let params: NavigationExtras = {
      queryParams: {
        contacto: contacto,
      }
    }
    this.router.navigate(['paginas/nuevo-contacto'], params)
  }
  eliminarWS(contacto: Contacto) {
    this.personasService.delete(contacto.cedula).subscribe(
      () => {
        console.log('Contacto eliminado exitosamente.');
      });
  this.recargarPagina()
  }
  recargarPagina(){
    let curretUrl= this.router.url
    this.router.navigateByUrl("/",{skipLocationChange:true}).then(()=>{this.router.navigate([curretUrl])})
  }

  /*
  eliminar(contacto: Contacto) {
    this.contactoService.delete(contacto)
    this.table.renderRows();
  }
  
  eliminarF(contacto: Contacto) {
    //  this.contactoService.deleteF(contacto.uid)
  }*/
 /*borrarContacto(cedula: String){
this.listadoContactos=this.listadoContactos.filter(Contacto => Contacto.cedula != cedula)
 }
 mensajeContacto(cedula: String){
  this.listadoContactos=this.listadoContactos.filter(Contacto => Contacto.cedula == cedula)
  console.log("perro")
 }*/

 

}
