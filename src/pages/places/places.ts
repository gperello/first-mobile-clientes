import { Component, ChangeDetectorRef, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { NavController, ViewController, Platform } from 'ionic-angular';
import { HereService } from '../../services/here.service';
import { GoogleMapsService } from '../../services/google.maps.service';
import { CustomServices } from '../../services/custom.services';
import { Direccion } from '../../models/clases';

/*
  Generated class for the PlacesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-places',
  templateUrl: 'places.html'
})
export class PlacesPage implements OnDestroy, AfterViewInit  {
  @ViewChild('searchtext') search: ElementRef
  public Query:string = '';
  public List:Array<any> = [];
  public Historicos:Array<Direccion> = [];
  ocultarspinner:boolean = true;

  constructor(public nav: NavController, private here:HereService, private viewCtrl:ViewController, 
    private ref:ChangeDetectorRef, private google:GoogleMapsService, private platform:Platform, private service:CustomServices) {
  }
  ngAfterViewInit() {
    let element = document.getElementById("searchtext");
    this.Historicos = this.service.Direcciones();
    this.google.Autocomplete(this.search.nativeElement,(direccion, posicion, lat, lng) =>{
      this.service.InsertDireccion({ Direccion: direccion, Posicion: posicion, Cantidad: 1 })
      this.viewCtrl.dismiss({
        direccion: direccion,
        posicion: posicion,
        lat: lat,
        lng: lng
      });
    });
  }
  chooseItem(item:Direccion) {
    let arr = item.Posicion.split(' ');
    let lat = parseFloat(arr[1]);
    let lng = parseFloat(arr[0]);
    this.viewCtrl.dismiss({
      direccion: item.Direccion,
      posicion: item.Posicion,
      lat: lat,
      lng: lng
    });
}

  dismiss() {
      this.viewCtrl.dismiss();
  }

  ngOnDestroy() {
    this.ref.detach(); // do this

    // for me I was detect changes inside "subscribe" so was enough for me to just unsubscribe;
    // this.authObserver.unsubscribe();
  }
}
