import {Component} from '@angular/core';
import {NavController, NavParams, ModalController} from 'ionic-angular';
import { CustomServices } from '../../services/custom.services';
import { Viaje, Cliente, Tarjeta } from '../../models/clases';
import { MensajesPage } from '../mensajes/mensajes';
import { PagoTarjetaPage } from '../pago.tarjeta/pago.tarjeta';
import { NuevaTarjetaPage } from '../nueva.tarjeta/nueva.tarjeta';
import { ClientePage } from '../cliente/cliente';

/*
 Generated class for the PaymentMethodPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-formadepago',
  templateUrl: 'formadepago.html'
})
export class FormaDePagoPage {
  Viaje:Viaje = new Viaje();
  Clientes:Array<Cliente> = [];
  Tarjetas:Array<Tarjeta> = [];
  ImporteEfectivo:string = "";
  constructor(public nav: NavController,public params: NavParams, private service:CustomServices, private modalCtrl:ModalController) {
    this.Viaje = this.params.data.Viaje;
    this.service.UserData().Clientes.forEach(element => {
        if(element.ClienteId != 1000) this.Clientes.push(element);
    });
    this.ImporteEfectivo = "$ " + this.service.formatNumber(Math.ceil(this.service.getNumber(this.Viaje.ImporteKm) - this.service.getNumber(this.Viaje.ImporteKm) * this.Viaje.DescuentoEfectivo / 100));
    this.Tarjetas = this.service.UserData().Tarjetas;
    this.Tarjetas.forEach((value) => value.Importe = this.Viaje.ImporteKm);
    this.service.GetNumeroViaje((data)=>{
      this.Viaje.Reserva = data.Reserva;
    });
 }
    //FALTA LA PARTE DE CUENTA CORRIENTE
  

    CobrarPorCtaCte(id){
      this.Viaje.ClienteId = id;
      this.Viaje.FormaPagoId = 2;
      this.Reservar();
    }
    CobrarEnEfectivo(){
      this.Viaje.FormaPagoId = 1;
      this.Viaje.ImporteKm = this.ImporteEfectivo;
      this.Reservar();
    }
    CobrarConTarjeta(tarjeta){
      this.Viaje.FormaPagoId = 3;
      this.nav.push(PagoTarjetaPage, {
        Tarjeta: tarjeta,
        Viaje: this.Viaje
      });
    }
  Reservar(){
    this.service.Reservar(this.Viaje, (data)=> {
      this.nav.setRoot(MensajesPage,{
        titulo: "Reserva registrada correctamente",
        mensaje: "Su reserva quedó registrada con el número " + data.Id + ". Recibirá una notificación cuando el movil esté en camino."
      });
    });
  }
  nuevaTarjeta(){
    let profileModal = this.modalCtrl.create(NuevaTarjetaPage, { esModal: true });
      profileModal.onDidDismiss(data => {
        this.Tarjetas = this.service.UserData().Tarjetas;
        this.Tarjetas.forEach((value) => value.Importe = this.Viaje.ImporteKm);
      });
    profileModal.present();
  }
  nuevaCuenta(){
    let profileModal = this.modalCtrl.create(ClientePage, { esModal: true });
      profileModal.onDidDismiss(data => {
        this.Clientes = new Array<Cliente>();
        this.service.UserData().Clientes.forEach(element => {
          if(element.ClienteId != 1000) this.Clientes.push(element);
        });
      });
    profileModal.present();
  }
}
