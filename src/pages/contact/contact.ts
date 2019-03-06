import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { CustomServices } from '../../services/custom.services';

/*
  Generated class for the SupportPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  constructor(public nav: NavController,private callNumber: CallNumber, private service:CustomServices) {}

  llamar(){
    this.callNumber.callNumber("+5402304473210", true);
  }

  enviar(){
    setTimeout(()=>{ this.service.showAlert("mensaje enviado","su consulta será respondida a la brevedad.")}, 500);
  }
}
