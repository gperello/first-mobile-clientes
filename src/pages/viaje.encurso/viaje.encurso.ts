import { Component, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Viaje, Chofer } from '../../models/clases';
import { CustomServices } from '../../services/custom.services';
import { HereService } from '../../services/here.service';
import { SocialSharing } from '@ionic-native/social-sharing';
import { GoogleMap, GoogleMaps } from '@ionic-native/google-maps';
import { ViajeEnCaminoPage } from '../viaje.encamino/viaje.encamino';
import { ViajePedidoPage } from '../viaje.pedido/viaje.pedido';
import { ViajeFinalizadoPage } from '../viaje.finalizado/viaje.finalizado';
import { MensajesPage } from '../mensajes/mensajes';
import { ConductorPage } from '../conductor/conductor';

/*
  Generated class for the ProfilePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-viaje-encurso',
  templateUrl: 'viaje.encurso.html'
})
export class ViajeEnCursoPage {
  @ViewChild('map') mapElement: ElementRef;
  private map:any;
  public markerOrigen:any;
  public markerDestino:any;
  public trayecto:any;
  Viaje:Viaje = new Viaje();
  Chofer:Chofer = new Chofer();
  Posicion:string = "";
  Minutos:string = "";
  private gmap:GoogleMap;
  constructor(public nav: NavController, 
    private service:CustomServices, 
    private gmapservice:GoogleMaps,
    private here: HereService, 
    private ref:ChangeDetectorRef,
    private socialSharing: SocialSharing,
    private platform:Platform) {
      this.platform.ready().then(()=>{
        this.getviaje({ Reserva: localStorage.getItem("reserva_actual") });
      });
      this.platform.resume.subscribe(()=>{
        this.getviaje({ Reserva: localStorage.getItem("reserva_actual") });
      });
      this.gmap = this.gmapservice.create("gmap");
  }
  initializeMap() {
    this.map = this.here.CreateMap(document.getElementById('map'));
    let latLng1 = this.here.GetPosicionTexto(this.Posicion)
    this.markerOrigen = this.here.CreateMarker(this.map, latLng1.lat, latLng1.lng, "assets/img/icono-auto.png", false);
    let latLng2 = this.here.GetPosicionTexto(this.Viaje.DestinoPosicion)
    this.markerDestino = this.here.CreateMarker(this.map, latLng2.lat, latLng2.lng, "assets/img/icono-casa.png", false);
  }
  getviaje(item){
    //localStorage.removeItem("reserva_actual");
    this.service.GetViaje(item.Reserva, (data) =>{
      this.Viaje = data.Viaje;
      this.Chofer = data.Chofer;
      this.here.GetPosicionActual(this.gmap, (posicion, latlng)=>{
        this.Posicion = posicion;
        this.initializeMap();
        this.getTrayecto();
      });
      switch(data.Viaje.EstadoId){
        case 2:
          this.nav.push(ViajePedidoPage, { Viaje: data.Viaje });
          break;
        case 3:
          this.nav.push(ViajeEnCaminoPage, { Viaje: data.Viaje, Chofer: data.Chofer });
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


  compartir(){
    this.socialSharing.shareViaWhatsApp("Estoy viajando con Remises First. En un " + this.Chofer.Vehiculo + ", conducido por: " + this.Chofer.Nombre + ". Llego a " + this.Viaje.Destino + " en " + this.Minutos);
  }

  getTrayecto(){
    this.here.CreateTrayecto(this.Posicion,this.Viaje.DestinoPosicion, (km, duracion, trayecto) => {
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
      this.here.GetPosicionActual(this.gmap, (posicion, latlng)=>{
        this.Posicion = posicion;
        this.getTrayecto();
      });
    });
  }
  getChofer(){
    this.nav.push(ConductorPage, { Chofer: this.Chofer });
  }

}
