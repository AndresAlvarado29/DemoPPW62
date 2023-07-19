import { Component } from '@angular/core';
import { Contacto } from '../domain/contacto';
import { ContactoService } from '../services/contacto.services';
import { PersonasService } from '../services/personas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto2',
  templateUrl: './contacto2.component.html',
  styleUrls: ['./contacto2.component.scss']
})
export class Contacto2Component {
  contacto: Contacto = new Contacto();

  constructor(private contactoService: ContactoService,
    private personasService: PersonasService,
    private router: Router) {

    let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if (params) {
      console.log(params)
      this.contacto = new Contacto()
      this.contacto = params['contacto']
    }
  }
guardarWS(){
  console.log(this.contacto)
  this.contactoService.save(this.contacto)
  this.personasService.save(this.contacto).subscribe(data=>{
    console.log("resultado WS save", data);

  });
  this.contacto = new Contacto();
  this.router.navigate(['paginas/listacontactos'])
  this.recargarPagina()
}
recargarPagina(){
  let curretUrl= this.router.url
  this.router.navigateByUrl("/",{skipLocationChange:true}).then(()=>{this.router.navigate([curretUrl])})
}
}
