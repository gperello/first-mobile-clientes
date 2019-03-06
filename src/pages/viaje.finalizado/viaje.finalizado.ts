import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Viaje, Chofer } from '../../models/clases';
import { CustomServices } from '../../services/custom.services';
import { MensajesPage } from '../mensajes/mensajes';
import { ViajeEnCaminoPage } from '../viaje.encamino/viaje.encamino';
import { ViajeEnCursoPage } from '../viaje.encurso/viaje.encurso';
import { ViajePedidoPage } from '../viaje.pedido/viaje.pedido';

/*
  Generated class for the ProfilePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-viaje-finalizado',
  templateUrl: 'viaje.finalizado.html'
})
export class ViajeFinalizadoPage {
  Viaje:Viaje = new Viaje();
  Chofer:Chofer = new Chofer();
  CalificacionChofer:number = 3;
  CalificacionMovil:number = 3;
  constructor(public nav: NavController, 
    private platform:Platform, 
    private service:CustomServices) {
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
      this.Chofer = data.Chofer;
      switch(data.Viaje.EstadoId){
        case 2:
          this.nav.push(ViajePedidoPage, { Viaje: data.Viaje });
          break;
        case 3:
          this.nav.push(ViajeEnCaminoPage, { Viaje: data.Viaje, Chofer: data.Chofer });
          break;
        case 5:
          this.nav.push(ViajeEnCursoPage, { Viaje: data.Viaje, Chofer: data.Chofer });
          break;
        case 9:
          localStorage.removeItem("reserva_actual")
          this.nav.setRoot(MensajesPage, { titulo: "Reserva cancelada", mensaje: "La reserva N°" + this.Viaje.Reserva + " ha sido cancelada." });
          break;
      }
    });
  }
  calificar(){
    this.service.CalificarViaje(this.CalificacionChofer, this.CalificacionMovil,this.Viaje.Reserva, (data)=>{
      this.Viaje.Calificado = true;
      this.nav.setRoot(MensajesPage, { titulo: "Calificación registrada", mensaje: "Gracias por ayudarnos a mejorar nuestro servicio." });
    });
  }


}
