import { Injectable } from '@angular/core';
import { Push } from '@ionic-native/push';
import { Usuario } from './clases';
import { CustomServices } from './custom.services';

@Injectable()
export class PushNotificationService {
    User:Usuario;
    constructor(private push: Push) { 
    };

    public Init(onRegister:(regid, service:CustomServices) => void, service:CustomServices){
        const pushObject = this.push.init({
            android: {
                senderID: '644865268568'
            },
            browser: {
                pushServiceURL: 'http://push.api.phonegap.com/v1/push'
            },
            ios: {
                alert: 'true',
                badge: false,
                sound: 'true'
            },
            windows: {}
        });

        pushObject.on('registration').subscribe((data: any) => {
            onRegister(data.registrationId, service);
        });
        pushObject.on('notification').subscribe((data: any) => {
            
        });
        pushObject.on('error').subscribe(error => {
            //this.base.showAlert("ERROR", JSON.stringify(error));
        });  

    };

    
} 