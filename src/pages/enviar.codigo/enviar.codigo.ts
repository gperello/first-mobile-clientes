import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LoginPage} from '../login/login';
import { CambiarClavePage } from '../cambiar.clave/cambiar.clave';
import { CustomServices } from '../../services/custom.services';
import { AngularFireAuth } from 'angularfire2/auth';

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
  Email:string;
  constructor(public nav:NavController, public fb:AngularFireAuth,private service: CustomServices) {
  }

  enviaremail() {
    this.fb.auth.sendPasswordResetEmail(this.Email).then((reason)=>{
        this.service.showAlert("Email de recuperación enviado","Revise su casilla de correo electr para cambiar su contraseña.")
    });
  }

  login() {
    this.nav.setRoot(LoginPage);
  }
}
