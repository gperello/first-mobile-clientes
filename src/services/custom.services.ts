import { BaseService } from "./base.service";
import { Http } from "@angular/http";
import { AlertController, LoadingController } from "ionic-angular";
import { Geolocation } from '@ionic-native/geolocation';
import { PushNotificationService } from "./push.notification";
import { Injectable } from "@angular/core";

@Injectable()
export class CustomServices extends BaseService{
    constructor(protected http:Http, protected alert:AlertController, 
        protected geolocation: Geolocation, protected loadingService:LoadingController, 
        protected push:PushNotificationService){
        super(http, alert, geolocation, loadingService);
    }
    //HOME

    //LOGIN
    public Login(username:String, password:String, onsucess?:() => void, onerror?:(message:string) => void):void {
        this.ExecuteGetService(this.LOGIN, [ username, password], data => {
          localStorage.setItem('datos_de_cliente', JSON.stringify(data.User));
          localStorage.setItem('token_de_cliente', data.Token);
          this.push.Init(this.RegistracionFcm, this);
          if(onsucess != null)onsucess();
        }, error => {
          if(onerror != null)onerror(error);
        });
    }

    public Logout(onsuccess:(data) => void):void{
        this.ExecuteGetService(this.LOGOUT, [ localStorage.getItem("token_de_usuario") ], data => { 
          localStorage.removeItem('datos_de_cliente');
          localStorage.removeItem('token_de_cliente');
          onsuccess(data);
        });
    }

    public Register(user, onsuccess:(data) => void):void{
        this.ExecutePostService(this.REGISTRAR_USUARIO, user, data => { 
          onsuccess(data);
        });
    }
    public GenerateCode(email, onsuccess:(data) => void):void{
        this.ExecuteGetService(this.GENERAR_CODIGO, [ email ], data => { 
          onsuccess(data);
        });
    }
    public ChangePassword(code, password, onsuccess:(data) => void):void{
        this.ExecuteGetService(this.CAMBIAR_PASSWORD, [ code, password ], data => { 
          onsuccess(data);
        });
    }

    

    //REGISTRATION FCM
    public RegistracionFcm(regid, service:CustomServices){
        //this.showAlert("REG", regid);
        service.ExecutePostService(service.REGISTRAR_FCM,{
            UsuarioId: service.UserData().UsuarioId,
            RegistrationId: regid
        });
    }
}
