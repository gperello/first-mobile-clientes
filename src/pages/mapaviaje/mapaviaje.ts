import { Component, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NavController, Platform, AlertController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";
import { Viaje, Chofer } from '../../models/clases';
import { GoogleMapsService } from '../../services/google.maps.service';
import { ConductorPage } from '../conductor/conductor';
import { CustomServices } from '../../services/custom.services';
declare var google: any;

/*
  Generated class for the TrackingPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-mapaviaje',
  templateUrl: 'mapaviaje.html'
})
export class MapaViajePage {
  @ViewChild('map') mapElement: ElementRef;
  public map: any;
  public markerUsuario:any;
  public markerMovil:any;
  public Viaje:Viaje = new Viaje();
  public Chofer:Chofer = new Chofer();

  constructor(public nav: NavController, private params:NavParams, public platform:Platform, private ref:ChangeDetectorRef,
              public alertCtrl: AlertController, private geolocation: GoogleMapsService, private service:CustomServices) {
    this.Viaje = this.params.data.Viaje;
    this.Chofer = this.params.data.Chofer;
    this.platform.ready().then((data)=>{
      this.initializeMap();
    });
    setTimeout(() => {
      this.service.GetViajeEnCurso((data)=>{
        if(data.Result){
          this.Viaje = data.Viaje;
          this.Chofer = data.Chofer,
          this.getTrayecto();
        }
      });
    }, 3000);
  }


  initializeMap() {
    this.map = this.geolocation.CreateMap(this.mapElement);
    this.geolocation
    this.markerUsuario = this.geolocation.CreateMarker(this.map, this.geolocation.GetPosicionTexto(this.Viaje.OrigenPosicion), "assets/img/icono-azul.png");
    this.map.setCenter(this.geolocation.GetPosicionTexto(this.Viaje.OrigenPosicion));
    this.getTrayecto();
  }

  getTrayecto(){
      if(this.Viaje.EstadoId == 2) return;
      let final = (this.Viaje.EstadoId == 3) ? this.Viaje.OrigenPosicion : this.Viaje.DestinoPosicion;
      this.geolocation.CreateTrayecto(this.map, this.Chofer.UltimaPosicion, final, null, (km, duracion) => {
        this.Viaje.Km = km;
        this.Viaje.Duracion = duracion;
        this.geolocation.ClearMarker(this.markerMovil)
        this.markerMovil = this.geolocation.CreateMarker(this.map, this.geolocation.GetPosicionTexto(this.Chofer.UltimaPosicion),  "assets/img/icono-rojo.png");
        this.ref.detectChanges();
      });
  }
  OcultoReserva(){ return this.Viaje.EstadoId != 2; }
  OcultoMovilAsignado(){ return this.Viaje.EstadoId != 3 && this.Viaje.EstadoId != 5; }
  OcultoOrigen(){ return this.Viaje.EstadoId != 3 && this.Viaje.EstadoId != 2; }
  OcultoPedido(){ return this.Viaje.EstadoId != 2; }
  OcultoEnCamino(){ return this.Viaje.EstadoId != 3; }
  OcultoEnCurso(){ return this.Viaje.EstadoId != 5; }

  getInfoChofer(){
    this.nav.push(ConductorPage, { Chofer: this.Chofer });
  }
  NuevoViaje(){

  }
  CompartirViaje(){

  }
  CancelarViaje(){

  }
  Llamar(){
    
  }

  get GetDuracion(){
    if(!this.Viaje)return 0;
    return parseInt((this.Viaje.Duracion / 60).toString());
  }

 get GetTitulo(){
  if(!this.Viaje)return "";
  switch(this.Viaje.EstadoId){
    case 2: return "Movil Pedido";
    case 3: return "Movil en camino";
    case 5: return "Viaje en curso";
    case 7: return "Viaje Finalizado";
  }
}

}
