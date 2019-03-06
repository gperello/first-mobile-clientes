webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MercadoPagoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_services__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MercadoPagoService = /** @class */ (function () {
    function MercadoPagoService(service) {
        this.service = service;
        this.Mensajes = {
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
        this.User = this.service.UserData();
        Mercadopago.setPublishableKey("APP_USR-986d3038-f80d-43d9-a548-52aff5957ab6");
    }
    //FIN DE TIPO DE DOCUMENTO
    MercadoPagoService.prototype.CrearTarjeta = function (form, success) {
        var _this = this;
        return new Promise(function (resolve) {
            try {
                Mercadopago.createToken(form, function (status, response) {
                    resolve(_this.GuardarTarjeta(status, response, success));
                });
                Mercadopago.clearSession();
            }
            catch (ex) {
                _this.service.showAlert("error", ex);
                Mercadopago.clearSession();
            }
        });
    };
    ;
    MercadoPagoService.prototype.GenerarToken = function (form, viaje, codigo, tarjeta, success) {
        var _this = this;
        return new Promise(function (resolve) {
            try {
                Mercadopago.createToken(form, function (status, response) {
                    resolve(_this.EnviarPago(status, response, viaje, codigo, tarjeta, success));
                });
                Mercadopago.clearSession();
            }
            catch (ex) {
                _this.service.showAlert("error", ex);
                Mercadopago.clearSession();
            }
        });
    };
    ;
    //INICIO DE ENVIO DE PAGO AL SERVIDOR
    MercadoPagoService.prototype.EnviarPago = function (status, response, viaje, codigo, tarjeta, success) {
        if (status != 200 && status != 201) {
            var mensaje = this.Mensajes[response.cause[0].code];
            if (!mensaje)
                mensaje = "Por favor verifique los datos ingresados.";
            this.service.showAlert("error", "Datos de tarjeta invalidos");
            Mercadopago.clearSession();
        }
        else {
            if (!this.ValidarFechaPago(viaje.FechaHora))
                tarjeta.CapturaDiferida = 'not-supported';
            if (tarjeta.PaymentMethodId == 'cmr')
                tarjeta.CapturaDiferida = 'not-supported';
            this.service.EnviarPago(viaje, tarjeta, response, codigo, success);
            Mercadopago.clearSession();
        }
    };
    ;
    //FIN DE ENVIO DE PAGO AL SERVIDOR
    MercadoPagoService.prototype.EliminarTarjeta = function (id, success) {
        this.service.EliminarTarjetas(id, success);
        Mercadopago.clearSession();
    };
    ;
    MercadoPagoService.prototype.GuardarTarjeta = function (status, response, success) {
        if (status != 200 && status != 201) {
            this.service.showAlert("error", "Datos de tarjeta invalidos");
            Mercadopago.clearSession();
        }
        else {
            this.service.GuardarTarjetas(response.id, success);
            Mercadopago.clearSession();
        }
    };
    ;
    MercadoPagoService.prototype.ValidarFechaPago = function (fechacliente) {
        return __WEBPACK_IMPORTED_MODULE_2_moment__().add(3, 'days') > __WEBPACK_IMPORTED_MODULE_2_moment__(fechacliente, "DD/MM/YYYY HH:mm");
    };
    MercadoPagoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__custom_services__["a" /* CustomServices */]])
    ], MercadoPagoService);
    return MercadoPagoService;
}());

//# sourceMappingURL=mercadopago.service.js.map

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_service__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_clases__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__FcmProvider__ = __webpack_require__(370);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CustomServices = /** @class */ (function (_super) {
    __extends(CustomServices, _super);
    function CustomServices(events, http, alert, loadingService, toastCtrl, fb, fcm) {
        var _this = _super.call(this, http, alert, loadingService, toastCtrl) || this;
        _this.events = events;
        _this.http = http;
        _this.alert = alert;
        _this.loadingService = loadingService;
        _this.toastCtrl = toastCtrl;
        _this.fb = fb;
        _this.fcm = fcm;
        return _this;
    }
    //HOME
    //LOGIN
    CustomServices.prototype.Login = function (email, nombre, telefono, foto, onsucess, onerror) {
        var _this = this;
        this.ExecutePostService(this.LOGIN, {
            Nombre: nombre,
            Email: email,
            Telefono: telefono,
            Foto: foto,
            Actualiza: false,
        }, function (data) {
            localStorage.setItem('datos_de_cliente', JSON.stringify(data.User));
            localStorage.setItem('token_de_cliente', data.UserToken);
            //this.presentToast("token");
            _this.events.publish('username:changed', data.User);
            _this.fcm.getToken(function (token) {
                _this.ExecutePostService(_this.REGISTRAR_FCM, {
                    UsuarioId: _this.UserData().UsuarioId,
                    RegistrationId: token
                });
            });
            if (onsucess != null)
                onsucess();
        }, function (error) {
            if (onerror != null)
                onerror(error);
        });
    };
    CustomServices.prototype.Logout = function (onsuccess) {
        var _this = this;
        this.ExecuteGetService(this.LOGOUT, [localStorage.getItem("token_de_usuario")], function (data) {
            localStorage.removeItem('datos_de_cliente');
            localStorage.removeItem('token_de_cliente');
            _this.fb.auth.signOut().then(function (value) {
                onsuccess(data);
            });
        });
    };
    CustomServices.prototype.Register = function (user, onsuccess) {
        var _this = this;
        this.ExecutePostService(this.REGISTRAR_USUARIO, user, function (data) {
            localStorage.setItem('datos_de_cliente', JSON.stringify(data.User));
            localStorage.setItem('token_de_cliente', data.UserToken);
            _this.events.publish('username:changed', _this.UserData());
            if (onsuccess)
                onsuccess(data);
        }, function (message) {
            _this.presentToast(message);
        });
    };
    CustomServices.prototype.GenerateCode = function (email, onsuccess) {
        var _this = this;
        this.ExecuteGetService(this.GENERAR_CODIGO, [email], function (data) {
            onsuccess(data);
        }, function (message) {
            _this.presentToast(message);
        });
    };
    CustomServices.prototype.ChangePassword = function (code, password, onsuccess) {
        var _this = this;
        this.ExecuteGetService(this.CAMBIAR_PASSWORD, [code, password], function (data) {
            onsuccess(data);
        }, function (message) {
            _this.presentToast(message);
        });
    };
    CustomServices.prototype.SendCode = function (code, telefono, onsuccess) {
        var _this = this;
        this.ExecuteGetService(this.ENVIAR_CODIGO, [code, telefono], function (data) {
            onsuccess(data);
        }, function (message) {
            _this.presentToast(message);
        });
    };
    //REGISTRATION FCM
    CustomServices.prototype.RegistracionFcm = function () {
        var _this = this;
        this.fcm.getToken(function (token) {
            _this.ExecutePostService(_this.REGISTRAR_FCM, {
                UsuarioId: _this.UserData().UsuarioId,
                RegistrationId: token
            });
        });
    };
    //CALCULO DE TARIFA
    CustomServices.prototype.CalcularTarifa = function (viaje, onsuccess) {
        var params = new __WEBPACK_IMPORTED_MODULE_4__models_clases__["a" /* CalculoDeViaje */]();
        params.ClienteId = viaje.ClienteId;
        params.Km = viaje.Km;
        params.PosicionDestino = viaje.OrigenPosicion;
        params.PosicionOrigen = viaje.DestinoPosicion;
        params.Regreso = viaje.Regreso;
        params.TipoMovilId = viaje.TipoMovilId;
        this.ExecutePostService(this.CALCULAR_TARIFA, params, onsuccess);
    };
    //RESERVA
    CustomServices.prototype.Reservar = function (viaje, onsuccess) {
        this.ExecutePostService(this.SAVE_VIAJE, viaje, onsuccess);
    };
    //GET VIAJE EN CURSO
    CustomServices.prototype.GetNumeroViaje = function (onsuccess) {
        this.ExecuteGetService(this.GET_NUMERO_VIAJE, null, onsuccess);
    };
    CustomServices.prototype.GetViajes = function (onsuccess) {
        this.ExecuteGetService(this.GET_VIAJES, [this.UserData().UsuarioId], onsuccess);
    };
    CustomServices.prototype.GetViaje = function (reserva, onsuccess) {
        this.ExecuteGetService(this.GET_VIAJE, [reserva], onsuccess);
    };
    //TARJETAS
    CustomServices.prototype.GuardarTarjetas = function (token, onsuccess) {
        this.ExecuteGetService(this.GUARDAR_TARJETA, [token, this.UserData().MercadoPagoId], onsuccess);
    };
    CustomServices.prototype.EliminarTarjetas = function (id, onsuccess) {
        this.ExecuteGetService(this.ELIMINAR_TARJETA, [id, this.UserData().MercadoPagoId], onsuccess);
    };
    CustomServices.prototype.EnviarPago = function (viaje, tarjeta, response, codigo, success) {
        this.ExecutePostService(this.GUARDAR_PAGO, {
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
    };
    CustomServices.prototype.ParceNumber = function (value) {
        return Number(value.replace('$ ', '').replace('.', '').replace(',', '.'));
    };
    ;
    CustomServices.prototype.ValidarUsuario = function () {
        if (this.UserData() == null)
            return false;
        if (this.UserData().Nombre == null || this.UserData().Nombre.length == 0)
            return false;
        if (this.UserData().Apellido == null || this.UserData().Apellido.length == 0)
            return false;
        if (this.UserData().DocNumero == null || this.UserData().DocNumero.length == 0)
            return false;
        if (this.UserData().DocTipo == null || this.UserData().DocTipo.length == 0)
            return false;
        if (this.UserData().Email == null || this.UserData().Email.length == 0)
            return false;
        if (this.UserData().TelCodigo == null || this.UserData().TelCodigo.length == 0)
            return false;
        if (this.UserData().TelPrefijo == null || this.UserData().TelPrefijo.length == 0)
            return false;
        if (this.UserData().TelNumero == null || this.UserData().TelNumero.length == 0)
            return false;
        return true;
    };
    CustomServices.prototype.ValidarTarjetas = function () {
        return this.UserData() != null && this.UserData().Tarjetas != null && this.UserData().Tarjetas.length > 0;
    };
    CustomServices.prototype.ValidarClientes = function () {
        return this.UserData() != null && this.UserData().Clientes != null && this.UserData().Clientes.length > 0;
    };
    //CANCELAR VIAJE
    CustomServices.prototype.CancelarViaje = function (reserva, onsuccess) {
        this.ExecuteGetService(this.CANCELAR_VIAJE, [reserva, this.UserData().UsuarioId], onsuccess);
    };
    //CALIFICAR VIAJE
    CustomServices.prototype.CalificarViaje = function (calificacionchofer, calificacionmovil, reserva, onsuccess) {
        this.ExecuteGetService(this.CALIFICAR_VIAJE, [reserva, this.UserData().UsuarioId, calificacionchofer, calificacionmovil], onsuccess);
    };
    //ASOCIAR CLIENTE
    CustomServices.prototype.AsociarCliente = function (cuit, clave, usuario, onsuccess) {
        this.ExecuteGetService(this.ASOCIAR_CLIENTE, [usuario, cuit, clave], onsuccess);
    };
    //VER DISPONIBILIDAD
    CustomServices.prototype.ObtenerEspera = function (posicion, onsuccess) {
        this.ExecutePostService(this.OBTENER_ESPERA, { Posicion: posicion }, onsuccess);
    };
    CustomServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__FcmProvider__["a" /* FcmProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__FcmProvider__["a" /* FcmProvider */]) === "function" && _g || Object])
    ], CustomServices);
    return CustomServices;
    var _a, _b, _c, _d, _e, _f, _g;
}(__WEBPACK_IMPORTED_MODULE_0__base_service__["a" /* BaseService */]));

//# sourceMappingURL=custom.services.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConductorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the DriverPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ConductorPage = /** @class */ (function () {
    function ConductorPage(nav, params, events) {
        this.nav = nav;
        this.params = params;
        this.events = events;
        this.estilomovil = "";
        this.Chofer = this.params.data.Chofer;
        this.estilomovil = "url(" + this.Chofer.FotoMovil + ")";
    }
    ConductorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-conductor',template:/*ion-inline-start:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\conductor\conductor.html"*/'<!--\n\n  Generated template for the DriverPage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="first" >\n\n    <button  ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      <img src="assets/img/first-logo.png"/>\n\n    </ion-title>\n\n  </ion-navbar>\n\n  <ion-toolbar>\n\n    <ion-segment>\n\n      <h3>Datos del móvil y chofer</h3>\n\n    </ion-segment>\n\n</ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="driver-top dark-bg light" text-center [ngStyle]="{\'background-image\': estilomovil, \'background-repeat\': \'no-repeat\', \'background-position\': \'center top\' }">\n\n  </div>\n\n\n\n  <div class="driver-info rlt" text-center>\n\n\n\n    <div class="driver-picture" padding-bottom>\n\n      <img class="circle" [src]="Chofer.FotoChofer"/>\n\n    </div>\n\n\n\n    <h5 no-margin  color="first1">{{Chofer.Vehiculo}}</h5>\n\n    <h4 no-margin ion-text color="primary" >Conducido por {{Chofer.Nombre}}</h4>\n\n    <div>\n\n    </div> \n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col>\n\n          <div>Calificacion del vehiculo</div>\n\n          <ionic3-star-rating\n\n              activeIcon = "ios-star"\n\n              defaultIcon = "ios-star-outline"\n\n              activeColor = "#488aff" \n\n              defaultColor = "#f4f4f4"\n\n              readonly="false"\n\n              [rating]="Chofer.CalificacionMovil">\n\n          </ionic3-star-rating>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col>\n\n          <div>Calificación del chofer</div>\n\n          <ionic3-star-rating \n\n              activeIcon = "ios-star"\n\n              defaultIcon = "ios-star-outline"\n\n              activeColor = "#488aff" \n\n              defaultColor = "#f4f4f4"\n\n              readonly="true"\n\n              [rating]="Chofer.CalificacionChofer">\n\n          </ionic3-star-rating>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\conductor\conductor.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], ConductorPage);
    return ConductorPage;
}());

//# sourceMappingURL=conductor.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GoogleMapsService = /** @class */ (function () {
    function GoogleMapsService(platform) {
        this.platform = platform;
    }
    GoogleMapsService.prototype.Autocomplete = function (element, onchange) {
        element.addEventListener('keypress', function (e) {
            if (e.which !== 13) {
                return true;
            }
            var address = element.value;
            var geocoder = new google.maps.Geocoder;
            geocoder.geocode({ 'address': address, componentRestrictions: { country: 'ar' } }, function (results, status) {
                if (status === 'OK') {
                    var posicion = results[0].geometry.location.lng() + ' ' + results[0].geometry.location.lat();
                    var esdireccion = false;
                    var tipos = ['locality', 'political', 'street_address', 'intersection'];
                    for (var i in results[0].types) {
                        for (var j in tipos) {
                            if (tipos[j] == results[0].types[i]) {
                                esdireccion = true;
                                break;
                            }
                        }
                    }
                    var direccion = esdireccion ? results[0].formatted_address : address + ' [' + results[0].formatted_address + ']';
                    onchange(direccion, posicion, results[0].geometry.location.lat(), results[0].geometry.location.lng());
                }
            });
        });
        var token = new google.maps.places.AutocompleteSessionToken();
        element._autocomplete = new google.maps.places.Autocomplete(element, { fields: ['formatted_address', 'geometry'], types: ['geocode', 'establishment'], componentRestrictions: { country: 'ar' }, sessionToken: token });
        google.maps.event.addListener(element._autocomplete, 'place_changed', function () {
            var geocoder = new google.maps.Geocoder;
            geocoder.geocode({ 'address': element.value, componentRestrictions: { country: 'ar' } }, function (results, status) {
                if (status === 'OK') {
                    var posicion = results[0].geometry.location.lng() + ' ' + results[0].geometry.location.lat();
                    var direccion = element.value;
                    onchange(direccion, posicion, results[0].geometry.location.lat(), results[0].geometry.location.lng());
                }
            });
        });
    };
    ;
    GoogleMapsService.prototype.GetDireccion = function (posicion, onsuccess) {
        var geocoder = new google.maps.Geocoder;
        geocoder.geocode({ 'location': { lat: posicion.lat, lng: posicion.lng } }, function (results, status) {
            if (status === 'OK' && results[0]) {
                var posicion_1 = results[0].geometry.location.lng().toString() + ' ' + results[0].geometry.location.lat().toString();
                onsuccess(results[0].formatted_address, posicion_1, results[0].geometry.location.lat(), results[0].geometry.location.lng());
            }
        });
    };
    ;
    GoogleMapsService.prototype.GetPosicion = function (address, onsuccess) {
        var geocoder = new google.maps.Geocoder;
        geocoder.geocode({ 'address': address }, function (results, status) {
            if (status === 'OK' && results[0]) {
                var posicion = results[0].geometry.location.lng().toString() + ' ' + results[0].geometry.location.lat().toString();
                onsuccess(address, posicion, results[0].geometry.location.lat(), results[0].geometry.location.lng());
            }
        });
    };
    ;
    GoogleMapsService.prototype.GetByPlaceId = function (placeid, map, onsuccess) {
        var token = new google.maps.places.AutocompleteSessionToken();
        var placesService = new google.maps.places.PlacesService(map);
        placesService.getDetails({ fields: ["geometry", "formatted_address"], placeId: placeid, sessionToken: token }, function (place, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                map.setCenter(place.geometry.location);
                var latlng = { lat: place.geometry.location.lat(), lng: place.geometry.location.lng() };
                var posicion = place.geometry.location.lng().toString() + ' ' + place.geometry.location.lat().toString();
                onsuccess(place.formatted_address, posicion, latlng);
            }
        });
    };
    ;
    GoogleMapsService.prototype.GetTextoPosicion = function (posicion) {
        return posicion.lng.toString() + ' ' + posicion.lat.toString();
    };
    ;
    GoogleMapsService.prototype.GetPosicionTexto = function (texto) {
        var arr = texto.split(' ');
        return { lat: parseFloat(arr[1]), lng: parseFloat(arr[0]) };
    };
    ;
    GoogleMapsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], GoogleMapsService);
    return GoogleMapsService;
}());

//# sourceMappingURL=google.maps.service.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevaTarjetaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_clases__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_custom_services__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_mercadopago_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tarjetas_tarjetas__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the ProfilePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var NuevaTarjetaPage = /** @class */ (function () {
    function NuevaTarjetaPage(nav, params, service, mp, viewCtrl) {
        this.nav = nav;
        this.params = params;
        this.service = service;
        this.mp = mp;
        this.viewCtrl = viewCtrl;
        this.User = new __WEBPACK_IMPORTED_MODULE_2__models_clases__["d" /* Usuario */]();
        this.tipoDoc = "DNI";
        this.esModal = false;
        this.alertOptions = {
            title: 'Selección',
            subtitle: 'Seleccione una de las opciones'
        };
        this.esModal = this.params.data != null && this.params.data.esModal;
        this.User = this.service.UserData();
    }
    NuevaTarjetaPage.prototype.registrartarjeta = function () {
        var _this = this;
        var form = document.querySelector('#formcompleto');
        this.mp.CrearTarjeta(form, function (data) {
            _this.service.presentToast("Tarjeta creada correctamente.");
            var user = _this.service.UserData();
            user.Tarjetas = data;
            localStorage.setItem("datos_de_cliente", JSON.stringify(user));
            if (!_this.esModal)
                setTimeout(function () { _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__tarjetas_tarjetas__["a" /* TarjetasPage */]); }, 1000);
            else
                _this.viewCtrl.dismiss();
        });
    };
    NuevaTarjetaPage.prototype.volver = function () {
        this.viewCtrl.dismiss();
    };
    NuevaTarjetaPage.prototype.ocultarvolver = function () {
        return !this.esModal;
    };
    NuevaTarjetaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-nueva-tarjeta',template:/*ion-inline-start:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\nueva.tarjeta\nueva.tarjeta.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar color="first" >\n\n      <button  ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        <img src="assets/img/first-logo.png"/>\n\n      </ion-title>\n\n    </ion-navbar>\n\n    <ion-toolbar>\n\n      <ion-segment>\n\n        <h3 style="text-transform: uppercase;  margin: 0;  width: 100%;  text-align: center;font-size: 1.6rem;  font-weight: 500;">Nueva tarjeta</h3>\n\n      </ion-segment>\n\n  </ion-toolbar>\n\n  </ion-header>\n\n\n\n<ion-content padding class="profile">\n\n  <img src="https://imgmp.mlstatic.com/org-img/banners/ar/medios/468X60.jpg" title="MercadoPago - Medios de pago" alt="MercadoPago - Medios de pago"/>\n\n  <h3 style="text-transform: uppercase;  margin: 0;  width: 100%;  text-align: center;font-size: 1.6rem;  font-weight: 500;">Datos de la tarjeta</h3>\n\n  <form id="formcompleto" role="form">\n\n    <ion-list padding>\n\n      <ion-item>\n\n          <ion-label stacked>Nombres (tal cual está en la tarjeta)</ion-label>\n\n          <ion-input type="text"  data-checkout="cardholderName"></ion-input>\n\n      </ion-item>\n\n      <ion-label stacked style="color:#AAA">Documento</ion-label>\n\n      <ion-grid style="padding:0px">\n\n          <ion-row>\n\n              <ion-col col-5>\n\n                <input type="hidden" [ngModelOptions]="{standalone: true}" [(ngModel)]="tipoDoc" data-checkout="docType"/>\n\n                <ion-select [(selectOptions)]="alertOptions" [ngModelOptions]="{standalone: true}" [(ngModel)]="tipoDoc">\n\n                  <ion-option value="DNI">DNI</ion-option>\n\n                  <ion-option value="LC">LC</ion-option>\n\n                  <ion-option value="LE">LE</ion-option>\n\n                  <ion-option value="OTRO">Otro</ion-option>\n\n                </ion-select>\n\n                <hr/>\n\n              </ion-col>\n\n              <ion-col col-7>\n\n                <ion-input type="number" style="margin-top: 2px;" placeholder="Número" data-checkout="docNumber"></ion-input>\n\n                <hr/>\n\n              </ion-col>\n\n          </ion-row>\n\n      </ion-grid>\n\n      <ion-item>\n\n        <ion-label stacked>Número de tarjeta</ion-label>\n\n        <ion-input type="text" placeholder="XXXX-XXXX-XXXX-XXXX" [brmasker]="{mask:\'0000-0000-0000-0000\', type: \'num\', len:19}" data-checkout="cardNumber"></ion-input>\n\n      </ion-item>\n\n      <ion-grid style="padding:0px">\n\n        <ion-row>\n\n            <ion-col col-6>\n\n              <ion-label stacked style="color:#AAA">Mes</ion-label>\n\n              <ion-input type="number" data-checkout="cardExpirationMonth" placeholder="MM" [brmasker]="{mask:\'00\', type: \'num\', len:2}"></ion-input>\n\n              <hr/>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n              <ion-label stacked style="color:#AAA">Año</ion-label>\n\n              <ion-input type="number" data-checkout="cardExpirationYear" placeholder="AA" [brmasker]="{mask:\'00\', type: \'num\', len:2}"></ion-input>\n\n              <hr/>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n    <ion-grid style="padding:0px">\n\n        <ion-row>\n\n            <ion-col col-6>\n\n              <ion-label stacked style="color:#AAA">CVV</ion-label>\n\n              <ion-input type="number" data-checkout="securityCode" placeholder="XXXX" [brmasker]="{mask:\'0000\', type: \'num\', len:4}"></ion-input>\n\n              <hr/>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n  </ion-list>\n\n  </form>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n      <ion-segment>\n\n        <button  ion-button color="first1" block (click)="registrartarjeta()">REGISTRAR TARJETA</button>\n\n      </ion-segment>\n\n      <ion-segment>\n\n        <button  ion-button color="dark" [hidden]="ocultarvolver()" block (click)="volver()">VOLVER</button>\n\n      </ion-segment>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n\n\n'/*ion-inline-end:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\nueva.tarjeta\nueva.tarjeta.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_custom_services__["a" /* CustomServices */], __WEBPACK_IMPORTED_MODULE_4__services_mercadopago_service__["a" /* MercadoPagoService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], NuevaTarjetaPage);
    return NuevaTarjetaPage;
}());

//# sourceMappingURL=nueva.tarjeta.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_clases__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_custom_services__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
 Generated class for the RegisterPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var ClientePage = /** @class */ (function () {
    function ClientePage(nav, service, params, viewCtrl) {
        this.nav = nav;
        this.service = service;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.User = new __WEBPACK_IMPORTED_MODULE_3__models_clases__["d" /* Usuario */]();
        this.Cuit = "";
        this.Clave = "";
        this.esModal = false;
        this.User = this.service.UserData();
        this.esModal = this.params.data != null && this.params.data.esModal;
    }
    ClientePage.prototype.registrar = function () {
        var _this = this;
        if (this.validar()) {
            this.service.AsociarCliente(this.Cuit, this.Clave, this.User.UsuarioId, function (data) {
                _this.service.showAlert("Asociación correcta", "Ya puede hacer viajes a cuenta del cliente " + data.text, function () {
                    _this.User.Clientes.push({ ClienteId: parseInt(data.id), Nombre: data.text });
                    localStorage.setItem("datos_de_cliente", JSON.stringify(_this.User));
                    if (!_this.esModal)
                        setTimeout(function () { _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]); ; }, 1000);
                    else
                        _this.viewCtrl.dismiss();
                });
            });
        }
    };
    ClientePage.prototype.validar = function () {
        if (this.Cuit.length != 11) {
            this.service.presentToast("El CUIT ingresado no tiene el formato correcto (11 caracteres).");
            return false;
        }
        if (this.Clave.length < 3) {
            this.service.presentToast("La clave ingresada no es correcta.");
            return false;
        }
        return true;
    };
    ClientePage.prototype.volver = function () {
        this.viewCtrl.dismiss();
    };
    ClientePage.prototype.ocultarvolver = function () {
        return !this.esModal;
    };
    ClientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cliente',template:/*ion-inline-start:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\cliente\cliente.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="first" >\n\n    <button  ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      <img src="assets/img/first-logo.png"/>\n\n    </ion-title>\n\n  </ion-navbar>\n\n  <ion-toolbar>\n\n    <ion-segment>\n\n      <h3>Asociar cliente</h3>\n\n    </ion-segment>\n\n</ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="profile">\n\n  <p>Ingrese el CUIT y la clave proporcionada por la empresa a cuenta de la cual usted desea realizar viajes.</p>\n\n  <ion-list padding>\n\n    <ion-grid style="padding:0px">\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <ion-label style="margin: 13px;">CUIT</ion-label>\n\n          <hr/>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <ion-input type="number" data-checkout="securityCode"  [ngModelOptions]="{standalone: true}" [(ngModel)]="Cuit" [brmasker]="{mask:\'00000000000\', type: \'num\', len:11}"></ion-input>\n\n          <hr/>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n    <ion-grid style="padding:0px">\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <ion-label style="margin: 13px;">Clave</ion-label>\n\n          <hr/>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <ion-input type="number" data-checkout="securityCode"  [ngModelOptions]="{standalone: true}" [(ngModel)]="Clave" [brmasker]="{mask:\'000000\', type: \'num\', len:4}"></ion-input>\n\n          <hr/>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n\n<ion-toolbar>\n\n    <ion-segment>\n\n      <button  ion-button color="first1" block (click)="registrar()">ASOCIAR</button>\n\n    </ion-segment>\n\n    <ion-segment>\n\n      <button  ion-button color="dark" [hidden]="ocultarvolver()" block (click)="volver()">VOLVER</button>\n\n    </ion-segment>\n\n</ion-toolbar>\n\n</ion-footer>\n\n\n\n'/*ion-inline-end:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\cliente\cliente.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__services_custom_services__["a" /* CustomServices */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], ClientePage);
    return ClientePage;
}());

//# sourceMappingURL=cliente.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_clases__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_custom_services__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tarjetas_tarjetas__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the ProfilePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ProfilePage = /** @class */ (function () {
    function ProfilePage(nav, params, service) {
        this.nav = nav;
        this.params = params;
        this.service = service;
        this.User = new __WEBPACK_IMPORTED_MODULE_2__models_clases__["d" /* Usuario */]();
        this.alertOptions = {
            title: 'Selección',
            subtitle: 'Seleccione una de las opciones'
        };
        if (this.params.data && this.params.data.Mensaje)
            this.service.presentToast("Debe completar todos los datos personales para usar el sistema");
        this.User = this.service.UserData();
        this.User.Actualiza = true;
        if (this.User.DocTipo == null || this.User.DocTipo.length == 0)
            this.User.DocTipo = "DNI";
        if (this.User.TelCodigo == null || this.User.TelCodigo.length == 0)
            this.User.TelCodigo = "+54";
    }
    ProfilePage.prototype.guardar = function () {
        var _this = this;
        if (this.ValidarUsuario()) {
            this.service.Register(this.User, function () {
                _this.service.presentToast("Datos de usuario actualizados");
            });
        }
    };
    ProfilePage.prototype.registrartarjeta = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__tarjetas_tarjetas__["a" /* TarjetasPage */]);
    };
    ProfilePage.prototype.ValidarUsuario = function () {
        if (this.User.Nombre == null || this.User.Nombre.length == 0) {
            this.service.presentToast("No ingresaste tu nombre.");
            return false;
        }
        if (this.User.Apellido == null || this.User.Apellido.length == 0) {
            this.service.presentToast("No ingresaste tu apellido.");
            return false;
        }
        if (this.User.DocNumero == null || this.User.DocNumero.length == 0) {
            this.service.presentToast("No ingresaste tu número de documento.");
            return false;
        }
        if (this.User.DocTipo == null || this.User.DocTipo.length == 0) {
            this.service.presentToast("No ingresaste el tipo de documento.");
            return false;
        }
        if (this.User.Email == null || this.User.Email.length == 0) {
            this.service.presentToast("No ingresaste tu email.");
            return false;
        }
        if (this.User.TelCodigo == null || this.User.TelCodigo.length == 0) {
            this.service.presentToast("No ingresaste el código de país del teléfono.");
            return false;
        }
        if (this.User.TelPrefijo == null || this.User.TelPrefijo.length == 0) {
            this.service.presentToast("No ingresaste el prefijo del teléfono.");
            return false;
        }
        if (this.User.TelNumero == null || this.User.TelNumero.length == 0) {
            this.service.presentToast("No ingresaste el número de teléfono.");
            return false;
        }
        return true;
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\profile\profile.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar color="first" >\n\n      <button  ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        <img src="assets/img/first-logo.png"/>\n\n      </ion-title>\n\n    </ion-navbar>\n\n    <ion-toolbar>\n\n      <ion-segment>\n\n        <h3>Datos de usuario</h3>\n\n      </ion-segment>\n\n  </ion-toolbar>\n\n  </ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list padding>\n\n        <ion-item>\n\n            <ion-label stacked>Nombres</ion-label>\n\n            <ion-input type="text" [ngModelOptions]="{standalone: true}" [(ngModel)]="User.Nombre"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label stacked>Apellidos</ion-label>\n\n            <ion-input type="text" [ngModelOptions]="{standalone: true}" [(ngModel)]="User.Apellido"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label stacked>Email</ion-label>\n\n            <ion-input type="text" [ngModelOptions]="{standalone: true}" [(ngModel)]="User.Email"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-label stacked style="color:#AAA">Telefono (sin 0 en el prefijo ni 15 en el número)</ion-label>\n\n        <ion-grid style="padding:0px">\n\n            <ion-row>\n\n                <ion-col col-5>\n\n                  <ion-select [(selectOptions)]="alertOptions" [(ngModel)]="User.TelCodigo">\n\n                    <ion-option value="+93">AFG(+93)</ion-option>\n\n                    <ion-option value="+355">ALB(+355)</ion-option>\n\n                    <ion-option value="+49">DEU(+49)</ion-option>\n\n                    <ion-option value="+213">DZA(+213)</ion-option>\n\n                    <ion-option value="+376">AND(+376)</ion-option>\n\n                    <ion-option value="+244">AGO(+244)</ion-option>\n\n                    <ion-option value="+672">ATA(+672)</ion-option>\n\n                    <ion-option value="+599">ANT(+599)</ion-option>\n\n                    <ion-option value="+966">SAU(+966)</ion-option>\n\n                    <ion-option value="+54">ARG(+54)</ion-option>\n\n                    <ion-option value="+374">ARM(+374)</ion-option>\n\n                    <ion-option value="+297">ABW(+297)</ion-option>\n\n                    <ion-option value="+61">AUS(+61)</ion-option>\n\n                    <ion-option value="+43">AUT(+43)</ion-option>\n\n                    <ion-option value="+994">AZE(+994)</ion-option>\n\n                    <ion-option value="+32">BEL(+32)</ion-option>\n\n                    <ion-option value="+973">BHR(+973)</ion-option>\n\n                    <ion-option value="+880">BGD(+880)</ion-option>\n\n                    <ion-option value="+501">BLZ(+501)</ion-option>\n\n                    <ion-option value="+229">BEN(+229)</ion-option>\n\n                    <ion-option value="+975">BTN(+975)</ion-option>\n\n                    <ion-option value="+375">BLR(+375)</ion-option>\n\n                    <ion-option value="+95">MMR(+95)</ion-option>\n\n                    <ion-option value="+591">BOL(+591)</ion-option>\n\n                    <ion-option value="+387">BIH(+387)</ion-option>\n\n                    <ion-option value="+267">BWA(+267)</ion-option>\n\n                    <ion-option value="+55">BRA(+55)</ion-option>\n\n                    <ion-option value="+673">BRN(+673)</ion-option>\n\n                    <ion-option value="+359">BGR(+359)</ion-option>\n\n                    <ion-option value="+226">BFA(+226)</ion-option>\n\n                    <ion-option value="+257">BDI(+257)</ion-option>\n\n                    <ion-option value="+238">CPV(+238)</ion-option>\n\n                    <ion-option value="+855">KHM(+855)</ion-option>\n\n                    <ion-option value="+237">CMR(+237)</ion-option>\n\n                    <ion-option value="+1">CAN(+1) </ion-option>\n\n                    <ion-option value="+235">TCD(+235)</ion-option>\n\n                    <ion-option value="+56">CHL(+56)</ion-option>\n\n                    <ion-option value="+86">CHN(+86)</ion-option>\n\n                    <ion-option value="+357">CYP(+357)</ion-option>\n\n                    <ion-option value="+39">VAT(+39)</ion-option>\n\n                    <ion-option value="+57">COL(+57)</ion-option>\n\n                    <ion-option value="+269">COM(+269)</ion-option>\n\n                    <ion-option value="+242">COG(+242)</ion-option>\n\n                    <ion-option value="+243">COD(+243)</ion-option>\n\n                    <ion-option value="+850">PRK(+850)</ion-option>\n\n                    <ion-option value="+82">KOR(+82)</ion-option>\n\n                    <ion-option value="+225">CIV(+225)</ion-option>\n\n                    <ion-option value="+506">CRI(+506)</ion-option>\n\n                    <ion-option value="+385">HRV(+385)</ion-option>\n\n                    <ion-option value="+53">CUB(+53)</ion-option>\n\n                    <ion-option value="+45">DNK(+45)</ion-option>\n\n                    <ion-option value="+593">ECU(+593)</ion-option>\n\n                    <ion-option value="+20">EGY(+20)</ion-option>\n\n                    <ion-option value="+503">SLV(+503)</ion-option>\n\n                    <ion-option value="+971">ARE(+971)</ion-option>\n\n                    <ion-option value="+291">ERI(+291)</ion-option>\n\n                    <ion-option value="+421">SVK(+421)</ion-option>\n\n                    <ion-option value="+386">SVN(+386)</ion-option>\n\n                    <ion-option value="+34">ESP(+34)</ion-option>\n\n                    <ion-option value="+1">USA(+1) </ion-option>\n\n                    <ion-option value="+372">EST(+372)</ion-option>\n\n                    <ion-option value="+251">ETH(+251)</ion-option>\n\n                    <ion-option value="+63">PHL(+63)</ion-option>\n\n                    <ion-option value="+358">FIN(+358)</ion-option>\n\n                    <ion-option value="+679">FJI(+679)</ion-option>\n\n                    <ion-option value="+33">FRA(+33)</ion-option>\n\n                    <ion-option value="+241">GAB(+241)</ion-option>\n\n                    <ion-option value="+220">GMB(+220)</ion-option>\n\n                    <ion-option value="+995">GEO(+995)</ion-option>\n\n                    <ion-option value="+233">GHA(+233)</ion-option>\n\n                    <ion-option value="+350">GIB(+350)</ion-option>\n\n                    <ion-option value="+30">GRC(+30)</ion-option>\n\n                    <ion-option value="+299">GRL(+299)</ion-option>\n\n                    <ion-option value="+502">GTM(+502)</ion-option>\n\n                    <ion-option value="+224">GIN(+224)</ion-option>\n\n                    <ion-option value="+240">GNQ(+240)</ion-option>\n\n                    <ion-option value="+245">GNB(+245)</ion-option>\n\n                    <ion-option value="+592">GUY(+592)</ion-option>\n\n                    <ion-option value="+509">HTI(+509)</ion-option>\n\n                    <ion-option value="+504">HND(+504)</ion-option>\n\n                    <ion-option value="+852">HKG(+852)</ion-option>\n\n                    <ion-option value="+36">HUN(+36)</ion-option>\n\n                    <ion-option value="+91">IND(+91)</ion-option>\n\n                    <ion-option value="+62">IDN(+62)</ion-option>\n\n                    <ion-option value="+98">IRN(+98)</ion-option>\n\n                    <ion-option value="+964">IRQ(+964)</ion-option>\n\n                    <ion-option value="+353">IRL(+353)</ion-option>\n\n                    <ion-option value="+44">IMN(+44)</ion-option>\n\n                    <ion-option value="+61">CXR(+61)</ion-option>\n\n                    <ion-option value="+354">ISL(+354)</ion-option>\n\n                    <ion-option value="+61">CCK(+61)</ion-option>\n\n                    <ion-option value="+682">COK(+682)</ion-option>\n\n                    <ion-option value="+298">FRO(+298)</ion-option>\n\n                    <ion-option value="+960">MDV(+960)</ion-option>\n\n                    <ion-option value="+500">FLK(+500)</ion-option>\n\n                    <ion-option value="+692">MHL(+692)</ion-option>\n\n                    <ion-option value="+870">PCN(+870)</ion-option>\n\n                    <ion-option value="+677">SLB(+677)</ion-option>\n\n                    <ion-option value="+972">ISR(+972)</ion-option>\n\n                    <ion-option value="+39">ITA(+39)</ion-option>\n\n                    <ion-option value="+81">JPN(+81)</ion-option>\n\n                    <ion-option value="+962">JOR(+962)</ion-option>\n\n                    <ion-option value="+7">KAZ(+7) </ion-option>\n\n                    <ion-option value="+254">KEN(+254)</ion-option>\n\n                    <ion-option value="+996">KGZ(+996)</ion-option>\n\n                    <ion-option value="+686">KIR(+686)</ion-option>\n\n                    <ion-option value="+965">KWT(+965)</ion-option>\n\n                    <ion-option value="+961">LBN(+961)</ion-option>\n\n                    <ion-option value="+856">LAO(+856)</ion-option>\n\n                    <ion-option value="+266">LSO(+266)</ion-option>\n\n                    <ion-option value="+371">LVA(+371)</ion-option>\n\n                    <ion-option value="+231">LBR(+231)</ion-option>\n\n                    <ion-option value="+218">LBY(+218)</ion-option>\n\n                    <ion-option value="+423">LIE(+423)</ion-option>\n\n                    <ion-option value="+370">LTU(+370)</ion-option>\n\n                    <ion-option value="+352">LUX(+352)</ion-option>\n\n                    <ion-option value="+52">MEX(+52)</ion-option>\n\n                    <ion-option value="+377">MCO(+377)</ion-option>\n\n                    <ion-option value="+853">MAC(+853)</ion-option>\n\n                    <ion-option value="+389">MKD(+389)</ion-option>\n\n                    <ion-option value="+261">MDG(+261)</ion-option>\n\n                    <ion-option value="+60">MYS(+60)</ion-option>\n\n                    <ion-option value="+265">MWI(+265)</ion-option>\n\n                    <ion-option value="+223">MLI(+223)</ion-option>\n\n                    <ion-option value="+356">MLT(+356)</ion-option>\n\n                    <ion-option value="+212">MAR(+212)</ion-option>\n\n                    <ion-option value="+230">MUS(+230)</ion-option>\n\n                    <ion-option value="+222">MRT(+222)</ion-option>\n\n                    <ion-option value="+262">MYT(+262)</ion-option>\n\n                    <ion-option value="+691">FSM(+691)</ion-option>\n\n                    <ion-option value="+373">MDA(+373)</ion-option>\n\n                    <ion-option value="+976">MNG(+976)</ion-option>\n\n                    <ion-option value="+382">MNE(+382)</ion-option>\n\n                    <ion-option value="+258">MOZ(+258)</ion-option>\n\n                    <ion-option value="+264">NAM(+264)</ion-option>\n\n                    <ion-option value="+674">NRU(+674)</ion-option>\n\n                    <ion-option value="+977">NPL(+977)</ion-option>\n\n                    <ion-option value="+505">NIC(+505)</ion-option>\n\n                    <ion-option value="+227">NER(+227)</ion-option>\n\n                    <ion-option value="+234">NGA(+234)</ion-option>\n\n                    <ion-option value="+683">NIU(+683)</ion-option>\n\n                    <ion-option value="+47">NOR(+47)</ion-option>\n\n                    <ion-option value="+687">NCL(+687)</ion-option>\n\n                    <ion-option value="+64">NZL(+64)</ion-option>\n\n                    <ion-option value="+968">OMN(+968)</ion-option>\n\n                    <ion-option value="+31">NLD(+31)</ion-option>\n\n                    <ion-option value="+92">PAK(+92)</ion-option>\n\n                    <ion-option value="+680">PLW(+680)</ion-option>\n\n                    <ion-option value="+507">PAN(+507)</ion-option>\n\n                    <ion-option value="+675">PNG(+675)</ion-option>\n\n                    <ion-option value="+595">PRY(+595)</ion-option>\n\n                    <ion-option value="+51">PER(+51)</ion-option>\n\n                    <ion-option value="+689">PYF(+689)</ion-option>\n\n                    <ion-option value="+48">POL(+48)</ion-option>\n\n                    <ion-option value="+351">PRT(+351)</ion-option>\n\n                    <ion-option value="+1">PRI(+1) </ion-option>\n\n                    <ion-option value="+974">QAT(+974)</ion-option>\n\n                    <ion-option value="+44">GBR(+44)</ion-option>\n\n                    <ion-option value="+236">CAF(+236)</ion-option>\n\n                    <ion-option value="+420">CZE(+420)</ion-option>\n\n                    <ion-option value="+250">RWA(+250)</ion-option>\n\n                    <ion-option value="+40">ROU(+40)</ion-option>\n\n                    <ion-option value="+7">RUS(+7) </ion-option>\n\n                    <ion-option value="+685">WSM(+685)</ion-option>\n\n                    <ion-option value="+590">BLM(+590)</ion-option>\n\n                    <ion-option value="+378">SMR(+378)</ion-option>\n\n                    <ion-option value="+508">SPM(+508)</ion-option>\n\n                    <ion-option value="+290">SHN(+290)</ion-option>\n\n                    <ion-option value="+239">STP(+239)</ion-option>\n\n                    <ion-option value="+221">SEN(+221)</ion-option>\n\n                    <ion-option value="+248">SYC(+248)</ion-option>\n\n                    <ion-option value="+232">SLE(+232)</ion-option>\n\n                    <ion-option value="+65">SGP(+65)</ion-option>\n\n                    <ion-option value="+963">SYR(+963)</ion-option>\n\n                    <ion-option value="+252">SOM(+252)</ion-option>\n\n                    <ion-option value="+94">LKA(+94)</ion-option>\n\n                    <ion-option value="+27">ZAF(+27)</ion-option>\n\n                    <ion-option value="+249">SDN(+249)</ion-option>\n\n                    <ion-option value="+46">SWE(+46)</ion-option>\n\n                    <ion-option value="+41">CHE(+41)</ion-option>\n\n                    <ion-option value="+597">SUR(+597)</ion-option>\n\n                    <ion-option value="+268">SWZ(+268)</ion-option>\n\n                    <ion-option value="+992">TJK(+992)</ion-option>\n\n                    <ion-option value="+66">THA(+66)</ion-option>\n\n                    <ion-option value="+886">TWN(+886)</ion-option>\n\n                    <ion-option value="+255">TZA(+255)</ion-option>\n\n                    <ion-option value="+670">TLS(+670)</ion-option>\n\n                    <ion-option value="+228">TGO(+228)</ion-option>\n\n                    <ion-option value="+690">TKL(+690)</ion-option>\n\n                    <ion-option value="+676">TON(+676)</ion-option>\n\n                    <ion-option value="+216">TUN(+216)</ion-option>\n\n                    <ion-option value="+993">TKM(+993)</ion-option>\n\n                    <ion-option value="+90">TUR(+90)</ion-option>\n\n                    <ion-option value="+688">TUV(+688)</ion-option>\n\n                    <ion-option value="+256">UGA(+256)</ion-option>\n\n                    <ion-option value="+598">URY(+598)</ion-option>\n\n                    <ion-option value="+998">UZB(+998)</ion-option>\n\n                    <ion-option value="+678">VUT(+678)</ion-option>\n\n                    <ion-option value="+58">VEN(+58)</ion-option>\n\n                    <ion-option value="+84">VNM(+84)</ion-option>\n\n                    <ion-option value="+681">WLF(+681)</ion-option>\n\n                    <ion-option value="+967">YEM(+967)</ion-option>\n\n                    <ion-option value="+253">DJI(+253)</ion-option>\n\n                    <ion-option value="+260">ZMB(+260)</ion-option>\n\n                    <ion-option value="+263">ZWE(+263)</ion-option>              \n\n                  </ion-select>\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                  <ion-input type="number" [ngModelOptions]="{standalone: true}" placeholder="Pref." [(ngModel)]="User.TelPrefijo"></ion-input>\n\n                </ion-col>\n\n                <ion-col col-4>\n\n                  <ion-input type="number" [ngModelOptions]="{standalone: true}" placeholder="Número" [(ngModel)]="User.TelNumero"></ion-input>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n        <hr/>\n\n        <ion-label stacked style="color:#AAA">Documento</ion-label>\n\n        <ion-grid style="padding:0px">\n\n            <ion-row>\n\n                <ion-col col-5>\n\n                  <ion-select [(selectOptions)]="alertOptions" [(ngModel)]="User.DocTipo">\n\n                    <ion-option value="DNI">DNI</ion-option>\n\n                    <ion-option value="LC">LC</ion-option>\n\n                    <ion-option value="LE">LE</ion-option>\n\n                    <ion-option value="OTRO">Otro</ion-option>\n\n                  </ion-select>\n\n                </ion-col>\n\n                <ion-col col-7>\n\n                  <ion-input type="number" [ngModelOptions]="{standalone: true}" placeholder="Número" [(ngModel)]="User.DocNumero"></ion-input>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n        <hr/>\n\n   </ion-list>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n    <ion-toolbar>\n\n        <ion-segment>\n\n          <button  ion-button color="first1" block (click)="guardar()">GUARDAR DATOS</button>\n\n        </ion-segment>\n\n        <ion-segment>\n\n          <button  ion-button color="first1" block (click)="registrartarjeta()">REGISTRAR TARJETA</button>\n\n        </ion-segment>\n\n    </ion-toolbar>\n\n  </ion-footer>\n\n  \n\n'/*ion-inline-end:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_custom_services__["a" /* CustomServices */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 184;

/***/ }),

/***/ 228:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 228;

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Usuario; });
/* unused harmony export Cliente */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Tarjeta; });
/* unused harmony export ViajeList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Viaje; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculoDeViaje; });
/* unused harmony export TarifaCalculada */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Chofer; });
/* unused harmony export Direccion */
var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    return Usuario;
}());

var Cliente = /** @class */ (function () {
    function Cliente() {
    }
    return Cliente;
}());

var Tarjeta = /** @class */ (function () {
    function Tarjeta() {
    }
    return Tarjeta;
}());

var ViajeList = /** @class */ (function () {
    function ViajeList() {
    }
    return ViajeList;
}());

var Viaje = /** @class */ (function () {
    function Viaje() {
    }
    return Viaje;
}());

var CalculoDeViaje = /** @class */ (function () {
    function CalculoDeViaje() {
    }
    return CalculoDeViaje;
}());

var TarifaCalculada = /** @class */ (function () {
    function TarifaCalculada() {
    }
    return TarifaCalculada;
}());

var Chofer = /** @class */ (function () {
    function Chofer() {
    }
    return Chofer;
}());

var Direccion = /** @class */ (function () {
    function Direccion() {
    }
    return Direccion;
}());

//# sourceMappingURL=clases.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_clases__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_custom_services__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cambiar_clave_cambiar_clave__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
 Generated class for the RegisterPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(nav, service) {
        this.nav = nav;
        this.service = service;
        this.User = new __WEBPACK_IMPORTED_MODULE_3__models_clases__["d" /* Usuario */]();
        this.alertOptions = {
            title: 'Selección',
            subtitle: 'Seleccione una de las opciones'
        };
        this.User.TelCodigo = "+54";
        this.User.DocTipo = "DNI";
        this.User.Actualiza = true;
    }
    RegisterPage.prototype.register = function () {
        if (this.validar()) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__cambiar_clave_cambiar_clave__["a" /* CambiarClavePage */], { User: this.User });
        }
    };
    RegisterPage.prototype.login = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.validar = function () {
        this.User.Email = this.User.Email.trim();
        if (this.User.Nombre.length < 6 || this.User.Nombre.length > 100) {
            this.service.presentToast("El email ingresado no tiene el formato correcto (entre 6 y 100 caracteres).");
            return false;
        }
        if (this.User.Email.length < 6 || this.User.Email.length > 100) {
            this.service.presentToast("El email ingresado no tiene el formato correcto (entre 6 y 100 caracteres).");
            return false;
        }
        var re = new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        if (!re.test(this.User.Email)) {
            this.service.presentToast("El email ingresado no tiene el formato correcto.");
            return false;
        }
        if (this.User.TelPrefijo.length < 2 || this.User.TelPrefijo.length > 5) {
            this.service.presentToast("El prefijo del teléfono ingresado no tiene el formato correcto.");
            return false;
        }
        if (this.User.TelNumero.length < 6 || this.User.TelNumero.length > 10) {
            this.service.presentToast("El número de teléfono ingresado no tiene el formato correcto.");
            return false;
        }
        return true;
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\register\register.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content class="auth-bg">\n\n  <div class="auth-content">\n\n\n\n    <div class="light-bg">\n\n      <!-- Logo -->\n\n      <div padding text-center>\n\n        <p style="margin:0">\n\n          <img src="assets/img/first-logo.png"/>\n\n        </p>\n\n        <p ion-text color="dark" style="font-weight: bold" >Servicio de transporte de personas</p>\n\n        <p ion-text color="first1" style="margin:0">reigistro de usuario</p>\n\n      </div>\n\n\n\n      <!-- Login form -->\n\n      <ion-list padding>\n\n          <ion-item>\n\n              <ion-label stacked>Nombres</ion-label>\n\n              <ion-input type="text" [ngModelOptions]="{standalone: true}" [(ngModel)]="User.Nombre"></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n              <ion-label stacked>Apellidos</ion-label>\n\n              <ion-input type="text" [ngModelOptions]="{standalone: true}" [(ngModel)]="User.Apellido"></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n              <ion-label stacked>Email</ion-label>\n\n              <ion-input type="text" [ngModelOptions]="{standalone: true}" [(ngModel)]="User.Email"></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-label stacked style="color:#AAA">Telefono (sin 0 en el prefijo ni 15 en el número)</ion-label>\n\n          <ion-grid style="padding:0px">\n\n              <ion-row>\n\n                  <ion-col col-5>\n\n                    <ion-select [(selectOptions)]="alertOptions" [(ngModel)]="User.TelCodigo">\n\n                      <ion-option value="+93">AFG(+93)</ion-option>\n\n                      <ion-option value="+355">ALB(+355)</ion-option>\n\n                      <ion-option value="+49">DEU(+49)</ion-option>\n\n                      <ion-option value="+213">DZA(+213)</ion-option>\n\n                      <ion-option value="+376">AND(+376)</ion-option>\n\n                      <ion-option value="+244">AGO(+244)</ion-option>\n\n                      <ion-option value="+672">ATA(+672)</ion-option>\n\n                      <ion-option value="+599">ANT(+599)</ion-option>\n\n                      <ion-option value="+966">SAU(+966)</ion-option>\n\n                      <ion-option value="+54">ARG(+54)</ion-option>\n\n                      <ion-option value="+374">ARM(+374)</ion-option>\n\n                      <ion-option value="+297">ABW(+297)</ion-option>\n\n                      <ion-option value="+61">AUS(+61)</ion-option>\n\n                      <ion-option value="+43">AUT(+43)</ion-option>\n\n                      <ion-option value="+994">AZE(+994)</ion-option>\n\n                      <ion-option value="+32">BEL(+32)</ion-option>\n\n                      <ion-option value="+973">BHR(+973)</ion-option>\n\n                      <ion-option value="+880">BGD(+880)</ion-option>\n\n                      <ion-option value="+501">BLZ(+501)</ion-option>\n\n                      <ion-option value="+229">BEN(+229)</ion-option>\n\n                      <ion-option value="+975">BTN(+975)</ion-option>\n\n                      <ion-option value="+375">BLR(+375)</ion-option>\n\n                      <ion-option value="+95">MMR(+95)</ion-option>\n\n                      <ion-option value="+591">BOL(+591)</ion-option>\n\n                      <ion-option value="+387">BIH(+387)</ion-option>\n\n                      <ion-option value="+267">BWA(+267)</ion-option>\n\n                      <ion-option value="+55">BRA(+55)</ion-option>\n\n                      <ion-option value="+673">BRN(+673)</ion-option>\n\n                      <ion-option value="+359">BGR(+359)</ion-option>\n\n                      <ion-option value="+226">BFA(+226)</ion-option>\n\n                      <ion-option value="+257">BDI(+257)</ion-option>\n\n                      <ion-option value="+238">CPV(+238)</ion-option>\n\n                      <ion-option value="+855">KHM(+855)</ion-option>\n\n                      <ion-option value="+237">CMR(+237)</ion-option>\n\n                      <ion-option value="+1">CAN(+1) </ion-option>\n\n                      <ion-option value="+235">TCD(+235)</ion-option>\n\n                      <ion-option value="+56">CHL(+56)</ion-option>\n\n                      <ion-option value="+86">CHN(+86)</ion-option>\n\n                      <ion-option value="+357">CYP(+357)</ion-option>\n\n                      <ion-option value="+39">VAT(+39)</ion-option>\n\n                      <ion-option value="+57">COL(+57)</ion-option>\n\n                      <ion-option value="+269">COM(+269)</ion-option>\n\n                      <ion-option value="+242">COG(+242)</ion-option>\n\n                      <ion-option value="+243">COD(+243)</ion-option>\n\n                      <ion-option value="+850">PRK(+850)</ion-option>\n\n                      <ion-option value="+82">KOR(+82)</ion-option>\n\n                      <ion-option value="+225">CIV(+225)</ion-option>\n\n                      <ion-option value="+506">CRI(+506)</ion-option>\n\n                      <ion-option value="+385">HRV(+385)</ion-option>\n\n                      <ion-option value="+53">CUB(+53)</ion-option>\n\n                      <ion-option value="+45">DNK(+45)</ion-option>\n\n                      <ion-option value="+593">ECU(+593)</ion-option>\n\n                      <ion-option value="+20">EGY(+20)</ion-option>\n\n                      <ion-option value="+503">SLV(+503)</ion-option>\n\n                      <ion-option value="+971">ARE(+971)</ion-option>\n\n                      <ion-option value="+291">ERI(+291)</ion-option>\n\n                      <ion-option value="+421">SVK(+421)</ion-option>\n\n                      <ion-option value="+386">SVN(+386)</ion-option>\n\n                      <ion-option value="+34">ESP(+34)</ion-option>\n\n                      <ion-option value="+1">USA(+1) </ion-option>\n\n                      <ion-option value="+372">EST(+372)</ion-option>\n\n                      <ion-option value="+251">ETH(+251)</ion-option>\n\n                      <ion-option value="+63">PHL(+63)</ion-option>\n\n                      <ion-option value="+358">FIN(+358)</ion-option>\n\n                      <ion-option value="+679">FJI(+679)</ion-option>\n\n                      <ion-option value="+33">FRA(+33)</ion-option>\n\n                      <ion-option value="+241">GAB(+241)</ion-option>\n\n                      <ion-option value="+220">GMB(+220)</ion-option>\n\n                      <ion-option value="+995">GEO(+995)</ion-option>\n\n                      <ion-option value="+233">GHA(+233)</ion-option>\n\n                      <ion-option value="+350">GIB(+350)</ion-option>\n\n                      <ion-option value="+30">GRC(+30)</ion-option>\n\n                      <ion-option value="+299">GRL(+299)</ion-option>\n\n                      <ion-option value="+502">GTM(+502)</ion-option>\n\n                      <ion-option value="+224">GIN(+224)</ion-option>\n\n                      <ion-option value="+240">GNQ(+240)</ion-option>\n\n                      <ion-option value="+245">GNB(+245)</ion-option>\n\n                      <ion-option value="+592">GUY(+592)</ion-option>\n\n                      <ion-option value="+509">HTI(+509)</ion-option>\n\n                      <ion-option value="+504">HND(+504)</ion-option>\n\n                      <ion-option value="+852">HKG(+852)</ion-option>\n\n                      <ion-option value="+36">HUN(+36)</ion-option>\n\n                      <ion-option value="+91">IND(+91)</ion-option>\n\n                      <ion-option value="+62">IDN(+62)</ion-option>\n\n                      <ion-option value="+98">IRN(+98)</ion-option>\n\n                      <ion-option value="+964">IRQ(+964)</ion-option>\n\n                      <ion-option value="+353">IRL(+353)</ion-option>\n\n                      <ion-option value="+44">IMN(+44)</ion-option>\n\n                      <ion-option value="+61">CXR(+61)</ion-option>\n\n                      <ion-option value="+354">ISL(+354)</ion-option>\n\n                      <ion-option value="+61">CCK(+61)</ion-option>\n\n                      <ion-option value="+682">COK(+682)</ion-option>\n\n                      <ion-option value="+298">FRO(+298)</ion-option>\n\n                      <ion-option value="+960">MDV(+960)</ion-option>\n\n                      <ion-option value="+500">FLK(+500)</ion-option>\n\n                      <ion-option value="+692">MHL(+692)</ion-option>\n\n                      <ion-option value="+870">PCN(+870)</ion-option>\n\n                      <ion-option value="+677">SLB(+677)</ion-option>\n\n                      <ion-option value="+972">ISR(+972)</ion-option>\n\n                      <ion-option value="+39">ITA(+39)</ion-option>\n\n                      <ion-option value="+81">JPN(+81)</ion-option>\n\n                      <ion-option value="+962">JOR(+962)</ion-option>\n\n                      <ion-option value="+7">KAZ(+7) </ion-option>\n\n                      <ion-option value="+254">KEN(+254)</ion-option>\n\n                      <ion-option value="+996">KGZ(+996)</ion-option>\n\n                      <ion-option value="+686">KIR(+686)</ion-option>\n\n                      <ion-option value="+965">KWT(+965)</ion-option>\n\n                      <ion-option value="+961">LBN(+961)</ion-option>\n\n                      <ion-option value="+856">LAO(+856)</ion-option>\n\n                      <ion-option value="+266">LSO(+266)</ion-option>\n\n                      <ion-option value="+371">LVA(+371)</ion-option>\n\n                      <ion-option value="+231">LBR(+231)</ion-option>\n\n                      <ion-option value="+218">LBY(+218)</ion-option>\n\n                      <ion-option value="+423">LIE(+423)</ion-option>\n\n                      <ion-option value="+370">LTU(+370)</ion-option>\n\n                      <ion-option value="+352">LUX(+352)</ion-option>\n\n                      <ion-option value="+52">MEX(+52)</ion-option>\n\n                      <ion-option value="+377">MCO(+377)</ion-option>\n\n                      <ion-option value="+853">MAC(+853)</ion-option>\n\n                      <ion-option value="+389">MKD(+389)</ion-option>\n\n                      <ion-option value="+261">MDG(+261)</ion-option>\n\n                      <ion-option value="+60">MYS(+60)</ion-option>\n\n                      <ion-option value="+265">MWI(+265)</ion-option>\n\n                      <ion-option value="+223">MLI(+223)</ion-option>\n\n                      <ion-option value="+356">MLT(+356)</ion-option>\n\n                      <ion-option value="+212">MAR(+212)</ion-option>\n\n                      <ion-option value="+230">MUS(+230)</ion-option>\n\n                      <ion-option value="+222">MRT(+222)</ion-option>\n\n                      <ion-option value="+262">MYT(+262)</ion-option>\n\n                      <ion-option value="+691">FSM(+691)</ion-option>\n\n                      <ion-option value="+373">MDA(+373)</ion-option>\n\n                      <ion-option value="+976">MNG(+976)</ion-option>\n\n                      <ion-option value="+382">MNE(+382)</ion-option>\n\n                      <ion-option value="+258">MOZ(+258)</ion-option>\n\n                      <ion-option value="+264">NAM(+264)</ion-option>\n\n                      <ion-option value="+674">NRU(+674)</ion-option>\n\n                      <ion-option value="+977">NPL(+977)</ion-option>\n\n                      <ion-option value="+505">NIC(+505)</ion-option>\n\n                      <ion-option value="+227">NER(+227)</ion-option>\n\n                      <ion-option value="+234">NGA(+234)</ion-option>\n\n                      <ion-option value="+683">NIU(+683)</ion-option>\n\n                      <ion-option value="+47">NOR(+47)</ion-option>\n\n                      <ion-option value="+687">NCL(+687)</ion-option>\n\n                      <ion-option value="+64">NZL(+64)</ion-option>\n\n                      <ion-option value="+968">OMN(+968)</ion-option>\n\n                      <ion-option value="+31">NLD(+31)</ion-option>\n\n                      <ion-option value="+92">PAK(+92)</ion-option>\n\n                      <ion-option value="+680">PLW(+680)</ion-option>\n\n                      <ion-option value="+507">PAN(+507)</ion-option>\n\n                      <ion-option value="+675">PNG(+675)</ion-option>\n\n                      <ion-option value="+595">PRY(+595)</ion-option>\n\n                      <ion-option value="+51">PER(+51)</ion-option>\n\n                      <ion-option value="+689">PYF(+689)</ion-option>\n\n                      <ion-option value="+48">POL(+48)</ion-option>\n\n                      <ion-option value="+351">PRT(+351)</ion-option>\n\n                      <ion-option value="+1">PRI(+1) </ion-option>\n\n                      <ion-option value="+974">QAT(+974)</ion-option>\n\n                      <ion-option value="+44">GBR(+44)</ion-option>\n\n                      <ion-option value="+236">CAF(+236)</ion-option>\n\n                      <ion-option value="+420">CZE(+420)</ion-option>\n\n                      <ion-option value="+250">RWA(+250)</ion-option>\n\n                      <ion-option value="+40">ROU(+40)</ion-option>\n\n                      <ion-option value="+7">RUS(+7) </ion-option>\n\n                      <ion-option value="+685">WSM(+685)</ion-option>\n\n                      <ion-option value="+590">BLM(+590)</ion-option>\n\n                      <ion-option value="+378">SMR(+378)</ion-option>\n\n                      <ion-option value="+508">SPM(+508)</ion-option>\n\n                      <ion-option value="+290">SHN(+290)</ion-option>\n\n                      <ion-option value="+239">STP(+239)</ion-option>\n\n                      <ion-option value="+221">SEN(+221)</ion-option>\n\n                      <ion-option value="+248">SYC(+248)</ion-option>\n\n                      <ion-option value="+232">SLE(+232)</ion-option>\n\n                      <ion-option value="+65">SGP(+65)</ion-option>\n\n                      <ion-option value="+963">SYR(+963)</ion-option>\n\n                      <ion-option value="+252">SOM(+252)</ion-option>\n\n                      <ion-option value="+94">LKA(+94)</ion-option>\n\n                      <ion-option value="+27">ZAF(+27)</ion-option>\n\n                      <ion-option value="+249">SDN(+249)</ion-option>\n\n                      <ion-option value="+46">SWE(+46)</ion-option>\n\n                      <ion-option value="+41">CHE(+41)</ion-option>\n\n                      <ion-option value="+597">SUR(+597)</ion-option>\n\n                      <ion-option value="+268">SWZ(+268)</ion-option>\n\n                      <ion-option value="+992">TJK(+992)</ion-option>\n\n                      <ion-option value="+66">THA(+66)</ion-option>\n\n                      <ion-option value="+886">TWN(+886)</ion-option>\n\n                      <ion-option value="+255">TZA(+255)</ion-option>\n\n                      <ion-option value="+670">TLS(+670)</ion-option>\n\n                      <ion-option value="+228">TGO(+228)</ion-option>\n\n                      <ion-option value="+690">TKL(+690)</ion-option>\n\n                      <ion-option value="+676">TON(+676)</ion-option>\n\n                      <ion-option value="+216">TUN(+216)</ion-option>\n\n                      <ion-option value="+993">TKM(+993)</ion-option>\n\n                      <ion-option value="+90">TUR(+90)</ion-option>\n\n                      <ion-option value="+688">TUV(+688)</ion-option>\n\n                      <ion-option value="+256">UGA(+256)</ion-option>\n\n                      <ion-option value="+598">URY(+598)</ion-option>\n\n                      <ion-option value="+998">UZB(+998)</ion-option>\n\n                      <ion-option value="+678">VUT(+678)</ion-option>\n\n                      <ion-option value="+58">VEN(+58)</ion-option>\n\n                      <ion-option value="+84">VNM(+84)</ion-option>\n\n                      <ion-option value="+681">WLF(+681)</ion-option>\n\n                      <ion-option value="+967">YEM(+967)</ion-option>\n\n                      <ion-option value="+253">DJI(+253)</ion-option>\n\n                      <ion-option value="+260">ZMB(+260)</ion-option>\n\n                      <ion-option value="+263">ZWE(+263)</ion-option>              \n\n                    </ion-select>\n\n                  </ion-col>\n\n                  <ion-col col-3>\n\n                    <ion-input type="text" [ngModelOptions]="{standalone: true}" placeholder="Pref." [(ngModel)]="User.TelPrefijo"></ion-input>\n\n                  </ion-col>\n\n                  <ion-col col-4>\n\n                    <ion-input type="text" [ngModelOptions]="{standalone: true}" placeholder="Número" [(ngModel)]="User.TelNumero"></ion-input>\n\n                  </ion-col>\n\n              </ion-row>\n\n          </ion-grid>\n\n          <hr/>\n\n          <ion-label stacked style="color:#AAA">Documento</ion-label>\n\n          <ion-grid style="padding:0px">\n\n              <ion-row>\n\n                  <ion-col col-5>\n\n                    <ion-select [(selectOptions)]="alertOptions" [(ngModel)]="User.DocTipo">\n\n                      <ion-option value="DNI">DNI</ion-option>\n\n                      <ion-option value="LC">LC</ion-option>\n\n                      <ion-option value="LE">LE</ion-option>\n\n                      <ion-option value="OTRO">Otro</ion-option>\n\n                    </ion-select>\n\n                  </ion-col>\n\n                  <ion-col col-7>\n\n                    <ion-input type="text" [ngModelOptions]="{standalone: true}" placeholder="Número" [(ngModel)]="User.DocNumero"></ion-input>\n\n                  </ion-col>\n\n              </ion-row>\n\n          </ion-grid>\n\n          <hr/>\n\n     </ion-list>\n\n\n\n      <div padding style="padding-top:0;padding-bottom:0">\n\n        <button  ion-button color="first1"  block (click)="register()">\n\n          Registrarse\n\n        </button>\n\n      </div>\n\n      <ion-grid padding>\n\n        <ion-row>\n\n          <ion-col>\n\n            <span ion-text color="secondary" >Ya tiene cuenta?</span>\n\n          </ion-col>\n\n          <ion-col style="text-align: right">\n\n            <span ion-text color="first1" (click)="login()">Iniciar Sesión</span>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n  \n\n    </div>\n\n\n\n    <!-- Other links -->\n\n\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__services_custom_services__["a" /* CustomServices */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BaseService = /** @class */ (function () {
    function BaseService(http, alert, loadingService, toastCtrl) {
        this.http = http;
        this.alert = alert;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        //CONSTANTES
        this.BASE_URL = "https://servicios.firstsa.net/";
        //BASE_URL = "http://localhost:16021/";
        this.ASOCIAR_CLIENTE = "appcliente/asociarcliente/{0}/{1}/{2}";
        this.OBTENER_ESPERA = "appcliente/obtenerespera";
        this.CALCULAR_TARIFA = "appcliente/calculartarifa";
        this.CALIFICAR_VIAJE = "appcliente/calificarviaje/{0}/{1}/{2}/{3}";
        this.CANCELAR_VIAJE = "appcliente/cancelarviaje/{0}/{1}";
        this.GET_NUMERO_VIAJE = "appcliente/getnumeroviaje";
        this.GET_VIAJE = "appcliente/getviaje/{0}";
        this.GET_VIAJES = "appcliente/getviajes/{0}";
        this.GET_USUARIO = "appcliente/getusuario/{0}";
        this.REGISTRAR_USUARIO = "appcliente/registrarusuario";
        this.SAVE_VIAJE = "appcliente/saveviaje";
        this.REGISTRAR_FCM = "appcliente/registrarfcm";
        this.GENERAR_CODIGO = "appcliente/generarcodigo/{0}";
        this.CAMBIAR_PASSWORD = "appcliente/cambiarclave/{0}/{1}";
        this.LOGIN = "appcliente/getusuario";
        this.LOGOUT = "appcliente/logout/{0}";
        this.ENVIAR_CODIGO = "appcliente/enviarcodigo/{0}/{1}";
        this.GUARDAR_TARJETA = "appcliente/guardartarjeta/{0}/{1}";
        this.ELIMINAR_TARJETA = "appcliente/eliminartarjeta/{0}/{1}";
        this.GUARDAR_PAGO = "appcliente/registrarpago";
        this.loader = this.loadingService.create({ content: "Aguarde..." });
    }
    //HTTP
    BaseService.prototype.ExecuteGetService = function (url, args, onsuccess, onerror) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json;charset=UTF-8',
            'Authorization': localStorage.getItem("token_de_cliente")
        });
        if (onsuccess != null || onerror != null)
            this.showLoading();
        if (args != null)
            url = this.ReplaceUrl(url, args);
        this.http.get(this.BASE_URL + url, { headers: headers })
            .subscribe(function (data) {
            var result = data.json();
            if (result.Status == 0) {
                if (onsuccess != null)
                    onsuccess(result.Result);
            }
            else {
                if (onerror != null)
                    onerror(result.Message);
                else
                    _this.showAlert("ERROR", result.Message);
            }
            _this.hideLoading();
        }, function (error) {
            _this.hideLoading();
            if (error.status == 401) {
                localStorage.removeItem('datos_de_cliente');
                localStorage.removeItem('token_de_cliente');
                if (_this.OnNotAuthenticate != null)
                    _this.OnNotAuthenticate();
            }
            else
                _this.showAlert("ERROR", JSON.stringify(error));
        });
    };
    BaseService.prototype.ExecutePostService = function (url, data, onsuccess, onerror) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json;charset=UTF-8',
            'Authorization': localStorage.getItem("token_de_cliente")
        });
        if (onsuccess != null || onerror != null)
            this.showLoading();
        this.http.post(this.BASE_URL + url, JSON.stringify(data), { headers: headers })
            .subscribe(function (data) {
            var result = data.json();
            if (result.Status == 0) {
                if (onsuccess != null)
                    onsuccess(result.Result);
            }
            else {
                if (onerror != null)
                    onerror(result.Message);
                else
                    _this.showAlert("ERROR", result.Message);
            }
            _this.hideLoading();
        }, function (error) {
            _this.hideLoading();
            if (error.status == 401) {
                localStorage.removeItem('datos_de_cliente');
                localStorage.removeItem('token_de_cliente');
                if (_this.OnNotAuthenticate != null)
                    _this.OnNotAuthenticate();
            }
            else
                _this.showAlert("ERROR", JSON.stringify(error));
        });
    };
    BaseService.prototype.ReplaceUrl = function (url, args) {
        return url.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match;
        });
    };
    //USER
    BaseService.prototype.GetValidandoUsuario = function () {
        return localStorage.getItem("validando_usuario") && localStorage.getItem("validando_usuario") == "true";
    };
    BaseService.prototype.SetValidandoUsuario = function (value) {
        if (!value)
            localStorage.removeItem("validando_usuario");
        else
            localStorage.setItem("validando_usuario", value);
    };
    BaseService.prototype.UserData = function () {
        return localStorage.getItem("datos_de_cliente") == null ? null : JSON.parse(localStorage.getItem("datos_de_cliente"));
    };
    BaseService.prototype.UserToken = function () {
        return localStorage.getItem("token_de_cliente");
    };
    //ALERT
    BaseService.prototype.showAlert = function (title, mensaje, onconfirm) {
        var alert = this.alert.create({
            title: title,
            message: mensaje,
            buttons: [{
                    text: 'OK',
                    handler: function () {
                        if (onconfirm != null)
                            onconfirm();
                    },
                    cssClass: 'alertCustomCss'
                }],
        });
        alert.present();
    };
    BaseService.prototype.ShowConfirm = function (mensaje, onsuccess, onerror) {
        var method = this.alert.create({
            title: "Atención",
            message: mensaje,
            buttons: [
                {
                    text: 'SI',
                    handler: function () {
                        onsuccess();
                    }
                },
                {
                    text: 'NO',
                    handler: function () {
                        if (onerror)
                            onerror();
                    }
                }
            ]
        });
        method.present();
    };
    //TOAtS
    BaseService.prototype.presentToast = function (message, posicion, duracion) {
        if (posicion === void 0) { posicion = 'top'; }
        if (duracion === void 0) { duracion = 3000; }
        var toast = this.toastCtrl.create({
            message: message,
            duration: duracion,
            position: posicion
        });
        toast.present();
    };
    //LOADING
    BaseService.prototype.showLoading = function () {
        this.loader.present();
    };
    BaseService.prototype.hideLoading = function () {
        this.loader.dismiss();
        this.loader = this.loadingService.create({ content: "Aguarde..." });
    };
    //FORMAT NUMBER
    BaseService.prototype.formatNumber = function (numero, inseparator, outseparator) {
        var x = numero.toString();
        var arr;
        if (inseparator == null)
            inseparator = ".";
        if (outseparator == null)
            outseparator = ",";
        var milseparator = outseparator == "." ? "," : ".";
        switch (inseparator) {
            case ".":
                x.replace(",", "");
                arr = x.split(".");
                break;
            case ",":
                x.replace(".", "");
                arr = x.split(",");
        }
        var numericPart = arr[0];
        if (arr[0].length > 3) {
            var aux = arr[0].length;
            var arrAux = new Array();
            for (var i = aux - 3; i > -3; i = i - 3) {
                if (i >= 0)
                    arrAux.push(arr[0].substring(i, i + 3));
                else
                    arrAux.push(arr[0].substring(0, 3 + i));
            }
            numericPart = arrAux.reverse().join(milseparator);
        }
        var decimalPart = "00";
        if (arr.length > 1)
            decimalPart = arr[1] + "0";
        return numericPart + outseparator + decimalPart.substring(decimalPart.length - 2);
    };
    BaseService.prototype.getNumber = function (numero) {
        numero = numero.toString().replace("$ ", "");
        return parseFloat(numero.toString().replace(".", "").replace(",", "."));
    };
    //OCULTAR CAMPOS
    BaseService.prototype.ocultarCampo = function (campo) {
        return (campo == null || campo == undefined || campo.toString().trim().length == 0 || campo == false);
    };
    BaseService.prototype.ocultarArray = function (array) {
        return (array == null || array == undefined || array.length == 0);
    };
    //SET COLOR
    BaseService.prototype.setColorEstado = function (estado) {
        switch (estado) {
            case 2:
                return "info";
            case 3:
                return "danger";
            case 5:
                return "primary";
            case 7:
            case 8:
                return "dark";
            default:
                return "";
        }
    };
    BaseService.prototype.setColorFormaPago = function (formapago) {
        switch (formapago) {
            case 2:
            case 'Cta. Cte.':
                return "danger";
            case 3:
            case 'Tarjeta':
                return "secondary";
            case 1:
            case 'Efectivo':
                return "primary";
            default:
                return "";
        }
    };
    BaseService.prototype.Direcciones = function () {
        var arr = localStorage.getItem("direcciones") == null ? null : JSON.parse(localStorage.getItem("direcciones"));
        if (arr)
            arr = arr.sort(function (a, b) {
                return b.Cantidad - a.Cantidad;
            });
        return arr;
    };
    BaseService.prototype.InsertDireccion = function (direccion) {
        var arr = localStorage.getItem("direcciones") == null ? null : JSON.parse(localStorage.getItem("direcciones"));
        var existe = false;
        if (arr) {
            for (var i in arr) {
                if (arr[i].Direccion == direccion.Direccion) {
                    arr[i].Cantidad++;
                    existe = true;
                    break;
                }
            }
            ;
            if (!existe)
                arr.push(direccion);
        }
        else {
            arr = new Array();
            arr.push(direccion);
        }
        localStorage.setItem("direcciones", JSON.stringify(arr));
    };
    BaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], BaseService);
    return BaseService;
}());

//# sourceMappingURL=base.service.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FcmProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_firebase__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var FcmProvider = /** @class */ (function () {
    function FcmProvider(firebaseNative, platform, events) {
        this.firebaseNative = firebaseNative;
        this.platform = platform;
        this.events = events;
        /* this.firebaseNative.onTokenRefresh().subscribe((token) => {
          this.events.publish('ontoken:refresh', { Token: token });
        }); */
    }
    // Get permission from the user
    FcmProvider.prototype.getToken = function (onsuccess) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.firebaseNative.getToken()];
                    case 1:
                        token = _a.sent();
                        if (!this.platform.is('ios')) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.firebaseNative.grantPermission()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        this.firebaseNative.onNotificationOpen().subscribe(function (notification) {
                            _this.events.publish('onnotification:changed', { Reserva: notification.Reserva });
                        });
                        onsuccess(token);
                        return [2 /*return*/];
                }
            });
        });
    };
    FcmProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */]])
    ], FcmProvider);
    return FcmProvider;
}());

//# sourceMappingURL=FcmProvider.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViajePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__places_places__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resumen_resumen__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_clases__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_custom_services__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_here_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_google_maps_service__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/*
 Generated class for the HomePage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var ViajePage = /** @class */ (function () {
    function ViajePage(nav, params, platform, alertCtrl, service, gmapservice, here, modalCtrl, ref, google) {
        var _this = this;
        this.nav = nav;
        this.params = params;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.service = service;
        this.gmapservice = gmapservice;
        this.here = here;
        this.modalCtrl = modalCtrl;
        this.ref = ref;
        this.google = google;
        this.Viaje = new __WEBPACK_IMPORTED_MODULE_4__models_clases__["e" /* Viaje */]();
        // list vehicles
        this.vehicles = [
            { name: 'Standar', image: 'assets/img/auto-normal.png', active: true, id: 1 },
            { name: 'Monovolumen', image: 'assets/img/van.png', active: false, id: 3 },
            { name: 'VIP', image: 'assets/img/vip.png', active: false, id: 4 }
        ];
        this.gmap = this.gmapservice.create("gmap");
        this.Viaje.Reserva = this.params.data.Reserva;
        this.Viaje.Regreso = false;
        this.Viaje.Km = 0;
        this.Viaje.TipoMovilId = 1;
        this.Viaje.Origen = "Buscando Posicion...";
        this.Viaje.UsuarioId = this.service.UserData().UsuarioId;
        this.Viaje.ClienteId = this.service.UserData().ClienteId;
        this.Viaje.Email = this.service.UserData().Email;
        this.Viaje.Pasajero = this.service.UserData().Nombre;
        this.Viaje.Telefono = this.service.UserData().TelCodigo + "-" + this.service.UserData().TelPrefijo + "-" + this.service.UserData().TelNumero;
        this.Viaje.FormaPagoId = 3;
        setTimeout(function () {
            if (_this.Viaje.Origen == "Buscando Posicion...") {
                _this.service.presentToast("No pudimos ubicar tu móvil, por favor ingresa manualmente tu posición en el campo 'origen'.", "bottom", 4000);
                _this.Viaje.Origen = "Ingresar Posicion...";
            }
        }, 10000);
    }
    ViajePage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function (data) {
            setTimeout(function () { _this.initializeMap(); }, 500);
        });
    };
    ViajePage.prototype.toggleVehicle = function (id) {
        this.Viaje.TipoMovilId = id;
        for (var i = 0; i < this.vehicles.length; i++) {
            this.vehicles[i].active = (this.vehicles[i].id == id);
        }
        this.calcularTarifa();
    };
    ViajePage.prototype.initializeMap = function () {
        var _this = this;
        this.map = this.here.CreateMap(document.getElementById('map'));
        this.here.GetPosicionActual(this.gmap, function (posicion, latlng) {
            _this.here.ClearMarker(_this.map, _this.markerOrigen);
            _this.markerOrigen = _this.here.CreateMarker(_this.map, latlng.lat, latlng.lng, "assets/img/icono-user.png");
            _this.map.setCenter(latlng);
            _this.Viaje.OrigenPosicion = posicion;
            _this.google.GetDireccion(latlng, function (direccion, posicion, lat, lng) {
                _this.Viaje.Origen = direccion;
                _this.ref.detectChanges();
                _this.service.ObtenerEspera(posicion, function (data) {
                    if (data.Codigo == 1) {
                        _this.service.presentToast(data.Descripcion);
                    }
                    else {
                        _this.service.showAlert("Disponibilidad de moviles", data.Descripcion);
                    }
                    _this.espera = data.Descripcion;
                });
            });
        });
    };
    ViajePage.prototype.getResumen = function () {
        if (this.Viaje.TarifaId)
            this.nav.push(__WEBPACK_IMPORTED_MODULE_3__resumen_resumen__["a" /* ResumenPage */], { Viaje: this.Viaje, Espera: this.espera });
    };
    ViajePage.prototype.showDestino = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__places_places__["a" /* PlacesPage */]);
        modal.onDidDismiss(function (data) {
            if (data) {
                _this.Viaje.Destino = data.direccion;
                _this.Viaje.DestinoPosicion = data.posicion;
                _this.getTrayecto();
            }
        });
        modal.present();
    };
    ViajePage.prototype.showOrigen = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__places_places__["a" /* PlacesPage */]);
        modal.onDidDismiss(function (data) {
            if (data) {
                _this.Viaje.Origen = data.direccion;
                _this.Viaje.OrigenPosicion = data.posicion;
                _this.here.ClearMarker(_this.map, _this.markerOrigen);
                _this.markerOrigen = _this.here.CreateMarker(_this.map, data.lat, data.lng, "assets/img/icono-user.png");
                _this.getTrayecto();
            }
        });
        modal.present();
    };
    ViajePage.prototype.getTrayecto = function () {
        var _this = this;
        if (this.Viaje.Origen && this.Viaje.Destino && this.Viaje.Origen != '' && this.Viaje.Destino != '') {
            if (this.trayecto)
                this.map.removeObjects([this.trayecto]);
            this.here.CreateTrayecto(this.Viaje.OrigenPosicion, this.Viaje.DestinoPosicion, function (km, duracion, trayecto) {
                _this.Viaje.Km = km;
                _this.Viaje.Duracion = duracion;
                _this.here.ClearMarker(_this.map, _this.markerDestino);
                var latLng = _this.here.GetPosicionTexto(_this.Viaje.DestinoPosicion);
                _this.markerDestino = _this.here.CreateMarker(_this.map, latLng.lat, latLng.lng, "assets/img/icono-casa.png", false);
                _this.calcularTarifa();
                _this.trayecto = trayecto;
                _this.map.addObjects([_this.trayecto]);
                _this.map.setViewBounds(_this.trayecto.getBounds());
            });
        }
    };
    Object.defineProperty(ViajePage.prototype, "OcultarKm", {
        get: function () {
            return this.Viaje.Km == 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViajePage.prototype, "GetKm", {
        get: function () {
            if (!this.Viaje)
                return 0;
            return this.Viaje.Km / 1000;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViajePage.prototype, "GetDuracion", {
        get: function () {
            if (!this.Viaje)
                return 0;
            return parseInt((this.Viaje.Duracion / 60).toString());
        },
        enumerable: true,
        configurable: true
    });
    ViajePage.prototype.calcularTarifa = function () {
        var _this = this;
        this.service.CalcularTarifa(this.Viaje, function (data) {
            _this.Viaje.TarifaId = data.TarifaId;
            _this.Viaje.TarifaNombre = data.TarifaNombre;
            _this.Viaje.ImporteKm = data.Importe;
            _this.Viaje.ImporteEspera = data.Espera;
            _this.Viaje.DescuentoEfectivo = data.DescuentoEfectivo;
        });
        this.ref.detectChanges();
    };
    ViajePage.prototype.refrescar = function () {
        var _this = this;
        this.here.GetPosicionActual(this.gmap, function (posicion, latlng) {
            _this.here.ClearMarker(_this.map, _this.markerOrigen);
            _this.markerOrigen = _this.here.CreateMarker(_this.map, latlng.lat, latlng.lng, "assets/img/icono-user.png");
            _this.map.setCenter(latlng);
            _this.Viaje.OrigenPosicion = posicion;
            _this.here.GetDireccionPorLatLng(latlng.lat, latlng.lng, function (direccion) {
                _this.Viaje.Origen = direccion;
                _this.ref.detectChanges();
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ViajePage.prototype, "mapElement", void 0);
    ViajePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-viaje',template:/*ion-inline-start:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\viaje\viaje.html"*/'<!--\n\n  Generated template for the HomePage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="first" >\n\n    <button  ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      <img src="assets/img/first-logo.png"/>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <!-- Show map here -->\n\n  <div #map id="map" style="height: 100%;width: 100%;padding-bottom: 3em"></div>\n\n  <div id="gmap" style="display: none"></div>\n\n\n\n\n\n   <!--Choose pickup and drop off places-->\n\n  <ion-list class="map-overlay list-full-border">\n\n      <ion-item>\n\n        <div (click)="showOrigen()">\n\n          <span class="label" ion-text color="secondary" >Origen</span>\n\n          <div class="bold prewarp"><p>{{Viaje.Origen}}</p></div>\n\n        </div>\n\n        <button ion-button color="dark" round outline item-end (click)="refrescar()"><ion-icon name="refresh"></ion-icon></button>\n\n      </ion-item>\n\n      <ion-item (click)="showDestino()">\n\n        <span class="label" ion-text color="secondary" >Destino</span>\n\n        <div class="bold prewarp">{{Viaje.Destino}}</div>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Viaje con regreso</ion-label>\n\n        <ion-toggle color="primary" [(ngModel)]="Viaje.Regreso" (ionChange)="calcularTarifa()"></ion-toggle>\n\n      </ion-item>\n\n      <ion-item [hidden]="OcultarKm">\n\n        <ion-label>\n\n          {{GetKm}} Km - {{GetDuracion}} Min.\n\n        </ion-label>\n\n        <ion-label class="importe" item-end>\n\n          {{ Viaje.ImporteKm }} <span style="font-size:10px">(est.)</span>\n\n        </ion-label>\n\n      </ion-item>\n\n\n\n  </ion-list>\n\n  <ion-fab bottom right style="margin-bottom:3em;margin-right: 10px;">\n\n    <button ion-fab color="first1" (click)="getResumen()">\n\n      <ion-icon name="send"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n\n\n  <!-- Booking information -->\n\n  <div class="booking-info">\n\n       \n\n    <ion-grid no-padding>\n\n      <ion-row class="vehicles" text-center>\n\n        <ion-col class="item-vehicle" *ngFor="let vehicle of vehicles" [ngClass]="{\'active\': vehicle.active}"\n\n                 (click)="toggleVehicle(vehicle.id)">\n\n          <span>{{ vehicle.name }}</span>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\viaje\viaje.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__services_custom_services__["a" /* CustomServices */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["a" /* GoogleMaps */],
            __WEBPACK_IMPORTED_MODULE_6__services_here_service__["a" /* HereService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_7__services_google_maps_service__["a" /* GoogleMapsService */]])
    ], ViajePage);
    return ViajePage;
}());

//# sourceMappingURL=viaje.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_here_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_google_maps_service__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_custom_services__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the PlacesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var PlacesPage = /** @class */ (function () {
    function PlacesPage(nav, here, viewCtrl, ref, google, platform, service) {
        this.nav = nav;
        this.here = here;
        this.viewCtrl = viewCtrl;
        this.ref = ref;
        this.google = google;
        this.platform = platform;
        this.service = service;
        this.Query = '';
        this.List = [];
        this.Historicos = [];
        this.ocultarspinner = true;
    }
    PlacesPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        var element = document.getElementById("searchtext");
        this.Historicos = this.service.Direcciones();
        this.google.Autocomplete(this.search.nativeElement, function (direccion, posicion, lat, lng) {
            _this.service.InsertDireccion({ Direccion: direccion, Posicion: posicion, Cantidad: 1 });
            _this.viewCtrl.dismiss({
                direccion: direccion,
                posicion: posicion,
                lat: lat,
                lng: lng
            });
        });
    };
    PlacesPage.prototype.chooseItem = function (item) {
        var arr = item.Posicion.split(' ');
        var lat = parseFloat(arr[1]);
        var lng = parseFloat(arr[0]);
        this.viewCtrl.dismiss({
            direccion: item.Direccion,
            posicion: item.Posicion,
            lat: lat,
            lng: lng
        });
    };
    PlacesPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PlacesPage.prototype.ngOnDestroy = function () {
        this.ref.detach(); // do this
        // for me I was detect changes inside "subscribe" so was enough for me to just unsubscribe;
        // this.authObserver.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('searchtext'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], PlacesPage.prototype, "search", void 0);
    PlacesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-places',template:/*ion-inline-start:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\places\places.html"*/'<!--\n\n  Generated template for the PlacesPage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="first1" >\n\n  <ion-title>Direcciones</ion-title>\n\n  <ion-buttons (click)="dismiss()" right>\n\n      <ion-icon name="close"></ion-icon>\n\n  </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-list>\n\n        <ion-item>\n\n          <input class="search-text" type="search" #searchtext placeholder="buscar direcciones..." />\n\n        </ion-item>\n\n    </ion-list>\n\n    <ion-item-group class="list-full-border">\n\n      <ion-item-divider color="gray"  class="bold">Recientes</ion-item-divider>\n\n      <ion-item *ngFor="let place of Historicos" (click)="chooseItem(place)">\n\n        <ion-icon name="ios-pin-outline" item-left>\n\n        </ion-icon>\n\n        <div>\n\n          <div>{{ place.Direccion }}</div>\n\n        </div>\n\n      </ion-item>\n\n    </ion-item-group>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\places\places.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_here_service__["a" /* HereService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_3__services_google_maps_service__["a" /* GoogleMapsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__services_custom_services__["a" /* CustomServices */]])
    ], PlacesPage);
    return PlacesPage;
}());

//# sourceMappingURL=places.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_clases__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_custom_services__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__formadepago_formadepago__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_date_picker__ = __webpack_require__(504);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
 Generated class for the HomePage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var ResumenPage = /** @class */ (function () {
    function ResumenPage(nav, platform, service, params, modalCtrl, alert, datePicker) {
        this.nav = nav;
        this.platform = platform;
        this.service = service;
        this.params = params;
        this.modalCtrl = modalCtrl;
        this.alert = alert;
        this.datePicker = datePicker;
        this.Viaje = new __WEBPACK_IMPORTED_MODULE_2__models_clases__["e" /* Viaje */]();
        this.Viaje = this.params.data.Viaje;
        this.Viaje.TipoFecha = 1;
        this.Viaje.FechaHora = __WEBPACK_IMPORTED_MODULE_5_moment__().add(-5, 'minutes').format("DD/MM/YYYY HH:mm");
        this.Viaje.FormaPagoId = 3;
        this.espera = this.params.data.Espera;
    }
    ResumenPage.prototype.OcultarConRegreso = function () {
        if (!this.Viaje)
            return true;
        return !this.Viaje.Regreso;
    };
    ResumenPage.prototype.SetTipoFecha = function (tipo) {
        this.Viaje.TipoFecha = tipo;
    };
    ResumenPage.prototype.OcultarFecha = function () {
        if (!this.Viaje)
            return true;
        return this.Viaje.TipoFecha == 1;
    };
    ResumenPage.prototype.showObservaciones = function () {
        var _this = this;
        var prompt = this.alert.create({
            title: "Mensaje al Chofer",
            message: "Ingrese un mensaje que quiera que el chofer vea",
            inputs: [
                {
                    name: 'Mensaje',
                    placeholder: 'Mensaje',
                    type: 'text',
                },
            ],
            buttons: [
                {
                    text: 'Cancelar',
                },
                {
                    text: 'Guardar',
                    handler: function (data) {
                        _this.Viaje.Observaciones = data.Mensaje;
                    }
                }
            ]
        });
        prompt.present();
    };
    Object.defineProperty(ResumenPage.prototype, "getIconoTipoMovil", {
        get: function () {
            if (!this.Viaje)
                return "";
            switch (this.Viaje.TipoMovilId) {
                case 1: return "Móvil Standar";
                case 3: return "Monovolúmen";
                case 4: return "Automóvil VIP";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResumenPage.prototype, "getObservaciones", {
        get: function () {
            if (!this.Viaje)
                return "";
            if (this.Viaje.Observaciones && this.Viaje.Observaciones.length > 0)
                return this.Viaje.Observaciones;
            else
                return "Mensaje al Chofer...";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResumenPage.prototype, "GetKm", {
        get: function () {
            if (!this.Viaje)
                return 0;
            return this.Viaje.Km / 1000;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResumenPage.prototype, "GetDuracion", {
        get: function () {
            if (!this.Viaje)
                return 0;
            return parseInt((this.Viaje.Duracion / 60).toString());
        },
        enumerable: true,
        configurable: true
    });
    ResumenPage.prototype.addDays = function (date, days) {
        var result = new Date(date);
        result.setDate(date.getDate() + days);
        return result;
    };
    ResumenPage.prototype.Pagar = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__formadepago_formadepago__["a" /* FormaDePagoPage */], { Viaje: this.Viaje });
    };
    ResumenPage.prototype.ValidarFechaViaje = function (date) {
        var now = new Date();
        return now < date;
    };
    ResumenPage.prototype.cambiotipofecha = function (tipo) {
        var _this = this;
        if (tipo == 1)
            this.Viaje.FechaHora = __WEBPACK_IMPORTED_MODULE_5_moment__().format("DD/MM/YYYY HH:mm");
        else {
            this.datePicker.show({
                date: new Date(),
                mode: 'datetime',
                is24Hour: true,
                androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
            }).then(function (date) {
                if (!_this.ValidarFechaViaje(date)) {
                    _this.Viaje.TipoFecha = 1;
                    _this.Viaje.FechaHora = __WEBPACK_IMPORTED_MODULE_5_moment__().format("DD/MM/YYYY HH:mm");
                    _this.service.presentToast("La fecha debe ser mayor a la actual.");
                    return false;
                }
                _this.Viaje.FechaHora = __WEBPACK_IMPORTED_MODULE_5_moment__(date).format("DD/MM/YYYY HH:mm");
            }, function (err) { return _this.service.presentToast("Cancelado por usuario"); });
        }
        this.Viaje.TipoFecha = tipo;
    };
    ResumenPage.prototype.esAhora = function () {
        if (!this.Viaje)
            return 0;
        return this.Viaje.TipoFecha == 2;
    };
    ResumenPage.prototype.esFuturo = function () {
        if (!this.Viaje)
            return 0;
        return this.Viaje.TipoFecha == 1;
    };
    ResumenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-resumen',template:/*ion-inline-start:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\resumen\resumen.html"*/'<!--\n\n  Generated template for the HomePage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar color="first" >\n\n      <button  ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        <img src="assets/img/first-logo.png"/>\n\n      </ion-title>\n\n    </ion-navbar>\n\n    <ion-toolbar>\n\n      <ion-segment>\n\n        <h3>Detalle del viaje</h3>\n\n      </ion-segment>\n\n  </ion-toolbar>\n\n  </ion-header>\n\n  \n\n  \n\n<ion-content>\n\n    <ion-list style="margin-top:0.5em">\n\n      <ion-item>\n\n        <span class="label" ion-text color="secondary" >Origen</span>\n\n        <div class="italic prewarp">{{Viaje.Origen}}</div>\n\n      </ion-item>\n\n      <ion-item>\n\n        <span class="label" ion-text color="secondary" >Destino</span>\n\n        <div class="italic prewarp">{{Viaje.Destino}}</div>\n\n      </ion-item>\n\n      <ion-item>\n\n          <span class="label bold" ion-text >{{getIconoTipoMovil}}</span>\n\n          <span class="label bold" ion-text [hidden]="OcultarConRegreso()" item-end>Con regreso</span>\n\n      </ion-item>\n\n      <ion-item>\n\n        <button ion-button color="first1" style="width:100%" [outline]="esAhora()" (click)="cambiotipofecha(1)">\n\n          Ahora\n\n        </button>\n\n        <button ion-button color="first1" style="width:50%" [outline]="esFuturo()" (click)="cambiotipofecha(2)" item-end>\n\n          A futuro\n\n        </button>\n\n      </ion-item>\n\n      <ion-item [hidden]="OcultarFecha()" (click)="cambiotipofecha(2)">\n\n        {{Viaje.FechaHora}}\n\n      </ion-item>\n\n      <ion-item (click)="showObservaciones()">\n\n        <span class="italic" ion-text color="dark">{{getObservaciones}}</span>\n\n      <ion-icon name="md-arrow-dropright" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item>\n\n          <span class="italic" ion-text color="danger"><b>{{GetKm}}</b> km.</span>\n\n          <span class="italic" ion-text item-end color="danger"><b>{{GetDuracion}}</b> min.</span>\n\n      </ion-item>\n\n      <ion-item>\n\n          <span class="italic" ion-text color="dark">{{Viaje.TarifaNombre}}</span>\n\n          <span ion-text item-end color="danger"><b>{{Viaje.ImporteKm}}</b></span>\n\n      </ion-item>\n\n      <ion-item>\n\n        <span class="italic" ion-text color="dark">Costo de la espera</span>\n\n        <span ion-text item-end color="danger"><b>{{Viaje.ImporteEspera}}</b></span>\n\n      </ion-item>\n\n      <ion-item>\n\n        <span class="prewarp">{{espera}}</span>\n\n      </ion-item>\n\n    </ion-list>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n      <ion-segment>\n\n        <button  ion-button color="first1" block (click)="Pagar()">RESERVAR</button>\n\n      </ion-segment>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\resumen\resumen.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__services_custom_services__["a" /* CustomServices */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_date_picker__["a" /* DatePicker */]])
    ], ResumenPage);
    return ResumenPage;
}());

//# sourceMappingURL=resumen.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormaDePagoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_custom_services__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_clases__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mensajes_mensajes__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pago_tarjeta_pago_tarjeta__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nueva_tarjeta_nueva_tarjeta__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cliente_cliente__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
 Generated class for the PaymentMethodPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var FormaDePagoPage = /** @class */ (function () {
    function FormaDePagoPage(nav, params, service, modalCtrl) {
        var _this = this;
        this.nav = nav;
        this.params = params;
        this.service = service;
        this.modalCtrl = modalCtrl;
        this.Viaje = new __WEBPACK_IMPORTED_MODULE_3__models_clases__["e" /* Viaje */]();
        this.Clientes = [];
        this.Tarjetas = [];
        this.ImporteEfectivo = "";
        this.Viaje = this.params.data.Viaje;
        this.service.UserData().Clientes.forEach(function (element) {
            if (element.ClienteId != 1000)
                _this.Clientes.push(element);
        });
        this.ImporteEfectivo = "$ " + this.service.formatNumber(Math.ceil(this.service.getNumber(this.Viaje.ImporteKm) - this.service.getNumber(this.Viaje.ImporteKm) * this.Viaje.DescuentoEfectivo / 100));
        this.Tarjetas = this.service.UserData().Tarjetas;
        this.Tarjetas.forEach(function (value) { return value.Importe = _this.Viaje.ImporteKm; });
        this.service.GetNumeroViaje(function (data) {
            _this.Viaje.Reserva = data.Reserva;
        });
    }
    //FALTA LA PARTE DE CUENTA CORRIENTE
    FormaDePagoPage.prototype.CobrarPorCtaCte = function (id) {
        this.Viaje.ClienteId = id;
        this.Viaje.FormaPagoId = 2;
        this.Reservar();
    };
    FormaDePagoPage.prototype.CobrarEnEfectivo = function () {
        this.Viaje.FormaPagoId = 1;
        this.Viaje.ImporteKm = this.ImporteEfectivo;
        this.Reservar();
    };
    FormaDePagoPage.prototype.CobrarConTarjeta = function (tarjeta) {
        this.Viaje.FormaPagoId = 3;
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pago_tarjeta_pago_tarjeta__["a" /* PagoTarjetaPage */], {
            Tarjeta: tarjeta,
            Viaje: this.Viaje
        });
    };
    FormaDePagoPage.prototype.Reservar = function () {
        var _this = this;
        this.service.Reservar(this.Viaje, function (data) {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__mensajes_mensajes__["a" /* MensajesPage */], {
                titulo: "Reserva registrada correctamente",
                mensaje: "Su reserva quedó registrada con el número " + data.Id + ". Recibirá una notificación cuando el movil esté en camino."
            });
        });
    };
    FormaDePagoPage.prototype.nuevaTarjeta = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__nueva_tarjeta_nueva_tarjeta__["a" /* NuevaTarjetaPage */], { esModal: true });
        profileModal.onDidDismiss(function (data) {
            _this.Tarjetas = _this.service.UserData().Tarjetas;
            _this.Tarjetas.forEach(function (value) { return value.Importe = _this.Viaje.ImporteKm; });
        });
        profileModal.present();
    };
    FormaDePagoPage.prototype.nuevaCuenta = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__cliente_cliente__["a" /* ClientePage */], { esModal: true });
        profileModal.onDidDismiss(function (data) {
            _this.Clientes = new Array();
            _this.service.UserData().Clientes.forEach(function (element) {
                if (element.ClienteId != 1000)
                    _this.Clientes.push(element);
            });
        });
        profileModal.present();
    };
    FormaDePagoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-formadepago',template:/*ion-inline-start:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\formadepago\formadepago.html"*/'<!--\n\n  Generated template for the PaymentMethodPage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="first" >\n\n    <button  ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      <img src="assets/img/first-logo.png"/>\n\n    </ion-title>\n\n  </ion-navbar>\n\n  <ion-toolbar>\n\n    <ion-segment>\n\n      <h3>Método de pago</h3>\n\n    </ion-segment>\n\n</ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list class="list-full-border" radio-group>\n\n    <ion-item  (click)="CobrarEnEfectivo()">\n\n        <ion-icon name=\'cash\' item-start></ion-icon>\n\n        Pagar en efectivo\n\n        <ion-note item-end>\n\n        {{ImporteEfectivo}}\n\n        </ion-note>\n\n    </ion-item>\n\n    <ion-item *ngFor="let item of Tarjetas" (click)="CobrarConTarjeta(item)">\n\n        <ion-icon name=\'card\' item-start></ion-icon>\n\n        {{item.Nombre}} term. en {{item.UltimosCuatroDigitos}}\n\n        <ion-note item-end>\n\n        {{item.Importe}}\n\n        </ion-note>\n\n    </ion-item>\n\n    <ion-item class="item-cta-cte" *ngFor="let item of Clientes" (click)="CobrarPorCtaCte(item.ClienteId)">\n\n        A Cta. de {{item.Nombre}}\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-segment>\n\n      <button ion-button block color="danger" (click)="nuevaTarjeta()">NUEVA TARJETA</button>\n\n    </ion-segment>\n\n    <ion-segment>\n\n      <button ion-button block color="danger" (click)="nuevaCuenta()">ASOCIAR CTA. CTE.</button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n  '/*ion-inline-end:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\formadepago\formadepago.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_custom_services__["a" /* CustomServices */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], FormaDePagoPage);
    return FormaDePagoPage;
}());

//# sourceMappingURL=formadepago.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagoTarjetaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_clases__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_custom_services__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_mercadopago_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mensajes_mensajes__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the ProfilePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var PagoTarjetaPage = /** @class */ (function () {
    function PagoTarjetaPage(nav, params, service, mp) {
        this.nav = nav;
        this.params = params;
        this.service = service;
        this.mp = mp;
        this.Tarjeta = new __WEBPACK_IMPORTED_MODULE_2__models_clases__["c" /* Tarjeta */]();
        this.Viaje = new __WEBPACK_IMPORTED_MODULE_2__models_clases__["e" /* Viaje */]();
        this.Codigo = "";
        this.Tarjeta = this.params.data.Tarjeta;
        this.Viaje = this.params.data.Viaje;
    }
    PagoTarjetaPage.prototype.Pagar = function () {
        var _this = this;
        var form = document.querySelector('#formguardado');
        this.mp.GenerarToken(form, this.Viaje, this.Codigo, this.Tarjeta, function (data) {
            _this.service.Reservar(_this.Viaje, function (data) {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__mensajes_mensajes__["a" /* MensajesPage */], {
                    titulo: "Reserva registrada correctamente",
                    mensaje: "Su reserva quedó registrada con el número " + data.Id + ". Recibirá una notificación cuando el movil esté en camino."
                });
            });
        });
    };
    PagoTarjetaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pago-tarjeta',template:/*ion-inline-start:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\pago.tarjeta\pago.tarjeta.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar color="first" >\n\n      <button  ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        <img src="assets/img/first-logo.png"/>\n\n      </ion-title>\n\n    </ion-navbar>\n\n    <ion-toolbar>\n\n      <ion-segment>\n\n        <h3>Pago con tarjeta</h3>\n\n      </ion-segment>\n\n  </ion-toolbar>\n\n  </ion-header>\n\n\n\n<ion-content padding class="profile">\n\n  <img src="https://imgmp.mlstatic.com/org-img/banners/ar/medios/468X60.jpg" title="MercadoPago - Medios de pago" alt="MercadoPago - Medios de pago"/>\n\n  <form id="formguardado" role="form">\n\n    <ion-list padding>\n\n        <ion-item>\n\n          <ion-label item-start>Pagar</ion-label>\n\n          <ion-label item-end color="danger" style="font-weight: bold;text-align: right">{{Viaje.ImporteKm}}</ion-label>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>Con tarjeta</ion-label>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>{{Tarjeta.Nombre}} terminada en {{Tarjeta.UltimosCuatroDigitos}}</ion-label>\n\n        </ion-item>\n\n    <input type="hidden" data-checkout=\'cardId\' [ngModelOptions]="{standalone: true}" [(ngModel)]="Tarjeta.Id">\n\n      <ion-grid style="padding:0px">\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <ion-label style="margin: 13px;">CVV</ion-label>\n\n            <hr/>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <ion-input type="number" data-checkout="securityCode"  [ngModelOptions]="{standalone: true}" [(ngModel)]="Codigo" placeholder="XXXX" [brmasker]="{mask:\'0000\', type: \'num\', len:4}"></ion-input>\n\n            <hr/>\n\n          </ion-col>\n\n    </ion-row>\n\n    </ion-grid>\n\n  </ion-list>\n\n  </form>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n      <ion-segment>\n\n        <button  ion-button color="first1" block (click)="Pagar()">PAGAR</button>\n\n      </ion-segment>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n\n\n'/*ion-inline-end:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\pago.tarjeta\pago.tarjeta.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_custom_services__["a" /* CustomServices */], __WEBPACK_IMPORTED_MODULE_4__services_mercadopago_service__["a" /* MercadoPagoService */]])
    ], PagoTarjetaPage);
    return PagoTarjetaPage;
}());

//# sourceMappingURL=pago.tarjeta.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MensajesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_custom_services__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
 Generated class for the RegisterPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var MensajesPage = /** @class */ (function () {
    function MensajesPage(nav, params, service) {
        this.nav = nav;
        this.params = params;
        this.service = service;
        this.titulo = this.params.data.titulo;
        this.mensaje = this.params.data.mensaje;
    }
    MensajesPage.prototype.goToHome = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    MensajesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mensajes',template:/*ion-inline-start:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\mensajes\mensajes.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content class=" auth-bg">\n\n  <div class="auth-content">\n\n\n\n    <div class="light-bg">\n\n      <!-- Logo -->\n\n      <div padding text-center>\n\n        <p>\n\n          <img src="assets/img/first-logo.png"/>\n\n        </p>\n\n        <p ion-text color="dark" style="font-weight: bold" >Servicio de transporte de personas</p>\n\n        <p ion-text color="first1" >{{titulo}}</p>\n\n        <p ion-text color="secondary" >{{mensaje}}</p>\n\n      </div>\n\n\n\n      \n\n\n\n      <div padding>\n\n        <button  ion-button color="first1"  block (click)="goToHome()">\n\n          ir al inicio\n\n        </button>\n\n      </div>\n\n     \n\n  \n\n    </div>\n\n\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\mensajes\mensajes.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_custom_services__["a" /* CustomServices */]])
    ], MensajesPage);
    return MensajesPage;
}());

//# sourceMappingURL=mensajes.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnviarCodigoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_custom_services__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
 Generated class for the RegisterPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var EnviarCodigoPage = /** @class */ (function () {
    function EnviarCodigoPage(nav, fb, service) {
        this.nav = nav;
        this.fb = fb;
        this.service = service;
    }
    EnviarCodigoPage.prototype.enviaremail = function () {
        var _this = this;
        this.fb.auth.sendPasswordResetEmail(this.Email).then(function (reason) {
            _this.service.showAlert("Email de recuperación enviado", "Revise su casilla de correo electr para cambiar su contraseña.");
        });
    };
    EnviarCodigoPage.prototype.login = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    EnviarCodigoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-enviar-codigo',template:/*ion-inline-start:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\enviar.codigo\enviar.codigo.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content class=" auth-bg">\n\n  <div class="auth-content">\n\n\n\n    <div class="light-bg">\n\n      <!-- Logo -->\n\n      <div padding text-center>\n\n        <p>\n\n          <img src="assets/img/first-logo.png"/>\n\n        </p>\n\n        <p ion-text color="dark" style="font-weight: bold" >Servicio de transporte de personas</p>\n\n        <p ion-text color="first1" >Cambiar contraseña</p>\n\n      </div>\n\n\n\n      <!-- Login form -->\n\n      <form #loginForm="ngForm" autocomplete="off">\n\n      <ion-list class="list-form" padding>\n\n\n\n      <ion-item>\n\n          <ion-label stacked>Email</ion-label>\n\n          <ion-input type="email" [ngModelOptions]="{standalone: true}" [(ngModel)]="Email"></ion-input>\n\n      </ion-item>\n\n\n\n      </ion-list>\n\n      <div padding>\n\n        <button ion-button icon-start color="first1" block (click)="enviaremail()">\n\n          <ion-icon name="mail"></ion-icon>\n\n          enviar email\n\n        </button>\n\n      </div>\n\n    </form>\n\n    </div>\n\n\n\n    <!-- Other links -->\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col>\n\n          <span ion-text color="light" >Ya tiene cuenta?</span>\n\n        </ion-col>\n\n        <ion-col>\n\n          <span ion-text color="first1"  (click)="login()">Iniciar Sesión</span>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\enviar.codigo\enviar.codigo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_3__services_custom_services__["a" /* CustomServices */]])
    ], EnviarCodigoPage);
    return EnviarCodigoPage;
}());

//# sourceMappingURL=enviar.codigo.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_custom_services__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the SupportPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ContactPage = /** @class */ (function () {
    function ContactPage(nav, callNumber, service) {
        this.nav = nav;
        this.callNumber = callNumber;
        this.service = service;
    }
    ContactPage.prototype.llamar = function () {
        this.callNumber.callNumber("+5402304473210", true);
    };
    ContactPage.prototype.enviar = function () {
        var _this = this;
        setTimeout(function () { _this.service.showAlert("mensaje enviado", "su consulta será respondida a la brevedad."); }, 500);
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\contact\contact.html"*/'<!--\n\n  Generated template for the SupportPage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar color="first" >\n\n      <button  ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        <img src="assets/img/first-logo.png"/>\n\n      </ion-title>\n\n    </ion-navbar>\n\n    <ion-toolbar>\n\n      <ion-segment>\n\n        <h3>contactanos</h3>\n\n      </ion-segment>\n\n  </ion-toolbar>\n\n  </ion-header>\n\n\n\n<ion-content padding class="support">\n\n  <div class="feedback-form padding">\n\n    <textarea name="feed_back" placeholder="Envianos tu comentario..."></textarea>\n\n    <button  ion-button block color="first1" (click)="enviar()" >ENVIAR MENSAJE</button>\n\n    <div text-center>o también por</div>\n\n    <button  ion-button button block color="dark" (click)="llamar()">CONTACTO TELEFONICO</button>\n\n  </div>\n\n  <p style="text-align:center">Remises First SRL</p>\n\n  <p style="text-align:center">Uruguay 4888, Beccar, San Isidro, Buenos Aires</p>\n\n  <p style="text-align:center">© Copyright 2018 | firstsrl.com.ar</p> \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_3__services_custom_services__["a" /* CustomServices */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_custom_services__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cambiar_clave_cambiar_clave__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__enviar_codigo_enviar_codigo__ = __webpack_require__(506);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var LoginPage = /** @class */ (function () {
    function LoginPage(nav, service, fb) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.fb = fb;
        if (this.service.GetValidandoUsuario()) {
            this.service.SetValidandoUsuario(null);
            this.service.showLoading();
            this.fb.auth.getRedirectResult().then(function (result) {
                if (result.user != null) {
                    var user = result.user;
                    _this.service.Login(user.email, user.displayName, user.phoneNumber, user.photoURL, function () {
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                    });
                }
            }).catch(function (error) {
                _this.service.presentToast(error.message);
            });
        }
    }
    LoginPage.prototype.signup = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.changepassword = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__enviar_codigo_enviar_codigo__["a" /* EnviarCodigoPage */]);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        if (this.validar()) {
            this.service.SetValidandoUsuario(null);
            this.fb.auth.signInWithEmailAndPassword(this.username, this.password).then(function (result) {
                var user = result.user;
                _this.service.Login(user.email, user.displayName, user.phoneNumber, user.photoURL, function () {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                });
            }, function () {
                _this.service.presentToast("Usuario o contraseña inválido.");
            });
        }
    };
    LoginPage.prototype.logingoogle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var provider;
            return __generator(this, function (_a) {
                provider = new __WEBPACK_IMPORTED_MODULE_7_firebase_app__["auth"].GoogleAuthProvider();
                provider.setCustomParameters({ prompt: "select_account" });
                this.service.SetValidandoUsuario("true");
                this.service.showLoading();
                this.fb.auth.signInWithRedirect(provider);
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.loginfacebook = function () {
        return __awaiter(this, void 0, void 0, function () {
            var provider;
            return __generator(this, function (_a) {
                provider = new __WEBPACK_IMPORTED_MODULE_7_firebase_app__["auth"].FacebookAuthProvider();
                provider.setCustomParameters({ prompt: "select_account" });
                this.service.SetValidandoUsuario("true");
                this.service.showLoading();
                this.fb.auth.signInWithRedirect(provider);
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.onsuccess = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.validar = function () {
        if (this.username.length < 6 || this.username.length > 100) {
            this.service.presentToast("El usuario ingresado no tiene el formato correcto (entre 6 y 100 caracteres).");
            return false;
        }
        if (this.password.length < 6 || this.password.length > 30) {
            this.service.presentToast("La contraseña ingresada no tiene el formato correcto (entre 6 y 30 caracteres).");
            return false;
        }
        return true;
    };
    LoginPage.prototype.goToValidar = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__cambiar_clave_cambiar_clave__["a" /* CambiarClavePage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content class="auth-bg">\n\n\n\n  <div class="auth-content">\n\n\n\n    <div class="light-bg">\n\n\n\n      <!-- Logo -->\n\n      <div padding text-center>\n\n        <p>\n\n          <img src="assets/img/first-logo.png"/>\n\n        </p>\n\n        <p ion-text color="dark" style="font-weight: bold" >Servicio de transporte de personas</p>\n\n        <p ion-text color="first1" >inicio de sesión</p>\n\n      </div>\n\n\n\n      <!-- Login form -->\n\n      <ion-list class="list-form" padding>\n\n\n\n        <ion-item>\n\n          <ion-input type="text" [ngModelOptions]="{standalone: true}" placeholder="Email" [(ngModel)]="username"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-input type="password" [ngModelOptions]="{standalone: true}" placeholder="Contraseña" [(ngModel)]="password"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <button  ion-button large color="first1" block (click)="login()">\n\n            Iniciar Sesión\n\n          </button>\n\n        </ion-item>\n\n      </ion-list>\n\n      <button  ion-button icon-start color="google" block (click)="logingoogle()">\n\n        <ion-icon name="logo-googleplus"></ion-icon>\n\n        Ingresar con Google+\n\n      </button>\n\n      <hr/>\n\n      <button ion-button icon-start color="primary" block (click)="signup()">\n\n        <ion-icon name="checkmark-circle-outline"></ion-icon>\n\n        Registrarse\n\n      </button>\n\n      <ion-grid padding style="padding-top: 0">\n\n        <ion-row>\n\n          <ion-col>\n\n            <span ion-text color="first1" (click)="changepassword()">olvidó su contraseña?</span>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n\n\n\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__services_custom_services__["a" /* CustomServices */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["AngularFireAuth"]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_custom_services__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viaje_pedido_viaje_pedido__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__viaje_finalizado_viaje_finalizado__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__viaje_encurso_viaje_encurso__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__viaje_encamino_viaje_encamino__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__viaje_viaje__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tarjetas_tarjetas__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_market__ = __webpack_require__(505);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/*
 Generated class for the HomePage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(nav, platform, service, market) {
        var _this = this;
        this.nav = nav;
        this.platform = platform;
        this.service = service;
        this.market = market;
        this.Viajes = new Array();
        this.Version = 2;
        this.OcultarVersion = true;
        if (!this.service.ValidarUsuario())
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__profile_profile__["a" /* ProfilePage */], { Mensaje: true });
        else if (!this.service.ValidarTarjetas() && !this.service.ValidarClientes())
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__tarjetas_tarjetas__["a" /* TarjetasPage */], { Mensaje: true });
        else {
            this.platform.ready().then(function () {
                _this.service.GetViajes(function (data) {
                    _this.Viajes = data.Viajes;
                    _this.OcultarVersion = _this.Version == data.Version;
                });
            });
            this.platform.resume.subscribe(function () {
                _this.service.GetViajes(function (data) {
                    _this.Viajes = data.Viajes;
                    _this.OcultarVersion = _this.Version == data.Version;
                });
            });
        }
    }
    HomePage.prototype.getviaje = function (item) {
        localStorage.setItem("reserva_actual", item.Reserva);
        switch (item.EstadoId) {
            case 2:
                this.nav.push(__WEBPACK_IMPORTED_MODULE_3__viaje_pedido_viaje_pedido__["a" /* ViajePedidoPage */]);
                break;
            case 3:
                this.nav.push(__WEBPACK_IMPORTED_MODULE_6__viaje_encamino_viaje_encamino__["a" /* ViajeEnCaminoPage */]);
                break;
            case 5:
                this.nav.push(__WEBPACK_IMPORTED_MODULE_5__viaje_encurso_viaje_encurso__["a" /* ViajeEnCursoPage */]);
                break;
            case 7:
                this.nav.push(__WEBPACK_IMPORTED_MODULE_4__viaje_finalizado_viaje_finalizado__["a" /* ViajeFinalizadoPage */]);
                break;
        }
    };
    HomePage.prototype.setcolor = function (estadoid) {
        return this.service.setColorEstado(estadoid);
    };
    HomePage.prototype.nuevoviaje = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__viaje_viaje__["a" /* ViajePage */], { Reserva: 0 });
    };
    HomePage.prototype.ocultarmensaje = function () {
        return this.Viajes.length > 0;
    };
    HomePage.prototype.actualizar = function () {
        var _this = this;
        this.service.GetViajes(function (data) {
            _this.Viajes = data;
        });
    };
    HomePage.prototype.GoToVersion = function () {
        this.market.open('ar.first.clientes');
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], HomePage.prototype, "mapElement", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\home\home.html"*/'<!--\n\n  Generated template for the HomePage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="first" >\n\n    <button  ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      <img src="assets/img/first-logo.png"/>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content style="background-image:url(\'https://firstsa.net/content/img/bg.jpg\');background-size: 100% 100%">\n\n  <button ion-button style="float: right" color="light" round outline item-end small (click)="actualizar()"><ion-icon name="refresh"></ion-icon></button>\n\n  <ion-card style="margin-top:200px" (swipe)="actualizar()">\n\n    <ion-card-header>\n\n      <span>Tus Viajes</span>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <p style="text-align: center;" [hidden]="ocultarmensaje()">No hay viajes pendientes</p>\n\n      <button ion-item (click)="getviaje(item)" *ngFor="let item of Viajes">\n\n        <h3>{{item.Reserva}} - {{item.FechaHora}} - <ion-badge [color]="setcolor(item.EstadoId)">{{item.Estado}}</ion-badge></h3>\n\n        <p style="display:block">{{item.Origen}}</p>\n\n      </button>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-segment>\n\n      <button ion-button block icon-end color="first1" (click)="nuevoviaje()">\n\n        PEDIR UN MOVIL\n\n        <ion-icon name="pin"></ion-icon>\n\n      </button>\n\n    </ion-segment>\n\n    <ion-segment [hidden]="OcultarVersion"> \n\n      <button ion-button block icon-end color="primary" (click)="GoToVersion()">\n\n        ACTUALIZAR VERSION\n\n        <ion-icon name="checkmark-circle-outline"></ion-icon>\n\n      </button>\n\n    </ion-segment>\n\n</ion-toolbar>\n\n</ion-footer>\n\n\n\n'/*ion-inline-end:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__services_custom_services__["a" /* CustomServices */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_market__["a" /* Market */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(529);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(863);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(864);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(865);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_history_history__ = __webpack_require__(866);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_resumen_resumen__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_places_places__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_register_register__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_cliente_cliente__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_conductor_conductor__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_contact_contact__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_formadepago_formadepago__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_generar_codigo_generar_codigo__ = __webpack_require__(867);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_enviar_codigo_enviar_codigo__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_cambiar_clave_cambiar_clave__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_mensajes_mensajes__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_base_service__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_custom_services__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_native_geocoder__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_social_sharing__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angularfire2__ = __webpack_require__(868);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angularfire2_auth__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_firebase__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__config__ = __webpack_require__(869);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_FcmProvider__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_tarjetas_tarjetas__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_nueva_tarjeta_nueva_tarjeta__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_mercadopago_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_brmasker_ionic_3__ = __webpack_require__(870);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_angular2_moment__ = __webpack_require__(873);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_37_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_pago_tarjeta_pago_tarjeta__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__services_here_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_viaje_pedido_viaje_pedido__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_viaje_encamino_viaje_encamino__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_viaje_encurso_viaje_encurso__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_viaje_finalizado_viaje_finalizado__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_viaje_viaje__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ionic_native_call_number__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ionic_native_geolocation__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__services_google_maps_service__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ionic_native_google_maps__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ionic_native_date_picker__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__ionic_native_market__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51_ionic3_star_rating__ = __webpack_require__(875);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// import pages











































__WEBPACK_IMPORTED_MODULE_28_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_31__config__["a" /* firebaseConfig */].fire);
// end import pages
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_resumen_resumen__["a" /* ResumenPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_places_places__["a" /* PlacesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_conductor_conductor__["a" /* ConductorPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_formadepago_formadepago__["a" /* FormaDePagoPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_generar_codigo_generar_codigo__["a" /* GenerarCodigoPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_enviar_codigo_enviar_codigo__["a" /* EnviarCodigoPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_cambiar_clave_cambiar_clave__["a" /* CambiarClavePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_mensajes_mensajes__["a" /* MensajesPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_tarjetas_tarjetas__["a" /* TarjetasPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_nueva_tarjeta_nueva_tarjeta__["a" /* NuevaTarjetaPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_pago_tarjeta_pago_tarjeta__["a" /* PagoTarjetaPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_viaje_viaje__["a" /* ViajePage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_viaje_pedido_viaje_pedido__["a" /* ViajePedidoPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_viaje_encamino_viaje_encamino__["a" /* ViajeEnCaminoPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_viaje_encurso_viaje_encurso__["a" /* ViajeEnCursoPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_viaje_finalizado_viaje_finalizado__["a" /* ViajeFinalizadoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_cliente_cliente__["a" /* ClientePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {
                    scrollPadding: false,
                    scrollAssist: true,
                    autoFocusAssist: false
                }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_28_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_31__config__["a" /* firebaseConfig */].fire),
                __WEBPACK_IMPORTED_MODULE_29_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_36_brmasker_ionic_3__["a" /* BrMaskerModule */],
                __WEBPACK_IMPORTED_MODULE_37_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_51_ionic3_star_rating__["a" /* StarRatingModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */])
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_resumen_resumen__["a" /* ResumenPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_places_places__["a" /* PlacesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_conductor_conductor__["a" /* ConductorPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_formadepago_formadepago__["a" /* FormaDePagoPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_generar_codigo_generar_codigo__["a" /* GenerarCodigoPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_enviar_codigo_enviar_codigo__["a" /* EnviarCodigoPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_cambiar_clave_cambiar_clave__["a" /* CambiarClavePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_mensajes_mensajes__["a" /* MensajesPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_tarjetas_tarjetas__["a" /* TarjetasPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_nueva_tarjeta_nueva_tarjeta__["a" /* NuevaTarjetaPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_pago_tarjeta_pago_tarjeta__["a" /* PagoTarjetaPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_viaje_viaje__["a" /* ViajePage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_viaje_pedido_viaje_pedido__["a" /* ViajePedidoPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_viaje_encamino_viaje_encamino__["a" /* ViajeEnCaminoPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_viaje_encurso_viaje_encurso__["a" /* ViajeEnCursoPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_viaje_finalizado_viaje_finalizado__["a" /* ViajeFinalizadoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_cliente_cliente__["a" /* ClientePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                /* import services */
                __WEBPACK_IMPORTED_MODULE_24__services_base_service__["a" /* BaseService */],
                __WEBPACK_IMPORTED_MODULE_25__services_custom_services__["a" /* CustomServices */],
                __WEBPACK_IMPORTED_MODULE_39__services_here_service__["a" /* HereService */],
                __WEBPACK_IMPORTED_MODULE_47__services_google_maps_service__["a" /* GoogleMapsService */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_29_angularfire2_auth__["AngularFireAuth"],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_firebase__["a" /* Firebase */],
                __WEBPACK_IMPORTED_MODULE_32__services_FcmProvider__["a" /* FcmProvider */],
                __WEBPACK_IMPORTED_MODULE_35__services_mercadopago_service__["a" /* MercadoPagoService */],
                __WEBPACK_IMPORTED_MODULE_45__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_46__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_48__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_49__ionic_native_date_picker__["a" /* DatePicker */],
                __WEBPACK_IMPORTED_MODULE_50__ionic_native_market__["a" /* Market */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViajePedidoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_clases__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_custom_services__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mensajes_mensajes__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__viaje_encamino_viaje_encamino__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__viaje_encurso_viaje_encurso__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__viaje_finalizado_viaje_finalizado__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/*
  Generated class for the ProfilePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ViajePedidoPage = /** @class */ (function () {
    function ViajePedidoPage(nav, params, platform, service, callNumber) {
        var _this = this;
        this.nav = nav;
        this.params = params;
        this.platform = platform;
        this.service = service;
        this.callNumber = callNumber;
        this.Viaje = new __WEBPACK_IMPORTED_MODULE_2__models_clases__["e" /* Viaje */]();
        this.platform.ready().then(function () {
            _this.getviaje({ Reserva: localStorage.getItem("reserva_actual") });
        });
        this.platform.resume.subscribe(function () {
            _this.getviaje({ Reserva: localStorage.getItem("reserva_actual") });
        });
    }
    ViajePedidoPage.prototype.getviaje = function (item) {
        var _this = this;
        //localStorage.removeItem("reserva_actual");
        this.service.GetViaje(item.Reserva, function (data) {
            _this.Viaje = data.Viaje;
            switch (data.Viaje.EstadoId) {
                case 3:
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_6__viaje_encamino_viaje_encamino__["a" /* ViajeEnCaminoPage */], { Viaje: data.Viaje, Chofer: data.Chofer });
                    break;
                case 5:
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_7__viaje_encurso_viaje_encurso__["a" /* ViajeEnCursoPage */], { Viaje: data.Viaje, Chofer: data.Chofer });
                    break;
                case 7:
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_8__viaje_finalizado_viaje_finalizado__["a" /* ViajeFinalizadoPage */], { Viaje: data.Viaje, Chofer: data.Chofer });
                    break;
                case 9:
                    localStorage.removeItem("reserva_actual");
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__mensajes_mensajes__["a" /* MensajesPage */], { titulo: "Reserva cancelada", mensaje: "La reserva N°" + _this.Viaje.Reserva + " ha sido cancelada." });
                    break;
            }
        });
    };
    ViajePedidoPage.prototype.cancelarviaje = function () {
        var _this = this;
        this.service.ShowConfirm("Está seguro de cancelar la reserva?", function () {
            _this.service.CancelarViaje(_this.Viaje.Reserva, function (data) {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__mensajes_mensajes__["a" /* MensajesPage */], { titulo: "Cancelación de Reserva", mensaje: "La reserva N°" + _this.Viaje.Reserva + " ha sido cancelada correctamente. No se generaron costos a su cuenta." });
            });
        });
    };
    ViajePedidoPage.prototype.llamar = function () {
        this.callNumber.callNumber("+543516790100", true);
    };
    ViajePedidoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-viaje-pedido',template:/*ion-inline-start:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\viaje.pedido\viaje.pedido.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar color="first" >\n\n      <button  ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        <img src="assets/img/first-logo.png"/>\n\n      </ion-title>\n\n    </ion-navbar>\n\n    <ion-toolbar>\n\n      <ion-segment>\n\n        <h3>viaje pedido</h3>\n\n      </ion-segment>\n\n  </ion-toolbar>\n\n  </ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list padding>\n\n      <ion-item>\n\n        <ion-label stacked class="labelfirst">Reserva</ion-label>\n\n        <ion-label class="prewarp texto">{{Viaje.Reserva}}</ion-label>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label stacked class="labelfirst">Hora</ion-label>\n\n        <ion-label class="prewarp texto">{{Viaje.FechaHora}}</ion-label>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label stacked class="labelfirst">Origen</ion-label>\n\n        <ion-label class="prewarp texto">{{Viaje.Origen}}</ion-label>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label stacked class="labelfirst">Destino</ion-label>\n\n        <ion-label class="prewarp texto">{{Viaje.Destino}}</ion-label>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label stacked class="labelfirst">Costo estimado</ion-label>\n\n        <ion-label class="prewarp texto">{{Viaje.ImporteKm}}</ion-label>\n\n    </ion-item>\n\n    <ion-item>\n\n        <p class="prewarp" color="danger">Aún no tienes móvil asignado para este viaje.</p>\n\n    </ion-item>\n\n   </ion-list>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n    <ion-toolbar>\n\n      <ion-segment>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col>\n\n                <button ion-button color="primary" block (click)="llamar()">\n\n                  LLAMAR A FIRST\n\n                </button>\n\n            </ion-col>\n\n            <ion-col>\n\n                <button ion-button color="danger" block (click)="cancelarviaje()">\n\n                  CANCELAR VIAJE\n\n                </button>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-segment>\n\n    </ion-toolbar>\n\n  </ion-footer>\n\n  \n\n'/*ion-inline-end:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\viaje.pedido\viaje.pedido.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__services_custom_services__["a" /* CustomServices */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */]])
    ], ViajePedidoPage);
    return ViajePedidoPage;
}());

//# sourceMappingURL=viaje.pedido.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViajeEnCaminoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_clases__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_custom_services__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mensajes_mensajes__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_here_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__viaje_pedido_viaje_pedido__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__viaje_encurso_viaje_encurso__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__viaje_finalizado_viaje_finalizado__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__conductor_conductor__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/*
  Generated class for the ProfilePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ViajeEnCaminoPage = /** @class */ (function () {
    function ViajeEnCaminoPage(nav, params, service, callNumber, here, ref, platform) {
        var _this = this;
        this.nav = nav;
        this.params = params;
        this.service = service;
        this.callNumber = callNumber;
        this.here = here;
        this.ref = ref;
        this.platform = platform;
        this.Viaje = new __WEBPACK_IMPORTED_MODULE_2__models_clases__["e" /* Viaje */]();
        this.Chofer = new __WEBPACK_IMPORTED_MODULE_2__models_clases__["b" /* Chofer */]();
        this.Minutos = "";
        this.platform.ready().then(function () {
            _this.getviaje({ Reserva: localStorage.getItem("reserva_actual") });
        });
        this.platform.resume.subscribe(function () {
            _this.getviaje({ Reserva: localStorage.getItem("reserva_actual") });
        });
    }
    ViajeEnCaminoPage.prototype.initializeMap = function () {
        this.map = this.here.CreateMap(document.getElementById('map'));
        var latLng1 = this.here.GetPosicionTexto(this.Chofer.UltimaPosicion);
        this.markerOrigen = this.here.CreateMarker(this.map, latLng1.lat, latLng1.lng, "assets/img/icono-auto.png", false);
        var latLng2 = this.here.GetPosicionTexto(this.Viaje.OrigenPosicion);
        this.markerDestino = this.here.CreateMarker(this.map, latLng2.lat, latLng2.lng, "assets/img/icono-user.png", false);
    };
    ViajeEnCaminoPage.prototype.getviaje = function (item) {
        var _this = this;
        //localStorage.removeijmItem("reserva_actual");
        this.service.GetViaje(item.Reserva, function (data) {
            _this.Viaje = data.Viaje;
            _this.Chofer = data.Chofer;
            _this.getTrayecto();
            _this.initializeMap();
            switch (data.Viaje.EstadoId) {
                case 2:
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_7__viaje_pedido_viaje_pedido__["a" /* ViajePedidoPage */], { Viaje: data.Viaje });
                    break;
                case 5:
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_8__viaje_encurso_viaje_encurso__["a" /* ViajeEnCursoPage */], { Viaje: data.Viaje, Chofer: data.Chofer });
                    break;
                case 7:
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_9__viaje_finalizado_viaje_finalizado__["a" /* ViajeFinalizadoPage */], { Viaje: data.Viaje, Chofer: data.Chofer });
                    break;
                case 9:
                    localStorage.removeItem("reserva_actual");
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__mensajes_mensajes__["a" /* MensajesPage */], { titulo: "Reserva cancelada", mensaje: "La reserva N°" + _this.Viaje.Reserva + " ha sido cancelada." });
                    break;
            }
        });
    };
    ViajeEnCaminoPage.prototype.cancelarviaje = function () {
        var _this = this;
        this.service.ShowConfirm("Está seguro de cancelar la reserva?", function () {
            _this.service.CancelarViaje(_this.Viaje.Reserva, function (data) {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__mensajes_mensajes__["a" /* MensajesPage */], { titulo: "Cancelación de Reserva", mensaje: "La reserva N°" + _this.Viaje.Reserva + " ha sido cancelada correctamente. Esta cancelación tiene un costo a su cuenta." });
            });
        });
    };
    ViajeEnCaminoPage.prototype.llamar = function () {
        this.callNumber.callNumber(this.Chofer.Telefono, true);
    };
    ViajeEnCaminoPage.prototype.getTrayecto = function () {
        var _this = this;
        this.here.CreateTrayecto(this.Chofer.UltimaPosicion, this.Viaje.OrigenPosicion, function (km, duracion, trayecto) {
            _this.trayecto = trayecto;
            _this.map.addObjects([_this.trayecto]);
            _this.map.setViewBounds(_this.trayecto.getBounds());
            _this.Minutos = parseInt((duracion / 60).toString()).toString() + " min. aprox.";
            _this.ref.detectChanges();
        });
    };
    ViajeEnCaminoPage.prototype.refrescar = function () {
        var _this = this;
        this.service.GetViaje(this.Viaje.Reserva, function (data) {
            _this.Viaje = data.Viaje;
            _this.Chofer = data.Chofer;
            _this.getTrayecto();
        });
    };
    ViajeEnCaminoPage.prototype.getChofer = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_10__conductor_conductor__["a" /* ConductorPage */], { Chofer: this.Chofer });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ViajeEnCaminoPage.prototype, "mapElement", void 0);
    ViajeEnCaminoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-viaje-encamino',template:/*ion-inline-start:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\viaje.encamino\viaje.encamino.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar color="first" >\n\n      <button  ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        <img src="assets/img/first-logo.png"/>\n\n      </ion-title>\n\n    </ion-navbar>\n\n    <ion-toolbar>\n\n      <ion-segment>\n\n        <h3>movil en camino</h3>\n\n      </ion-segment>\n\n  </ion-toolbar>\n\n  </ion-header>\n\n\n\n\n\n  <ion-content>\n\n      <div #map id="map" style="height: 100%;width: 100%;padding-bottom: 3em"></div>\n\n      <ion-list style="margin-top:-50px;">\n\n          <ion-item>\n\n              <ion-label class="prewarp texto">Llega a buscarte en {{Minutos}}</ion-label>\n\n              <button ion-button color="dark" round outline item-end (click)="refrescar()"><ion-icon name="refresh"></ion-icon></button>\n\n            </ion-item>\n\n     </ion-list>\n\n     <ion-fab bottom right style="margin-bottom:3em;margin-right: 10px;">\n\n        <button ion-fab color="first1" (click)="getChofer()">\n\n          <ion-icon name="contact"></ion-icon>\n\n        </button>\n\n      </ion-fab>\n\n    \n\n  </ion-content>\n\n  <ion-footer>\n\n      <ion-toolbar>\n\n        <ion-segment>\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col>\n\n                  <button  ion-button color="primary" block (click)="llamar()">LLAMAR AL CHOFER</button>\n\n              </ion-col>\n\n              <ion-col>\n\n                  <button  ion-button color="danger" block (click)="cancelarviaje()">CANCELAR VIAJE</button>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n        </ion-segment>\n\n      </ion-toolbar>\n\n    </ion-footer>\n\n    \n\n  '/*ion-inline-end:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\viaje.encamino\viaje.encamino.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_custom_services__["a" /* CustomServices */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_6__services_here_service__["a" /* HereService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], ViajeEnCaminoPage);
    return ViajeEnCaminoPage;
}());

//# sourceMappingURL=viaje.encamino.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViajeEnCursoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_clases__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_custom_services__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_here_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__viaje_encamino_viaje_encamino__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__viaje_pedido_viaje_pedido__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__viaje_finalizado_viaje_finalizado__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mensajes_mensajes__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__conductor_conductor__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/*
  Generated class for the ProfilePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ViajeEnCursoPage = /** @class */ (function () {
    function ViajeEnCursoPage(nav, service, gmapservice, here, ref, socialSharing, platform) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.gmapservice = gmapservice;
        this.here = here;
        this.ref = ref;
        this.socialSharing = socialSharing;
        this.platform = platform;
        this.Viaje = new __WEBPACK_IMPORTED_MODULE_2__models_clases__["e" /* Viaje */]();
        this.Chofer = new __WEBPACK_IMPORTED_MODULE_2__models_clases__["b" /* Chofer */]();
        this.Posicion = "";
        this.Minutos = "";
        this.platform.ready().then(function () {
            _this.getviaje({ Reserva: localStorage.getItem("reserva_actual") });
        });
        this.platform.resume.subscribe(function () {
            _this.getviaje({ Reserva: localStorage.getItem("reserva_actual") });
        });
        this.gmap = this.gmapservice.create("gmap");
    }
    ViajeEnCursoPage.prototype.initializeMap = function () {
        this.map = this.here.CreateMap(document.getElementById('map'));
        var latLng1 = this.here.GetPosicionTexto(this.Posicion);
        this.markerOrigen = this.here.CreateMarker(this.map, latLng1.lat, latLng1.lng, "assets/img/icono-auto.png", false);
        var latLng2 = this.here.GetPosicionTexto(this.Viaje.DestinoPosicion);
        this.markerDestino = this.here.CreateMarker(this.map, latLng2.lat, latLng2.lng, "assets/img/icono-casa.png", false);
    };
    ViajeEnCursoPage.prototype.getviaje = function (item) {
        var _this = this;
        //localStorage.removeItem("reserva_actual");
        this.service.GetViaje(item.Reserva, function (data) {
            _this.Viaje = data.Viaje;
            _this.Chofer = data.Chofer;
            _this.here.GetPosicionActual(_this.gmap, function (posicion, latlng) {
                _this.Posicion = posicion;
                _this.initializeMap();
                _this.getTrayecto();
            });
            switch (data.Viaje.EstadoId) {
                case 2:
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_8__viaje_pedido_viaje_pedido__["a" /* ViajePedidoPage */], { Viaje: data.Viaje });
                    break;
                case 3:
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_7__viaje_encamino_viaje_encamino__["a" /* ViajeEnCaminoPage */], { Viaje: data.Viaje, Chofer: data.Chofer });
                    break;
                case 7:
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_9__viaje_finalizado_viaje_finalizado__["a" /* ViajeFinalizadoPage */], { Viaje: data.Viaje, Chofer: data.Chofer });
                    break;
                case 9:
                    localStorage.removeItem("reserva_actual");
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__mensajes_mensajes__["a" /* MensajesPage */], { titulo: "Reserva cancelada", mensaje: "La reserva N°" + _this.Viaje.Reserva + " ha sido cancelada." });
                    break;
            }
        });
    };
    ViajeEnCursoPage.prototype.cancelarviaje = function () {
        var _this = this;
        this.service.ShowConfirm("Está seguro de cancelar la reserva?", function () {
            _this.service.CancelarViaje(_this.Viaje.Reserva, function (data) {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__mensajes_mensajes__["a" /* MensajesPage */], { titulo: "Cancelación de Reserva", mensaje: "La reserva N°" + _this.Viaje.Reserva + " ha sido cancelada correctamente. Esta cancelación tiene un costo a su cuenta." });
            });
        });
    };
    ViajeEnCursoPage.prototype.compartir = function () {
        this.socialSharing.shareViaWhatsApp("Estoy viajando con Remises First. En un " + this.Chofer.Vehiculo + ", conducido por: " + this.Chofer.Nombre + ". Llego a " + this.Viaje.Destino + " en " + this.Minutos);
    };
    ViajeEnCursoPage.prototype.getTrayecto = function () {
        var _this = this;
        this.here.CreateTrayecto(this.Posicion, this.Viaje.DestinoPosicion, function (km, duracion, trayecto) {
            _this.trayecto = trayecto;
            _this.map.addObjects([_this.trayecto]);
            _this.map.setViewBounds(_this.trayecto.getBounds());
            _this.Minutos = parseInt((duracion / 60).toString()).toString() + " min. aprox.";
            _this.ref.detectChanges();
        });
    };
    ViajeEnCursoPage.prototype.refrescar = function () {
        var _this = this;
        this.service.GetViaje(this.Viaje.Reserva, function (data) {
            _this.Viaje = data.Viaje;
            _this.Chofer = data.Chofer;
            _this.here.GetPosicionActual(_this.gmap, function (posicion, latlng) {
                _this.Posicion = posicion;
                _this.getTrayecto();
            });
        });
    };
    ViajeEnCursoPage.prototype.getChofer = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_11__conductor_conductor__["a" /* ConductorPage */], { Chofer: this.Chofer });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ViajeEnCursoPage.prototype, "mapElement", void 0);
    ViajeEnCursoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-viaje-encurso',template:/*ion-inline-start:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\viaje.encurso\viaje.encurso.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar color="first" >\n\n      <button  ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        <img src="assets/img/first-logo.png"/>\n\n      </ion-title>\n\n    </ion-navbar>\n\n    <ion-toolbar>\n\n      <ion-segment>\n\n        <h3>viaje en curso</h3>\n\n      </ion-segment>\n\n  </ion-toolbar>\n\n  </ion-header>\n\n\n\n\n\n  <ion-content>\n\n      <div #map id="map" style="height: 100%;width: 100%;padding-bottom: 3em"></div>\n\n      <div id="gmap" style="display: none"></div>\n\n    <ion-list style="margin-top:-50px;">\n\n        <ion-item>\n\n            <ion-label class="prewarp texto">Llega a destino en: {{Minutos}}</ion-label>\n\n            <button ion-button color="dark" round outline item-end (click)="refrescar()"><ion-icon name="refresh"></ion-icon></button>\n\n        </ion-item>\n\n     </ion-list>\n\n    <ion-fab bottom right style="margin-bottom:3em;margin-right: 10px;">\n\n        <button ion-fab color="first1" (click)="getChofer()">\n\n            <ion-icon name="user"></ion-icon>\n\n        </button>\n\n    </ion-fab>\n\n    \n\n  </ion-content>\n\n  <ion-footer>\n\n      <ion-toolbar>\n\n        <ion-segment>\n\n            <button  ion-button color="primary" block (click)="compartir()">\n\n                COMPARTIR UBICACIÓN\n\n            </button>\n\n        </ion-segment>\n\n      </ion-toolbar>\n\n    </ion-footer>\n\n    \n\n  '/*ion-inline-end:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\viaje.encurso\viaje.encurso.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__services_custom_services__["a" /* CustomServices */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__["a" /* GoogleMaps */],
            __WEBPACK_IMPORTED_MODULE_4__services_here_service__["a" /* HereService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], ViajeEnCursoPage);
    return ViajeEnCursoPage;
}());

//# sourceMappingURL=viaje.encurso.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViajeFinalizadoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_clases__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_custom_services__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mensajes_mensajes__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__viaje_encamino_viaje_encamino__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__viaje_encurso_viaje_encurso__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__viaje_pedido_viaje_pedido__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
  Generated class for the ProfilePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ViajeFinalizadoPage = /** @class */ (function () {
    function ViajeFinalizadoPage(nav, platform, service) {
        var _this = this;
        this.nav = nav;
        this.platform = platform;
        this.service = service;
        this.Viaje = new __WEBPACK_IMPORTED_MODULE_2__models_clases__["e" /* Viaje */]();
        this.Chofer = new __WEBPACK_IMPORTED_MODULE_2__models_clases__["b" /* Chofer */]();
        this.CalificacionChofer = 3;
        this.CalificacionMovil = 3;
        this.platform.ready().then(function () {
            _this.getviaje({ Reserva: localStorage.getItem("reserva_actual") });
        });
        this.platform.resume.subscribe(function () {
            _this.getviaje({ Reserva: localStorage.getItem("reserva_actual") });
        });
    }
    ViajeFinalizadoPage.prototype.getviaje = function (item) {
        var _this = this;
        //localStorage.removeItem("reserva_actual");
        this.service.GetViaje(item.Reserva, function (data) {
            _this.Viaje = data.Viaje;
            _this.Chofer = data.Chofer;
            switch (data.Viaje.EstadoId) {
                case 2:
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_7__viaje_pedido_viaje_pedido__["a" /* ViajePedidoPage */], { Viaje: data.Viaje });
                    break;
                case 3:
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_5__viaje_encamino_viaje_encamino__["a" /* ViajeEnCaminoPage */], { Viaje: data.Viaje, Chofer: data.Chofer });
                    break;
                case 5:
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_6__viaje_encurso_viaje_encurso__["a" /* ViajeEnCursoPage */], { Viaje: data.Viaje, Chofer: data.Chofer });
                    break;
                case 9:
                    localStorage.removeItem("reserva_actual");
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__mensajes_mensajes__["a" /* MensajesPage */], { titulo: "Reserva cancelada", mensaje: "La reserva N°" + _this.Viaje.Reserva + " ha sido cancelada." });
                    break;
            }
        });
    };
    ViajeFinalizadoPage.prototype.calificar = function () {
        var _this = this;
        this.service.CalificarViaje(this.CalificacionChofer, this.CalificacionMovil, this.Viaje.Reserva, function (data) {
            _this.Viaje.Calificado = true;
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__mensajes_mensajes__["a" /* MensajesPage */], { titulo: "Calificación registrada", mensaje: "Gracias por ayudarnos a mejorar nuestro servicio." });
        });
    };
    ViajeFinalizadoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-viaje-finalizado',template:/*ion-inline-start:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\viaje.finalizado\viaje.finalizado.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar color="first" >\n\n      <button  ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        <img src="assets/img/first-logo.png"/>\n\n      </ion-title>\n\n    </ion-navbar>\n\n    <ion-toolbar>\n\n      <ion-segment>\n\n        <h3>viaje finalizado</h3>\n\n      </ion-segment>\n\n  </ion-toolbar>\n\n  </ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list padding>\n\n        <ion-item>\n\n            <ion-label stacked class="labelfirst">Reserva</ion-label>\n\n            <ion-label class="prewarp texto">{{Viaje.Reserva}}</ion-label>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked class="labelfirst">Hora</ion-label>\n\n            <ion-label class="prewarp texto">{{Viaje.FechaHora}}</ion-label>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label stacked class="labelfirst">Movil</ion-label>\n\n            <ion-label class="prewarp texto">{{Chofer.Vehiculo}}</ion-label>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked class="labelfirst">Chofer</ion-label>\n\n            <ion-label class="prewarp texto">{{Chofer.Nombre}}</ion-label>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked class="labelfirst">Origen</ion-label>\n\n            <ion-label class="prewarp texto">{{Viaje.Origen}}</ion-label>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked class="labelfirst">Destino</ion-label>\n\n            <ion-label class="prewarp texto">{{Viaje.Destino}}</ion-label>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>Viaje</ion-label>\n\n            <ion-label item-end style="text-align:right">{{Viaje.ImporteKm}}</ion-label>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>Espera</ion-label>\n\n            <ion-label item-end style="text-align:right">{{Viaje.ImporteEspera}}</ion-label>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>Peajes</ion-label>\n\n            <ion-label item-end style="text-align:right">{{Viaje.Peajes}}</ion-label>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>Estacionamiento</ion-label>\n\n            <ion-label item-end style="text-align:right">{{Viaje.Estacionamiento}}</ion-label>\n\n        </ion-item>\n\n        <ion-item style="font-weight: bold;">\n\n            <ion-label>TOTAL</ion-label>\n\n            <ion-label item-end style="text-align:right">{{Viaje.Total}}</ion-label>\n\n        </ion-item>\n\n   </ion-list>\n\n\n\n</ion-content>\n\n<ion-footer [hidden]="Viaje.Calificado">\n\n    <ion-toolbar padding style="text-align: center;">\n\n        <ion-label>Califica al móvil</ion-label>\n\n        <ionic3-star-rating \n\n            activeIcon = "ios-star"\n\n            defaultIcon = "ios-star-outline"\n\n            activeColor = "#488aff" \n\n            defaultColor = "#f4f4f4"\n\n            readonly="false"\n\n            [rating]="CalificacionMovil">\n\n        </ionic3-star-rating>\n\n        <ion-label>Califica al chofer</ion-label>\n\n        <ionic3-star-rating \n\n            activeIcon = "ios-star"\n\n            defaultIcon = "ios-star-outline"\n\n            activeColor = "#488aff" \n\n            defaultColor = "#f4f4f4"\n\n            readonly="false"\n\n            [rating]="CalificacionChofer">\n\n        </ionic3-star-rating>\n\n        <button  ion-button color="primary" block (click)="calificar()">CALIFICAR</button>\n\n    </ion-toolbar>\n\n  </ion-footer>\n\n  \n\n'/*ion-inline-end:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\viaje.finalizado\viaje.finalizado.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__services_custom_services__["a" /* CustomServices */]])
    ], ViajeFinalizadoPage);
    return ViajeFinalizadoPage;
}());

//# sourceMappingURL=viaje.finalizado.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_profile_profile__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_custom_services__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tarjetas_tarjetas__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_cliente_cliente__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_viaje_pedido_viaje_pedido__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_viaje_encamino_viaje_encamino__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_viaje_encurso_viaje_encurso__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_viaje_finalizado_viaje_finalizado__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var MyApp = /** @class */ (function () {
    function MyApp(events, service) {
        var _this = this;
        this.events = events;
        this.service = service;
        this.Usuario = {
            Nombre: "",
            Foto: ""
        };
        this.pages = [
            {
                title: 'Inicio',
                icon: 'ios-home-outline',
                count: 0,
                component: __WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */]
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
                component: __WEBPACK_IMPORTED_MODULE_6__pages_tarjetas_tarjetas__["a" /* TarjetasPage */]
            },
            {
                title: 'Asociar Cuenta',
                icon: 'done-all',
                count: 0,
                component: __WEBPACK_IMPORTED_MODULE_8__pages_cliente_cliente__["a" /* ClientePage */]
            },
            {
                title: 'Perfil',
                icon: 'person',
                count: 0,
                component: __WEBPACK_IMPORTED_MODULE_3__pages_profile_profile__["a" /* ProfilePage */]
            },
            {
                title: 'Contacto',
                icon: 'ios-contact-outline',
                count: 0,
                component: __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */]
            },
        ];
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */];
        if (this.service.UserData() == null)
            this.rootPage = __WEBPACK_IMPORTED_MODULE_1__pages_login_login__["a" /* LoginPage */];
        else {
            this.Usuario.Nombre = this.service.UserData().Nombre + " " + this.service.UserData().Apellido;
            this.Usuario.Foto = this.service.UserData().Foto;
            this.events.subscribe('username:changed', function (user) {
                if (user != null) {
                    _this.Usuario.Nombre = _this.service.UserData().Nombre + " " + _this.service.UserData().Apellido;
                    _this.Usuario.Foto = _this.service.UserData().Foto;
                }
                ;
            });
            this.events.subscribe('onnotification:changed', function (viaje) {
                _this.getviaje(viaje);
            });
            this.service.RegistracionFcm();
        }
    }
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        this.service.Logout(function (data) {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_1__pages_login_login__["a" /* LoginPage */]);
        });
    };
    MyApp.prototype.getviaje = function (item) {
        localStorage.setItem("reserva_actual", item.Reserva);
        switch (item.EstadoId) {
            case 2:
                this.nav.push(__WEBPACK_IMPORTED_MODULE_9__pages_viaje_pedido_viaje_pedido__["a" /* ViajePedidoPage */]);
                break;
            case 3:
                this.nav.push(__WEBPACK_IMPORTED_MODULE_10__pages_viaje_encamino_viaje_encamino__["a" /* ViajeEnCaminoPage */]);
                break;
            case 5:
                this.nav.push(__WEBPACK_IMPORTED_MODULE_11__pages_viaje_encurso_viaje_encurso__["a" /* ViajeEnCursoPage */]);
                break;
            case 7:
                this.nav.push(__WEBPACK_IMPORTED_MODULE_12__pages_viaje_finalizado_viaje_finalizado__["a" /* ViajeFinalizadoPage */]);
                break;
        }
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Proyectos\First\apps\first-mobile-clientes\src\app\app.html"*/'<ion-menu [content]="content">\n\n\n\n  <ion-content class="menu-left">\n\n    <!-- User profile -->\n\n    <div text-center padding-top padding-bottom class="primary-bg">\n\n      <img class="profile-picture" [src]="Usuario.Foto">\n\n      <h4 ion-text color="light">{{Usuario.Nombre}}</h4>\n\n    </div>\n\n\n\n    <ion-list class="list-full-border">\n\n      <button ion-item menuClose *ngFor="let page of pages" (click)="openPage(page)">\n\n        <ion-icon item-left name="{{ page.icon }}"></ion-icon>\n\n        {{ page.title }}\n\n        <ion-badge color="danger" item-right *ngIf="page.count">{{ page.count }}</ion-badge>\n\n      </button>\n\n      <button ion-item menuClose (click)="logout()">\n\n        <ion-icon item-left name="ios-log-out-outline"></ion-icon>\n\n        Cerrar Sesion\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Proyectos\First\apps\first-mobile-clientes\src\app\app.html"*/,
            queries: {
                nav: new __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"]('content')
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__services_custom_services__["a" /* CustomServices */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HereService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_native_geocoder__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__custom_services__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(374);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HereService = /** @class */ (function () {
    function HereService(service, pl, nativeGeocoder, geolocation) {
        var _this = this;
        this.service = service;
        this.pl = pl;
        this.nativeGeocoder = nativeGeocoder;
        this.geolocation = geolocation;
        this.defaulticono = "assets/img/icono-azul.png";
        this.ajaxRequestAu = new XMLHttpRequest();
        this.ajaxRequestSe = new XMLHttpRequest();
        this.count = 0;
        this.pl.ready().then(function () {
            _this.platform = new H.service.Platform({
                'app_id': 'g7DxdZCBLHU1Mfda99UQ',
                'app_code': 'Uq6CRf-bfzbog-xeUSWZeA'
            });
        });
        this.ajaxRequestAu.addEventListener("error", function () {
            _this.service.presentToast("Error en Autocomplete!");
        });
        this.ajaxRequestSe.addEventListener("error", function () {
            _this.service.presentToast("Error en Autocomplete!");
        });
        this.ajaxRequestAu.responseType = "json";
        this.ajaxRequestSe.responseType = "json";
    }
    HereService.prototype.CreateMap = function (element) {
        // Obtain the default map types from the platform object:
        var defaultLayers = this.platform.createDefaultLayers();
        // Instantiate (and display) a map object:
        var map = new H.Map(element, defaultLayers.normal.map, {
            zoom: 15,
            center: { lat: -34.6083, lng: -58.3712 }
        });
        // MapEvents enables the event system
        // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
        var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
        return map;
    };
    ;
    HereService.prototype.ClearMarker = function (map, marker) {
        if (marker && map.removeObject)
            map.removeObject(marker);
    };
    HereService.prototype.CreateMarker = function (map, lat, lng, icono, center) {
        if (center === void 0) { center = true; }
        // Create an icon, an object holding the latitude and longitude, and a marker:
        var icon = new H.map.Icon(icono), coords = { lat: lat, lng: lng }, marker = new H.map.Marker(coords, { icon: icon });
        // Add the marker to the map and center the map at the location of the marker:
        map.addObject(marker);
        if (center)
            map.setCenter(coords);
        return marker;
    };
    ;
    HereService.prototype.CreateTrayecto = function (origen, destino, onsucces) {
        var _this = this;
        if (origen && destino && origen != '' && destino != '') {
            var routingParameters = {
                'mode': 'fastest;car;traffic:enabled',
                'waypoint0': this.GetRoutingPosicion(origen),
                'waypoint1': this.GetRoutingPosicion(destino),
                'representation': 'display',
                'departure': 'now'
            };
            // Define a callback function to process the routing response:
            var onResult = function (result) {
                var route, routeShape, linestring;
                if (result.response.route) {
                    // Pick the first route from the response:
                    route = result.response.route[0];
                    // Pick the route's shape:
                    routeShape = route.shape;
                    // Create a linestring to use as a point source for the route line
                    linestring = new H.geo.LineString();
                    // Push all the points in the shape into the linestring:
                    routeShape.forEach(function (point) {
                        var parts = point.split(',');
                        linestring.pushLatLngAlt(parts[0], parts[1]);
                    });
                    // Create a polyline to display the route:
                    var routeLine = new H.map.Polyline(linestring, {
                        style: { strokeColor: 'blue', lineWidth: 2 }
                    });
                    var km = 0;
                    var duracion = 0;
                    for (var i in route.leg[0].maneuver) {
                        km = km + route.leg[0].maneuver[i].length;
                        duracion = duracion + route.leg[0].maneuver[i].travelTime;
                    }
                    km = parseInt((km / 1000).toString()) * 1000 + 1000;
                    onsucces(km, duracion, routeLine);
                }
            };
            var router = this.platform.getRoutingService();
            router.calculateRoute(routingParameters, onResult, function (error) {
                _this.service.presentToast(error.message);
            });
        }
    };
    ;
    HereService.prototype.Autocomplete = function (query, onsuccess) {
        var AUTOCOMPLETION_URL = 'https://places.cit.api.here.com/places/v1/discover/search';
        var params = '?' +
            'q=' + encodeURIComponent(query) + // The search text which is the basis of the query
            '&at=-31.416667,-64.183333' + // -34.6083,-58.3712 
            '&country=ARG&language=es' +
            '&app_id=g7DxdZCBLHU1Mfda99UQ' +
            '&app_code=Uq6CRf-bfzbog-xeUSWZeA';
        this.ajaxRequestAu.addEventListener("load", function () {
            onsuccess(this.response.results.items);
        });
        this.ajaxRequestAu.open('GET', AUTOCOMPLETION_URL + params);
        this.ajaxRequestAu.send();
    };
    ;
    HereService.prototype.GetDireccionPorLatLng = function (lat, lng, onsuccess) {
        this.nativeGeocoder.reverseGeocode(lat, lng)
            .then(function (result) {
            if (result.length > 0) {
                var direccion = result[0].thoroughfare + (result[0].subThoroughfare ? " " + result[0].subThoroughfare : "") + ", " + result[0].locality + ", " + result[0].administrativeArea;
                onsuccess(direccion);
            }
        });
    };
    ;
    HereService.prototype.GetDireccionPorTexto = function (q, onsuccess) {
        var _this = this;
        this.nativeGeocoder.forwardGeocode(q)
            .then(function (result) {
            if (result.length > 0) {
                onsuccess(q, result[0].latitude, result[0].longitude);
            }
            else {
                _this.service.presentToast("No se encontró esta dirección.");
            }
        });
    };
    ;
    HereService.prototype.GetLatLng = function (placeid, onsuccess) {
        var _this = this;
        var geocoder = this.platform.getGeocodingService(), parameters = {
            locationid: placeid,
            gen: '9'
        };
        geocoder.geocode(parameters, function (data) {
            var obj = data.Response.View[0].Result[0];
            onsuccess(obj.Location.Address.Label, obj.Location.DisplayPosition.Latitude, obj.Location.DisplayPosition.Longitude);
        }, function (error) {
            _this.service.presentToast(error);
        });
    };
    ;
    HereService.prototype.GetPosicionActual = function (map, onsuccess) {
        this.count = 0;
        this.GetMyPosition(map, onsuccess);
    };
    HereService.prototype.GetMyPosition = function (map, onsuccess) {
        var _this = this;
        map.getMyLocation({ enableHighAccuracy: true }).then(function (location) {
            if (location.accuracy < 12 || _this.count == 10) {
                var latlng = location.latLng;
                var posicion = location.latLng.lng.toString() + ' ' + location.latLng.lat.toString();
                //this.service.presentToast("Establecimos tu posición: " +  posicion, "bottom", 3000);
                onsuccess(posicion, latlng);
            }
            else {
                _this.count++;
                _this.GetMyPosition(map, onsuccess);
            }
        });
    };
    HereService.prototype.GetTextoPosicion = function (lat, lng) {
        return lng.toString() + ' ' + lat.toString();
    };
    ;
    HereService.prototype.GetParametroPosicion = function (lat, lng) {
        return lat.toString() + ',' + lng.toString() + ',200';
    };
    ;
    HereService.prototype.GetRoutingPosicion = function (latlng) {
        var arr = latlng.split(' ');
        return arr[1].toString() + ',' + arr[0].toString();
    };
    ;
    HereService.prototype.GetPosicionTexto = function (texto) {
        var arr = texto.split(' ');
        return { lat: parseFloat(arr[1]), lng: parseFloat(arr[0]) };
    };
    ;
    HereService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__custom_services__["a" /* CustomServices */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]])
    ], HereService);
    return HereService;
}());

//# sourceMappingURL=here.service.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TarjetasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_custom_services__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nueva_tarjeta_nueva_tarjeta__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_mercadopago_service__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the HistoryPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var TarjetasPage = /** @class */ (function () {
    function TarjetasPage(nav, params, service, mp) {
        this.nav = nav;
        this.params = params;
        this.service = service;
        this.mp = mp;
        // history records
        this.Tarjetas = new Array();
        if (this.params.data && this.params.data.Mensaje)
            this.service.presentToast("Debe cargar por lo menos una tarjeta para usar el sistema");
        this.Tarjetas = this.service.UserData().Tarjetas;
    }
    ;
    TarjetasPage.prototype.nuevatarjeta = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__nueva_tarjeta_nueva_tarjeta__["a" /* NuevaTarjetaPage */]);
    };
    TarjetasPage.prototype.eliminartarjeta = function (id) {
        var _this = this;
        this.service.ShowConfirm("Eliminar la tarjeta?", function () {
            _this.mp.EliminarTarjeta(id, function (data) {
                var user = _this.service.UserData();
                user.Tarjetas = data;
                localStorage.setItem("datos_de_cliente", JSON.stringify(user));
                _this.Tarjetas = data;
                _this.service.presentToast("La tarjeta se eliminó correctamente.");
            });
        });
    };
    TarjetasPage.prototype.ocultarmensaje = function () {
        return this.Tarjetas.length > 0;
    };
    TarjetasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tarjetas',template:/*ion-inline-start:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\tarjetas\tarjetas.html"*/'<!--\n\n  Generated template for the HistoryPage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar color="first" >\n\n      <button  ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        <img src="assets/img/first-logo.png"/>\n\n      </ion-title>\n\n    </ion-navbar>\n\n    <ion-toolbar>\n\n      <ion-segment>\n\n        <h3>Mis tarjetas</h3>\n\n      </ion-segment>\n\n  </ion-toolbar>\n\n  </ion-header>\n\n<ion-content>\n\n  <h5 [hidden]="ocultarmensaje()">Necesitas por lo menos una tarjeta para operar con el sistema</h5>\n\n  <ion-list class="list-full-border">\n\n    <ion-item *ngFor="let item of Tarjetas">\n\n      {{item.Nombre}} terminada en {{item.UltimosCuatroDigitos}}\n\n      <button ion-button clear item-end (click)="eliminartarjeta(item.Id)"><ion-icon style="font-size: 30px;" color="danger" name="trash"></ion-icon></button>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n      <ion-segment>\n\n        <button  ion-button color="first1" block (click)="nuevatarjeta()">REGISTRAR TARJETA</button>\n\n      </ion-segment>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\tarjetas\tarjetas.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_custom_services__["a" /* CustomServices */], __WEBPACK_IMPORTED_MODULE_4__services_mercadopago_service__["a" /* MercadoPagoService */]])
    ], TarjetasPage);
    return TarjetasPage;
}());

//# sourceMappingURL=tarjetas.js.map

/***/ }),

/***/ 862:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 381,
	"./af.js": 381,
	"./ar": 382,
	"./ar-dz": 383,
	"./ar-dz.js": 383,
	"./ar-kw": 384,
	"./ar-kw.js": 384,
	"./ar-ly": 385,
	"./ar-ly.js": 385,
	"./ar-ma": 386,
	"./ar-ma.js": 386,
	"./ar-sa": 387,
	"./ar-sa.js": 387,
	"./ar-tn": 388,
	"./ar-tn.js": 388,
	"./ar.js": 382,
	"./az": 389,
	"./az.js": 389,
	"./be": 390,
	"./be.js": 390,
	"./bg": 391,
	"./bg.js": 391,
	"./bm": 392,
	"./bm.js": 392,
	"./bn": 393,
	"./bn.js": 393,
	"./bo": 394,
	"./bo.js": 394,
	"./br": 395,
	"./br.js": 395,
	"./bs": 396,
	"./bs.js": 396,
	"./ca": 397,
	"./ca.js": 397,
	"./cs": 398,
	"./cs.js": 398,
	"./cv": 399,
	"./cv.js": 399,
	"./cy": 400,
	"./cy.js": 400,
	"./da": 401,
	"./da.js": 401,
	"./de": 402,
	"./de-at": 403,
	"./de-at.js": 403,
	"./de-ch": 404,
	"./de-ch.js": 404,
	"./de.js": 402,
	"./dv": 405,
	"./dv.js": 405,
	"./el": 406,
	"./el.js": 406,
	"./en-au": 407,
	"./en-au.js": 407,
	"./en-ca": 408,
	"./en-ca.js": 408,
	"./en-gb": 409,
	"./en-gb.js": 409,
	"./en-ie": 410,
	"./en-ie.js": 410,
	"./en-il": 411,
	"./en-il.js": 411,
	"./en-nz": 412,
	"./en-nz.js": 412,
	"./eo": 413,
	"./eo.js": 413,
	"./es": 414,
	"./es-do": 415,
	"./es-do.js": 415,
	"./es-us": 416,
	"./es-us.js": 416,
	"./es.js": 414,
	"./et": 417,
	"./et.js": 417,
	"./eu": 418,
	"./eu.js": 418,
	"./fa": 419,
	"./fa.js": 419,
	"./fi": 420,
	"./fi.js": 420,
	"./fo": 421,
	"./fo.js": 421,
	"./fr": 422,
	"./fr-ca": 423,
	"./fr-ca.js": 423,
	"./fr-ch": 424,
	"./fr-ch.js": 424,
	"./fr.js": 422,
	"./fy": 425,
	"./fy.js": 425,
	"./gd": 426,
	"./gd.js": 426,
	"./gl": 427,
	"./gl.js": 427,
	"./gom-latn": 428,
	"./gom-latn.js": 428,
	"./gu": 429,
	"./gu.js": 429,
	"./he": 430,
	"./he.js": 430,
	"./hi": 431,
	"./hi.js": 431,
	"./hr": 432,
	"./hr.js": 432,
	"./hu": 433,
	"./hu.js": 433,
	"./hy-am": 434,
	"./hy-am.js": 434,
	"./id": 435,
	"./id.js": 435,
	"./is": 436,
	"./is.js": 436,
	"./it": 437,
	"./it.js": 437,
	"./ja": 438,
	"./ja.js": 438,
	"./jv": 439,
	"./jv.js": 439,
	"./ka": 440,
	"./ka.js": 440,
	"./kk": 441,
	"./kk.js": 441,
	"./km": 442,
	"./km.js": 442,
	"./kn": 443,
	"./kn.js": 443,
	"./ko": 444,
	"./ko.js": 444,
	"./ky": 445,
	"./ky.js": 445,
	"./lb": 446,
	"./lb.js": 446,
	"./lo": 447,
	"./lo.js": 447,
	"./lt": 448,
	"./lt.js": 448,
	"./lv": 449,
	"./lv.js": 449,
	"./me": 450,
	"./me.js": 450,
	"./mi": 451,
	"./mi.js": 451,
	"./mk": 452,
	"./mk.js": 452,
	"./ml": 453,
	"./ml.js": 453,
	"./mn": 454,
	"./mn.js": 454,
	"./mr": 455,
	"./mr.js": 455,
	"./ms": 456,
	"./ms-my": 457,
	"./ms-my.js": 457,
	"./ms.js": 456,
	"./mt": 458,
	"./mt.js": 458,
	"./my": 459,
	"./my.js": 459,
	"./nb": 460,
	"./nb.js": 460,
	"./ne": 461,
	"./ne.js": 461,
	"./nl": 462,
	"./nl-be": 463,
	"./nl-be.js": 463,
	"./nl.js": 462,
	"./nn": 464,
	"./nn.js": 464,
	"./pa-in": 465,
	"./pa-in.js": 465,
	"./pl": 466,
	"./pl.js": 466,
	"./pt": 467,
	"./pt-br": 468,
	"./pt-br.js": 468,
	"./pt.js": 467,
	"./ro": 469,
	"./ro.js": 469,
	"./ru": 470,
	"./ru.js": 470,
	"./sd": 471,
	"./sd.js": 471,
	"./se": 472,
	"./se.js": 472,
	"./si": 473,
	"./si.js": 473,
	"./sk": 474,
	"./sk.js": 474,
	"./sl": 475,
	"./sl.js": 475,
	"./sq": 476,
	"./sq.js": 476,
	"./sr": 477,
	"./sr-cyrl": 478,
	"./sr-cyrl.js": 478,
	"./sr.js": 477,
	"./ss": 479,
	"./ss.js": 479,
	"./sv": 480,
	"./sv.js": 480,
	"./sw": 481,
	"./sw.js": 481,
	"./ta": 482,
	"./ta.js": 482,
	"./te": 483,
	"./te.js": 483,
	"./tet": 484,
	"./tet.js": 484,
	"./tg": 485,
	"./tg.js": 485,
	"./th": 486,
	"./th.js": 486,
	"./tl-ph": 487,
	"./tl-ph.js": 487,
	"./tlh": 488,
	"./tlh.js": 488,
	"./tr": 489,
	"./tr.js": 489,
	"./tzl": 490,
	"./tzl.js": 490,
	"./tzm": 491,
	"./tzm-latn": 492,
	"./tzm-latn.js": 492,
	"./tzm.js": 491,
	"./ug-cn": 493,
	"./ug-cn.js": 493,
	"./uk": 494,
	"./uk.js": 494,
	"./ur": 495,
	"./ur.js": 495,
	"./uz": 496,
	"./uz-latn": 497,
	"./uz-latn.js": 497,
	"./uz.js": 496,
	"./vi": 498,
	"./vi.js": 498,
	"./x-pseudo": 499,
	"./x-pseudo.js": 499,
	"./yo": 500,
	"./yo.js": 500,
	"./zh-cn": 501,
	"./zh-cn.js": 501,
	"./zh-hk": 502,
	"./zh-hk.js": 502,
	"./zh-tw": 503,
	"./zh-tw.js": 503
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 862;

/***/ }),

/***/ 866:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the HistoryPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var HistoryPage = /** @class */ (function () {
    function HistoryPage(nav) {
        this.nav = nav;
    }
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-history',template:/*ion-inline-start:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\history\history.html"*/'<!--\n\n  Generated template for the HistoryPage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary" >\n\n    <button  ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>History</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list class="list-full-border">\n\n    <ion-item *ngFor="let record of records">\n\n      <div>\n\n        <div class="bold">{{ record.time }}</div>\n\n        <div>From: {{ record.from }}</div>\n\n        <div>To: {{ record.to }}</div>\n\n      </div>\n\n      <ion-icon name="ios-star-outline" item-right></ion-icon>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\history\history.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 867:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenerarCodigoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_custom_services__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cambiar_clave_cambiar_clave__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
 Generated class for the RegisterPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var GenerarCodigoPage = /** @class */ (function () {
    function GenerarCodigoPage(nav, service) {
        this.nav = nav;
        this.service = service;
    }
    GenerarCodigoPage.prototype.generarcodigo = function () {
        var _this = this;
        this.service.GenerateCode(this.email, function (data) {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_4__cambiar_clave_cambiar_clave__["a" /* CambiarClavePage */]);
        });
    };
    GenerarCodigoPage.prototype.login = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    GenerarCodigoPage.prototype.validar = function () {
        if (this.email.length < 6 || this.email.length > 100) {
            this.service.presentToast("El email ingresado no tiene el formato correcto (entre 6 y 100 caracteres).");
            return false;
        }
        var re = new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        if (!re.test(this.email)) {
            this.service.presentToast("El email ingresado no tiene el formato correcto.");
            return false;
        }
        return true;
    };
    GenerarCodigoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-generar-codigo',template:/*ion-inline-start:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\generar.codigo\generar.codigo.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content class=" auth-bg">\n\n  <div class="auth-content">\n\n\n\n    <div class="light-bg">\n\n      <!-- Logo -->\n\n      <div padding text-center>\n\n        <p>\n\n          <img src="assets/img/first-logo.png"/>\n\n        </p>\n\n        <p ion-text color="dark" style="font-weight: bold" >Servicio de transporte de personas</p>\n\n        <p ion-text color="first1" >Validacion de Email</p>\n\n      </div>\n\n\n\n      <!-- Login form -->\n\n      <ion-list class="list-form" padding>\n\n        <ion-item>\n\n          <ion-input type="text" placeholder="Email" [ngModelOptions]="{standalone: true}" [(ngModel)]="email"></ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n\n\n      <div padding>\n\n        <button  ion-button color="first1"  block (click)="generarcodigo()">\n\n          validar email\n\n        </button>\n\n      </div>\n\n\n\n      <ion-grid padding>\n\n        <ion-row>\n\n          <ion-col>\n\n            <span ion-text color="secondary" >Ya tiene cuenta?</span>\n\n          </ion-col>\n\n          <ion-col style="text-align: right">\n\n            <span ion-text color="first1" (click)="login()">Iniciar Sesión</span>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n  \n\n\n\n    </div>\n\n\n\n\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\generar.codigo\generar.codigo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_custom_services__["a" /* CustomServices */]])
    ], GenerarCodigoPage);
    return GenerarCodigoPage;
}());

//# sourceMappingURL=generar.codigo.js.map

/***/ }),

/***/ 869:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    fire: {
        apiKey: "AIzaSyCnQVYniqrJdHBisiIDn8CE_J4davhgCRw",
        authDomain: "first-gestion-de-viajes.firebaseapp.com",
        databaseURL: "https://first-gestion-de-viajes.firebaseio.com",
        projectId: "first-gestion-de-viajes",
        storageBucket: "first-gestion-de-viajes.appspot.com",
        messagingSenderId: "644865268568"
    }
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CambiarClavePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_custom_services__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_clases__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
 Generated class for the RegisterPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var CambiarClavePage = /** @class */ (function () {
    function CambiarClavePage(nav, params, service, fb) {
        this.nav = nav;
        this.params = params;
        this.service = service;
        this.fb = fb;
        this.User = new __WEBPACK_IMPORTED_MODULE_5__models_clases__["d" /* Usuario */]();
        this.User = this.params.data.User;
    }
    CambiarClavePage.prototype.changepassword = function () {
        var _this = this;
        if (this.validar()) {
            this.fb.auth.createUserWithEmailAndPassword(this.User.Email, this.password).then(function (result) {
                var user = result.user;
                user.updateProfile({
                    displayName: _this.User.Nombre + " " + _this.User.Apellido,
                    photoURL: ""
                });
                _this.service.Register(_this.User, function () {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                });
                user.sendEmailVerification();
            }).catch(function (mensaje) {
                _this.service.showAlert("Error", mensaje);
            });
        }
    };
    CambiarClavePage.prototype.login = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    CambiarClavePage.prototype.validar = function () {
        if (this.password.length < 6 || this.password.length > 30) {
            this.service.presentToast("La contraseña ingresada no tiene el formato correcto (entre 6 y 30 caracteres).");
            return false;
        }
        if (this.password != this.reppassword) {
            this.service.presentToast("Las contraseñas ingresadas no son iguales.");
            return false;
        }
        return true;
    };
    CambiarClavePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cambiar-clave',template:/*ion-inline-start:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\cambiar.clave\cambiar.clave.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content class=" auth-bg">\n\n  <div class="auth-content">\n\n\n\n    <div class="light-bg">\n\n      <!-- Logo -->\n\n      <div padding text-center>\n\n        <p>\n\n          <img src="assets/img/first-logo.png"/>\n\n        </p>\n\n        <p ion-text color="dark" style="font-weight: bold" >Servicio de transporte de personas</p>\n\n        <p ion-text color="first1" >finalizar registro</p>\n\n        <p ion-text color="secondary" >crear contraseñas</p>\n\n      </div>\n\n\n\n      <!-- Login form -->\n\n      <ion-list class="list-form" padding>\n\n\n\n        <ion-item>\n\n          <ion-label stacked>Email</ion-label>\n\n          <ion-input type="text" [ngModelOptions]="{standalone: true}" readonly [(ngModel)]="User.Email"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label stacked>Contraseña</ion-label>\n\n          <ion-input type="password" [ngModelOptions]="{standalone: true}" [(ngModel)]="password"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label stacked>Repetir contraseña</ion-label>\n\n          <ion-input type="password" [ngModelOptions]="{standalone: true}" [(ngModel)]="reppassword"></ion-input>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n\n\n      <div padding>\n\n        <button  ion-button color="first1"  block (click)="changepassword()">\n\n          guardar contraseña\n\n        </button>\n\n      </div>\n\n      <ion-grid padding>\n\n        <ion-row>\n\n          <ion-col>\n\n            <span ion-text color="secondary" >Ya tiene cuenta?</span>\n\n          </ion-col>\n\n          <ion-col style="text-align: right">\n\n            <span ion-text color="first1" (click)="login()">Iniciar Sesión</span>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n  \n\n    </div>\n\n\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Proyectos\First\apps\first-mobile-clientes\src\pages\cambiar.clave\cambiar.clave.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__services_custom_services__["a" /* CustomServices */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["AngularFireAuth"]])
    ], CambiarClavePage);
    return CambiarClavePage;
}());

//# sourceMappingURL=cambiar.clave.js.map

/***/ })

},[524]);
//# sourceMappingURL=main.js.map