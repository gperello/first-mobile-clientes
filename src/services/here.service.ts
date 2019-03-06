import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';
import { Injectable } from "@angular/core";
import { Platform } from 'ionic-angular';
import { CustomServices } from './custom.services';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps, GoogleMap } from '@ionic-native/google-maps';



declare var GPSLocation: any;
declare var H: any;

@Injectable()
export class HereService{
    defaulticono:string = "assets/img/icono-azul.png";
    directionsService:any;
    directionsDisplay:any;
    private platform;
    ajaxRequestAu = new XMLHttpRequest();
    ajaxRequestSe = new XMLHttpRequest();
    count:number = 0;
    constructor(protected service: CustomServices, public pl: Platform, private nativeGeocoder: NativeGeocoder, 
        private geolocation:Geolocation){
        this.pl.ready().then(()=>{
            this.platform = new H.service.Platform({
                'app_id': 'g7DxdZCBLHU1Mfda99UQ',
                'app_code': 'Uq6CRf-bfzbog-xeUSWZeA'
              });
        });
        this.ajaxRequestAu.addEventListener("error", ()=>{
            this.service.presentToast("Error en Autocomplete!");
        });
        this.ajaxRequestSe.addEventListener("error", ()=>{
            this.service.presentToast("Error en Autocomplete!");
        });
        this.ajaxRequestAu.responseType = "json";
        this.ajaxRequestSe.responseType = "json";
    }
    
    CreateMap(element):any{
        // Obtain the default map types from the platform object:
        let defaultLayers = this.platform.createDefaultLayers();
        // Instantiate (and display) a map object:
        let map = new H.Map(
            element,
            defaultLayers.normal.map,
            {
                zoom: 15,
                center: { lat: -34.6083, lng: -58.3712 }
            });
        // MapEvents enables the event system
        // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
        var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
        return map;
    };
    ClearMarker(map, marker){
        if(marker && map.removeObject)map.removeObject(marker);
    }
    CreateMarker(map, lat:number, lng:number, icono?:string, center:boolean = true):any{
        // Create an icon, an object holding the latitude and longitude, and a marker:
        var icon = new H.map.Icon(icono),
        coords = {lat: lat, lng: lng},
        marker = new H.map.Marker(coords, {icon: icon});
        // Add the marker to the map and center the map at the location of the marker:
        map.addObject(marker);
        if(center)map.setCenter(coords);
        return marker;
    };
    CreateTrayecto(origen, destino, onsucces?:(km, duracion, trayecto) => void){
        if(origen && destino && origen != '' && destino != ''){
            let routingParameters = {
                'mode': 'fastest;car;traffic:enabled',
                'waypoint0': this.GetRoutingPosicion(origen),
                'waypoint1': this.GetRoutingPosicion(destino),
                'representation': 'display',
                'departure': 'now'
            };

            // Define a callback function to process the routing response:
            var onResult = (result) => {
                var route,
                routeShape,
                linestring;
                if(result.response.route) {
                    // Pick the first route from the response:
                    route = result.response.route[0];
                    // Pick the route's shape:
                    routeShape = route.shape;
                
                    // Create a linestring to use as a point source for the route line
                    linestring = new H.geo.LineString();
                    // Push all the points in the shape into the linestring:
                    routeShape.forEach(function(point) {
                        var parts = point.split(',');
                        linestring.pushLatLngAlt(parts[0], parts[1]);
                    });
                
                    // Create a polyline to display the route:
                    var routeLine = new H.map.Polyline(linestring, {
                        style: { strokeColor: 'blue', lineWidth: 2 }
                    });

                    let km = 0;
                    let duracion = 0;

                    for(var i in route.leg[0].maneuver){
                        km = km + route.leg[0].maneuver[i].length;
                        duracion = duracion + route.leg[0].maneuver[i].travelTime;
                    }
                    km = parseInt((km / 1000).toString()) * 1000 + 1000;
                    onsucces(km, duracion, routeLine);
                }
            };
            var router = this.platform.getRoutingService();
            router.calculateRoute(routingParameters, onResult,
            (error) => {
                this.service.presentToast(error.message);
            });
        }
    };
    Autocomplete(query:string, onsuccess:(predictions)=> void):void{
        var AUTOCOMPLETION_URL = 'https://places.cit.api.here.com/places/v1/discover/search';

        var params = '?' +
        'q=' +  encodeURIComponent(query) +   // The search text which is the basis of the query
        '&at=-31.416667,-64.183333' +  // -34.6083,-58.3712 
        '&country=ARG&language=es' +
        '&app_id=g7DxdZCBLHU1Mfda99UQ' +
        '&app_code=Uq6CRf-bfzbog-xeUSWZeA';
        this.ajaxRequestAu.addEventListener("load", function(){
            onsuccess(this.response.results.items);
        });

        this.ajaxRequestAu.open('GET', AUTOCOMPLETION_URL + params );
        this.ajaxRequestAu.send();
    };

    GetDireccionPorLatLng(lat:number, lng:number, onsuccess:(direccion)=> void):void{
        this.nativeGeocoder.reverseGeocode(lat, lng)
        .then((result: NativeGeocoderReverseResult[]) => {
            if(result.length > 0){
                let direccion = result[0].thoroughfare + (result[0].subThoroughfare ? " " + result[0].subThoroughfare : "") + ", " + result[0].locality + ", " + result[0].administrativeArea
                onsuccess(direccion);
            }
        });
    };
    GetDireccionPorTexto(q:string, onsuccess:(direccion, lat, lng)=> void):void{
        this.nativeGeocoder.forwardGeocode(q)
        .then((result:NativeGeocoderForwardResult[]) => {
            if(result.length > 0){
                onsuccess(q, result[0].latitude, result[0].longitude);
            }
            else{
                this.service.presentToast("No se encontró esta dirección.");
            }
        });
    };
    GetLatLng(placeid, onsuccess:(direccion:string,lat:number,lng:number) => void):void{
        var geocoder = this.platform.getGeocodingService(),
        parameters = {
            locationid: placeid,
            gen: '9'
        };
        geocoder.geocode(parameters,
            (data) => {
                let obj = data.Response.View[0].Result[0];
                onsuccess(obj.Location.Address.Label, obj.Location.DisplayPosition.Latitude, obj.Location.DisplayPosition.Longitude);
            }, 
            (error) => {
                this.service.presentToast(error);
            }
        );
    };
    GetPosicionActual(map:GoogleMap, onsuccess:(posicion, latlng) => void){
        this.count = 0;
        this.GetMyPosition(map, onsuccess);
    }

    GetMyPosition(map:GoogleMap, onsuccess:(posicion, latlng) => void){
        map.getMyLocation({ enableHighAccuracy: true }).then((location)=> {
            if(location.accuracy < 12 || this.count == 10){
                let latlng = location.latLng;
                let posicion = location.latLng.lng.toString() + ' ' + location.latLng.lat.toString()
                //this.service.presentToast("Establecimos tu posición: " +  posicion, "bottom", 3000);
                onsuccess(posicion, latlng);
            }
            else {
                this.count++;
                this.GetMyPosition(map, onsuccess);
            }
        });

    }

    GetTextoPosicion(lat:number, lng:number):string{
        return lng.toString() + ' ' + lat.toString();
    };
    GetParametroPosicion(lat:number, lng:number):string{
        return lat.toString() + ',' + lng.toString() + ',200';
    };
    GetRoutingPosicion(latlng:string):string{
        let arr = latlng.split(' ');
        return arr[1].toString() + ',' + arr[0].toString();
    };
    GetPosicionTexto(texto:string):any{
        var arr:Array<string> = texto.split(' ');
        return { lat: parseFloat(arr[1]), lng: parseFloat(arr[0])};
    };
}
