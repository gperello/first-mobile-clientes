import { Component, ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Viaje, Chofer } from '../../models/clases';
import { CustomServices } from '../../services/custom.services';
import { CallNumber } from '@ionic-native/call-number';
import { MensajesPage } from '../mensajes/mensajes';
import { HereService } from '../../services/here.service';
import { ViajePedidoPage } from '../viaje.pedido/viaje.pedido';
import { ViajeEnCursoPage } from '../viaje.encurso/viaje.encurso';
import { ViajeFinalizadoPage } from '../viaje.finalizado/viaje.finalizado';
import { ConductorPage } from '../conductor/conductor';

/*
  Generated class for the ProfilePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-viaje-encamino',
  templateUrl: 'viaje.encamino.html'
})
export class ViajeEnCaminoPage {
  @ViewChild('map') mapElement: ElementRef;
  private map:any;
  public markerOrigen:any;
  public markerDestino:any;
  public trayecto:any;
  Viaje:Viaje = new Viaje();
  Chofer:Chofer = new Chofer();
  Minutos:string = "";
  constructor(public nav: NavController, 
    private params:NavParams,
    private service:CustomServices,
    private callNumber: CallNumber,
    private here: HereService, 
    private ref:ChangeDetectorRef,
    private platform:Platform) {
      this.platform.ready().then(()=>{
        this.getviaje({ Reserva: localStorage.getItem("reserva_actual") });
      });
      this.platform.resume.subscribe(()=>{
        this.getviaje({ Reserva: localStorage.getItem("reserva_actual") });
      });
  }


  initializeMap() {
    this.map = this.here.CreateMap(document.getElementById('map'));
    let latLng1 = this.here.GetPosicionTexto(this.Chofer.UltimaPosicion)
    this.markerOrigen = this.here.CreateMarker(this.map, latLng1.lat, latLng1.lng, "assets/img/icono-auto.png", false);
    let latLng2 = this.here.GetPosicionTexto(this.Viaje.OrigenPosicion)
    this.markerDestino = this.here.CreateMarker(this.map, latLng2.lat, latLng2.lng, "assets/img/icono-user.png", false);
  }
  getviaje(item){
    //localStorage.removeijmItem("reserva_actual");
    this.service.GetViaje(item.Reserva, (data) =>{
      this.Viaje = data.Viaje;
      this.Chofer = data.Chofer;
      this.getTrayecto();
      this.initializeMap();
      switch(data.Viaje.EstadoId){
        case 2:
          this.nav.push(ViajePedidoPage, { Viaje: data.Viaje });
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
          this.nav.setRoot(MensajesPage, { titulo: "Cancelación de Reserva", mensaje: "La reserva N°" + this.Viaje.Reserva + " ha sido cancelada correctamente. Esta cancelación tiene un costo a su cuenta." });
      });
    });
  }

  llamar(){
    this.callNumber.callNumber(this.Chofer.Telefono, true);
  }

  getTrayecto(){
    this.here.CreateTrayecto(this.Chofer.UltimaPosicion, this.Viaje.OrigenPosicion, (km, duracion, trayecto) => {
      this.trayecto = trayecto;
      this.map.addObjects([this.trayecto]);
      this.map.setViewBounds(this.trayecto.getBounds());
      this.Minutos = parseInt((duracion / 60).toString()).toString() + " min. aprox.";
      this.ref.detectChanges();
 });
}

  refrescar(){
    this.service.GetViaje(this.Viaje.Reserva, (data) =>{
      this.Viaje = data.Viaje;
      this.Chofer = data.Chofer;
      this.getTrayecto();
    });
  }

  getChofer(){
    this.nav.push(ConductorPage, { Chofer: this.Chofer });
  }
}
