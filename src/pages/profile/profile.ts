import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Usuario } from '../../models/clases';
import { CustomServices } from '../../services/custom.services';
import { TarjetasPage } from '../tarjetas/tarjetas';

/*
  Generated class for the ProfilePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  User:Usuario = new Usuario();
  constructor(public nav: NavController, private params:NavParams, private service:CustomServices) {
      if(this.params.data && this.params.data.Mensaje) this.service.presentToast("Debe completar todos los datos personales para usar el sistema");
      this.User = this.service.UserData();
      this.User.Actualiza = true;
      if(this.User.DocTipo == null || this.User.DocTipo.length == 0) this.User.DocTipo = "DNI";
      if(this.User.TelCodigo == null || this.User.TelCodigo.length == 0) this.User.TelCodigo = "+54";
  }

  guardar(){
    if(this.ValidarUsuario()){
      this.service.Register(this.User, ()=>{
        this.service.presentToast("Datos de usuario actualizados");
      });
    }
  }

  registrartarjeta(){
    this.nav.setRoot(TarjetasPage);
  }

  public ValidarUsuario():boolean{
    if(this.User.Nombre == null || this.User.Nombre.length == 0){
      this.service.presentToast("No ingresaste tu nombre.");
      return false;
    } 
    if(this.User.Apellido == null || this.User.Apellido.length == 0) {
      this.service.presentToast("No ingresaste tu apellido.");
      return false;
    } 
    if(this.User.DocNumero == null || this.User.DocNumero.length == 0) {
      this.service.presentToast("No ingresaste tu número de documento.");
      return false;
    } 
    if(this.User.DocTipo == null || this.User.DocTipo.length == 0) {
      this.service.presentToast("No ingresaste el tipo de documento.");
      return false;
    } 
    if(this.User.Email == null || this.User.Email.length == 0) {
      this.service.presentToast("No ingresaste tu email.");
      return false;
    } 
    if(this.User.TelCodigo == null || this.User.TelCodigo.length == 0) {
      this.service.presentToast("No ingresaste el código de país del teléfono.");
      return false;
    } 
    if(this.User.TelPrefijo == null || this.User.TelPrefijo.length == 0) {
      this.service.presentToast("No ingresaste el prefijo del teléfono.");
      return false;
    } 
    if(this.User.TelNumero == null || this.User.TelNumero.length == 0) {
      this.service.presentToast("No ingresaste el número de teléfono.");
      return false;
    } 
    return true;
}
  alertOptions = {
    title: 'Selección',
    subtitle: 'Seleccione una de las opciones'
  };
}
