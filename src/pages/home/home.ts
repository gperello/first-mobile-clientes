import {Component, ViewChild, ElementRef, ChangeDetectorRef} from '@angular/core';
import {NavController, Platform, AlertController, ModalController} from 'ionic-angular';
import {PlacesPage} from '../places/places';
import { ResumenPage } from '../resumen/resumen';
import { Viaje } from '../../models/clases';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMapsService } from '../../services/google.maps.service';
import { CustomServices } from '../../services/custom.services';
import { MapaViajePage } from '../mapaviaje/mapaviaje';
declare var google: any;

/*
 Generated class for the HomePage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map') mapElement: ElementRef;
  public map: any;
  public markerOrigen:any;
  public markerDestino:any;
  public Viaje:Viaje = new Viaje();

   // list vehicles
  vehicles: Array<any> = [
    { name: 'Standar', image: 'assets/img/auto-normal.png', active: true, id: 1 },
    { name: 'Monovolumen', image: 'assets/img/van.png', active: false, id: 3 },
    { name: 'VIP', image: 'assets/img/vip.png', active: false, id: 4 } 
  ];

  constructor(public nav: NavController, public platform: Platform, public alertCtrl: AlertController, private service:CustomServices,
    private geolocation: GoogleMapsService, public modalCtrl: ModalController, private ref:ChangeDetectorRef) {
      this.service.GetViajeEnCurso((data)=>{
        if(data.Result){
          this.nav.setRoot(MapaViajePage, { Viaje: data.Viaje, Chofer: data.Chofer});
        }
        else{
          this.Viaje.Regreso = false;
          this.Viaje.Km = 0;
          this.Viaje.TipoMovilId = 1;
          this.Viaje.Origen = "Buscando Posicion..."
          this.Viaje.UsuarioId = this.service.UserData().UsuarioId;
          this.Viaje.ClienteId = this.service.UserData().ClienteId;
          this.Viaje.Email = this.service.UserData().Email;
          this.Viaje.Pasajero = this.service.UserData().Nombre;
          this.Viaje.Telefono = this.service.UserData().Telefono;
          this.platform.ready().then((data)=>{
            this.initializeMap();
          });
        }
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
    this.map = this.geolocation.CreateMap(this.mapElement);
    this.geolocation.GetPosicionActual((posicion, latlng)=>{
      this.geolocation.ClearMarker(this.markerOrigen);
      this.markerOrigen = this.geolocation.CreateMarker(this.map, latlng, "assets/img/icono-azul.png");
      this.map.setCenter(latlng);
      this.Viaje.OrigenPosicion = posicion;
      this.geolocation.GetDireccion(latlng, (direccion)=> {
        this.Viaje.Origen = direccion;
        this.ref.detectChanges();
      })
    });
  }

  getResumen() {
    this.nav.push(ResumenPage, { Viaje: this.Viaje });
  }

  showDestino() {
    let modal = this.modalCtrl.create(PlacesPage);
    modal.onDidDismiss(data => {
        if(data){
            this.Viaje.Destino = data.direccion;
            this.geolocation.GetLatLng(data.id, this.map, (posicion, latlng) => {
              this.Viaje.DestinoPosicion = posicion;
              this.getTrayecto();
            });
        }                
    })
    modal.present();
  }

  showOrigen() {
    let modal = this.modalCtrl.create(PlacesPage);
    modal.onDidDismiss(data => {
        if(data){
            this.Viaje.Origen = data.direccion;
            this.geolocation.GetLatLng(data.id, this.map, (posicion, latlng) => {
              this.Viaje.OrigenPosicion = posicion;
              this.geolocation.ClearMarker(this.markerOrigen);
              this.markerOrigen = this.geolocation.CreateMarker(this.map, latlng, "assets/img/icono-azul.png");
              this.getTrayecto();
            });
        }  
    })
    modal.present();
  }

  getTrayecto(){
    if(this.Viaje.Origen && this.Viaje.Destino && this.Viaje.Origen != '' && this.Viaje.Destino != ''){
        this.geolocation.CreateTrayecto(this.map, this.Viaje.OrigenPosicion,this.Viaje.DestinoPosicion, null, (km, duracion) => {
            this.Viaje.Km = km;
            this.Viaje.Duracion = duracion;
            this.geolocation.ClearMarker(this.markerDestino);
            this.markerDestino = this.geolocation.CreateMarker(this.map, this.geolocation.GetPosicionTexto(this.Viaje.DestinoPosicion), "assets/img/icono-rojo.png");
            this.calcularTarifa();
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
    });
    this.ref.detectChanges();
  }
}
