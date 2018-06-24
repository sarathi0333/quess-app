(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<!-- Routed views go here -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/welcome/welcome.component */ "./src/app/components/welcome/welcome.component.ts");
/* harmony import */ var _services_network_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/network.service */ "./src/app/services/network.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _services_data_data_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/data/data.service */ "./src/app/services/data/data.service.ts");
/* harmony import */ var _components_adminpanel_adminpanel_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/adminpanel/adminpanel.component */ "./src/app/components/adminpanel/adminpanel.component.ts");
/* harmony import */ var _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/quiz/quiz.component */ "./src/app/components/quiz/quiz.component.ts");
/* harmony import */ var _components_adminpanel_pipes_sort_grade_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/adminpanel/pipes/sort-grade.pipe */ "./src/app/components/adminpanel/pipes/sort-grade.pipe.ts");
/* harmony import */ var _components_adminpanel_pipes_sort_date_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/adminpanel/pipes/sort-date.pipe */ "./src/app/components/adminpanel/pipes/sort-date.pipe.ts");
/* harmony import */ var _components_adminpanel_pipes_sort_zone_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/adminpanel/pipes/sort-zone.pipe */ "./src/app/components/adminpanel/pipes/sort-zone.pipe.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _components_adminpanel_upload_upload_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/adminpanel/upload/upload.component */ "./src/app/components/adminpanel/upload/upload.component.ts");
/* harmony import */ var _components_details_details_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/details/details.component */ "./src/app/components/details/details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_11__["WelcomeComponent"],
                _components_adminpanel_adminpanel_component__WEBPACK_IMPORTED_MODULE_15__["AdminpanelComponent"],
                _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_16__["QuizComponent"],
                _components_adminpanel_pipes_sort_grade_pipe__WEBPACK_IMPORTED_MODULE_17__["SortGradePipe"],
                _components_adminpanel_pipes_sort_date_pipe__WEBPACK_IMPORTED_MODULE_18__["SortDatePipe"],
                _components_adminpanel_pipes_sort_zone_pipe__WEBPACK_IMPORTED_MODULE_19__["SortZonePipe"],
                _components_adminpanel_upload_upload_component__WEBPACK_IMPORTED_MODULE_21__["UploadComponent"],
                _components_details_details_component__WEBPACK_IMPORTED_MODULE_22__["DetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                    }
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_9__["AppRoutes"]),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot()
            ],
            providers: [_services_network_service__WEBPACK_IMPORTED_MODULE_12__["NetworkService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"], _auth_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"], _services_data_data_service__WEBPACK_IMPORTED_MODULE_14__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

// required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http);
}


/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/welcome/welcome.component */ "./src/app/components/welcome/welcome.component.ts");
/* harmony import */ var _components_adminpanel_adminpanel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/adminpanel/adminpanel.component */ "./src/app/components/adminpanel/adminpanel.component.ts");
/* harmony import */ var _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/quiz/quiz.component */ "./src/app/components/quiz/quiz.component.ts");
/* harmony import */ var _components_details_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/details/details.component */ "./src/app/components/details/details.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");






var AppRoutes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"] },
    { path: 'welcome', component: _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_1__["WelcomeComponent"] },
    { path: 'details', component: _components_details_details_component__WEBPACK_IMPORTED_MODULE_4__["DetailsComponent"] },
    { path: 'admin', component: _components_adminpanel_adminpanel_component__WEBPACK_IMPORTED_MODULE_2__["AdminpanelComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'quiz', component: _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_3__["QuizComponent"] }
];


/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authservice) {
        this.router = router;
        this.authservice = authservice;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.authservice.isAuthenticated()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            console.log("you are not authorizied to access this page");
        }
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.isAuthenticated = function () {
        this.data = localStorage.getItem("quess");
        if (this.data) {
            this.data = JSON.parse(this.data);
            if (this.data.token) {
                return true;
            }
        }
        else
            return false;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/components/adminpanel/adminpanel.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/adminpanel/adminpanel.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".admin-wrapper {\n    background-image: url('bg1.png');\n    padding-top: 4%;\n    padding-left: 2.5%;\n    padding-right: 2.5%;\n    background-repeat: no-repeat;\n    font-family: Calibri;\n    font-weight: 100;\n}\nh2 {\n    font-size: 2.6vw;\n    font-weight: 100;\n}\nh3 {\n    font-size: 2.6vw;\n}\n.header-wrapper {\n    padding: 2%;\n    background: linear-gradient(45deg, #3267b1, #2babe2);\n    border-radius: 10px;\n    color: white;\n}\n.import-btn, .export-btn {\n    border-radius: 10px;\n    width: 45%;\n}\n.export-btn {\n    margin-left: 5%;\n    color: white;\n    background-color: #464646;\n}\n.import-btn {\n    color: #464646;\n    background-color: #ccc;\n}\n.recent-logout {\n    font-size: 1.79vw;\n    text-align: right;\n}\n.btn-wrapper {\n    margin-top: 2%;\n}\n.result-list-container {\n    margin-top: 10px;\n    background-color: #FFF;\n    padding: 2%;\n}\n.sort-section {\n    font-size: 1.69vw;\n}\n.date, .zone, .grade {\n    cursor: pointer;\n    margin: 0 5% 0 5%;\n}\n.enable {\n    color: #2babe2;\n    border-bottom: 1px solid #2babe2;\n}\n.table-wrapper {\n    background-color: #FFF;\n    font-size: 1.69vw;\n    /* padding-left: 2%; */\n    /* padding-right: 2%; */\n}\ntd {\n    line-height: 35px;\n}\nth {\n    border-top: 0;\n}\ntbody {\n    color: #9a9a9a;\n}\n.grade-col {\n    color: #2babe2;\n}\n.good, .moderate, .poor {\n    position: relative;\n}\n.good::after, .moderate::after, .poor::after {\n    content : \"\";\n    position: absolute;\n    left    : 0;\n    z-index: 100;\n    top  : 10%;\n    width  : 4px;\n    height   : 80%;  /* or 100px */\n    background: #00a651;\n}\n.moderate::after {\n    background: #f3980a;\n}\n.poor::after {\n    background: #f30f3a;\n}\n@media (max-width: 575.98px) {\n    table {\n        font-size: 4vw;\n    }\n    h2 {\n        font-size: 3.6vw;\n        font-weight: 100;\n    }\n    h3 {\n        font-size: 3.6vw;\n    }\n    .sort-section {\n        font-size: 3vw;\n    }\n    .recent-logout {\n        font-size: 2.79vw;\n        text-align: right;\n    }\n}"

/***/ }),

/***/ "./src/app/components/adminpanel/adminpanel.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/adminpanel/adminpanel.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid admin-wrapper\">\n  <div class=\"row header-wrapper\">\n    <div class=\"col-6 col-md-3\">\n      <h2>Admin panel</h2>\n    </div>\n    <div class=\"offset-md-7\"></div>\n    <div class=\"col-6 col-md-2 recent-logout\">\n      <span>Recent\n        <span style=\"color: #3267b1\">|</span>\n      </span>\n      <span (click)=\"logout()\" style=\"cursor: pointer;\">Logout</span>\n    </div>\n    <div class=\"col-6 col-md-4 btn-wrapper\">\n      <app-upload></app-upload>\n      <!-- <input type=\"button\" value=\"Import\" class=\"btn import-btn\"> -->\n      <input type=\"button\" value=\"Export\" class=\"btn export-btn\">\n    </div>\n  </div>\n  <div class=\"row result-list-container\">\n    <div class=\"col-6 col-md-2\">\n      <h3>Result</h3>\n    </div>\n    <div class=\"offset-md-6\"></div>\n    <div class=\"col-6 col-md-4 sort-section text-center\">\n      Sort :\n      <span class=\"date\" (click)=\"swapDate()\" [ngClass]=\"{'enable': sortDateStatus}\">Date</span>\n      <span class=\"zone\" (click)=\"swapZone()\" [ngClass]=\"{'enable': sortZoneStatus}\">Zone</span>\n      <span class=\"grade\" (click)=\"swapGrade()\" [ngClass]=\"{'enable': sortGradeSatus}\">Grade</span>\n    </div>\n  </div>\n  <div class=\"table-wrapper table-responsive\">\n    <table class=\"table\">\n      <thead>\n        <th scope=\"col\" style=\"width: 32%\">Name</th>\n        <th>D.O.B</th>\n        <th>Date</th>\n        <th>Zone</th>\n        <th>Grade</th>\n        <th>Action</th>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let result of results | sortGrade: sortGradeSatus | sortDate: sortDateStatus | sortZone: sortZoneStatus\">\n          <td [ngClass]=\"result.grade.toLowerCase()\">{{result.name}}</td>\n          <td>{{result.dob}}</td>\n          <td>{{result.date | date:'dd/MM/yy'}}</td>\n          <td>{{result.zone}}</td>\n          <td class=\"grade-col\">{{result.grade}}</td>\n          <td>\n            <img src=\"./../../../assets/images/download.png\" class=\"img-fluid\">\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/adminpanel/adminpanel.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/adminpanel/adminpanel.component.ts ***!
  \***************************************************************/
/*! exports provided: AdminpanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminpanelComponent", function() { return AdminpanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminpanelComponent = /** @class */ (function () {
    function AdminpanelComponent(router) {
        this.router = router;
        this.results = [
            {
                name: "Eshwar",
                dob: "08/10/96",
                date: new Date(2017, 5, 3),
                zone: "Coimbatore",
                grade: "Good",
                action: ""
            }, {
                name: "Kumar",
                dob: "08/10/96",
                date: new Date(2018, 1, 17),
                zone: "Chennai",
                grade: "Good",
                action: ""
            }, {
                name: "Sheethal",
                dob: "08/10/96",
                date: new Date(2018, 6, 15),
                zone: "Coimbatore",
                grade: "Poor",
                action: ""
            }, {
                name: "Kiran",
                dob: "08/10/96",
                date: new Date(),
                zone: "Madurai",
                grade: "Moderate",
                action: ""
            }, {
                name: "Ramesh",
                dob: "08/10/96",
                date: new Date(2016, 10, 10),
                zone: "Madurai",
                grade: "Poor",
                action: ""
            }
        ];
        this.sortGradeSatus = false;
        this.sortDateStatus = false;
        this.sortZoneStatus = false;
    }
    AdminpanelComponent.prototype.ngOnInit = function () {
    };
    AdminpanelComponent.prototype.swapGrade = function () {
        this.sortGradeSatus = !this.sortGradeSatus;
    };
    AdminpanelComponent.prototype.swapDate = function () {
        this.sortDateStatus = !this.sortDateStatus;
    };
    AdminpanelComponent.prototype.swapZone = function () {
        this.sortZoneStatus = !this.sortZoneStatus;
    };
    AdminpanelComponent.prototype.logout = function () {
        localStorage.removeItem("quess");
        this.router.navigate(['/login']);
    };
    AdminpanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adminpanel',
            template: __webpack_require__(/*! ./adminpanel.component.html */ "./src/app/components/adminpanel/adminpanel.component.html"),
            styles: [__webpack_require__(/*! ./adminpanel.component.css */ "./src/app/components/adminpanel/adminpanel.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminpanelComponent);
    return AdminpanelComponent;
}());



/***/ }),

/***/ "./src/app/components/adminpanel/pipes/sort-date.pipe.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/adminpanel/pipes/sort-date.pipe.ts ***!
  \***************************************************************/
/*! exports provided: SortDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortDatePipe", function() { return SortDatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortDatePipe = /** @class */ (function () {
    function SortDatePipe() {
    }
    SortDatePipe.prototype.transform = function (value, sortDateStatus) {
        if (value.length === 0) {
            return value;
        }
        var resultArray = [];
        if (sortDateStatus == true) {
            value.forEach(function (element) {
                resultArray.push(element);
            });
            resultArray.sort(function (a, b) {
                return a.date - b.date;
            });
            return resultArray;
        }
        else {
            return value;
        }
    };
    SortDatePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'sortDate'
        })
    ], SortDatePipe);
    return SortDatePipe;
}());



/***/ }),

/***/ "./src/app/components/adminpanel/pipes/sort-grade.pipe.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/adminpanel/pipes/sort-grade.pipe.ts ***!
  \****************************************************************/
/*! exports provided: SortGradePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortGradePipe", function() { return SortGradePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortGradePipe = /** @class */ (function () {
    function SortGradePipe() {
    }
    SortGradePipe.prototype.transform = function (value, sortSatus) {
        if (value.length === 0) {
            return value;
        }
        var resultArray = [];
        var goodArray = [];
        var moderateArray = [];
        var poorArray = [];
        if (sortSatus == true) {
            for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                var result = value_1[_i];
                if (result.grade == 'Poor') {
                    poorArray.push(result);
                }
                else if (result.grade == 'Good') {
                    goodArray.push(result);
                }
                else if (result.grade == 'Moderate') {
                    moderateArray.push(result);
                }
            }
            resultArray = goodArray.concat(moderateArray, poorArray);
            return resultArray;
        }
        else {
            return value;
        }
    };
    SortGradePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'sortGrade'
        })
    ], SortGradePipe);
    return SortGradePipe;
}());



/***/ }),

/***/ "./src/app/components/adminpanel/pipes/sort-zone.pipe.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/adminpanel/pipes/sort-zone.pipe.ts ***!
  \***************************************************************/
/*! exports provided: SortZonePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortZonePipe", function() { return SortZonePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortZonePipe = /** @class */ (function () {
    function SortZonePipe() {
    }
    SortZonePipe.prototype.transform = function (value, sortZoneStatus) {
        if (value.length === 0) {
            return value;
        }
        var resultArray = [];
        if (sortZoneStatus == true) {
            value.forEach(function (element) {
                resultArray.push(element);
            });
            resultArray.sort(function (a, b) {
                var zoneA = a.zone.toLowerCase();
                var zoneB = b.zone.toLowerCase();
                if (zoneA < zoneB) {
                    return -1;
                }
                if (zoneA > zoneB) {
                    return 1;
                }
                return 0;
            });
            return resultArray;
        }
        else {
            return value;
        }
    };
    SortZonePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'sortZone'
        })
    ], SortZonePipe);
    return SortZonePipe;
}());



/***/ }),

/***/ "./src/app/components/adminpanel/upload/upload.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/adminpanel/upload/upload.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/adminpanel/upload/upload.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/adminpanel/upload/upload.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"file\" #file (change)=\"onFilesAdded(content)\" style=\"display: none\">\n<button class=\"btn import-btn\" (click)=\"addFiles()\">Import</button>\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Upload Satus <span [class]=uploadStatus>{{uploadStatus}}</span></h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p>Message: {{popupMsg}}</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-light\" (click)=\"c('Close click')\">Close</button>\n    </div>\n  </ng-template>"

/***/ }),

/***/ "./src/app/components/adminpanel/upload/upload.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/adminpanel/upload/upload.component.ts ***!
  \******************************************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _services_upload_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/upload/upload.service */ "./src/app/services/upload/upload.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadComponent = /** @class */ (function () {
    function UploadComponent(uploadservice, modalService) {
        this.uploadservice = uploadservice;
        this.modalService = modalService;
        this.fileToUpload = null;
        this.popupMsg = "Uploading ...";
        this.uploadStatus = "In Progress";
    }
    UploadComponent.prototype.ngOnInit = function () {
    };
    UploadComponent.prototype.addFiles = function () {
        this.file.nativeElement.click();
    };
    UploadComponent.prototype.onFilesAdded = function (content) {
        var _this = this;
        this.fileToUpload = this.file.nativeElement.files.item(0);
        this.modalService.open(content, { size: 'lg', centered: true });
        this.uploadservice.upload(this.fileToUpload).subscribe(function (response) {
            _this.popupMsg = response.data.message;
            _this.uploadStatus = response.status;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('file'),
        __metadata("design:type", Object)
    ], UploadComponent.prototype, "file", void 0);
    UploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__(/*! ./upload.component.html */ "./src/app/components/adminpanel/upload/upload.component.html"),
            styles: [__webpack_require__(/*! ./upload.component.css */ "./src/app/components/adminpanel/upload/upload.component.css")],
            providers: [_services_upload_upload_service__WEBPACK_IMPORTED_MODULE_2__["UploadService"]],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: ["\n    .dark-modal .modal-content {\n      background-color: #292b2c;\n      color: white;\n    }\n    .dark-modal .close {\n      color: white;\n    }\n    .light-blue-backdrop {\n      background-color: #5cb3fd;\n    }\n    .import-btn {\n      border-radius: 10px;\n      width: 45%;\n      color: #464646;\n      background-color: #ccc;\n    }\n    .success {\n      color: green;\n    }\n    .failure {\n      color: red;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [_services_upload_upload_service__WEBPACK_IMPORTED_MODULE_2__["UploadService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "./src/app/components/details/details.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/details/details.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/details/details.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/details/details.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div>\n    <h1>{{'form.demographics' | translate}}</h1>\n  </div>\n  <form>\n    <div class=\"form-group row\">\n      <label for=\"\" class=\"col-sm-4 col-form-label\">{{'form.name' | translate}}</label>\n      <div class=\"col-sm-6\">\n        <input type=\"text\" class=\"form-control\" [(ngModel)] = \"details.first_name\" name=\"firstName\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"\" class=\"col-sm-4 col-form-label\">{{'form.age' | translate }}</label>\n      <div class=\"col-sm-6\">\n        <input type=\"number\" class=\"form-control\" name=\"age\" [(ngModel)] = \"details.age\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n    <label for=\"\" class=\"col-sm-4 col-form-label\">{{'form.gender.value' | translate }}</label>\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\">\n        <label class=\"form-check-label\" for=\"exampleRadios1\">\n          {{'form.gender.option1' | translate}}\n        </label>\n      </div>\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\">\n        <label class=\"form-check-label\" for=\"exampleRadios1\">\n          {{'form.gender.option2' | translate}}\n        </label>\n      </div>\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\">\n        <label class=\"form-check-label\" for=\"exampleRadios1\">\n          {{'form.gender.option3' | translate}}\n        </label>\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"\" class=\"col-sm-4 col-form-label\">{{'form.work_exp' | translate}}</label>\n      <div class=\"col-sm-6\">\n        <input type=\"number\" class=\"form-control\" name=\"worExp\" [(ngModel)] = \"details.work_exp\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n        <label for=\"\" class=\"col-sm-4 col-form-label\">{{'form.marital_status.value' | translate }}</label>\n          <div class=\"form-check form-check-inline\">\n            <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\">\n            <label class=\"form-check-label\" for=\"exampleRadios1\">\n              {{'form.marital_status.option1' | translate}}\n            </label>\n          </div>\n          <div class=\"form-check form-check-inline\">\n            <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\">\n            <label class=\"form-check-label\" for=\"exampleRadios1\">\n              {{'form.marital_status.option2' | translate}}\n            </label>\n          </div>\n          <div class=\"form-check form-check-inline\">\n            <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\">\n            <label class=\"form-check-label\" for=\"exampleRadios1\">\n              {{'form.marital_status.option3' | translate}}\n            </label>\n          </div>\n          <div class=\"form-check form-check-inline\">\n              <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\">\n              <label class=\"form-check-label\" for=\"exampleRadios1\">\n                {{'form.marital_status.option4' | translate}}\n              </label>\n            </div>\n        </div>\n    <div class=\"form-group row\">\n        <label for=\"\" class=\"col-sm-4 col-form-label\">{{'form.no_of_children' | translate}}</label>\n        <div class=\"col-sm-6\">\n          <input type=\"number\" class=\"form-control\" [(ngModel)] = \"details.no_of_children\" name=\"noChildren\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n          <label for=\"\" class=\"col-sm-4 col-form-label\">{{'form.native_place' | translate}}</label>\n          <div class=\"col-sm-6\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)] = \"details.native_place\" name=\"birthPlace\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n            <label for=\"\" class=\"col-sm-4 col-form-label\">{{'form.reason' | translate}}</label>\n            <div class=\"col-sm-6\">\n              <input type=\"text\" class=\"form-control\" name=\"reason\" [(ngModel)] = \"details.reason_for_leaving_job\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n              <label for=\"\" class=\"col-sm-4 col-form-label\">{{'form.police_record' | translate}}</label>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control\" name=\"police_record\" [(ngModel)] = \"details.past_Police_Record\">\n              </div>\n            </div>\n  </form>\n  <div class=\"row\">\n    <div class=\"col-sm-2\">\n      <button class=\"btn btn-success\">Save</button>\n    </div>\n    <div class=\"col-sm-2\">\n        <button class=\"btn btn-primary\" (click)=\"tempNext()\">Next</button>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/details/details.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/details/details.component.ts ***!
  \*********************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_network_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/network.service */ "./src/app/services/network.service.ts");
/* harmony import */ var _services_data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/data/data.service */ "./src/app/services/data/data.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(data, networkservice, translate, router) {
        this.data = data;
        this.networkservice = networkservice;
        this.translate = translate;
        this.router = router;
        this.i18n = ["en", "tn"];
        translate.setDefaultLang('en');
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentDetail.subscribe(function (data) { return _this.details = data; });
        var userData = sessionStorage.getItem('user');
        var lang = sessionStorage.getItem('language');
        this.translate.use(this.i18n[parseInt(lang)]);
        var userDatatojson = JSON.parse(userData);
        this.networkservice.getMessage('/api/login', {
            lang: lang,
            user_id: userDatatojson.user_id,
            token: userDatatojson.token
        }).subscribe(function (response) {
            if (response.status == "failure") {
                console.log("response");
                //handle error
            }
            else {
                _this.data.changeuser(response.data.details);
            }
        });
    };
    DetailsComponent.prototype.tempNext = function () {
        this.router.navigate(['/quiz']);
    };
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/components/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/components/details/details.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _services_network_service__WEBPACK_IMPORTED_MODULE_1__["NetworkService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-left-col {\n    background-color: #0095da;\n}\n.login-left-col div {\n    padding-left: 14.5%;\n    padding-right: 14.5%;\n    padding-top: 45%;\n    padding-bottom: 45.5%;\n}\n.login-form-container {\n    padding-top: 36%;\n}\nh1, label, input, .submit-btn, a {\n    font-family: Calibri;\n    font-weight: 100;\n}\nh1 {\n    color: #0095da;\n    font-size: 3.5vw;\n    margin: 0;\n}\n.form-wrapper {\n    margin-top: 4%;\n}\nlabel {\n    font-size: 2.2vw;\n}\n.login-phn {\n    margin-top: 1%;\n    border: 0;\n    border-radius: 0;\n    padding-bottom: 1.5%;\n    padding-left: 0;\n    padding-top: 0;\n    border-bottom: 2px solid #0095da;\n}\n.username, .password {\n    margin-top: 1%;\n    border: 0;\n    border-radius: 0;\n    padding-bottom: 1.5%;\n    padding-left: 0;\n    padding-top: 0;\n    border-bottom: 2px solid #0095da;\n}\ninput {\n    font-size: 1.85vw;\n    color: #555858;\n}\n.submit-btn {\n    color: white;\n    background: #0095da;\n    border: 0;\n    width: 25%;\n    font-size: 1.75vw;\n    border-radius: 10px;\n    height: 5.85vh;\n    margin-top: 6%;\n    cursor: pointer;\n    line-height: 10px;\n}\nbutton:disabled {\n    background-color: grey;\n    cursor: not-allowed;\n }\n.form-control:focus{\n    box-shadow: none;\n}\n.login-footer {\n    margin-top: 24%;\n    padding-right: 3%;\n    float: left;\n    width: 100%;\n}\n.login-footer a {\n    font-size: 1.75vw;\n    color: #555858;\n    cursor: pointer;\n}\n.login-footer div:nth-child(1) {\n    padding-top: 7%;\n}\n.logo-wrapper {\n    width: 20%;\n    text-align: right;\n}\n.admin {\n    padding-top: 13.5%;\n}\n@media (max-width: 575.98px) {\n    /* Login Component */\n    h1 {\n        font-size: 5.5vw; \n    }\n    label {\n        font-size: 4.2vw;\n    }\n    input {\n        font-size: 3.85vw;\n    }\n    .submit-btn {\n        font-size: 3.75vw;\n    }\n    .login-footer a {\n        font-size: 3.75vw;\n    }\n    .login-footer div:nth-child(1) {\n        padding-top: 6%;\n    }\n}\n"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-5 login-left-col\">\n      <div>\n        <img src=\"./../../../assets/images/anaysis.png\" class=\"img-fluid\" alt=\"\" >\n      </div>\n    </div>\n    <div class=\"offset-md-1\"></div>\n    <div class=\"col-md-6\">\n      <div class=\"login-form-container\" *ngIf=\"user\">\n        <div>\n          <h1>Sign in</h1>\n          <form (ngSubmit)=\"onSubmit(phNumber.value)\" #signinForm=\"ngForm\">\n            <div class=\"form-group row\">\n              <div class=\"col-8 col-sm-8 col-md-8 form-wrapper\">\n                  <label for=\"name\">Please fill in your Phone number</label>\n                  <input type=\"tel\" class=\"form-control login-phn\" name=\"phNumber\" #phNumber ngModel maxlength=\"10\"\n                    required autocomplete=\"off\" [pattern]=\"phnPattern\">    \n              </div>\n            </div>\n            <button type=\"submit\" class=\"btn submit-btn\" [disabled]=\"!signinForm.valid\">Next</button>\n          </form>\n        </div>\n      </div>\n      <div class=\"login-form-container admin\" *ngIf=\"!user\">\n          <div>\n            <h1>Sign in</h1>\n            <form (ngSubmit)=\"onSubmitAdmin(adminUsername.value, adminPassword.value)\" #signinAdminForm=\"ngForm\">\n              <div class=\"form-group row\">\n                <div class=\"col-8 col-sm-8 col-md-8 form-wrapper\">\n                    <label for=\"username\">Username</label>\n                    <input type=\"text\" class=\"form-control username\" id=\"username\" name=\"adminUsername\" #adminUsername ngModel required autocomplete=\"off\">    \n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <div class=\"col-8 col-sm-8 col-md-8 form-wrapper\">\n                  <label for=\"password\">Password</label>\n                  <input type=\"password\" class=\"form-control password\" id=\"password\" name=\"adminPassword\" #adminPassword ngModel required autocomplete=\"off\">\n                </div>\n              </div>\n              <button type=\"submit\" class=\"btn submit-btn\" [disabled]=\"!signinAdminForm.valid\">Next</button>\n            </form>\n          </div>\n        </div>\n      <div class=\"login-footer\" >\n        <div class=\"float-left\">\n          <a style=\"color: red;\" (click)=\"user = !user\" (click)=\"swap()\">Sign in as {{form}}</a>\n        </div>\n        <div class=\"float-right logo-wrapper\">\n          <img src=\"./../../../assets/images/logo.png\" class=\"img-fluid\" alt=\"Quess logo\" >\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_network_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/network.service */ "./src/app/services/network.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(networkservice, router) {
        this.networkservice = networkservice;
        this.router = router;
        this.phnPattern = "^[0-9]{10}$";
        this.user = true;
        this.form = "admin";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function (phoneNumber) {
        var _this = this;
        this.networkservice.postMessage('./api/login', { phoneNumber: phoneNumber })
            .subscribe(function (response) {
            if (response.status === 'failure') {
                alert("Invalid Phonenumber");
            }
            else if (response.status === 'success') {
                console.log(response);
                sessionStorage.clear();
                sessionStorage.setItem('user', JSON.stringify(response.data.details));
                _this.router.navigate(['/welcome']);
            }
            // store the seesion in the session storage
        });
    };
    LoginComponent.prototype.onSubmitAdmin = function (adminUsername, adminPassword) {
        var _this = this;
        this.networkservice.postMessage('./api/admin', { username: adminUsername, password: adminPassword })
            .subscribe(function (response) {
            if (response.status == "success") {
                localStorage.clear();
                localStorage.setItem('quess', JSON.stringify(response.data));
                _this.router.navigate(['/admin']);
            }
        });
    };
    LoginComponent.prototype.swap = function () {
        if (this.form == "admin") {
            this.form = "user";
        }
        else {
            this.form = "admin";
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_network_service__WEBPACK_IMPORTED_MODULE_1__["NetworkService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/quiz/quiz.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/quiz/quiz.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".question-wrapper {\n    background-image: url('quess_bg.png');\n    background-repeat: no-repeat;\n    padding-top: 2.5%;  \n    font-family: Calibri;\n    font-weight: 100;\n}\n.ques-num {\n    background: linear-gradient(45deg, #3267b1, #2babe2);\n    border-radius: 10px;\n    color: white;\n    font-size: 1.97vw;\n    width: 19%;\n    border: 0;\n    letter-spacing: 0.0625em;   \n}\n.question, .answer, .ques-submit {\n    margin-top: 1.5%;\n    padding-left: 8%;\n    padding-right: 8%;\n    font-size: 1.75vw;\n}\n.answer ul {\n    width: 100%;\n}\n.answer ul li {\n    margin-bottom: 2.7%;\n    /* border-radius: 10px; */\n    border: 3px solid black;\n    background: transparent;\n}\n.checked {\n    /* border-color: #3267b1 !important; */\n    color: #3267b1;\n    -o-border-image: url(\"data:image/png;base64,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\") 10 stretch !important;\n       border-image: url(\"data:image/png;base64,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\") 10 stretch !important;\n    border-image-source: linear-gradient(45deg, #3267b1, #2babe2 ) !important;\n    /* border-radius: 10px !important; */\n}\n.nxt-btn {\n    color: white;\n    background: #0095da;\n    border: 0;\n    width: 12.66vw;\n    font-size: 1.75vw;\n    border-radius: 10px;\n    height: 5.85vh;\n    cursor: pointer;\n    line-height: 10px;\n}\n.time-btn {\n    color: white;\n    background: #0095da;\n    border: 0;\n    border-radius: 50%;\n    letter-spacing: 0.0625em;\n}\n.audio-section {\n    margin-top: 2%;\n    color: #da0005;\n    font-size: 1.75vw;\n}\n@media (max-width: 575.98px) {\n    .audio-section img {\n        max-width: 50%;\n    }\n    .audio-section {\n        font-size: 2.75vw;\n        line-height: 18px;\n    }\n    .ques-num {\n        width: 22%;\n    }\n    .question {\n        font-weight: 600;\n    }\n    .question, .answer, .ques-submit {\n        font-size: 3vw;\n    }\n    .nxt-btn {\n        font-size: 2.75vw;\n    }\n}\n\n"

/***/ }),

/***/ "./src/app/components/quiz/quiz.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/quiz/quiz.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid question-wrapper\">\n  <div class=\"row justify-content-center\">\n    <button class=\"btn ques-num\">Question : 1 / 50</button>\n  </div>\n  <div class=\"row question justify-content-sm-center text-center\">\n    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard\n      dummy text ever since the 1500s, when an unknown printer took a galley </p>\n  </div>\n  <div class=\"row answer\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\" *ngFor=\"let option of options\" (click)=\"activateClass(option)\" [ngClass]=\"{'checked': option.active}\">{{option.answer}}</li>\n    </ul>\n  </div>\n  <div class=\"row justify-content-between ques-submit\">\n    <button class=\"btn nxt-btn\">Next</button>\n    <button class=\"btn time-btn\">01</button>\n  </div>\n  <div class=\"row justify-content-center audio-section\">\n    <div>\n      <img src=\"./../../../assets/images/audio.png\" class=\"img-fluid\">\n    </div>\n    <span>&nbsp;&nbsp;Click here for Audio</span>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/quiz/quiz.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/quiz/quiz.component.ts ***!
  \***************************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuizComponent = /** @class */ (function () {
    function QuizComponent() {
        // options: string[] = ["A.    It is a long established fact that a reader will be distracted ", 
        // "B.    It is a long established fact that a reader will be distracted ",
        // "C.    It is a long established fact that a reader will be distracted ",
        // "D.    It is a long established fact that a reader will be distracted "]
        this.options = [
            {
                active: false,
                answer: "A.    It is a long established fact that a reader will be distracted"
            }, {
                active: false,
                answer: "B.    It is a long established fact that a reader will be distracted"
            }, {
                active: false,
                answer: "C.    It is a long established fact that a reader will be distracted"
            }, {
                active: false,
                answer: "D.    It is a long established fact that a reader will be distracted"
            }
        ];
    }
    QuizComponent.prototype.ngOnInit = function () {
    };
    QuizComponent.prototype.activateClass = function (option) {
        for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
            var option_1 = _a[_i];
            option_1.active = false;
        }
        option.active = !option.active;
    };
    QuizComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quiz',
            template: __webpack_require__(/*! ./quiz.component.html */ "./src/app/components/quiz/quiz.component.html"),
            styles: [__webpack_require__(/*! ./quiz.component.css */ "./src/app/components/quiz/quiz.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuizComponent);
    return QuizComponent;
}());



/***/ }),

/***/ "./src/app/components/welcome/welcome.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/welcome/welcome.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-wrapper {\n    background-image: url('bg1.png');\n    background-repeat: no-repeat;\n    /* background-color: #f1f1f1; */\n    min-height: 768px;\n}\n.welcome-wrapper div:nth-child(1) {\n    padding-top: 8.5%;\n    padding-left: 5%;\n}\nh1, p {\n    font-family: Calibri;\n    color: #0095da;\n}\nh1 {\n    margin-bottom: 4%;\n}\np {\n    color: black;\n    font-size: 2.19vw;\n    font-weight: 100;\n}\n.lang {\n    display: inline-block;\n}\n.choose-lang {\n    margin-left: 3%;\n    font-family: Calibri;\n    font-weight: 600;\n    font-size: 1.9vw;\n    border: 1px solid #0095da;\n    padding-left: 5%;\n    padding-right: 5%;\n\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -ms-appearance: none;\n    -o-appearance: none;\n    appearance: none;\n    border-radius: 10px;\n}\nselect.choose-lang {\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAATCAYAAAB/TkaLAAABEUlEQVQ4ja3UMUvDQBgG4KelaHWp/kxBHcSpQ9FBq4N0keIqbg7iqC7i4iS4iINFRKSLOGmHFhQd7gqhJGls+y5Jvrs8kLv7UtJ+XkENS0IWUI33y/FajXVxXgnzWIy1GsqYw20lDjbNJr+ol3GIhxmhZ7gr4xvrMwB/0CCsA1zjdEr0BI9JFDbQmxAcYGv4kES72JkQPcJrGgotdP4JfmE3WRhFB1j7J9rCex4KlzgvCH7gYLSYhhI2rV8AbeKzKPqC/THgG9ppA1ko7EU8K9syviYP7QvLkJYnHGe9mIcSNuwqpd4Q2nsiFFaFozbMvTEtXQTtCGdxmLrwi5sKJbRvFze4GDe5UhDtYVOiv/PyB53eNcdnyeBoAAAAAElFTkSuQmCC\");\n    background-position: calc(100% - 10%) calc(100% - 40%);\n    background-repeat: no-repeat;\n}\nselect.choose-lang:focus {\n    box-shadow: none;\n    outline: none;\n}\n.welcome-footer {\n    margin-top: 8%;\n    padding-left: 5%;\n    padding-bottom: 5%;\n}\n.welcome-footer button {\n    font-family: Calibri;\n    font-weight: 100;\n    color: white;\n    background: #0095da;\n    border: 0;\n    width: 12.66vw;\n    font-size: 1.75vw;\n    border-radius: 10px;\n    height: 5.85vh;\n    cursor: pointer;\n    line-height: 10px;\n}\n.logo-wrapper {\n    width: 20%;\n    text-align: right;\n    padding-right: 1.65%;\n}\n@media (max-width: 575.98px) {\n    h1 {\n        font-size: 5.5vw; \n    }\n    .welcome-footer button {\n        font-size: 3.5vw;\n        width: 16vw;\n        line-height: 16px;\n        height: 5vh;\n    }\n    h1 {\n        font-size: 8vw;\n        font-weight: 800;\n        margin-bottom: 8%;\n    }\n    p {\n        font-size: 4.0vw;\n        margin-bottom: 0.5rem;\n    }\n    .choose-lang  {\n        padding-top: 1%;\n        padding-bottom: 1%;\n        font-size: 2.0vw;\n        background-size: 13px;\n    }\n}"

/***/ }),

/***/ "./src/app/components/welcome/welcome.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/welcome/welcome.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid welcome-wrapper\">\n  <div>\n    <h1>Welcome !</h1>\n    <p>Total Number of Questions : 40</p>\n    <p>Maximum time alloted for the test :</p>\n    <p>The time given for one question can be either 30 seconds or 60 seconds depending on the difficulty</p>\n    <p>You can only move to the next question after answering the current one</p>\n    <p class=\"lang\">You can select from around 60 Languages</p>\n    <select class=\"choose-lang\" #langOption (change) = \"onlangSelect(langOption)\">\n      <option value=\"{{i}}\" *ngFor=\"let language of languages; let i=index\">{{language.language}}</option>\n    </select>\n  </div>\n  <div class=\"welcome-footer\">\n    <button type=\"button\" class=\"btn submit-btn\" (click)=\"startTest()\">Start</button>\n    <div class=\"float-right\" style=\"width: 10%\">\n      <div class=\"\">\n        <img src=\"./../../../assets/images/logo.png\" class=\"img-fluid\" alt=\"Quess logo\">\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/welcome/welcome.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/welcome/welcome.component.ts ***!
  \*********************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_scrollToTop_scroll_top_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/shared/scrollToTop/scroll-top.service */ "./src/app/services/shared/scrollToTop/scroll-top.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_network_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/network.service */ "./src/app/services/network.service.ts");
/* harmony import */ var _services_data_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/data/data.service */ "./src/app/services/data/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(scrollToTop, router, networkservice, dataservice) {
        this.scrollToTop = scrollToTop;
        this.router = router;
        this.networkservice = networkservice;
        this.dataservice = dataservice;
        this.languages = [{
                language: "English",
                inEng: "English"
            }, {
                language: "தமிழ்",
                inEng: "Tamil"
            }, {
                language: "मराठी",
                inEng: "Marathi",
            }, {
                language: "ਪੰਜਾਬੀ",
                inEng: "Punjabi",
            }, {
                language: "کأشُر‬",
                inEng: "Kashmiri",
            }, {
                language: "മലയാളം",
                inEng: "Malayalam",
            }, {
                language: "ଓଡ଼ିଆ",
                inEng: "Oriya",
            }, {
                language: "বাংলা",
                inEng: "Bengali",
            }, {
                language: "অসমীয়া",
                inEng: "Assamese",
            }, {
                language: "ಕನ್ನಡ",
                inEng: "Kannada",
            }, {
                language: "తెలుగు",
                inEng: "Telugu",
            }, {
                language: "ગુજરાતી",
                inEng: "Gujarati",
            }, {
                language: "हिन्दी",
                inEng: "Hindi",
            }];
        this.slectedLanguage = 0;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.scrollToTop.setScrollTop();
        this.dataservice.currentDetail.subscribe(function (data) { return _this.details = data; });
    };
    WelcomeComponent.prototype.onlangSelect = function (langOption) {
        console.log(langOption.value);
        this.slectedLanguage = langOption.value;
    };
    WelcomeComponent.prototype.startTest = function () {
        sessionStorage.setItem('language', this.slectedLanguage.toString());
        this.router.navigate(['/details']);
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/components/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/components/welcome/welcome.component.css")],
            providers: [_services_shared_scrollToTop_scroll_top_service__WEBPACK_IMPORTED_MODULE_1__["ScrollTopService"]]
        }),
        __metadata("design:paramtypes", [_services_shared_scrollToTop_scroll_top_service__WEBPACK_IMPORTED_MODULE_1__["ScrollTopService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_network_service__WEBPACK_IMPORTED_MODULE_3__["NetworkService"],
            _services_data_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/services/data/data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/data/data.service.ts ***!
  \***********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService() {
        this.behaviorsubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.currentDetail = this.behaviorsubject.asObservable();
    }
    DataService.prototype.changeuser = function (data) {
        this.behaviorsubject.next(data);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/network.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/network.service.ts ***!
  \*********************************************/
/*! exports provided: NetworkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkService", function() { return NetworkService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var NetworkService = /** @class */ (function () {
    function NetworkService(http) {
        this.http = http;
    }
    NetworkService.prototype.postMessage = function (url, data) {
        return this.http.post(url, data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (response) { }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('post msg')));
    };
    NetworkService.prototype.getMessage = function (url, params) {
        var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        param = param.append('user', params.user_id);
        param = param.append('lang', params.lang);
        var httpOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Authorization': "Bearer " + params.token });
        return this.http.get(url, { headers: httpOptions, params: param }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (response) { }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('post msg')));
    };
    NetworkService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    NetworkService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NetworkService);
    return NetworkService;
}());



/***/ }),

/***/ "./src/app/services/shared/scrollToTop/scroll-top.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/shared/scrollToTop/scroll-top.service.ts ***!
  \*******************************************************************/
/*! exports provided: ScrollTopService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollTopService", function() { return ScrollTopService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ScrollTopService = /** @class */ (function () {
    function ScrollTopService(platformId, router) {
        this.platformId = platformId;
        this.router = router;
    }
    ScrollTopService.prototype.setScrollTop = function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            this.router.events.subscribe(function (event) {
                window.scroll(0, 0);
            });
        }
    };
    ScrollTopService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ScrollTopService);
    return ScrollTopService;
}());



/***/ }),

/***/ "./src/app/services/upload/upload.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/upload/upload.service.ts ***!
  \***************************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadService = /** @class */ (function () {
    function UploadService(http) {
        this.http = http;
    }
    UploadService.prototype.upload = function (fileToUpload) {
        var formData = new FormData();
        var quess = localStorage.getItem('quess');
        this.quess = JSON.parse(quess);
        var token = this.quess.token;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Authorization': "Bearer " + token })
        };
        formData.append('userData', fileToUpload, fileToUpload.name);
        return this.http.post('/api/user', formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (response) { }));
    };
    UploadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sarathkumar/Desktop/Freelancing/Quess/quess-app/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map