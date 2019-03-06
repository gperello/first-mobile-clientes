import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Usuario, Tarjeta } from '../../models/clases';
import { CustomServices } from '../../services/custom.services';
import { MercadoPagoService } from '../../services/mercadopago.service';
import { TarjetasPage } from '../tarjetas/tarjetas';

/*
  Generated class for the ProfilePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-nueva-tarjeta',
  templateUrl: 'nueva.tarjeta.html'
})
export class NuevaTarjetaPage {
  User:Usuario = new Usuario();
  tipoDoc = "DNI";
  esModal:boolean = false;
  constructor(public nav: NavController, private params:NavParams, private service:CustomServices, private mp:MercadoPagoService,private viewCtrl: ViewController) {
    this.esModal = this.params.data != null && this.params.data.esModal;
    this.User = this.service.UserData();
  }

  registrartarjeta(){
    var form = document.querySelector('#formcompleto');
    this.mp.CrearTarjeta(form,(data)=>{
      this.service.presentToast("Tarjeta creada correctamente.");
      var user = this.service.UserData();
      user.Tarjetas = data;
      localStorage.setItem("datos_de_cliente", JSON.stringify(user));
      if(!this.esModal)setTimeout(() => { this.nav.setRoot(TarjetasPage); }, 1000);
      else this.viewCtrl.dismiss();
    });
  }

  volver(){
    this.viewCtrl.dismiss();
  }
  ocultarvolver(){
    return !this.esModal;
  }
  alertOptions = {
    title: 'Selección',
    subtitle: 'Seleccione una de las opciones'
  };

}
