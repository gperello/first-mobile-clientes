import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {HomePage} from "../home/home";
import { CustomServices } from '../../services/custom.services';
import { EnviarCodigoPage } from '../enviar.codigo/enviar.codigo';

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
        this.nav.push(EnviarCodigoPage, { Token: data.Codigo, Telefono: '' });
    });
  }

  login() {
    this.nav.setRoot(LoginPage);
  }
}
