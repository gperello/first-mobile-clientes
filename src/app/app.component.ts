import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {ViewChild} from '@angular/core';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

// import pages
import {LoginPage} from '../pages/login/login';
import {HomePage} from '../pages/home/home';
import {HistoryPage} from '../pages/history/history';
import { PlacesPage } from '../pages/places/places';
import { ProfilePage } from '../pages/profile/profile';
import { CustomServices } from '../services/custom.services';

@Component({
  templateUrl: 'app.html',
  queries: {
    nav: new ViewChild('content')
  }
})
export class MyApp {
  public Usuario:string;

  public rootPage: any;

  public nav: any;

  public pages = [
    {
      title: 'Inicio',
      icon: 'ios-home-outline',
      count: 0,
      component: HomePage
    },
    {
      title: 'Historial',
      icon: 'list',
      count: 0,
      component: HistoryPage
    },
    {
      title: 'Ubicaciones',
      icon: 'map',
      count: 0,
      component: PlacesPage
    },
    {
      title: 'Perfil',
      icon: 'ios-contact-outline',
      count: 0,
      component: ProfilePage
    },
  ];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private service:CustomServices) {
    this.rootPage = HomePage;
    if(this.service.UserData() == null) this.rootPage = LoginPage;
    else this.Usuario = this.service.UserData().Nombre;

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  logout(){
    this.service.Logout((data) => {
      this.nav.setRoot(LoginPage);
    });
  }
}


