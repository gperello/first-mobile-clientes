import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {HomePage} from "../home/home";
import { CustomServices } from '../../services/custom.services';

/*
 Generated class for the RegisterPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-mensajes',
  templateUrl: 'mensajes.html'
})
export class MensajesPage {
  titulo:string;
  mensaje:string;

  constructor(public nav:NavController, private params:NavParams, private service:CustomServices) {
    this.titulo = this.params.data.titulo;
    this.mensaje = this.params.data.mensaje;
  }

  goToHome() {
    this.nav.setRoot(HomePage);
  }
}
