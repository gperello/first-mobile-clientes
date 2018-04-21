import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {HomePage} from "../home/home";
import { Usuario } from '../../services/clases';
import { CustomServices } from '../../services/custom.services';
import { EnviarCodigoPage } from '../enviar.codigo/enviar.codigo';

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
  User:Usuario;

  constructor(public nav:NavController, private service:CustomServices) {
  }

  register() {
    this.service.Register(this.User, (data) =>{
        this.nav.push(EnviarCodigoPage, { Token: data.Token, Telefono: this.User.Telefono });
    }); 
  }

  login() {
    this.nav.setRoot(LoginPage);
  }
}
