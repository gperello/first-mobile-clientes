import {Component} from '@angular/core';
import {NavController, Platform, AlertController, NavParams, ModalController} from 'ionic-angular';
import {PlacesPage} from '../places/places';
import { Viaje } from '../../models/clases';
import { CustomServices } from '../../services/custom.services';
import { FormaDePagoPage } from '../formadepago/formadepago';
import { MensajesPage } from '../mensajes/mensajes';
declare var google: any;

/*
 Generated class for the HomePage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-resumen',
  templateUrl: 'resumen.html'
})
export class ResumenPage {
  Viaje:Viaje = new Viaje();
  fechaminima:string = new Date().getFullYear().toString() + '-' + new Date().getMonth().toString() + '-' + new Date().getDay().toString();
  //fechamaxima:string = this.addDays(new Date(), 7).getFullYear().toString() + '-' + this.addDays(new Date(), 7).getMonth().toString() + '-' + this.addDays(new Date(), 7).getDay().toString();
 
  
  constructor(public nav: NavController, public platform: Platform, private service:CustomServices,
     public params: NavParams, public modalCtrl: ModalController, private alert:AlertController) {
    this.Viaje = this.params.data.Viaje;
    this.Viaje.TipoFecha = 1;
    this.Viaje.FormaPagoId = 1;
  }
  OcultarConRegreso(){
    if(!this.Viaje) return true;
    return !this.Viaje.Regreso;
  }
  SetTipoFecha(tipo){
   this.Viaje.TipoFecha = tipo;
  }
  OcultarFecha(){
    if(!this.Viaje) return true;
    return this.Viaje.TipoFecha == 1;
  }
  showObservaciones(){
    let prompt = this.alert.create({
      title: "Mensaje al Chofer",
      message: "Ingrese un mensaje que quiera que el chofer vea",
      inputs: [
        {
          name: 'Mensaje',
          placeholder: 'Mensaje',
          type: 'text',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
        },
        {
          text: 'Guardar',
          handler: data => {
            this.Viaje.Observaciones = data.Mensaje;
          }
        }
      ]
    });
    prompt.present();
  }
  getFormasDePago(){
    let modal = this.modalCtrl.create(FormaDePagoPage);
    modal.onDidDismiss(data => {
        if(data){
            this.Viaje.FormaPagoId = data
        }  
    })
    modal.present();
  }

  get getIconoTipoMovil(){
    if(!this.Viaje)return "";
    switch(this.Viaje.TipoMovilId){
      case 1: return "assets/img/auto-normal.png";
      case 3: return "assets/img/van.png";
      case 4: return "assets/img/vip.png";
    }

  }
  get getObservaciones(){
    if(!this.Viaje)return "";
    if(this.Viaje.Observaciones && this.Viaje.Observaciones.length > 0) return this.Viaje.Observaciones;
    else return "Mensaje al Chofer...";
  }

  get getFormaDePago(){
    if(!this.Viaje)return "";
    switch(this.Viaje.FormaPagoId){
      case 1: return "Efectivo";
      case 2: return "Cuenta Corriente";
      case 3: return "Pago Electronico";
    }
  }
  get GetKm(){
    if(!this.Viaje)return 0;
    return this.Viaje.Km / 1000;
  }

  get GetDuracion(){
    if(!this.Viaje)return 0;
    return parseInt((this.Viaje.Duracion / 60).toString());
  }

  addDays(date:Date, days:number):Date {
    var result = new Date(date);
    result.setDate(date.getDate() + days);
    return result;
  }


Reservar(){
  if(this.Viaje.TipoFecha = 1) this.Viaje.FechaHora = "26/04/2018 16:21";
  this.service.Reservar(this.Viaje,(data)=> {
    this.nav.setRoot(MensajesPage,{
      titulo: "Reserva registrada correctamente",
      mensaje: "Su reserva quedó registrada con el número " + data.Id + ". Recibirá una notificación cuando el movil esté en camino."
    });
  });
}
}
