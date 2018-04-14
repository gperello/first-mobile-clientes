import {Component} from '@angular/core';
import {NavController, Platform, AlertController} from 'ionic-angular';
import {PlacesPage} from '../places/places';
import {PaymentMethodPage} from '../payment-method/payment-method';
import {FindingPage} from "../finding/finding";
import { ResumenPage } from '../resumen/resumen';
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
  // map id
  public mapId = Math.random() + 'map';

   // list vehicles
  public vehicles: any = [
    {
      name: 'Normal',
      image: 'assets/img/auto-normal.png',
      active: true
    },
    {
      name: 'VAN',
      image: 'assets/img/van.png',
      active: false
    },
    {
      name: 'VIP',
      image: 'assets/img/vip.png',
      active: false
    }
  ]


  // Map
  public map: any;

  constructor(public nav: NavController, public platform: Platform, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    // init map
    this.initializeMap();
  }


  // toggle active vehicle
  toggleVehicle(index) {
    for (var i = 0; i < this.vehicles.length; i++) {
      this.vehicles[i].active = (i == index);
    }
  }

  initializeMap() {
    let latLng = new google.maps.LatLng(21.0318202, 105.8495298);

    let mapOptions = {
      center: latLng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      zoomControl: false,
      streetViewControl: false
    }

    this.map = new google.maps.Map(document.getElementById(this.mapId), mapOptions);

    // get ion-view height
    var viewHeight = window.screen.height - 44; // minus nav bar
    // get info block height
    var infoHeight = document.getElementsByClassName('booking-info')[0].scrollHeight;
    // get booking form height
    var bookingHeight = document.getElementsByClassName('booking-form')[0].scrollHeight;

    let options = {timeout: 120000, enableHighAccuracy: true};

    // refresh map
    setTimeout(() => {
      google.maps.event.trigger(this.map, 'resize');
    }, 300);

    // use GPS to get center position
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let newLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        this.map.setCenter(newLatLng);
        new google.maps.Marker({
          map: this.map,
          animation: google.maps.Animation.DROP,
          position: this.map.getCenter()
        });
      },
      (error) => {
        console.log(error);
      },
      options
    );
  }


  // choose pickup place
  choosePlace() {
    // go to places page
    this.nav.push(PlacesPage);
  }

  // choose pickup place
  getResumen() {
    // go to places page
    this.nav.push(ResumenPage);
  }

  
}
