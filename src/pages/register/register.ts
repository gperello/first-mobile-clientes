import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {HomePage} from "../home/home";
import { Usuario } from '../../models/clases';
import { CustomServices } from '../../services/custom.services';
import { AngularFireAuth } from 'angularfire2/auth';
import { CambiarClavePage } from '../cambiar.clave/cambiar.clave';

/*
 Generated class for the RegisterPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  User:Usuario = new Usuario();

  constructor(public nav:NavController, private service:CustomServices) {
    this.User.TelCodigo = "+54";
    this.User.DocTipo = "DNI";
    this.User.Actualiza = true;
  }

  register() {
    if(this.validar()) {
      this.nav.setRoot(CambiarClavePage, { User: this.User });
    }
  }

  login() {
    this.nav.setRoot(LoginPage);
  }
  validar():boolean{
    this.User.Email = this.User.Email.trim();
    if(this.User.Nombre.length < 6 || this.User.Nombre.length > 100){
      this.service.presentToast("El email ingresado no tiene el formato correcto (entre 6 y 100 caracteres).");
      return false
    }
    if(this.User.Email.length < 6 || this.User.Email.length > 100){
      this.service.presentToast("El email ingresado no tiene el formato correcto (entre 6 y 100 caracteres).");
      return false
    }
    var re = new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    if(!re.test(this.User.Email)){
      this.service.presentToast("El email ingresado no tiene el formato correcto.");
      return false
    }
    if(this.User.TelPrefijo.length < 2 || this.User.TelPrefijo.length > 5){
      this.service.presentToast("El prefijo del teléfono ingresado no tiene el formato correcto.");
      return false
    }
    if(this.User.TelNumero.length < 6 || this.User.TelNumero.length > 10){
      this.service.presentToast("El número de teléfono ingresado no tiene el formato correcto.");
      return false
    }
    return true;
  }

  alertOptions = {
    title: 'Selección',
    subtitle: 'Seleccione una de las opciones'
  };

}
