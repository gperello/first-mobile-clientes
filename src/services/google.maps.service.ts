import { Injectable } from "@angular/core";
import { Platform } from 'ionic-angular';

declare var google: any;

@Injectable()
export class GoogleMapsService{

    constructor(private platform:Platform){
    }

    Autocomplete(element, onchange:(direccion, posicion, lat, lng) => void):void {
        element.addEventListener('keypress', (e) => {
            if (e.which !== 13) {
                return true;
            }
            let address = element.value;
            let geocoder = new google.maps.Geocoder;
            geocoder.geocode({ 'address': address, componentRestrictions: { country: 'ar' } }, (results, status) => {
                if (status === 'OK') {
                    let posicion = results[0].geometry.location.lng() + ' ' + results[0].geometry.location.lat();
                    let esdireccion = false;
                    let tipos:Array<string> = ['locality', 'political', 'street_address', 'intersection'];
                    for (var i in results[0].types) {
                        for (var j in tipos){
                            if (tipos[j] == results[0].types[i]) {
                                esdireccion = true;
                                break;
                            }
                        }
                    }
                    let direccion = esdireccion ? results[0].formatted_address : address + ' [' + results[0].formatted_address + ']';
                    onchange(direccion, posicion, results[0].geometry.location.lat(), results[0].geometry.location.lng());
                } 
            });
        });
        var token = new google.maps.places.AutocompleteSessionToken();
        element._autocomplete = new google.maps.places.Autocomplete(element,
            { fields: ['formatted_address', 'geometry'], types: ['geocode', 'establishment'], componentRestrictions: { country: 'ar' }, sessionToken: token }
        );
        google.maps.event.addListener(element._autocomplete, 'place_changed', ()=> {
            var geocoder = new google.maps.Geocoder;
            geocoder.geocode({ 'address': element.value, componentRestrictions: { country: 'ar' } }, (results, status) => {
                if (status === 'OK') {
                    var posicion = results[0].geometry.location.lng() + ' ' + results[0].geometry.location.lat();
                    var direccion = element.value;
                    onchange(direccion, posicion, results[0].geometry.location.lat(), results[0].geometry.location.lng());
                }
            });
        });
    };
  
    GetDireccion(posicion, onsuccess:(direccion, posicion, lat, lng)=> void):void{
        var geocoder = new google.maps.Geocoder;
        geocoder.geocode( { 'location': { lat: posicion.lat, lng: posicion.lng } }, 
        (results, status) => {
            if (status === 'OK' && results[0]){
                let posicion = results[0].geometry.location.lng().toString() + ' ' + results[0].geometry.location.lat().toString()
                onsuccess(results[0].formatted_address, posicion, results[0].geometry.location.lat(), results[0].geometry.location.lng());
            } 
        });
    };
    GetPosicion(address, onsuccess:(direccion, posicion, lat, lng)=> void):void{
        var geocoder = new google.maps.Geocoder;
        geocoder.geocode( { 'address': address }, 
        (results, status) => {
            if (status === 'OK' && results[0]) {
                let posicion = results[0].geometry.location.lng().toString() + ' ' + results[0].geometry.location.lat().toString()
                onsuccess(address, posicion, results[0].geometry.location.lat(), results[0].geometry.location.lng());
            }
        });
    };
    GetByPlaceId(placeid, map, onsuccess:(direccion, posicion, latlng) => void):void{
        var token = new google.maps.places.AutocompleteSessionToken();
        let placesService = new google.maps.places.PlacesService(map);
        placesService.getDetails({ fields: ["geometry", "formatted_address"], placeId: placeid, sessionToken: token }, (place, status) => {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                map.setCenter(place.geometry.location);
                let latlng = { lat: place.geometry.location.lat(), lng: place.geometry.location.lng() }
                let posicion = place.geometry.location.lng().toString() + ' ' + place.geometry.location.lat().toString()
                onsuccess(place.formatted_address, posicion, latlng);
            }
        });
    };

    GetTextoPosicion(posicion):string{
        return posicion.lng.toString() + ' ' + posicion.lat.toString();
    };
    GetPosicionTexto(texto:string):any{
        var arr:Array<string> = texto.split(' ');
        return { lat: parseFloat(arr[1]), lng: parseFloat(arr[0])};
    };
}
