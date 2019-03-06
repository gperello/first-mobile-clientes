import {Component} from '@angular/core';
import {NavController, Platform, AlertController, NavParams, ModalController, DateTime} from 'ionic-angular';
import { Viaje } from '../../models/clases';
import { CustomServices } from '../../services/custom.services';
import { FormaDePagoPage } from '../formadepago/formadepago';
import * as moment from 'moment';
import { DatePicker } from '@ionic-native/date-picker';


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
  espera:string;
  
  constructor(public nav: NavController, public platform: Platform, private service:CustomServices,
     public params: NavParams, public modalCtrl: ModalController, private alert:AlertController,private datePicker: DatePicker) {
    this.Viaje = this.params.data.Viaje;
    this.Viaje.TipoFecha = 1;
    this.Viaje.FechaHora = moment().add(-5, 'minutes').format("DD/MM/YYYY HH:mm");
    this.Viaje.FormaPagoId = 3;
    this.espera = this.params.data.Espera;
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
  

  get getIconoTipoMovil(){
    if(!this.Viaje)return "";
    switch(this.Viaje.TipoMovilId){
      case 1: return "Móvil Standar";
      case 3: return "Monovolúmen";
      case 4: return "Automóvil VIP";
    }

  }
  get getObservaciones(){
    if(!this.Viaje)return "";
    if(this.Viaje.Observaciones && this.Viaje.Observaciones.length > 0) return this.Viaje.Observaciones;
    else return "Mensaje al Chofer...";
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

Pagar(){
  this.nav.push(FormaDePagoPage, { Viaje: this.Viaje });
}
ValidarFechaViaje(date:Date):boolean{
  let now = new Date();
  return now < date;
}

cambiotipofecha(tipo){
  if(tipo == 1) this.Viaje.FechaHora = moment().format("DD/MM/YYYY HH:mm");
  else {
    this.datePicker.show({
      date: new Date(),
      mode: 'datetime',
      is24Hour: true,
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => {
        if(!this.ValidarFechaViaje(date)){
          this.Viaje.TipoFecha = 1;
          this.Viaje.FechaHora = moment().format("DD/MM/YYYY HH:mm");
          this.service.presentToast("La fecha debe ser mayor a la actual.");
          return false;
        }
        this.Viaje.FechaHora = moment(date).format("DD/MM/YYYY HH:mm")
      },
      err => this.service.presentToast("Cancelado por usuario")
    );
  }
  this.Viaje.TipoFecha = tipo;
}
esAhora(){
  if(!this.Viaje)return 0;
  return this.Viaje.TipoFecha == 2;
}
esFuturo(){
  if(!this.Viaje)return 0;
  return this.Viaje.TipoFecha == 1;
}


}
