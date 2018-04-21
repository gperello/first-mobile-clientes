import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

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
import {ConductorPage} from '../pages/conductor/conductor';
import {ContactPage} from '../pages/contact/contact';
import {FormaDePagoPage} from '../pages/formadepago/formadepago';
import {MapaViajePage} from '../pages/mapaviaje/mapaviaje';
import {GenerarCodigoPage} from '../pages/generar.codigo/generar.codigo';
import {EnviarCodigoPage} from '../pages/enviar.codigo/enviar.codigo';
import {CmabiarClavePage} from '../pages/cambiar.clave/cambiar.clave';
import {BaseService} from '../services/base.service';
import {CustomServices} from '../services/custom.services';
import {PushNotificationService} from '../services/push.notification';
import { Geolocation } from '@ionic-native/geolocation';
import { Push } from '@ionic-native/push';

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
    MapaViajePage,
    GenerarCodigoPage,
    EnviarCodigoPage,
    CmabiarClavePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule
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
    MapaViajePage,
    GenerarCodigoPage,
    EnviarCodigoPage,
    CmabiarClavePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    /* import services */
    BaseService,
    CustomServices,
    PushNotificationService,
    HttpClient, 
    Geolocation, 
    Push,
  ]
})
export class AppModule {
}
