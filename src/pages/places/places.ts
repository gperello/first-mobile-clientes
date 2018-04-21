import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the PlacesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-places',
  templateUrl: 'places.html'
})
export class PlacesPage {
  // recent places
  public recentPlaces:any;

  // all places
  public places:any;

  constructor(public nav: NavController) {
  }

  choosePlace() {
    this.nav.pop();
  }
}
