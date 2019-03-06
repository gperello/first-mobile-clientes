import { Injectable } from "@angular/core";
import { CustomServices } from './custom.services';
import { Usuario, Tarjeta, Viaje } from '../models/clases';
import * as moment from 'moment';

declare var Mercadopago: any;

@Injectable()
export class MercadoPagoService{
    User:Usuario;
    directionsService:any;
    directionsDisplay:any;
    Mensajes = {
        '205': 'Ingresa el número de tu tarjeta.',
        '208': 'Elige un mes.',
        '209': 'Elige un año.',
        '212': 'Ingresa tu tipo de documento.',
        '213': 'Ingresa tu subtipo de documento.',
        '214': 'Ingresa tu documento.',
        '220': 'Ingresa tu banco emisor.',
        '221': 'Ingresa el nombre y apellido.',
        '224': 'Ingresa el código de seguridad.',
        'E301': 'Hay algo mal en ese número.Vuelve a ingresarlo.',
        'E302': 'Revisa el código de seguridad.',
        '316': 'Ingresa un nombre válido.',
        '322': 'Revisa tu tipo de documento.',
        '323': 'Revisa tu documento.',
        '324': 'Revisa tu documento.',
        '325': 'Revisa la fecha.',
        '326': 'Revisa la fecha.',
        '011': 'Acción no válida, el recurso está en un estado que no permite esta operación. Para obtener más información, consulte el estado que tiene el recurso'
    };


    constructor(protected service: CustomServices){
        this.User = this.service.UserData();
        Mercadopago.setPublishableKey("APP_USR-986d3038-f80d-43d9-a548-52aff5957ab6");
    }
    
     
    //FIN DE TIPO DE DOCUMENTO
    CrearTarjeta(form, success:(data)=>void): Promise<any> {
        return new Promise((resolve)=>{
            try{
                Mercadopago.createToken(form, (status, response) =>{
                    resolve(this.GuardarTarjeta(status, response, success));
                });
                Mercadopago.clearSession();
            }
            catch(ex){
                this.service.showAlert("error", ex);
                Mercadopago.clearSession();
            }
        });
    };
    
    GenerarToken(form, viaje:Viaje, codigo, tarjeta:Tarjeta,  success:(data)=>void): Promise<any> {
        return new Promise((resolve)=>{
            try{
                Mercadopago.createToken(form, (status, response) =>{
                    resolve(this.EnviarPago(status, response, viaje, codigo, tarjeta, success));
                });
                Mercadopago.clearSession();
            }
            catch(ex){
                this.service.showAlert("error", ex);
                Mercadopago.clearSession();
            }
        });
    };
    //INICIO DE ENVIO DE PAGO AL SERVIDOR
    EnviarPago(status, response, viaje:Viaje, codigo, tarjeta:Tarjeta, success:(data)=>void):any {
        if (status != 200 && status != 201) {
            let mensaje:string = this.Mensajes[response.cause[0].code];
            if (!mensaje) mensaje = "Por favor verifique los datos ingresados.";
            this.service.showAlert("error", "Datos de tarjeta invalidos");
            Mercadopago.clearSession();
        }
        else {
            if (!this.ValidarFechaPago(viaje.FechaHora)) tarjeta.CapturaDiferida = 'not-supported';
            if (tarjeta.PaymentMethodId == 'cmr') tarjeta.CapturaDiferida = 'not-supported';
            this.service.EnviarPago(viaje,tarjeta,response,codigo,success); 
            Mercadopago.clearSession();
        }
    };
    //FIN DE ENVIO DE PAGO AL SERVIDOR
    EliminarTarjeta(id, success:(data)=>void):any {
        this.service.EliminarTarjetas(id, success);
        Mercadopago.clearSession();
    };
    GuardarTarjeta(status, response, success:(data)=>void):any {
        if (status != 200 && status != 201) {
            this.service.showAlert("error", "Datos de tarjeta invalidos");
            Mercadopago.clearSession();
        }
        else {
            this.service.GuardarTarjetas(response.id, success);
            Mercadopago.clearSession();
        }
    };
    ValidarFechaPago(fechacliente):boolean{
        return moment().add(3, 'days') > moment(fechacliente, "DD/MM/YYYY HH:mm");
    }
}
