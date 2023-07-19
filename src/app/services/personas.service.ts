import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contacto } from '../domain/contacto';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  constructor(private http: HttpClient) {}
    
  save(contacto: Contacto){
      return this.http.post<any>("http://localhost:8080/demoPPW/rs/clientes/crearC", contacto)
    }
  getAll(){
    return this.http.get<any>("http://localhost:8080/demoPPW/rs/clientes/all")
  } 
  delete(cedula: string) {
    const url = `http://localhost:8080/demoPPW/rs/clientes/EliminarC/${cedula}`;
    return this.http.delete<any>(url);
  }

}
