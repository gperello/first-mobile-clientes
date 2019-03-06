import { Injectable } from '@angular/core';
import { AlertController, Loading, LoadingController, ToastController  } from 'ionic-angular';
import { Usuario, Direccion } from '../models/clases';
import { Http, Headers } from '@angular/http';
declare var google;

@Injectable()
export class BaseService {
    public loader:Loading;
    constructor(protected http:Http, protected alert:AlertController, protected loadingService:LoadingController,protected toastCtrl: ToastController) {
        this.loader = this.loadingService.create({ content: "Aguarde..." });
    }
  //CONSTANTES
  BASE_URL = "https://servicios.firstsa.net/";
  //BASE_URL = "http://localhost:16021/";
  ASOCIAR_CLIENTE = "appcliente/asociarcliente/{0}/{1}/{2}";
  OBTENER_ESPERA = "appcliente/obtenerespera";
  CALCULAR_TARIFA = "appcliente/calculartarifa";
  CALIFICAR_VIAJE = "appcliente/calificarviaje/{0}/{1}/{2}/{3}";
  CANCELAR_VIAJE = "appcliente/cancelarviaje/{0}/{1}";
  GET_NUMERO_VIAJE = "appcliente/getnumeroviaje";
  GET_VIAJE = "appcliente/getviaje/{0}";
  GET_VIAJES = "appcliente/getviajes/{0}";
  GET_USUARIO = "appcliente/getusuario/{0}";
  REGISTRAR_USUARIO = "appcliente/registrarusuario";
  SAVE_VIAJE = "appcliente/saveviaje";
  REGISTRAR_FCM = "appcliente/registrarfcm";
  GENERAR_CODIGO = "appcliente/generarcodigo/{0}";
  CAMBIAR_PASSWORD = "appcliente/cambiarclave/{0}/{1}";
  LOGIN = "appcliente/getusuario";
  LOGOUT = "appcliente/logout/{0}";
  ENVIAR_CODIGO = "appcliente/enviarcodigo/{0}/{1}";

  GUARDAR_TARJETA = "appcliente/guardartarjeta/{0}/{1}";
  ELIMINAR_TARJETA = "appcliente/eliminartarjeta/{0}/{1}";
  GUARDAR_PAGO = "appcliente/registrarpago";


  //HTTP
  ExecuteGetService(url: string, args?:Array<any>, onsuccess?:(data:any) => void, onerror?:(data) => void):void {
      let headers = new Headers({ 
          'Content-Type': 'application/json;charset=UTF-8',
          'Authorization': localStorage.getItem("token_de_cliente")
      });
      if(onsuccess != null || onerror != null) this.showLoading();
      if(args != null) url = this.ReplaceUrl(url, args);
      this.http.get(this.BASE_URL + url, { headers: headers })
      .subscribe((data) => {
          var result = data.json();
          if(result.Status == 0) {
              if(onsuccess != null) onsuccess(result.Result);
          }
          else{
              if(onerror != null) onerror(result.Message);
              else this.showAlert("ERROR", result.Message);
          }
          this.hideLoading();
      },
      (error) => {
          this.hideLoading();
          if(error.status == 401){
              localStorage.removeItem('datos_de_cliente');
              localStorage.removeItem('token_de_cliente');
              if(this.OnNotAuthenticate != null) this.OnNotAuthenticate();
          }
          else this.showAlert("ERROR", JSON.stringify(error));
      });
  }
  ExecutePostService(url:string, data:any, onsuccess?:(data) => void, onerror?:(data) => void):void {
      let headers = new Headers({ 
          'Content-Type': 'application/json;charset=UTF-8',
          'Authorization': localStorage.getItem("token_de_cliente")
      });
      if(onsuccess != null || onerror != null) this.showLoading();
      this.http.post(this.BASE_URL + url, JSON.stringify(data), {  headers: headers })
      .subscribe((data) => {
          var result = data.json();
          if(result.Status == 0) {
              if(onsuccess != null) onsuccess(result.Result);
          }
          else{
              if(onerror != null) onerror(result.Message);
              else this.showAlert("ERROR", result.Message);
          }
          this.hideLoading();
      },
      (error) => {
          this.hideLoading();
          if(error.status == 401){
              localStorage.removeItem('datos_de_cliente');
              localStorage.removeItem('token_de_cliente');
              if(this.OnNotAuthenticate != null) this.OnNotAuthenticate();
          }
          else this.showAlert("ERROR", JSON.stringify(error));
      });
  }
  ReplaceUrl(url:string, args: Array<any>):string {
    return url.replace(/{(\d+)}/g, function(match, number) { 
        return typeof args[number] != 'undefined'
          ? args[number]
          : match
        ;
      });
  }
   OnNotAuthenticate:() => void;     
  
   //USER
  public GetValidandoUsuario():boolean{
    return localStorage.getItem("validando_usuario") && localStorage.getItem("validando_usuario") == "true";
  }
  public SetValidandoUsuario(value:string):void{
    if(!value)localStorage.removeItem("validando_usuario");
    else localStorage.setItem("validando_usuario", value);
  }
  public UserData():Usuario{
    return localStorage.getItem("datos_de_cliente") == null ? null : JSON.parse(localStorage.getItem("datos_de_cliente"));
  }

  public UserToken():string{
    return localStorage.getItem("token_de_cliente");
  }

  //ALERT
  public showAlert(title:string, mensaje:string, onconfirm?:() => void) {
    let alert = this.alert.create({
      title: title,
      message: mensaje,
      buttons: [{
        text: 'OK',
        handler: () => {
          if(onconfirm != null)onconfirm();
        },
        cssClass: 'alertCustomCss'
      }],
    });
    alert.present();
  }
  public ShowConfirm(mensaje:string, onsuccess:() => void, onerror?:()=> void){
    let method = this.alert.create({
        title: "Atención",			
        message: mensaje,
        buttons: [
            {
                text: 'SI',
                handler: () => {
                    onsuccess();
                }
            },
            {
                text: 'NO',
                handler: () => {
                    if(onerror)onerror();
                }
            }
        ]
    });
    method.present()
  }
  //TOAtS
  presentToast(message, posicion = 'top', duracion = 3000) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: duracion,
      position: posicion
    });
    toast.present();
  }

  //LOADING
  showLoading(){
    this.loader.present();
  }
  hideLoading(){
    this.loader.dismiss();
    this.loader = this.loadingService.create({ content: "Aguarde..." });
  }

  //FORMAT NUMBER
  public formatNumber(numero:any, inseparator?:string, outseparator?:string):string{
    var x = numero.toString();
    var arr:string[];
    if(inseparator == null) inseparator = ".";
    if(outseparator == null) outseparator = ",";
    var milseparator = outseparator == "." ? "," : ".";
    switch(inseparator){
      case ".":
        x.replace(",", "");
        arr = x.split(".");
        break;
      case ",":
        x.replace(".", "");
        arr = x.split(",");
    }
    var numericPart = arr[0];
    if(arr[0].length > 3) {
        var aux = arr[0].length;
        var arrAux:Array<any> = new Array<any>();
        for(var i = aux - 3; i > -3; i = i - 3){
            if(i >=0) arrAux.push(arr[0].substring(i, i + 3));
            else  arrAux.push(arr[0].substring(0, 3 + i));
        }
        numericPart = arrAux.reverse().join(milseparator);
    }
    var decimalPart:string = "00";
    if(arr.length > 1) decimalPart = arr[1] + "0"
    return numericPart + outseparator + decimalPart.substring(decimalPart.length - 2);
  }

  public getNumber(numero:any):number{
    numero = numero.toString().replace("$ ", "")
    return parseFloat(numero.toString().replace(".", "").replace(",", "."))
  }

  //OCULTAR CAMPOS
  public ocultarCampo(campo):boolean{
    return (campo == null || campo == undefined || campo.toString().trim().length == 0 || campo == false);
  }
  public ocultarArray(array:Array<any>):boolean{
    return (array == null || array == undefined || array.length == 0);
  }

  //SET COLOR
  public setColorEstado(estado):string{
      switch(estado){
        case 2:
            return "info";
        case 3:
            return "danger";
        case 5:
            return "primary";
        case 7: case 8:
            return "dark";
        default:
          return "";
      }
  }

  public setColorFormaPago(formapago):string{
    switch(formapago){
      case 2: case 'Cta. Cte.':
          return "danger";
      case 3: case 'Tarjeta':
          return "secondary"
      case 1: case 'Efectivo':
          return "primary";
      default:
          return "";
    }
  }

  public Direcciones():Array<Direccion>{
    let arr:Array<Direccion> = localStorage.getItem("direcciones") == null ? null : JSON.parse(localStorage.getItem("direcciones"));
    if(arr) arr = arr.sort((a,b) => {
        return b.Cantidad - a.Cantidad;
    });
    return arr;
  }

  public InsertDireccion(direccion:Direccion):void{
    let arr:Array<Direccion> = localStorage.getItem("direcciones") == null ? null : JSON.parse(localStorage.getItem("direcciones"));
    let existe:boolean = false;
    if(arr){
        for(var i in arr) {
            if(arr[i].Direccion == direccion.Direccion){
                arr[i].Cantidad++;
                existe = true;
                break;
            }
        };
        if(!existe) arr.push(direccion);
    }
    else{
        arr = new Array<Direccion>();
        arr.push(direccion);
    }
    localStorage.setItem("direcciones", JSON.stringify(arr))
  }



}