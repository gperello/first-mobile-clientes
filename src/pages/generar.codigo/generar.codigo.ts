import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {HomePage} from "../home/home";
import { CustomServices } from '../../services/custom.services';
import { CambiarClavePage } from '../cambiar.clave/cambiar.clave';

/*
 Generated class for the RegisterPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-generar-codigo',
  templateUrl: 'generar.codigo.html'
})
export class GenerarCodigoPage {
  email:string;
  constructor(public nav:NavController, private service:CustomServices) {
  }

  generarcodigo() {
    this.service.GenerateCode(this.email, (data) => {
        this.nav.push(CambiarClavePage);
    });
  }

  login() {
    this.nav.setRoot(LoginPage);
  }

  validar():boolean{
    if(this.email.length < 6 || this.email.length > 100){
      this.service.presentToast("El email ingresado no tiene el formato correcto (entre 6 y 100 caracteres).");
      return false
    }
    var re = new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    if(!re.test(this.email)){
      this.service.presentToast("El email ingresado no tiene el formato correcto.");
      return false
    }
    return true;
  }

}
