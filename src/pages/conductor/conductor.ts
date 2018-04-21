import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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
  public driver:any;

  constructor(public nav: NavController) {
    // get driver info
  }

  track() {
  }
}
