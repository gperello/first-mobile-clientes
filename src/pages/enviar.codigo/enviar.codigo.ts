import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {HomePage} from "../home/home";
import { CambiarClavePage } from '../cambiar.clave/cambiar.clave';
import { SocialSharing } from '@ionic-native/social-sharing';

/*
 Generated class for the RegisterPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-enviar-codigo',
  templateUrl: 'enviar.codigo.html'
})
export class EnviarCodigoPage {
  telefono:string;
  codigo:string
  constructor(public nav:NavController, private params:NavParams,private socialSharing: SocialSharing) {
        this.codigo = this.params.data.Token;
        this.telefono = this.params.data.Telefono;
  }

  enviarcodigo() {
    this.socialSharing.shareViaSMS("Su Codigo FIRST: " + this.codigo, this.telefono);
    this.nav.push(CambiarClavePage);
  }

  login() {
    this.nav.setRoot(LoginPage);
  }
}
