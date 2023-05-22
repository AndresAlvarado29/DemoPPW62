import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-contacto-put',
  templateUrl: './contacto-put.component.html',
  styleUrls: ['./contacto-put.component.scss']
})
export class ContactoPutComponent {
  
  @Input('data') contacto:any
  @Output() borrar = new EventEmitter<String>()
  @Output() mensaje = new EventEmitter<String>()
  borrarContacto(cedula: String){
    this.borrar.emit(cedula)
  }
  mensajeContacto(cedula: String){
this.mensaje.emit(cedula)
  }
}
