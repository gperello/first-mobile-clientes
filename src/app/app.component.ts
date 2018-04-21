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
      icon: 'ios-time-outline',
      count: 0,
      component: HistoryPage
    },
    {
      title: 'Ubicaciones',
      icon: 'ios-notifications-outline',
      count: 2,
      component: PlacesPage
    },
    {
      title: 'Perfil',
      icon: 'ios-help-circle-outline',
      count: 0,
      component: ProfilePage
    },
    {
      title: 'Cerrar Sesión',
      icon: 'ios-log-out-outline',
      count: 0,
      component: LoginPage
    }
  ];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private service:CustomServices) {
    this.rootPage = HomePage;
    if(this.service.UserData() == null) this.rootPage = LoginPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}


