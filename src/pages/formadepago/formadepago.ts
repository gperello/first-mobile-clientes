import {Component} from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';
import { CustomServices } from '../../services/custom.services';

/*
 Generated class for the PaymentMethodPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-formadepago',
  templateUrl: 'formadepago.html'
})
export class FormaDePagoPage {
  constructor(public nav: NavController, private service:CustomServices, private viewCtrl:ViewController) {
  }

  changeMethod(tipo){
    this.viewCtrl.dismiss(tipo);
  }
  OcultarCtaCte():boolean{
     return !this.service.UserData().CtaCte;
  }
  get getNombreCuenta(){
      return this.service.UserData().ClienteNombre;
  }
}
