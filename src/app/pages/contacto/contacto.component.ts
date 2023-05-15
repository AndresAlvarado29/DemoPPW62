import { Component } from '@angular/core';
import { Contacto } from 'src/app/domain/contacto';
import { ActivatedRoute,Router } from '@angular/router';
import { ContactoService } from 'src/app/services/contacto.services';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {
 contacto: Contacto = new Contacto();

 constructor(private contactoService: ContactoService,
  private router: Router){

    let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if(params){
      console.log(params)
      this.contacto= new Contacto()
      this.contacto= params['contacto']
    }
  }

 guardar(){
this.contactoService.getList().forEach(element => {
  if(element.cedula===this.contacto.cedula){
    this.contactoService.update(this.contacto)
  }
});
 this.contactoService.save(this.contacto)
  this.contacto= new Contacto()
  this.router.navigate(['paginas/listacontactos'])
 }
}
