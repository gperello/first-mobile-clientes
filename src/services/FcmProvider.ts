import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase';
import { Platform, Events } from 'ionic-angular';

@Injectable()
export class FcmProvider {

  constructor(
    private firebaseNative: Firebase,
    private platform: Platform,
    private events:Events
  ) {
    /* this.firebaseNative.onTokenRefresh().subscribe((token) => {
      this.events.publish('ontoken:refresh', { Token: token });
    }); */
  }

  // Get permission from the user
  async getToken(onsuccess:(token) => void) { 
    let token = await this.firebaseNative.getToken();
    if (this.platform.is('ios')) {
      await this.firebaseNative.grantPermission();
    } 
    this.firebaseNative.onNotificationOpen().subscribe((notification) => {
      this.events.publish('onnotification:changed', { Reserva: notification.Reserva });
    });
    onsuccess(token);
  }
}