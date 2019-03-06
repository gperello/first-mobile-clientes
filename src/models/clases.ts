import { DateTime } from "ionic-angular";

export class Usuario {

    public UsuarioId:number
    public ClienteId:number
    public Nombre:string
    public Apellido:string
    public TelCodigo:string
    public TelPrefijo:string
    public TelNumero:string
    public DocNumero:string
    public DocTipo:string
    public Email:string
    public MercadoPagoId:string
    public Foto:string
    public Actualiza:boolean
    public Clientes:Array<Cliente>
    public Tarjetas:Array<Tarjeta>
}
export class Cliente{
    public ClienteId:number
    public Nombre:string
}
export class Tarjeta{
    public Id:number
    public Bin:string
    public Nombre:string
    public PaymentMethodId:string
    public PaymentMethodType:string
    public UltimosCuatroDigitos:string
    public CapturaDiferida:string
    public Importe:string
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
    public EstadoId:number
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
    public Calificado:boolean
    public DescuentoEfectivo:number
}

export class CalculoDeViaje
{
    public ClienteId:number
    public PosicionOrigen:string
    public PosicionDestino:string
    public Km:number
    public TipoMovilId:number
    public Regreso:boolean
}

export class TarifaCalculada
{
    public TarifaId:number
    public TarifaNombre:string
    public Importe:string
    public Espera:string
    public DescuentoEfectivo:number
}

export class Chofer
{
    public ChoferId:number
    public Nombre:string
    public Vehiculo:string
    public CalificacionChofer:number
    public CalificacionMovil:number
    public UltimaPosicion:string
    public Distancia:string
    public Telefono:string
    public FotoMovil:string
    public FotoChofer:string
}

export class Direccion {
    public Cantidad:number
    public Direccion:string
    public Posicion:string
}
