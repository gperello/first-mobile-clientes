import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {ViewChild} from '@angular/core';
import {LoginPage} from '../pages/login/login';
import {HomePage} from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { CustomServices } from '../services/custom.services';
import { Events } from 'ionic-angular';
import { Usuario } from '../models/clases';
import { TarjetasPage } from '../pages/tarjetas/tarjetas';
import { ContactPage } from '../pages/contact/contact';
import { ClientePage } from '../pages/cliente/cliente';
import { ViajePedidoPage } from '../pages/viaje.pedido/viaje.pedido';
import { ViajeEnCaminoPage } from '../pages/viaje.encamino/viaje.encamino';
import { ViajeEnCursoPage } from '../pages/viaje.encurso/viaje.encurso';
import { ViajeFinalizadoPage } from '../pages/viaje.finalizado/viaje.finalizado';

@Component({
  templateUrl: 'app.html',
  queries: {
    nav: new ViewChild('content')
  }
})
export class MyApp {
  public Usuario:any = {
    Nombre: "",
    Foto: ""
  };

  public rootPage: any;

  public nav: any;

  public pages = [
    {
      title: 'Inicio',
      icon: 'ios-home-outline',
      count: 0,
      component: HomePage
    },
    /* {
      title: 'Mis Viajes',
      icon: 'list',
      count: 0,
      component: HistoryPage
    }, */
    {
      title: 'Mis Tarjetas',
      icon: 'card',
      count: 0,
      component: TarjetasPage
    },
    {
      title: 'Asociar Cuenta',
      icon: 'done-all',
      count: 0,
      component: ClientePage
    },
    {
      title: 'Perfil',
      icon: 'person',
      count: 0,
      component: ProfilePage
    },
    {
      title: 'Contacto',
      icon: 'ios-contact-outline',
      count: 0,
      component: ContactPage
    },
  ];

  constructor(public events:Events, 
    private service:CustomServices) {
    this.rootPage = HomePage;
    if(this.service.UserData() == null) this.rootPage = LoginPage;
    else{
      this.Usuario.Nombre = this.service.UserData().Nombre + " " + this.service.UserData().Apellido;
      this.Usuario.Foto = this.service.UserData().Foto;
      this.events.subscribe('username:changed', (user:Usuario) => {
        if(user != null) {
          this.Usuario.Nombre = this.service.UserData().Nombre + " " + this.service.UserData().Apellido;
          this.Usuario.Foto = this.service.UserData().Foto;
        };
      });
      this.events.subscribe('onnotification:changed', (viaje) => {
        this.getviaje(viaje);
      });
      this.service.RegistracionFcm();
    }
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
  logout(){
    this.service.Logout((data) => {
      this.nav.setRoot(LoginPage);
    });
  }
  getviaje(item){
    localStorage.setItem("reserva_actual", item.Reserva);
    switch(item.EstadoId){
      case 2:
        this.nav.push(ViajePedidoPage);
        break;
      case 3:
        this.nav.push(ViajeEnCaminoPage);
        break;
      case 5:
        this.nav.push(ViajeEnCursoPage);
        break;
      case 7:
        this.nav.push(ViajeFinalizadoPage);
        break;
    }
}
}


