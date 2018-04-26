import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {HomePage} from "../home/home";
import { CustomServices } from '../../services/custom.services';

/*
 Generated class for the RegisterPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-cambiar-clave',
  templateUrl: 'cambiar.clave.html'
})
export class CambiarClavePage {
  codigo:string;
  password:string;
  reppassword:string;

  constructor(public nav:NavController, private service:CustomServices) {
  }

  changepassword() {
    if(this.validar()) this.service.ChangePassword(this.codigo, this.password, (data) => {
      this.service.presentToast("Usuario validado, ya puede iniciar sesion.");
      setTimeout(() => {
        this.nav.setRoot(LoginPage);
      }, 3000);
    });
  }

  login() {
    this.nav.setRoot(LoginPage);
  }

  validar():boolean{
    if(this.codigo.length < 4 || this.codigo.length > 4){
      this.service.presentToast("El codigo ingresado no tiene el formato correcto (solo 4 caracteres).");
      return false
    }
    if(this.password.length < 6 || this.password.length > 30){
      this.service.presentToast("La contraseña ingresada no tiene el formato correcto (entre 6 y 30 caracteres).");
      return false
    }
    if(this.password != this.reppassword){
      this.service.presentToast("Las contraseñas ingresadas no son iguales.");
      return false
    }
    return true;
  }
}
