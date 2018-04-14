webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(40);
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
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var LoginPage = (function () {
    function LoginPage(nav) {
        this.nav = nav;
    }
    LoginPage.prototype.signup = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.login = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\APP-TAXI\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content class=" auth-bg">\n\n  <div class="auth-content">\n\n    <div class="light-bg">\n\n      <!-- Logo -->\n      <div padding text-center>\n        <div class="logo primary-bg">\n          <i class="icon-sedan" ion-text color="light" ></i>\n        </div>\n        <h2 ion-text color="dark" >\n          ionic 2 Taxi\n        </h2>\n        <p ion-text color="dark" >Taxi booking app for ionic 2</p>\n      </div>\n\n      <!-- Login form -->\n\n      <ion-list class="list-form" padding>\n\n        <ion-item>\n          <ion-input type="text" placeholder="Email or username"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-input type="password" placeholder="Password"></ion-input>\n        </ion-item>\n\n      </ion-list>\n\n      <div padding>\n        <button  ion-button color="primary"  block (click)="login()">\n          Login\n        </button>\n      </div>\n\n    </div>\n\n    <div padding=""></div>\n\n    <!-- Other links -->\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <span ion-text color="light" >Forgot password?</span>\n        </ion-col>\n        <ion-col>\n          <span ion-text color="light" >\n            New here?\n            <span ion-text color="primary"  (click)="signup()">Sign up</span>\n          </span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\APP-TAXI\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
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
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(40);
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
var RegisterPage = (function () {
    function RegisterPage(nav) {
        this.nav = nav;
    }
    RegisterPage.prototype.signup = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    RegisterPage.prototype.login = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"D:\APP-TAXI\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content class=" auth-bg">\n  <div class="auth-content">\n\n    <div class="light-bg">\n\n      <!-- Logo -->\n      <div padding text-center>\n        <div class="logo primary-bg">\n          <i class="icon-sedan" ion-text color="light" ></i>\n        </div>\n        <h2 ion-text color="dark" >\n          ionic 2 Taxi\n        </h2>\n        <p ion-text color="dark" >Taxi booking app for ionic 2</p>\n      </div>\n\n      <!-- Login form -->\n\n      <ion-list class="list-form" padding>\n\n        <ion-item>\n          <ion-input type="text" placeholder="Your name"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-input type="text" placeholder="Email"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-input type="password" placeholder="Password"></ion-input>\n        </ion-item>\n\n      </ion-list>\n\n      <div padding>\n        <button  ion-button color="primary"  block (click)="signup()">\n          Create account\n        </button>\n      </div>\n\n    </div>\n\n    <div padding=""></div>\n\n    <!-- Other links -->\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <span ion-text color="light" >Forgot password?</span>\n        </ion-col>\n        <ion-col>\n          <span ion-text color="light" >\n            Have account?\n            <span ion-text color="primary"  (click)="login()">Login</span>\n          </span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\APP-TAXI\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_place_service__ = __webpack_require__(199);
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
var PlacesPage = (function () {
    function PlacesPage(nav, placeService) {
        this.nav = nav;
        this.placeService = placeService;
        this.recentPlaces = this.placeService.getAll();
        this.places = this.placeService.getAll();
    }
    PlacesPage.prototype.choosePlace = function () {
        this.nav.pop();
    };
    PlacesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-places',template:/*ion-inline-start:"D:\APP-TAXI\src\pages\places\places.html"*/'<!--\n  Generated template for the PlacesPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary" >\n    <ion-title>Places</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-item-group class="list-full-border">\n    <ion-item-divider color="gray"  class="bold">Recent</ion-item-divider>\n    <ion-item *ngFor="let place of recentPlaces" (click)="choosePlace(place)">\n      <ion-icon name="ios-pin-outline" item-left>\n      </ion-icon>\n      <span class="item-icon-label">\n        {{ place.distance }} km\n      </span>\n      <div>\n        <div class="bold">{{ place.name }}</div>\n        <span>{{ place.address }}</span>\n      </div>\n    </ion-item>\n  </ion-item-group>\n\n  <ion-item-group class="list-full-border">\n    <ion-item-divider color="gray"  class="bold">Nearby</ion-item-divider>\n    <ion-item *ngFor="let place of places" (click)="choosePlace(place)">\n      <ion-icon name="ios-pin-outline" item-left>\n      </ion-icon>\n      <span class="item-icon-label">\n        {{ place.distance }} km\n      </span>\n      <div>\n        <div class="bold">{{ place.name }}</div>\n        <span>{{ place.address }}</span>\n      </div>\n    </ion-item>\n  </ion-item-group>\n\n</ion-content>\n'/*ion-inline-end:"D:\APP-TAXI\src\pages\places\places.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_place_service__["a" /* PlaceService */]])
    ], PlacesPage);
    return PlacesPage;
}());

//# sourceMappingURL=places.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_places__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlaceService = (function () {
    function PlaceService() {
        this.places = __WEBPACK_IMPORTED_MODULE_1__mock_places__["a" /* PLACES */];
    }
    PlaceService.prototype.getAll = function () {
        return this.places;
    };
    PlaceService.prototype.getItem = function (id) {
        for (var i = 0; i < this.places.length; i++) {
            if (this.places[i].id === parseInt(id)) {
                return this.places[i];
            }
        }
        return null;
    };
    PlaceService.prototype.remove = function (item) {
        this.places.splice(this.places.indexOf(item), 1);
    };
    PlaceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], PlaceService);
    return PlaceService;
}());

//# sourceMappingURL=place-service.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_method_payment_method__ = __webpack_require__(201);
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
var ResumenPage = (function () {
    function ResumenPage(nav, platform, alertCtrl) {
        this.nav = nav;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
    }
    ResumenPage.prototype.showNotePopup = function () {
        var prompt = this.alertCtrl.create({
            title: 'Notes to driver',
            message: "",
            inputs: [
                {
                    name: 'note',
                    placeholder: 'Note'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    ;
    // choose payment method
    ResumenPage.prototype.choosePaymentMethod = function () {
        // go to payment method page
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__payment_method_payment_method__["a" /* PaymentMethodPage */]);
    };
    ResumenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resumen',template:/*ion-inline-start:"D:\APP-TAXI\src\pages\resumen\resumen.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="first" >\n      <button  ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>\n        <img src="assets/img/first-logo.png"/>\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  \n<ion-content>\n    <ion-list padding class="booking-info">\n      <ion-item>\n        <span class="label" ion-text color="secondary" >ORIGEN</span>\n        <div class="italic">Aeroparque Jorge Newbery</div>\n      </ion-item>\n      <ion-item>\n        <span class="label" ion-text color="secondary" >DESTINO</span>\n        <div class="italic">San Isidro, Buenos Aires, Argentina</div>\n      </ion-item>\n      <ion-item>\n        <span class="label" ion-text>CON REG.</span>\n        <div item-end><img style="height:20px" src="assets/img/auto-normal.png" /></div>\n      </ion-item>\n      <ion-item>\n        <div (click)="choosePaymentMethod()">\n          <div>FORMA DE PAGO</div>\n          <span class="bold">Efectivo</span>\n        </div>\n        <ion-icon name="md-arrow-dropright" item-right></ion-icon>\n      </ion-item>\n      <ion-item class="button-set">\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <button ion-button small class="active" block padding>lo quiero ahora</button>\n            </ion-col>\n            <ion-col>\n              <button ion-button small block>reserva a futuro</button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item (click)="showNotePopup()">\n        <span class="italic" ion-text color="dark">MENSAJE AL CONDUCTOR</span>\n        <ion-icon name="md-arrow-dropright" item-right></ion-icon>\n      </ion-item>\n      <ion-item>\n          <span class="italic" ion-text color="danger"><b>40</b> KM.</span>\n          <span class="italic" ion-text item-end color="danger"><b>45</b> MIN.</span>\n      </ion-item>\n      <ion-item>\n          <span class="italic" ion-text color="dark">IMPORTE ESTIMADO</span>\n          <span ion-text item-end color="danger"><b>100.00</b></span>\n      </ion-item>\n      <ion-item>\n        <span class="italic" ion-text color="dark">COSTO DE LA ESPERA</span>\n        <span ion-text item-end color="danger"><b>5.00</b> x MIN.</span>\n      </ion-item>\n      <button  ion-button color="first" block>RESERVAR</button>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\APP-TAXI\src\pages\resumen\resumen.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ResumenPage);
    return ResumenPage;
}());

//# sourceMappingURL=resumen.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentMethodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
var PaymentMethodPage = (function () {
    function PaymentMethodPage(nav) {
        this.nav = nav;
    }
    // apply change method
    PaymentMethodPage.prototype.changeMethod = function (method) {
        // go back
        this.nav.pop();
    };
    PaymentMethodPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payment-method',template:/*ion-inline-start:"D:\APP-TAXI\src\pages\payment-method\payment-method.html"*/'<!--\n  Generated template for the PaymentMethodPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar  color="primary" >\n    <ion-title>Payment Methods</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class="list-full-border" radio-group>\n    <ion-item>\n      <ion-label>\n        Cash\n        <p class="text-hint">Use cash</p>\n      </ion-label>\n      <ion-radio checked="true" value="A" (click)="changeMethod(\'cash\')"></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>\n        Card\n        <p class="text-hint">Credit card XXX71</p>\n      </ion-label>\n      <ion-radio value="B" (click)="changeMethod(\'card\')"></ion-radio>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\APP-TAXI\src\pages\payment-method\payment-method.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], PaymentMethodPage);
    return PaymentMethodPage;
}());

//# sourceMappingURL=payment-method.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(203);
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
var HistoryPage = (function () {
    function HistoryPage(nav, tripService) {
        this.nav = nav;
        this.tripService = tripService;
        this.records = tripService.getAll();
    }
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-history',template:/*ion-inline-start:"D:\APP-TAXI\src\pages\history\history.html"*/'<!--\n  Generated template for the HistoryPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary" >\n    <button  ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>History</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class="list-full-border">\n    <ion-item *ngFor="let record of records">\n      <div>\n        <div class="bold">{{ record.time }}</div>\n        <div>From: {{ record.from }}</div>\n        <div>To: {{ record.to }}</div>\n      </div>\n      <ion-icon name="ios-star-outline" item-right></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\APP-TAXI\src\pages\history\history.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_trips__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TripService = (function () {
    function TripService() {
        this.trips = __WEBPACK_IMPORTED_MODULE_1__mock_trips__["a" /* TRIPS */];
    }
    TripService.prototype.getAll = function () {
        return this.trips;
    };
    TripService.prototype.getItem = function (id) {
        for (var i = 0; i < this.trips.length; i++) {
            if (this.trips[i].id === parseInt(id)) {
                return this.trips[i];
            }
        }
        return null;
    };
    TripService.prototype.remove = function (item) {
        this.trips.splice(this.trips.indexOf(item), 1);
    };
    TripService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TripService);
    return TripService;
}());

//# sourceMappingURL=trip-service.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_notification_service__ = __webpack_require__(205);
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
  Generated class for the NotificationPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var NotificationPage = (function () {
    function NotificationPage(nav, notificationService) {
        this.nav = nav;
        this.notificationService = notificationService;
        this.notifications = notificationService.getAll();
    }
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notification',template:/*ion-inline-start:"D:\APP-TAXI\src\pages\notification\notification.html"*/'<!--\n  Generated template for the NotificationPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary" >\n    <button  ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Notification</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class="list-full-border">\n    <ion-item *ngFor="let noti of notifications">\n      <ion-icon name="ios-mail-outline" color="primary"  item-left></ion-icon>\n      <div [ngClass]="{\'bold\': !noti.read}">{{ noti.title }}</div>\n      <span>{{ noti.createdAt }}</span>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\APP-TAXI\src\pages\notification\notification.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_notification_service__["a" /* NotificationService */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_notifications__ = __webpack_require__(287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationService = (function () {
    function NotificationService() {
        this.notifications = __WEBPACK_IMPORTED_MODULE_1__mock_notifications__["a" /* NOTIFICATIONS */];
    }
    NotificationService.prototype.getAll = function () {
        return this.notifications;
    };
    NotificationService.prototype.getItem = function (id) {
        for (var i = 0; i < this.notifications.length; i++) {
            if (this.notifications[i].id === parseInt(id)) {
                return this.notifications[i];
            }
        }
        return null;
    };
    NotificationService.prototype.remove = function (item) {
        this.notifications.splice(this.notifications.indexOf(item), 1);
    };
    NotificationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], NotificationService);
    return NotificationService;
}());

//# sourceMappingURL=notification-service.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
var SupportPage = (function () {
    function SupportPage(nav) {
        this.nav = nav;
    }
    SupportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-support',template:/*ion-inline-start:"D:\APP-TAXI\src\pages\support\support.html"*/'<!--\n  Generated template for the SupportPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary" >\n    <button  ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Support</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="support">\n  <div class="feedback-form padding">\n    <textarea name="feed_back" placeholder="Type your feedback here"></textarea>\n    <button  ion-button block color="primary" >SEND</button>\n    <div text-center>OR</div>\n    <button  ion-button button block color="dark" >CALL US</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\APP-TAXI\src\pages\support\support.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], SupportPage);
    return SupportPage;
}());

//# sourceMappingURL=support.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_driver_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tracking_tracking__ = __webpack_require__(208);
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
var DriverPage = (function () {
    function DriverPage(nav, driverService) {
        this.nav = nav;
        this.driverService = driverService;
        // get driver info
        this.driver = driverService.getItem(1);
    }
    DriverPage.prototype.track = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__tracking_tracking__["a" /* TrackingPage */]);
    };
    DriverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-driver',template:/*ion-inline-start:"D:\APP-TAXI\src\pages\driver\driver.html"*/'<!--\n  Generated template for the DriverPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary" >\n    <ion-title>Driver found</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="driver-top dark-bg light" text-center>\n    <span>Success! We found you a driver</span>\n  </div>\n\n  <div class="driver-info rlt" text-center>\n\n    <div class="driver-picture" padding-bottom>\n\n      <img class="circle" src="assets/img/thumb/adam.jpg" alt=""/>\n    </div>\n\n    <div no-margin>Hi, my name is</div>\n    <h3 no-margin ion-text color="primary" >{{ driver.name }}</h3>\n    <div no-margin>and I am {{ driver.distance }}KM away</div>\n\n    <ion-grid class="driver-plate">\n      <ion-row>\n        <ion-col>\n          <div class="text-hint">Plate Number</div>\n          <strong margin-top>{{ driver.plate }}</strong>\n        </ion-col>\n        <ion-col>\n          <div class="text-hint">Please pay by</div>\n          <strong>Cash</strong>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <div ion-button block color="primary" (click)="track()">Next</div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\APP-TAXI\src\pages\driver\driver.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_driver_service__["a" /* DriverService */]])
    ], DriverPage);
    return DriverPage;
}());

//# sourceMappingURL=driver.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_driver_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(40);
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
  Generated class for the TrackingPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var TrackingPage = (function () {
    function TrackingPage(nav, driverService, platform, alertCtrl) {
        var _this = this;
        this.nav = nav;
        this.driverService = driverService;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        // map height
        this.mapHeight = 480;
        // get driver info
        this.driver = driverService.getItem(1);
        // show rating popup
        setTimeout(function () {
            _this.showRating();
        }, 3000);
    }
    TrackingPage.prototype.ionViewDidLoad = function () {
        // init map
        this.initializeMap();
    };
    TrackingPage.prototype.initializeMap = function () {
        var _this = this;
        var latLng = new google.maps.LatLng(21.0318202, 105.8495298);
        var mapOptions = {
            center: latLng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            zoomControl: false,
            streetViewControl: false
        };
        this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
        // get ion-view height
        var viewHeight = window.screen.height - 44; // minus nav bar
        // get info block height
        var infoHeight = document.getElementsByClassName('tracking-info')[0].scrollHeight;
        this.mapHeight = viewHeight - infoHeight;
        var options = { timeout: 120000, enableHighAccuracy: true };
        navigator.geolocation.getCurrentPosition(function (position) {
            var newLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            _this.map.setCenter(newLatLng);
            new google.maps.Marker({
                map: _this.map,
                animation: google.maps.Animation.DROP,
                position: _this.map.getCenter()
            });
        }, function (error) {
            console.log(error);
        }, options);
        // refresh map
        setTimeout(function () {
            google.maps.event.trigger(_this.map, 'resize');
        }, 300);
    };
    // show rating popup
    TrackingPage.prototype.showRating = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Thank you',
            message: 'We hope you have enjoyed your ride, For comments, compliments or enquiries, please write to us below',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                    }
                },
                {
                    text: 'Submit',
                    handler: function (data) {
                        console.log('Saved clicked');
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                    }
                }
            ]
        });
        prompt.present();
    };
    TrackingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tracking',template:/*ion-inline-start:"D:\APP-TAXI\src\pages\tracking\tracking.html"*/'<!--\n  Generated template for the TrackingPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary" >\n    <ion-title>Driver on the way</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <!-- Show map here -->\n  <div id="map" [ngStyle]="{height: mapHeight + \'px\'}"></div>\n\n  <ion-list class="list-no-border">\n\n    <ion-item class="tracking-info no-border">\n      <img class="circle icon pull-left" src="assets/img/thumb/adam.jpg" item-left alt=""/>\n      <div class="item-content">\n        <div>\n          <strong>{{ driver.plate }}</strong>\n          <div>{{ driver.name }}</div>\n        </div>\n\n        <div class="action-icons">\n          <ion-icon name="call" color="secondary" ></ion-icon>\n          <ion-icon name="mail" color="secondary" ></ion-icon>\n        </div>\n      </div>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"D:\APP-TAXI\src\pages\tracking\tracking.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_driver_service__["a" /* DriverService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], TrackingPage);
    return TrackingPage;
}());

//# sourceMappingURL=tracking.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(233);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_driver_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_notification_service__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_place_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_trip_service__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_driver_driver__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_finding_finding__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_history_history__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_resumen_resumen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_modal_rating_modal_rating__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_notification_notification__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_payment_method_payment_method__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_places_places__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_register_register__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_support_support__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_tracking_tracking__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import services




// end import services
// import pages














// end import pages
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_driver_driver__["a" /* DriverPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_finding_finding__["a" /* FindingPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_resumen_resumen__["a" /* ResumenPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_modal_rating_modal_rating__["a" /* ModalRatingPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_payment_method_payment_method__["a" /* PaymentMethodPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_places_places__["a" /* PlacesPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_support_support__["a" /* SupportPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_tracking_tracking__["a" /* TrackingPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_driver_driver__["a" /* DriverPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_finding_finding__["a" /* FindingPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_resumen_resumen__["a" /* ResumenPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_modal_rating_modal_rating__["a" /* ModalRatingPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_payment_method_payment_method__["a" /* PaymentMethodPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_places_places__["a" /* PlacesPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_support_support__["a" /* SupportPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_tracking_tracking__["a" /* TrackingPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__services_driver_service__["a" /* DriverService */],
                __WEBPACK_IMPORTED_MODULE_7__services_notification_service__["a" /* NotificationService */],
                __WEBPACK_IMPORTED_MODULE_8__services_place_service__["a" /* PlaceService */],
                __WEBPACK_IMPORTED_MODULE_9__services_trip_service__["a" /* TripService */]
                /* import services */
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_history_history__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_notification_notification__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_support_support__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import pages





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.pages = [
            {
                title: 'Home',
                icon: 'ios-home-outline',
                count: 0,
                component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]
            },
            {
                title: 'History',
                icon: 'ios-time-outline',
                count: 0,
                component: __WEBPACK_IMPORTED_MODULE_6__pages_history_history__["a" /* HistoryPage */]
            },
            {
                title: 'Notification',
                icon: 'ios-notifications-outline',
                count: 2,
                component: __WEBPACK_IMPORTED_MODULE_7__pages_notification_notification__["a" /* NotificationPage */]
            },
            {
                title: 'Support',
                icon: 'ios-help-circle-outline',
                count: 0,
                component: __WEBPACK_IMPORTED_MODULE_8__pages_support_support__["a" /* SupportPage */]
            },
            {
                title: 'Logout',
                icon: 'ios-log-out-outline',
                count: 0,
                component: __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]
            }
        ];
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\APP-TAXI\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-content class="menu-left">\n    <!-- User profile -->\n    <div text-center padding-top padding-bottom class="primary-bg menu-left">\n      <a menuClose>\n        <img class="profile-picture" src="assets/img/thumb/adam.jpg">\n        <h4 ion-text light>Adam Lambert</h4>\n      </a>\n    </div>\n\n    <ion-list class="list-full-border">\n      <button ion-item menuClose *ngFor="let page of pages" (click)="openPage(page)">\n        <ion-icon item-left name="{{ page.icon }}"></ion-icon>\n        {{ page.title }}\n        <ion-badge color="danger" item-right *ngIf="page.count">{{ page.count }}</ion-badge>\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"D:\APP-TAXI\src\app\app.html"*/,
            queries: {
                nav: new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */]('content')
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PLACES; });
var PLACES = [
    {
        name: "Bach Mai hospital",
        address: "Giai Phong street, Hanoi, Vietnam",
        distance: 1
    },
    {
        name: "Vietnam - France hospital",
        address: "Phuong Mai street, Hanoi, Vietnam",
        distance: 1.2
    },
    {
        name: "Pico plaza",
        address: "No 02 Truong Chinh street, Hanoi, Vietnam",
        distance: 1.3
    },
    {
        name: "Pho Vong",
        address: "Pho Vong street, Hanoi, Vietnam",
        distance: 1.4
    },
    {
        name: "iMobile",
        address: "Pho Vong street, Hanoi, Vietnam",
        distance: 1.5
    }
];
//# sourceMappingURL=mock-places.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TRIPS; });
var TRIPS = [
    {
        id: 1,
        from: 'Royal City',
        to: 'Vietnam - France hospital',
        time: '2016-01-02'
    },
    {
        id: 2,
        from: 'BigC',
        to: 'Phao Dai Lang',
        time: '2015-12-11'
    },
    {
        id: 3,
        from: 'Royal City',
        to: '784 Lang',
        time: '2015-11-10'
    },
    {
        id: 4,
        from: 'Royal City',
        to: 'Vietnam - France hospital',
        time: '2015-11-10'
    }
];
//# sourceMappingURL=mock-trips.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NOTIFICATIONS; });
var NOTIFICATIONS = [
    {
        id: 1,
        title: "New price from Jan 2016",
        content: "",
        createdAt: "2016-02-14 12:00:00",
        read: true
    },
    {
        id: 2,
        title: "New version 1.1.1",
        content: "",
        createdAt: "2016-02-13 12:00:00",
        read: false
    },
    {
        id: 3,
        title: "New version 1.1.0",
        content: "",
        createdAt: "2016-02-12 12:00:00",
        read: false
    }
];
//# sourceMappingURL=mock-notifications.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DRIVERS; });
var DRIVERS = [
    {
        id: 1,
        name: "Edward Thomas",
        plate: "29A578.89",
        brand: "Kia Morning",
        distance: 0.6,
        status: "Bidding"
    },
    {
        id: 2,
        name: "Denis Suarez",
        plate: "29A578.89",
        brand: "Kia Morning",
        distance: 0.6,
        status: "Contacting"
    },
    {
        id: 3,
        name: "Karim Benzema",
        plate: "29A578.89",
        brand: "Kia Morning",
        distance: 0.6,
        status: "Contacting"
    },
    {
        id: 4,
        name: "Martin Montoya",
        plate: "29A578.89",
        brand: "Kia Morning",
        distance: 0.6,
        status: "Contacting"
    },
];
//# sourceMappingURL=mock-drivers.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_driver_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__driver_driver__ = __webpack_require__(207);
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
  Generated class for the FindingPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var FindingPage = (function () {
    function FindingPage(nav, driverService) {
        var _this = this;
        this.nav = nav;
        this.driverService = driverService;
        // get list drivers
        this.drivers = driverService.getAll();
        setTimeout(function () {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_3__driver_driver__["a" /* DriverPage */]);
        }, 5000);
    }
    FindingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-finding',template:/*ion-inline-start:"D:\APP-TAXI\src\pages\finding\finding.html"*/'<!--\n  Generated template for the FindingPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary" >\n    <ion-title>Finding you a driver</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class=" primary-bg">\n  <!-- Green circle with marker icon in the center -->\n  <div padding text-center="">\n    <div class="location-animation circle">\n      <ion-icon name="pin" color="light" ></ion-icon>\n    </div>\n  </div>\n\n  <ion-list class="list-no-border list-drivers" padding>\n    <ion-item *ngFor="let driver of drivers">\n      <span>{{ driver.name }}</span>\n      <span class="pull-right">{{ driver.status }}...</span>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\APP-TAXI\src\pages\finding\finding.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_driver_service__["a" /* DriverService */]])
    ], FindingPage);
    return FindingPage;
}());

//# sourceMappingURL=finding.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalRatingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
  Generated class for the ModalRatingPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ModalRatingPage = (function () {
    function ModalRatingPage(nav) {
        this.nav = nav;
    }
    ModalRatingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-rating',template:/*ion-inline-start:"D:\APP-TAXI\src\pages\modal-rating\modal-rating.html"*/'<!--\n  Generated template for the ModalRatingPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>ModalRating</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="modal-rating">\n  \n</ion-content>\n'/*ion-inline-end:"D:\APP-TAXI\src\pages\modal-rating\modal-rating.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ModalRatingPage);
    return ModalRatingPage;
}());

//# sourceMappingURL=modal-rating.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
var ProfilePage = (function () {
    function ProfilePage(nav) {
        this.nav = nav;
    }
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"D:\APP-TAXI\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="profile">\n  \n</ion-content>\n'/*ion-inline-end:"D:\APP-TAXI\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__places_places__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resumen_resumen__ = __webpack_require__(200);
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
var HomePage = (function () {
    function HomePage(nav, platform, alertCtrl) {
        this.nav = nav;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        // map id
        this.mapId = Math.random() + 'map';
        // list vehicles
        this.vehicles = [
            {
                name: 'Normal',
                image: 'assets/img/auto-normal.png',
                active: true
            },
            {
                name: 'VAN',
                image: 'assets/img/van.png',
                active: false
            },
            {
                name: 'VIP',
                image: 'assets/img/vip.png',
                active: false
            }
        ];
    }
    HomePage.prototype.ionViewDidLoad = function () {
        // init map
        this.initializeMap();
    };
    // toggle active vehicle
    HomePage.prototype.toggleVehicle = function (index) {
        for (var i = 0; i < this.vehicles.length; i++) {
            this.vehicles[i].active = (i == index);
        }
    };
    HomePage.prototype.initializeMap = function () {
        var _this = this;
        var latLng = new google.maps.LatLng(21.0318202, 105.8495298);
        var mapOptions = {
            center: latLng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            zoomControl: false,
            streetViewControl: false
        };
        this.map = new google.maps.Map(document.getElementById(this.mapId), mapOptions);
        // get ion-view height
        var viewHeight = window.screen.height - 44; // minus nav bar
        // get info block height
        var infoHeight = document.getElementsByClassName('booking-info')[0].scrollHeight;
        // get booking form height
        var bookingHeight = document.getElementsByClassName('booking-form')[0].scrollHeight;
        var options = { timeout: 120000, enableHighAccuracy: true };
        // refresh map
        setTimeout(function () {
            google.maps.event.trigger(_this.map, 'resize');
        }, 300);
        // use GPS to get center position
        navigator.geolocation.getCurrentPosition(function (position) {
            var newLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            _this.map.setCenter(newLatLng);
            new google.maps.Marker({
                map: _this.map,
                animation: google.maps.Animation.DROP,
                position: _this.map.getCenter()
            });
        }, function (error) {
            console.log(error);
        }, options);
    };
    // choose pickup place
    HomePage.prototype.choosePlace = function () {
        // go to places page
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__places_places__["a" /* PlacesPage */]);
    };
    // choose pickup place
    HomePage.prototype.getResumen = function () {
        // go to places page
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__resumen_resumen__["a" /* ResumenPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\APP-TAXI\src\pages\home\home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="first" >\n    <button  ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <img src="assets/img/first-logo.png"/>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <!-- Show map here -->\n  <div id="{{ mapId }}" [ngStyle]="{height: \'100%\'}"></div>\n\n\n   <!--Choose pickup and drop off places-->\n  <ion-list class="map-overlay list-full-border">\n      <ion-item (click)="choosePlace()">\n        <span class="label" ion-text color="secondary" >ORIGEN</span>\n        <div class="italic">Aeroparque Jorge Newbery</div>\n      </ion-item>\n      <ion-item (click)="choosePlace()">\n        <span class="label" ion-text color="secondary" >DESTINO</span>\n        <div class="italic">San Isidro, Buenos Aires, Argentina</div>\n      </ion-item>\n      <ion-item>\n        <ion-label>VIAJE CON REGRESO</ion-label>\n        <ion-toggle color="primary" checked="false"></ion-toggle>\n      </ion-item>\n  </ion-list>\n  <ion-fab padding bottom right style="margin-bottom:50px;">\n    <button ion-fab color="first" (click)="getResumen()">SIG.</button>\n  </ion-fab>\n\n  <!-- Booking information -->\n  <div class="booking-info">\n       \n    <ion-grid no-padding>\n      <ion-row class="vehicles" text-center>\n        <ion-col class="item-vehicle" *ngFor="let vehicle of vehicles; let i = index" [ngClass]="{\'active\': vehicle.active}"\n                 (click)="toggleVehicle(i)">\n          <img padding src="{{ vehicle.image }}" />\n          <span>{{ vehicle.name }}</span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\APP-TAXI\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_drivers__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DriverService = (function () {
    function DriverService() {
        this.drivers = __WEBPACK_IMPORTED_MODULE_1__mock_drivers__["a" /* DRIVERS */];
    }
    DriverService.prototype.getAll = function () {
        return this.drivers;
    };
    DriverService.prototype.getItem = function (id) {
        for (var i = 0; i < this.drivers.length; i++) {
            if (this.drivers[i].id === parseInt(id)) {
                return this.drivers[i];
            }
        }
        return null;
    };
    DriverService.prototype.remove = function (item) {
        this.drivers.splice(this.drivers.indexOf(item), 1);
    };
    DriverService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DriverService);
    return DriverService;
}());

//# sourceMappingURL=driver-service.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map