import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { GoogleMapsService } from '../../services/google.maps.service';

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

  public Query:string = '';
  public List:Array<any> = [];
  public Historicos:Array<any> = [];

  constructor(public nav: NavController, private geolocation:GoogleMapsService, private viewCtrl:ViewController, private ref:ChangeDetectorRef) {

  }

  chooseItem(item: any) {
      this.viewCtrl.dismiss(item);
  }

  updateSearch(){
      this.geolocation.Autocomplete(this.Query, (predictions)=> {
        this.List = [];            
        if(predictions) predictions.forEach((prediction) => {              
          this.List.push({ direccion: prediction.description, id: prediction.place_id });
        });
        this.ref.detectChanges();
      });
  }

  dismiss() {
      this.viewCtrl.dismiss();
  }
}
