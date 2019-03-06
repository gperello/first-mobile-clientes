import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {HomePage} from "../home/home";
import { CustomServices } from '../../services/custom.services';
import { Usuario } from '../../models/clases';
import { AngularFireAuth } from 'angularfire2/auth';

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
  User:Usuario = new Usuario();
  password:string;
  reppassword:string;

  constructor(public nav:NavController, private params:NavParams, private service:CustomServices, public fb:AngularFireAuth) {
    this.User = this.params.data.User;
  }

  changepassword() {
    if(this.validar()) {
      this.fb.auth.createUserWithEmailAndPassword(this.User.Email, this.password).then((result) =>{
        var user = result.user;
        user.updateProfile({
            displayName: this.User.Nombre + " " + this.User.Apellido,
            photoURL: ""
        });
        this.service.Register(this.User, ()=>{
          this.nav.setRoot(HomePage);
        });
        user.sendEmailVerification();
      }).catch((mensaje)=>{
          this.service.showAlert("Error", mensaje);
      });
    }
  }

  login() {
    this.nav.setRoot(LoginPage);
  }

  validar():boolean{
    if(this.password.length < 6 || this.password.length > 30){
      this.service.presentToast("La contraseña ingresada no tiene el formato correcto (entre 6 y 30 caracteres).");
      return false
    }
    if(this.password != this.reppassword){
      this.service.presentToast("Las contraseñas ingresadas no son iguales.");
      return false
    }
    return true;
  }
}
