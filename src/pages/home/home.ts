import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController, Platform } from 'ionic-angular';
import { ViajeList } from '../../models/clases';
import { CustomServices } from '../../services/custom.services';
import { ViajePedidoPage } from '../viaje.pedido/viaje.pedido';
import { ViajeFinalizadoPage } from '../viaje.finalizado/viaje.finalizado';
import { ViajeEnCursoPage } from '../viaje.encurso/viaje.encurso';
import { ViajeEnCaminoPage } from '../viaje.encamino/viaje.encamino';
import { ViajePage } from '../viaje/viaje';
import { ProfilePage } from '../profile/profile';
import { TarjetasPage } from '../tarjetas/tarjetas';
import { Market } from '@ionic-native/market';

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
  public Viajes: Array<ViajeList> = new Array<ViajeList>();
  Version:number = 2;
  OcultarVersion:boolean = true;
  constructor(private nav: NavController, 
    private platform: Platform, 
    private service:CustomServices,
    private market:Market) {
      if(!this.service.ValidarUsuario()) this.nav.setRoot(ProfilePage, { Mensaje: true})
      else if(!this.service.ValidarTarjetas() && !this.service.ValidarClientes()) this.nav.setRoot(TarjetasPage, { Mensaje: true})
      else{
        this.platform.ready().then(()=>{
          this.service.GetViajes((data)=>{
              this.Viajes = data.Viajes;
              this.OcultarVersion = this.Version == data.Version;
          });
        });
        this.platform.resume.subscribe(()=>{
          this.service.GetViajes((data)=>{
              this.Viajes = data.Viajes;
              this.OcultarVersion = this.Version == data.Version;
          });
        });
      }
  }
  getviaje(item){
    localStorage.setItem("reserva_actual", item.Reserva);
    switch(item.EstadoId){
      case 2:
        this.nav.push(ViajePedidoPage);
        break;
      case 3:
        this.nav.push(ViajeEnCaminoPage);
        break;
      case 5:
        this.nav.push(ViajeEnCursoPage);
        break;
      case 7:
        this.nav.push(ViajeFinalizadoPage);
        break;
    }
}
  setcolor(estadoid):string{
    return this.service.setColorEstado(estadoid);
  }
  nuevoviaje(){
    this.nav.push(ViajePage, { Reserva: 0 });
  }
  ocultarmensaje():boolean{
    return this.Viajes.length > 0;
  }
  actualizar(){
    this.service.GetViajes((data)=>{
      this.Viajes = data;
    });
  }

  GoToVersion(){
    this.market.open('ar.first.clientes');
  };

}
