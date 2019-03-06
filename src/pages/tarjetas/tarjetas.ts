import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Tarjeta } from '../../models/clases';
import { CustomServices } from '../../services/custom.services';
import { NuevaTarjetaPage } from '../nueva.tarjeta/nueva.tarjeta';
import { MercadoPagoService } from '../../services/mercadopago.service';

/*
  Generated class for the HistoryPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tarjetas',
  templateUrl: 'tarjetas.html'
})
export class TarjetasPage {
  // history records
  public Tarjetas:Array<Tarjeta> = new Array<Tarjeta>();;

  constructor(public nav: NavController, private params:NavParams, private service:CustomServices, private mp:MercadoPagoService) {
    if(this.params.data && this.params.data.Mensaje) this.service.presentToast("Debe cargar por lo menos una tarjeta para usar el sistema");
    this.Tarjetas = this.service.UserData().Tarjetas;
  }

  nuevatarjeta(){
    this.nav.setRoot(NuevaTarjetaPage);
  }
  eliminartarjeta(id){
    this.service.ShowConfirm("Eliminar la tarjeta?", () =>{
      this.mp.EliminarTarjeta(id, (data)=>{
        var user = this.service.UserData();
        user.Tarjetas = data;
        localStorage.setItem("datos_de_cliente", JSON.stringify(user));
        this.Tarjetas = data;
        this.service.presentToast("La tarjeta se eliminó correctamente.")
       });
    });
  }

  ocultarmensaje():boolean{
    return this.Tarjetas.length > 0;
  }
}
