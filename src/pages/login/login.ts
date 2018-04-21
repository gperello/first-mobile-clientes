import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RegisterPage} from '../register/register';
import {HomePage} from '../home/home'
import {CustomServices} from '../../services/custom.services'
import { ToastController } from 'ionic-angular';
import { GenerarCodigoPage } from '../generar.codigo/generar.codigo';

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

  constructor(public nav: NavController, public service:CustomServices,private toastCtrl: ToastController) {}

  signup() {
    this.nav.setRoot(RegisterPage);
  }
  changepassword() {
    this.nav.setRoot(GenerarCodigoPage);
  }

  login() {
    this.service.Login(this.username, this.password, () => {
        this.nav.setRoot(HomePage);
    }, (message) =>{
        this.presentToast(message);
    });
  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 1000,
      position: 'top'
    });
    toast.present();
  }
}
