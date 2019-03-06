import {NgModule} from '@angular/core';
import {IonicApp, IonicModule, IonicPageModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import { CommonModule } from '@angular/common';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';

// import pages
import {HistoryPage} from '../pages/history/history';
import {HomePage} from '../pages/home/home';
import {ResumenPage} from '../pages/resumen/resumen';
import {LoginPage} from '../pages/login/login';
import {PlacesPage} from '../pages/places/places';
import {ProfilePage} from '../pages/profile/profile';
import {RegisterPage} from '../pages/register/register';
import {ClientePage} from '../pages/cliente/cliente';
import {ConductorPage} from '../pages/conductor/conductor';
import {ContactPage} from '../pages/contact/contact';
import {FormaDePagoPage} from '../pages/formadepago/formadepago';
import {GenerarCodigoPage} from '../pages/generar.codigo/generar.codigo';
import {EnviarCodigoPage} from '../pages/enviar.codigo/enviar.codigo';
import {CambiarClavePage} from '../pages/cambiar.clave/cambiar.clave';
import {MensajesPage} from '../pages/mensajes/mensajes';
import {BaseService} from '../services/base.service';
import {CustomServices} from '../services/custom.services';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { Firebase } from '@ionic-native/firebase';
import { firebaseConfig } from '../config';
import { FcmProvider } from '../services/FcmProvider';
import { TarjetasPage } from '../pages/tarjetas/tarjetas';
import { NuevaTarjetaPage } from '../pages/nueva.tarjeta/nueva.tarjeta';
import { MercadoPagoService } from '../services/mercadopago.service';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { MomentModule } from 'angular2-moment';
import { PagoTarjetaPage } from '../pages/pago.tarjeta/pago.tarjeta';
import { HereService } from '../services/here.service';
import { ViajePedidoPage } from '../pages/viaje.pedido/viaje.pedido';
import { ViajeEnCaminoPage } from '../pages/viaje.encamino/viaje.encamino';
import { ViajeEnCursoPage } from '../pages/viaje.encurso/viaje.encurso';
import { ViajeFinalizadoPage } from '../pages/viaje.finalizado/viaje.finalizado';
import { ViajePage } from '../pages/viaje/viaje';
import { CallNumber } from '@ionic-native/call-number';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMapsService } from '../services/google.maps.service';
import { GoogleMaps } from '@ionic-native/google-maps';
import { DatePicker } from '@ionic-native/date-picker';
import { Market } from '@ionic-native/market';
import { StarRatingModule } from 'ionic3-star-rating';


AngularFireModule.initializeApp(firebaseConfig.fire);
// end import pages

@NgModule({
  declarations: [
    MyApp,
    HistoryPage,
    HomePage,
    ResumenPage,
    LoginPage,
    PlacesPage,
    ProfilePage,
    RegisterPage,
    ConductorPage,
    ContactPage,
    FormaDePagoPage,
    GenerarCodigoPage,
    EnviarCodigoPage,
    CambiarClavePage,
    MensajesPage,
    TarjetasPage,
    NuevaTarjetaPage,
    PagoTarjetaPage,
    ViajePage,
    ViajePedidoPage,
    ViajeEnCaminoPage,
    ViajeEnCursoPage,
    ViajeFinalizadoPage,
    ClientePage,
 ],
  imports: [
    CommonModule,
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    HttpModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig.fire),
    AngularFireAuthModule,
    BrMaskerModule,
    MomentModule,
    StarRatingModule,
    IonicPageModule.forChild(HomePage)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HistoryPage,
    HomePage,
    ResumenPage,
    LoginPage,
    PlacesPage,
    ProfilePage,
    RegisterPage,
    ConductorPage,
    ContactPage,
    FormaDePagoPage,
    GenerarCodigoPage,
    EnviarCodigoPage,
    CambiarClavePage,
    MensajesPage,
    TarjetasPage,
    NuevaTarjetaPage,
    PagoTarjetaPage,
    ViajePage,
    ViajePedidoPage,
    ViajeEnCaminoPage,
    ViajeEnCursoPage,
    ViajeFinalizadoPage,
    ClientePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    /* import services */
    BaseService,
    CustomServices,
    HereService,
    GoogleMapsService,
    HttpClient, 
    NativeGeocoder, 
    SocialSharing,
    AngularFireAuth,
    Firebase,
    FcmProvider,
    MercadoPagoService,
    CallNumber,
    Geolocation,
    GoogleMaps,
    DatePicker,
    Market
  ]
})
export class AppModule {
}
