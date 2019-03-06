import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import {HomePage} from "../home/home";
import { Usuario } from '../../models/clases';
import { CustomServices } from '../../services/custom.services';

/*
 Generated class for the RegisterPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-cliente',
  templateUrl: 'cliente.html'
})
export class ClientePage {
  User:Usuario = new Usuario();
  Cuit:string = "";
  Clave:string = "";
  esModal:boolean = false;

  constructor(public nav:NavController, private service:CustomServices, private params:NavParams,private viewCtrl: ViewController) {
    this.User = this.service.UserData();
    this.esModal = this.params.data != null && this.params.data.esModal;
  }

  registrar() {
    if(this.validar()) {
      this.service.AsociarCliente(this.Cuit, this.Clave, this.User.UsuarioId, (data)=>{
        this.service.showAlert("Asociación correcta","Ya puede hacer viajes a cuenta del cliente " + data.text, ()=>{
          this.User.Clientes.push({ ClienteId: parseInt(data.id), Nombre: data.text });
          localStorage.setItem("datos_de_cliente", JSON.stringify(this.User));
          if(!this.esModal)setTimeout(() => { this.nav.setRoot(HomePage);; }, 1000);
          else this.viewCtrl.dismiss();
        });
      });
    }
  }

  validar():boolean{
    if(this.Cuit.length != 11){
      this.service.presentToast("El CUIT ingresado no tiene el formato correcto (11 caracteres).");
      return false
    }
    if(this.Clave.length < 3){
      this.service.presentToast("La clave ingresada no es correcta.");
      return false
    }
    return true;
  }
  volver(){
    this.viewCtrl.dismiss();
  }
  ocultarvolver(){
    return !this.esModal;
  }


}
