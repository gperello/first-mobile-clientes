import {Component, ViewChild, ElementRef, ChangeDetectorRef, OnInit} from '@angular/core';
import {NavController, Platform, AlertController, ModalController, NavParams} from 'ionic-angular';
import {PlacesPage} from '../places/places';
import { ResumenPage } from '../resumen/resumen';
import { Viaje } from '../../models/clases';
import { CustomServices } from '../../services/custom.services';
import { HereService } from '../../services/here.service';
import { TarjetasPage } from '../tarjetas/tarjetas';
import { ProfilePage } from '../profile/profile';
import { GoogleMapsService } from '../../services/google.maps.service';
import { GoogleMap, GoogleMaps } from '@ionic-native/google-maps';

/*
 Generated class for the HomePage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-viaje',
  templateUrl: 'viaje.html'
})
export class ViajePage implements OnInit {
  @ViewChild('map') mapElement: ElementRef;
  private map:any;
  public markerOrigen:any;
  public markerDestino:any;
  public trayecto:any;
  public Viaje:Viaje = new Viaje();
  private gmap:GoogleMap;
  private espera:string;

   // list vehicles
  vehicles: Array<any> = [
    { name: 'Standar', image: 'assets/img/auto-normal.png', active: true, id: 1 },
    { name: 'Monovolumen', image: 'assets/img/van.png', active: false, id: 3 },
    { name: 'VIP', image: 'assets/img/vip.png', active: false, id: 4 } 
  ];

  constructor(public nav: NavController, private params:NavParams, 
    public platform: Platform, public alertCtrl: AlertController, 
    private service:CustomServices, private gmapservice:GoogleMaps,
    private here: HereService, public modalCtrl: ModalController, 
    private ref:ChangeDetectorRef, private google:GoogleMapsService) {
      this.gmap = this.gmapservice.create("gmap");
      this.Viaje.Reserva = this.params.data.Reserva;
      this.Viaje.Regreso = false;
      this.Viaje.Km = 0;
      this.Viaje.TipoMovilId = 1;
      this.Viaje.Origen = "Buscando Posicion..."
      this.Viaje.UsuarioId = this.service.UserData().UsuarioId;
      this.Viaje.ClienteId = this.service.UserData().ClienteId;
      this.Viaje.Email = this.service.UserData().Email;
      this.Viaje.Pasajero = this.service.UserData().Nombre;
      this.Viaje.Telefono = this.service.UserData().TelCodigo + "-" + this.service.UserData().TelPrefijo + "-" + this.service.UserData().TelNumero;
      this.Viaje.FormaPagoId = 3;
      setTimeout(() => { 
        if(this.Viaje.Origen == "Buscando Posicion...") {
          this.service.presentToast("No pudimos ubicar tu móvil, por favor ingresa manualmente tu posición en el campo 'origen'.", "bottom", 4000);
          this.Viaje.Origen = "Ingresar Posicion..."
        }
      }, 10000);
} 

  ngOnInit(){
    this.platform.ready().then((data)=>{
      setTimeout(() => { this.initializeMap(); }, 500);
    });
}
  toggleVehicle(id) {
    this.Viaje.TipoMovilId = id;
    for (var i = 0; i < this.vehicles.length; i++) {
      this.vehicles[i].active = (this.vehicles[i].id == id);
    }
    this.calcularTarifa();
  }

  initializeMap() {
    this.map = this.here.CreateMap(document.getElementById('map'));
    this.here.GetPosicionActual(this.gmap, (posicion, latlng)=>{
      this.here.ClearMarker(this.map, this.markerOrigen);
      this.markerOrigen = this.here.CreateMarker(this.map, latlng.lat, latlng.lng, "assets/img/icono-user.png");
      this.map.setCenter(latlng);
      this.Viaje.OrigenPosicion = posicion;
      this.google.GetDireccion(latlng, (direccion, posicion, lat, lng)=> {
        this.Viaje.Origen = direccion;
        this.ref.detectChanges();
        this.service.ObtenerEspera(posicion, (data)=>{
          if(data.Codigo == 1){
            this.service.presentToast(data.Descripcion);
          }
          else{
            this.service.showAlert("Disponibilidad de moviles", data.Descripcion);
          }
          this.espera = data.Descripcion;
        });
      })
    });
  }

  getResumen() {
    if(this.Viaje.TarifaId)
    this.nav.push(ResumenPage, { Viaje: this.Viaje, Espera: this.espera });
  }

  showDestino() {
    let modal = this.modalCtrl.create(PlacesPage);
    modal.onDidDismiss(data => {
        if(data){
          this.Viaje.Destino = data.direccion;
          this.Viaje.DestinoPosicion = data.posicion;
          this.getTrayecto();
        }                
    })
    modal.present();
  }

  showOrigen() {
    let modal = this.modalCtrl.create(PlacesPage);
    modal.onDidDismiss(data => {
      if(data){
        this.Viaje.Origen = data.direccion;
        this.Viaje.OrigenPosicion = data.posicion;
        this.here.ClearMarker(this.map, this.markerOrigen);
        this.markerOrigen = this.here.CreateMarker(this.map, data.lat, data.lng, "assets/img/icono-user.png");
        this.getTrayecto();
      }
    })
    modal.present();
  }

  getTrayecto(){
    if(this.Viaje.Origen && this.Viaje.Destino && this.Viaje.Origen != '' && this.Viaje.Destino != ''){
        if(this.trayecto)this.map.removeObjects([this.trayecto]);
        this.here.CreateTrayecto(this.Viaje.OrigenPosicion,this.Viaje.DestinoPosicion, (km, duracion, trayecto) => {
            this.Viaje.Km = km;
            this.Viaje.Duracion = duracion;
            this.here.ClearMarker(this.map, this.markerDestino);
            let latLng = this.here.GetPosicionTexto(this.Viaje.DestinoPosicion)
            this.markerDestino = this.here.CreateMarker(this.map, latLng.lat, latLng.lng, "assets/img/icono-casa.png", false);
            this.calcularTarifa();
            this.trayecto = trayecto;
            this.map.addObjects([this.trayecto]);
            this.map.setViewBounds(this.trayecto.getBounds());
        });
    }
  }

  get OcultarKm(){
    return this.Viaje.Km == 0;
  }

  get GetKm(){
    if(!this.Viaje)return 0;
    return this.Viaje.Km / 1000;
  }

  get GetDuracion(){
    if(!this.Viaje)return 0;
    return parseInt((this.Viaje.Duracion / 60).toString());
  }

  calcularTarifa(){
    this.service.CalcularTarifa(this.Viaje,(data)=>{
      this.Viaje.TarifaId = data.TarifaId;
      this.Viaje.TarifaNombre = data.TarifaNombre;
      this.Viaje.ImporteKm = data.Importe;
      this.Viaje.ImporteEspera = data.Espera;
      this.Viaje.DescuentoEfectivo = data.DescuentoEfectivo;
    });
    this.ref.detectChanges();
  }

  refrescar(){
    this.here.GetPosicionActual(this.gmap, (posicion, latlng)=>{
      this.here.ClearMarker(this.map, this.markerOrigen);
      this.markerOrigen = this.here.CreateMarker(this.map, latlng.lat, latlng.lng, "assets/img/icono-user.png");
      this.map.setCenter(latlng);
      this.Viaje.OrigenPosicion = posicion;
      this.here.GetDireccionPorLatLng(latlng.lat, latlng.lng, (direccion)=> {
        this.Viaje.Origen = direccion;
        this.ref.detectChanges();
      })
    });
  }
}
