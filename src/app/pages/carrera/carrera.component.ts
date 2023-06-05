import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Carrera } from 'src/app/domain/carrera';
import { CarreraServiceService } from 'src/app/services/carrera-service.service';

@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html',
  styleUrls: ['./carrera.component.scss']
})
export class CarreraComponent {
carrera: Carrera = new Carrera();

constructor(private carreraService: CarreraServiceService, private router:Router){
 let params= this.router.getCurrentNavigation()?.extras.queryParams;
 if(params){
  console.log(params)
  this.carrera=new Carrera()
  this.carrera=params['carrera']
 }
}
guardar(){
  this.carreraService.getList().forEach(element => {
  if(element.codigo===this.carrera.codigo){
    this.carreraService.update(this.carrera)
    this.carreraService.delete(this.carrera)
  }    
  });
  this.carreraService.save(this.carrera)
  this.carrera=new Carrera()

  this.carreraService.getList().forEach(element => {
    if(element.codigo===this.carrera.codigo){
      this.carreraService.delete(this.carrera)
    }
    this.router.navigate(['paginas/listacarreras'])
  });
}
}
