import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Usuario, Tarjeta, Viaje } from '../../models/clases';
import { CustomServices } from '../../services/custom.services';
import { MercadoPagoService } from '../../services/mercadopago.service';
import { TarjetasPage } from '../tarjetas/tarjetas';
import { MensajesPage } from '../mensajes/mensajes';

/*
  Generated class for the ProfilePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pago-tarjeta',
  templateUrl: 'pago.tarjeta.html'
})
export class PagoTarjetaPage {
  Tarjeta:Tarjeta = new Tarjeta();
  Viaje:Viaje = new Viaje();
  Codigo = "";
  constructor(public nav: NavController, private params:NavParams, private service:CustomServices, private mp:MercadoPagoService) {
    this.Tarjeta = this.params.data.Tarjeta;
    this.Viaje = this.params.data.Viaje;
  }

  Pagar(){
    var form = document.querySelector('#formguardado');
    this.mp.GenerarToken(form, this.Viaje, this.Codigo, this.Tarjeta,(data)=>{
      this.service.Reservar(this.Viaje, (data)=> {
        this.nav.setRoot(MensajesPage,{
          titulo: "Reserva registrada correctamente",
          mensaje: "Su reserva quedó registrada con el número " + data.Id + ". Recibirá una notificación cuando el movil esté en camino."
        });
      });
    });
  }
}
