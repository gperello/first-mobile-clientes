import {Component} from '@angular/core';
import {NavController, Platform, AlertController} from 'ionic-angular';
import {PlacesPage} from '../places/places';
import {PaymentMethodPage} from '../payment-method/payment-method';
import {FindingPage} from "../finding/finding";
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

  constructor(public nav: NavController, public platform: Platform, public alertCtrl: AlertController) {
  }

  showNotePopup() {
    let prompt = this.alertCtrl.create({
      title: 'Notes to driver',
      message: "",
      inputs: [
        {
          name: 'note',
          placeholder: 'Note'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });

    prompt.present();
  };
 // choose payment method
  choosePaymentMethod() {
    // go to payment method page
    this.nav.push(PaymentMethodPage);
  }

}
