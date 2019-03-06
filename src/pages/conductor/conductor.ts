import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { Chofer } from '../../models/clases';
/*
  Generated class for the DriverPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-conductor',
  templateUrl: 'conductor.html'
})
export class ConductorPage {
  private Chofer:Chofer;
  private estilomovil = "";

  constructor(public nav: NavController, public params: NavParams, public events: Events) {
    this.Chofer = this.params.data.Chofer;
    this.estilomovil = "url(" + this.Chofer.FotoMovil + ")";
  }

  
}
