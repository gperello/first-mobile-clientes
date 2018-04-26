import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {HomePage} from "../home/home";
import { Usuario } from '../../services/clases';
import { CustomServices } from '../../services/custom.services';

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
  }

  register() {
    if(this.validar()) this.service.Register(this.User, (data) =>{
      this.service.presentToast("Usuario creado, recibirá un código de validación por email o sms.");
      setTimeout(() => {
        this.nav.setRoot(LoginPage);
      }, 3000);
    }); 
  }

  login() {
    this.nav.setRoot(LoginPage);
  }
  validar():boolean{
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
    if(this.User.Telefono.length < 10 || this.User.Telefono.length > 15){
      this.service.presentToast("El teléfono ingresado no tiene el formato correcto.");
      return false
    }
    return true;
  }


}
