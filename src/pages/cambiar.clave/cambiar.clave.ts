import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {HomePage} from "../home/home";

/*
 Generated class for the RegisterPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-cambiar-clave',
  templateUrl: 'cambiar.clave.html'
})
export class CmabiarClavePage {
  constructor(public nav:NavController) {
  }

  signup() {
    this.nav.setRoot(HomePage);
  }

  login() {
    this.nav.setRoot(LoginPage);
  }
}
