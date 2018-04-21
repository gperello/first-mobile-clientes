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
    this.service.ChangePassword(this.codigo, this.password, (data) => {
      this.nav.setRoot(HomePage);
    });
  }

  login() {
    this.nav.setRoot(LoginPage);
  }
}
