import { BaseService } from "./base.service";
import { Http } from "@angular/http";
import { AlertController, LoadingController, ToastController } from "ionic-angular";
import { Injectable } from "@angular/core";
import { Viaje, CalculoDeViaje, TarifaCalculada, Usuario, Tarjeta } from "../models/clases";
import { AngularFireAuth } from "angularfire2/auth";
import { FcmProvider } from "./FcmProvider";
import { Events } from 'ionic-angular';


@Injectable()
export class CustomServices extends BaseService{
    constructor(public events:Events, protected http:Http, protected alert:AlertController, 
        protected loadingService:LoadingController, 
        protected toastCtrl: ToastController, public fb:AngularFireAuth, private fcm:FcmProvider){
        super(http, alert, loadingService, toastCtrl);
    }
    //HOME

    //LOGIN
    public Login(email:string, nombre:string,telefono:string, foto:string, onsucess?:() => void, onerror?:(message:string) => void):void {
        this.ExecutePostService(this.LOGIN, {
            Nombre: nombre,
            Email: email,
            Telefono: telefono,
            Foto: foto,
            Actualiza: false,
        }, data => {
            localStorage.setItem('datos_de_cliente', JSON.stringify(data.User));
            localStorage.setItem('token_de_cliente', data.UserToken);
            //this.presentToast("token");
            this.events.publish('username:changed', data.User);
            this.fcm.getToken((token) => {
                this.ExecutePostService(this.REGISTRAR_FCM,{
                    UsuarioId: this.UserData().UsuarioId,
                    RegistrationId: token
                });
            });

            if(onsucess != null)onsucess();
        }, error => {
          if(onerror != null)onerror(error);
        });
    }

    public Logout(onsuccess:(data) => void):void{
        this.ExecuteGetService(this.LOGOUT, [ localStorage.getItem("token_de_usuario") ], data => { 
          localStorage.removeItem('datos_de_cliente');
          localStorage.removeItem('token_de_cliente');
          this.fb.auth.signOut().then((value)=>{
            onsuccess(data);
          });
        });
    }

    public Register(user:Usuario, onsuccess?:(data) => void):void{
        this.ExecutePostService(this.REGISTRAR_USUARIO, user, data => { 
            localStorage.setItem('datos_de_cliente', JSON.stringify(data.User));
            localStorage.setItem('token_de_cliente', data.UserToken);
            this.events.publish('username:changed', this.UserData());
          if(onsuccess)onsuccess(data);
        }, (message) =>{
            this.presentToast(message);
        });
    }
    public GenerateCode(email, onsuccess:(data) => void):void{
        this.ExecuteGetService(this.GENERAR_CODIGO, [ email ], data => { 
          onsuccess(data);
        }, (message) =>{
            this.presentToast(message);
        });
    }
    public ChangePassword(code, password, onsuccess:(data) => void):void{
        this.ExecuteGetService(this.CAMBIAR_PASSWORD, [ code, password ], data => { 
          onsuccess(data);
        }, (message) =>{
            this.presentToast(message);
        });
    }
    public SendCode(code, telefono, onsuccess:(data) => void):void{
        this.ExecuteGetService(this.ENVIAR_CODIGO, [ code, telefono ], data => { 
          onsuccess(data);
        }, (message) =>{
            this.presentToast(message);
        });
    }

    

    //REGISTRATION FCM
    public RegistracionFcm(){
        this.fcm.getToken((token) => {
            this.ExecutePostService(this.REGISTRAR_FCM,{
                UsuarioId: this.UserData().UsuarioId,
                RegistrationId: token
            });
        });
    }

    //CALCULO DE TARIFA
    public CalcularTarifa(viaje:Viaje, onsuccess:(data:TarifaCalculada)=> void){
        let params:CalculoDeViaje = new CalculoDeViaje();
        params.ClienteId = viaje.ClienteId;
        params.Km = viaje.Km;
        params.PosicionDestino = viaje.OrigenPosicion;
        params.PosicionOrigen = viaje.DestinoPosicion;
        params.Regreso = viaje.Regreso;
        params.TipoMovilId = viaje.TipoMovilId;
        this.ExecutePostService(this.CALCULAR_TARIFA, params, onsuccess );
    }

    //RESERVA
    public Reservar(viaje:Viaje, onsuccess:(data)=> void){
        this.ExecutePostService(this.SAVE_VIAJE, viaje, onsuccess);  
    }

    //GET VIAJE EN CURSO
    public GetNumeroViaje(onsuccess:(data)=> void){
        this.ExecuteGetService(this.GET_NUMERO_VIAJE, null, onsuccess);  
    }
    public GetViajes(onsuccess:(data)=> void){
        this.ExecuteGetService(this.GET_VIAJES, [ this.UserData().UsuarioId ], onsuccess);  
    }
    public GetViaje(reserva, onsuccess:(data)=> void){
        this.ExecuteGetService(this.GET_VIAJE, [ reserva ], onsuccess);  
    }

    //TARJETAS
    public GuardarTarjetas(token, onsuccess:(data)=> void){
        this.ExecuteGetService(this.GUARDAR_TARJETA, [ token,  this.UserData().MercadoPagoId ], onsuccess);
    }
    public EliminarTarjetas(id, onsuccess:(data)=> void){
        this.ExecuteGetService(this.ELIMINAR_TARJETA, [ id,  this.UserData().MercadoPagoId ], onsuccess);
    }
    public EnviarPago(viaje:Viaje, tarjeta:Tarjeta, response, codigo, success:(data)=> void){
        this.ExecutePostService(this.GUARDAR_PAGO,{ 
            reserva: viaje.Reserva,
            codigo: codigo,
            pago: {
                    token: response.id,
                    description: "Reserva Nro.: " + viaje.Reserva.toString(),
                    installments: 1,
                    capture: tarjeta.CapturaDiferida === "supported",
                    payment_method_id: tarjeta.PaymentMethodId,
                    external_reference: "web",
                    payer: {
                        type: "customer",
                        email: this.UserData().Email,
                        id: this.UserData().MercadoPagoId
                    },
                    transaction_amount: this.ParceNumber(viaje.ImporteKm)
                }
            }, success);
            
    }
    ParceNumber(value:string):number {
        return Number(value.replace('$ ', '').replace('.', '').replace(',', '.'));
    };

    public ValidarUsuario():boolean{
        if(this.UserData() == null) return false;
        if(this.UserData().Nombre == null || this.UserData().Nombre.length == 0) return false;
        if(this.UserData().Apellido == null || this.UserData().Apellido.length == 0) return false;
        if(this.UserData().DocNumero == null || this.UserData().DocNumero.length == 0) return false;
        if(this.UserData().DocTipo == null || this.UserData().DocTipo.length == 0) return false;
        if(this.UserData().Email == null || this.UserData().Email.length == 0) return false;
        if(this.UserData().TelCodigo == null || this.UserData().TelCodigo.length == 0) return false;
        if(this.UserData().TelPrefijo == null || this.UserData().TelPrefijo.length == 0) return false;
        if(this.UserData().TelNumero == null || this.UserData().TelNumero.length == 0) return false;
        return true;
    }

    public ValidarTarjetas():boolean{
        return this.UserData() != null && this.UserData().Tarjetas != null && this.UserData().Tarjetas.length > 0;
    }
    public ValidarClientes():boolean{
        return this.UserData() != null && this.UserData().Clientes != null && this.UserData().Clientes.length > 0;
    }
  
    //CANCELAR VIAJE
    public CancelarViaje(reserva, onsuccess:(data)=> void){
        this.ExecuteGetService(this.CANCELAR_VIAJE, [ reserva,  this.UserData().UsuarioId ], onsuccess);
    }

    //CALIFICAR VIAJE
    public CalificarViaje(calificacionchofer, calificacionmovil, reserva, onsuccess:(data)=> void){
        this.ExecuteGetService(this.CALIFICAR_VIAJE, [ reserva,  this.UserData().UsuarioId, calificacionchofer, calificacionmovil ], onsuccess);
    }

    //ASOCIAR CLIENTE
    public AsociarCliente(cuit, clave, usuario, onsuccess:(data)=> void){
        this.ExecuteGetService(this.ASOCIAR_CLIENTE, [ usuario, cuit,  clave ], onsuccess);
    }
    //VER DISPONIBILIDAD
    public ObtenerEspera(posicion, onsuccess:(data)=> void){
        this.ExecutePostService(this.OBTENER_ESPERA, { Posicion: posicion}, onsuccess);
    }
}
