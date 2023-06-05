import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { NavigationExtras, Router } from '@angular/router';
import { Carrera } from 'src/app/domain/carrera';
import { CarreraServiceService } from 'src/app/services/carrera-service.service';
@Component({
  selector: 'app-lista-carrera',
  templateUrl: './lista-carrera.component.html',
  styleUrls: ['./lista-carrera.component.scss']
})
export class ListaCarreraComponent {
listadoCarreras: Carrera[]=[]
displayedColumns: string[]=['Codigo', 'Nombre','N° de Ciclos','N° de Materias', 'Accion'];
dataSource= this.carreraService.carreras;
@ViewChild(MatTable)
table!:MatTable<Carrera>;

constructor(private carreraService: CarreraServiceService, private router:Router){
this.listadoCarreras= carreraService.getList()
console.log('listadoCarrerras', this.listadoCarreras)
}
editar(carrera: Carrera){
  console.log(carrera)
  let params: NavigationExtras = {
    queryParams:{
      carrera:carrera,
    }
  }
  this.router.navigate(['paginas/crear-carrera'],params)
}
eliminar(carrera: Carrera){
  this.carreraService.delete(carrera)
  this.table.renderRows();
}
}
