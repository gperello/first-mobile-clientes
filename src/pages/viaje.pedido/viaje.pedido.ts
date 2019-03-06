import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Viaje } from '../../models/clases';
import { CustomServices } from '../../services/custom.services';
import { CallNumber } from '@ionic-native/call-number';
import { MensajesPage } from '../mensajes/mensajes';
import { ViajeEnCaminoPage } from '../viaje.encamino/viaje.encamino';
import { ViajeEnCursoPage } from '../viaje.encurso/viaje.encurso';
import { ViajeFinalizadoPage } from '../viaje.finalizado/viaje.finalizado';

/*
  Generated class for the ProfilePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-viaje-pedido',
  templateUrl: 'viaje.pedido.html'
})
export class ViajePedidoPage {
  Viaje:Viaje = new Viaje();
  constructor(public nav: NavController, 
    private params:NavParams, 
    private platform:Platform, 
    private service:CustomServices,
    private callNumber: CallNumber) {
      this.platform.ready().then(()=>{
        this.getviaje({ Reserva: localStorage.getItem("reserva_actual") });
      });
      this.platform.resume.subscribe(()=>{
        this.getviaje({ Reserva: localStorage.getItem("reserva_actual") });
      });

  }

  getviaje(item){
    //localStorage.removeItem("reserva_actual");
    this.service.GetViaje(item.Reserva, (data) =>{
      this.Viaje = data.Viaje;
      switch(data.Viaje.EstadoId){
        case 3:
          this.nav.push(ViajeEnCaminoPage, { Viaje: data.Viaje, Chofer: data.Chofer });
          break;
        case 5:
          this.nav.push(ViajeEnCursoPage, { Viaje: data.Viaje, Chofer: data.Chofer });
          break;
        case 7:
          this.nav.push(ViajeFinalizadoPage, { Viaje: data.Viaje, Chofer: data.Chofer });
          break;
        case 9:
          localStorage.removeItem("reserva_actual")
          this.nav.setRoot(MensajesPage, { titulo: "Reserva cancelada", mensaje: "La reserva N°" + this.Viaje.Reserva + " ha sido cancelada." });
          break;
      }
    });
  }

  cancelarviaje(){
    this.service.ShowConfirm("Está seguro de cancelar la reserva?", ()=>{
      this.service.CancelarViaje(this.Viaje.Reserva, (data)=>{
          this.nav.setRoot(MensajesPage, { titulo: "Cancelación de Reserva", mensaje: "La reserva N°" + this.Viaje.Reserva + " ha sido cancelada correctamente. No se generaron costos a su cuenta." });
      });
    });
  }

  llamar(){
    this.callNumber.callNumber("+543516790100", true);
  }
}
