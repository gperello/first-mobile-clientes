import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the HistoryPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})
export class HistoryPage {
  // history records
  public records:any;

  constructor(public nav: NavController) {
    
  }
}
