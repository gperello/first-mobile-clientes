import { DateTime } from "ionic-angular";

export class Usuario {

    public UsuarioId:number
    public ClienteId:number
    public Nombre:string
    public Telefono:string
    public Email:string
    public ClienteNombre:string
    public CtaCte:boolean
}
export class ViajeList
{
    public Reserva:number
    public FechaHora:string
    public Cliente:string
    public Origen:string
    public Estado:string
    public FormaPago:string
    public EstadoId:number
    public FormaPagoId:number
}

export class Viaje
{
    public Reserva:number
    public UsuarioId:number
    public ClienteId:number
    public FechaHora:string
    public TipoFecha:number
    public Pasajero:string
    public Telefono:string
    public Email:string
    public Origen:string
    public OrigenPosicion:string
    public Destino:string
    public DestinoPosicion:string
    public FormaPagoId:number
    public Regreso:boolean
    public TarifaId:number
    public TarifaNombre:string
    public Km:number
    public Duracion:number
    public ImporteKm:string
    public Espera:number
    public ImporteEspera:string
    public Estacionamiento:string
    public Peajes:string
    public Total:string
    public TipoMovilId:number
    public Observaciones:string
}

export class CalculoDeViaje
{
    public ClienteId:number
    public PosicionOrigen:string
    public PosicionDestino:string
    public Km:number
    public FormaPagoId:number
    public TipoMovilId:number
    public Regreso:boolean
    public Intermedios:boolean
}

export class TarifaCalculada
{
    public TarifaId:number
    public TarifaNombre:string
    public Importe:string
    public Espera:string
}