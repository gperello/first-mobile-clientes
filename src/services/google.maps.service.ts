import { Geolocation } from '@ionic-native/geolocation';
import { Injectable } from "@angular/core";
import { Platform } from 'ionic-angular';
declare var google: any;

@Injectable()
export class GoogleMapsService{
    defaulticono:string = "assets/img/icono-azul.png";
    directionsService:any;
    directionsDisplay:any;

    constructor(protected geolocation: Geolocation, private platform:Platform){
        this.platform.ready().then(()=>{
            this.directionsService = new google.maps.DirectionsService;
            this.directionsDisplay = new google.maps.DirectionsRenderer;
        });
    }
    
    CreateMap(element):any{
        return new google.maps.Map(element.nativeElement, {
            zoom: 15,
            center: { lat: -34.6083, lng: -58.3712 },
            fullscreenControl: false,
            mapTypeControl: false,
          });  
    };
    ClearMarker(marker){
        if(marker && marker.setMap) marker.setMap(null);
    }
    CreateMarker(map, LatLng, icono?:string){
        return new google.maps.Marker({
            position: LatLng,
            map: map,
            icon: icono ? icono : this.defaulticono
          });
    };
    CreateTrayecto(map, origen, destino, intermedios?:Array<any>, onsucces?:(km, duracion) => void){
        if(origen && destino && origen != '' && destino != ''){
            this.directionsDisplay.setMap(null);
            this.directionsDisplay.setMap(map);
            this.directionsDisplay.setDirections({ routes: [] });
            this.directionsDisplay.setOptions({
                polylineOptions: {
                    strokeWeight: 2,
                    strokeOpacity: 1,
                    strokeColor: 'red'
                }, suppressMarkers: true
            });
            var waypts = [];
            if(intermedios != null){
                intermedios.forEach(element => {
                    waypts.push({
                        location: element, //google.maps.LatLng
                        stopover: false
                    });
                });
            }
            this.directionsService.route({
                origin: this.GetPosicionTexto(origen),
                destination: this.GetPosicionTexto(destino),
                travelMode: 'DRIVING',
                waypoints: waypts
            }, (response, status) => {
                if (status === 'OK') {
                    this.directionsDisplay.setOptions({
                        directions: response,
                        draggable: false
                    }); 
                    let km = parseInt((response.routes[0].legs[0].distance.value / 1000).toString()) * 1000 + 1000;
                    let duracion = response.routes[0].legs[0].duration.value;
                    if(onsucces)onsucces(km, duracion);
                } else {
                    window.alert('Directions request failed due to ' + status);
                }
            });
        }
    };
    Autocomplete(query:string, onsuccess:(predictions)=> void):void{
        let acService = new google.maps.places.AutocompleteService();
        let config = { 
            types:  ['geocode', 'establishment'], // other types available in the API: 'establishment', 'regions', and 'cities'
            input: query, 
            componentRestrictions: { country: 'AR' } 
        }
        acService.getPlacePredictions(config, function(predictions, status) {
           onsuccess(predictions);
        });
    };
    GetDireccion(posicion, onsuccess:(direccion)=> void):void{
        var geocoder = new google.maps.Geocoder;
        geocoder.geocode( { 'location': { lat: posicion.lat, lng: posicion.lng } }, 
        (results, status) => {
            if (status === 'OK' && results[0]) onsuccess(results[0].formatted_address);
        });
    };
    GetLatLng(placeid, map, onsuccess:(posicion, latlng) => void):void{
        let placesService = new google.maps.places.PlacesService(map);
        placesService.getDetails({ placeId: placeid }, (place, status) => {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                map.setCenter(place.geometry.location);
                let latlng = { lat: place.geometry.location.lat(), lng: place.geometry.location.lng() }
                let posicion = place.geometry.location.lng().toString() + ' ' + place.geometry.location.lat().toString()
                onsuccess(posicion, latlng);
            }
        });
    };
    GetPosicionActual(onsuccess:(posicion, latlng) => void):void{
        this.geolocation.getCurrentPosition().then((position) => {
            let latlng = { lat: position.coords.latitude, lng: position.coords.longitude };
            let posicion = position.coords.longitude.toString() + ' ' + position.coords.latitude.toString()
            onsuccess(posicion, latlng);
        });
    }

    GetTextoPosicion(posicion):string{
        return posicion.lng.toString() + ' ' + posicion.lat.toString();
    };
    GetPosicionTexto(texto:string):any{
        var arr:Array<string> = texto.split(' ');
        return { lat: parseFloat(arr[1]), lng: parseFloat(arr[0])};
    };
}
