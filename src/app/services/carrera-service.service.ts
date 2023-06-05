import { Injectable } from '@angular/core';
import { Carrera } from '../domain/carrera';

@Injectable({
  providedIn: 'root'
})
export class CarreraServiceService {
carreras: Carrera[] = [];
  constructor() { }

  save(carrera: Carrera){
    this.carreras.push(carrera)
    console.log(this.carreras)
  }
  update(carrera: Carrera){
    let index= this.carreras.indexOf(carrera)
    this.carreras.splice(index,1,carrera)
  }
  delete(carrera: Carrera){
    let index = this.carreras.indexOf(carrera)
    this.carreras.splice(index,1)
  }

  getList(){
    return this.carreras
  }
}
