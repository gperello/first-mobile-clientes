import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RegisterPage} from '../register/register';
import {HomePage} from '../home/home'
import {CustomServices} from '../../services/custom.services'
import { CambiarClavePage } from '../cambiar.clave/cambiar.clave';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { EnviarCodigoPage } from '../enviar.codigo/enviar.codigo';

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

  constructor(public nav: NavController, public service:CustomServices, public fb:AngularFireAuth) {
    if(this.service.GetValidandoUsuario()){
      this.service.SetValidandoUsuario(null);
      this.service.showLoading();
      this.fb.auth.getRedirectResult().then((result) => {
        if(result.user != null){
          var user = result.user;
          this.service.Login(user.email, user.displayName, user.phoneNumber, user.photoURL, ()=>{
            this.nav.setRoot(HomePage);
          });
        }
      }).catch((error)=> {
        this.service.presentToast(error.message);
      });
    }
  }

  signup() {
    this.nav.setRoot(RegisterPage);
  }
  changepassword() {
    this.nav.setRoot(EnviarCodigoPage);
  }
  
  login() {
    if(this.validar()){ 
      this.service.SetValidandoUsuario(null);
      this.fb.auth.signInWithEmailAndPassword(this.username,this.password).then(
      (result)=>{
        var user = result.user;
        this.service.Login(user.email, user.displayName, user.phoneNumber, user.photoURL, ()=>{
          this.nav.setRoot(HomePage);
        });
      },
      ()=>{
        this.service.presentToast("Usuario o contraseña inválido.");
      });
    }
  }
  async logingoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account"});
    this.service.SetValidandoUsuario("true");
    this.service.showLoading();
    this.fb.auth.signInWithRedirect(provider);
    
  }
  async loginfacebook() {
    
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.setCustomParameters({ prompt: "select_account"});
    this.service.SetValidandoUsuario("true");
    this.service.showLoading();
    this.fb.auth.signInWithRedirect(provider);
    
  }
  onsuccess() {
    this.nav.setRoot(HomePage);
  }

  validar():boolean{
    if(this.username.length < 6 || this.username.length > 100){
      this.service.presentToast("El usuario ingresado no tiene el formato correcto (entre 6 y 100 caracteres).");
      return false
    }
    if(this.password.length < 6 || this.password.length > 30){
      this.service.presentToast("La contraseña ingresada no tiene el formato correcto (entre 6 y 30 caracteres).");
      return false
    }
    return true;
  }

  goToValidar(){
    this.nav.push(CambiarClavePage);
  }
}
