import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RegisterPage} from '../register/register';
import {HomePage} from '../home/home'
import {CustomServices} from '../../services/custom.services'
import { GenerarCodigoPage } from '../generar.codigo/generar.codigo';
import { CambiarClavePage } from '../cambiar.clave/cambiar.clave';

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  username:string;
  password:string;
  error:string

  constructor(public nav: NavController, public service:CustomServices) {}

  signup() {
    this.nav.setRoot(RegisterPage);
  }
  changepassword() {
    this.nav.setRoot(GenerarCodigoPage);
  }

  login() {
    if(this.validar()) this.service.Login(this.username, this.password, () => {
        this.nav.setRoot(HomePage);
    }, (message) =>{
        this.service.presentToast(message);
    });
  }
  validar():boolean{
    if(this.username.length < 6 || this.username.length > 100){
      this.service.presentToast("El usuario ingresado no tiene el formato correcto (entre 6 y 100 caracteres).");
      return false
    }
    if(this.password.length < 6 || this.password.length > 30){
      this.service.presentToast("La contraseña ingresada no tiene el formato correcto (entre 6 y 30 caracteres).");
      return false
    }
    return true;
  }

  goToValidar(){
    this.nav.push(CambiarClavePage);
  }
}
