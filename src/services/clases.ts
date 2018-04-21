export class Usuario {

    public UsuarioId:number 
    public ClienteId:number
    public ClienteNombre:string 
    public Nombre:string
    public Telefono:string
    public Email:string
    public Password:string
    public RepPassword:string
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
export class Posicion {

    public movid:number
    public time:number
    public latitude:number
    public longitude:number
    public accuracy:number
}
export class Intermedio {
        public Direccion:string
        public Posicion:string
    }

export class Viaje
    {
        public Reserva:number
        public FechaHora:string
        public Cliente:string
        public Pasajero:string
        public Telefono:string
        public Email:string
        public Origen:string
        public OrigenPosicion:string
        public Referencias:string
        public Destino:string
        public DestinoPosicion:string
        public Intermedios:Array<Intermedio>
        public Estado:string
        public EstadoId:number
        public FormaPago:string
        public FormaPagoId:number
        public Regreso:boolean
        public Importante:boolean
        public SolicitaVoucher:boolean
        public TarifaId:number
        public TarifaNombre:string
        public Km:number
        public ImporteKm:string
        public Espera:number
        public ImporteEspera:string
        public Estacionamiento:string
        public Peajes:string
        public Total:string
        public AtributoFacturacion:string
        public Atributo1:string
        public Atributo2:string
        public Atributo3:string
        public NombreAtributoFacturacion:string
        public NombreAtributo1:string
        public NombreAtributo2:string
        public NombreAtributo3:string
        public Observaciones:string

    }

    export class CierreDeViaje
    {
        public Reserva:number
        public TarifaId:number
        public TarifaNombre:string
        public Km:number
        public ImporteKm:string
        public Espera:number
        public ImporteEspera:string
        public Estacionamiento:string
        public Peajes:string
        public Total:string
        public Coeficiente:number
    }

    export class EstadisticaMensual
    {
        public Mes:string
        public Cantidad:number
        public TotalFacturado:string
    }

    export class EstadisticaDiaria
    {
        public Dia:string
        public Cantidad:number
        public TotalFacturado:string
    }

    export class EstadisticaViaje
    {
        public Reserva:number
        public Hora:string
        public Cliente:string
        public FormaDePago:string
        public TotalFacturado:string
    }