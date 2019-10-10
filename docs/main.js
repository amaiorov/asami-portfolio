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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>About</h1>\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _app_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _app_project_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var app_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _app_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'about',
        component: _app_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
    },
    {
        path: 'contact',
        component: _app_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"]
    },
    {
        path: 'project/:id',
        component: _app_project_project_component__WEBPACK_IMPORTED_MODULE_5__["ProjectComponent"]
    },
    {
        path: '**',
        component: app_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin: 0 auto;\n  width: 1440px;\n  padding: 0 150px;\n  box-sizing: border-box; }\n  :host::after {\n    content: 'desktop x-large';\n    position: fixed;\n    bottom: 0px;\n    right: 0px;\n    font-size: 14px;\n    font-style: italic;\n    background: rgba(255, 0, 0, 0.7);\n    color: #fff;\n    display: inline-block;\n    padding: 8px;\n    font-weight: 400; }\n  @media (max-width: 1440px) {\n    :host {\n      border: 1px solid red;\n      width: 1200px;\n      padding: 0 150px; }\n      :host::after {\n        content: 'desktop large'; } }\n  @media (max-width: 1200px) {\n    :host {\n      border: 1px solid blue;\n      width: 960px;\n      padding: 0 150px; }\n      :host::after {\n        content: 'desktop small'; } }\n  @media (max-width: 960px) {\n    :host {\n      border: 1px solid yellow;\n      width: 100vw;\n      padding: 0 50px; }\n      :host::after {\n        content: 'tablet'; } }\n  @media (max-width: 375px) {\n    :host {\n      border: 1px solid green;\n      width: 100vw;\n      padding: 0 36px; }\n      :host::after {\n        content: 'mobile'; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWlvcm9hdi9EZXNrdG9wL1Byb2plY3RzL290aGVyL2FzYW1pLXBvcnRmb2xpby9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGVBQWM7RUFDZCxlQUFjO0VBQ2QsY0FBYTtFQUNiLGlCQUFnQjtFQUNoQix1QkFBc0IsRUE4Q3ZCO0VBbkREO0lBT0ksMkJBQTBCO0lBQzFCLGdCQUFlO0lBQ2YsWUFBVztJQUNYLFdBQVU7SUFDVixnQkFBZTtJQUNmLG1CQUFrQjtJQUNsQixpQ0FBNkI7SUFDN0IsWUFBVztJQUNYLHNCQUFxQjtJQUNyQixhQUFZO0lBQ1osaUJBQWdCLEVBQ2pCO0VBQ0Q7SUFuQkY7TUFvQkksc0JBQXFCO01BQ3JCLGNBQWE7TUFDYixpQkFBZ0IsRUE2Qm5CO01BbkREO1FBd0JNLHlCQUF3QixFQUN6QixFQUFBO0VBRUg7SUEzQkY7TUE0QkksdUJBQXNCO01BQ3RCLGFBQVk7TUFDWixpQkFBZ0IsRUFxQm5CO01BbkREO1FBZ0NNLHlCQUF3QixFQUN6QixFQUFBO0VBRUg7SUFuQ0Y7TUFvQ0kseUJBQXdCO01BQ3hCLGFBQVk7TUFDWixnQkFBZSxFQWFsQjtNQW5ERDtRQXdDTSxrQkFBaUIsRUFDbEIsRUFBQTtFQUVIO0lBM0NGO01BNENJLHdCQUF1QjtNQUN2QixhQUFZO01BQ1osZ0JBQWUsRUFLbEI7TUFuREQ7UUFnRE0sa0JBQWlCLEVBQ2xCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd+YXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3MnO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDE0NDBweDtcbiAgcGFkZGluZzogMCAxNTBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICdkZXNrdG9wIHgtbGFyZ2UnO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMCwwLDAuNyk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWsteGxhcmdlKSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgIHdpZHRoOiAxMjAwcHg7XG4gICAgcGFkZGluZzogMCAxNTBweDtcbiAgICAmOjphZnRlciB7XG4gICAgICBjb250ZW50OiAnZGVza3RvcCBsYXJnZSc7XG4gICAgfVxuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWstbGFyZ2UpIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuICAgIHdpZHRoOiA5NjBweDtcbiAgICBwYWRkaW5nOiAwIDE1MHB4O1xuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICdkZXNrdG9wIHNtYWxsJztcbiAgICB9XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVhay1tZWRpdW0pIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB5ZWxsb3c7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIHBhZGRpbmc6IDAgNTBweDtcbiAgICAmOjphZnRlciB7XG4gICAgICBjb250ZW50OiAndGFibGV0JztcbiAgICB9XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVhay1zbWFsbCkge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBwYWRkaW5nOiAwIDM2cHg7XG4gICAgJjo6YWZ0ZXIge1xuICAgICAgY29udGVudDogJ21vYmlsZSc7XG4gICAgfVxuICB9XG59XG4iXX0= */"

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
/* harmony import */ var _app_datamanager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/datamanager.service */ "./src/app/datamanager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(dataManager) {
        this.dataManager = dataManager;
        this.title = 'asami-portfolio';
    }
    AppComponent.prototype.handleKeyboardEvent = function (event) {
        if (event.key === 'd') {
            document.body.classList.toggle('debug');
        }
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "handleKeyboardEvent", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_datamanager_service__WEBPACK_IMPORTED_MODULE_1__["DataManagerService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: dataManagerFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataManagerFactory", function() { return dataManagerFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_datamanager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/datamanager.service */ "./src/app/datamanager.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














function dataManagerFactory(provider) {
    return function () { return provider.load(); };
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
                _project_project_component__WEBPACK_IMPORTED_MODULE_9__["ProjectComponent"],
                _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_11__["NavComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
                _app_datamanager_service__WEBPACK_IMPORTED_MODULE_4__["DataManagerService"],
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"], useFactory: dataManagerFactory, deps: [_app_datamanager_service__WEBPACK_IMPORTED_MODULE_4__["DataManagerService"]], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Contact</h1>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
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

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/datamanager.service.ts":
/*!****************************************!*\
  !*** ./src/app/datamanager.service.ts ***!
  \****************************************/
/*! exports provided: DataManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataManagerService", function() { return DataManagerService; });
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




var DataManagerService = /** @class */ (function () {
    function DataManagerService(http) {
        this.http = http;
    }
    DataManagerService.prototype.log = function (message, fail) {
        var bg = fail ? '#eb1616' : '#62cc99';
        console.log("%cAPI" + (fail ? ' fail' : '') + ("%c " + message), "background:" + bg + ";color:#fff;padding:2px 5px", '');
    };
    DataManagerService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // alert(`Failed to load data (${operation})`)
            console.error(error);
            _this.log(operation + " failed: " + error.message, true);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    DataManagerService.prototype.fetchProjects = function () {
        console.log('fetch projects');
        return this.http.get('assets/data/projects.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log('fetched projects'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('fetchProjects', [])));
    };
    DataManagerService.prototype.load = function () {
        var _this = this;
        console.log('LOAD DATA');
        return new Promise(function (resolve, reject) {
            _this.http
                .get('assets/data/projects.json')
                .subscribe(function (response) {
                _this.projects = response;
                // this.categories = [...new Set(response.map(item => item.category))];
                // console.log([...new Set(response.map(item => item.category))]);
                _this.categories = _this.projects.map(function (item) { return item.category; });
                _this.categories = _this.categories.filter(function (item, index) { return _this.categories.indexOf(item) === index; });
                resolve(true);
            });
        });
    };
    DataManagerService.prototype.setProjects = function (projects) {
        console.log('set projects');
        this.projects = projects;
    };
    DataManagerService.prototype.getProjects = function () {
        console.log('get projects');
        return this.projects;
    };
    DataManagerService.prototype.getCategories = function () {
        console.log('get categories');
        return this.categories;
    };
    DataManagerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataManagerService);
    return DataManagerService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  All work &copy; Asami Tsuchiya Maiorov {{ year }}\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.year = new Date().getFullYear();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Hi! I'm Asami</h1>\n<p>I am an Art Director and Product Designer from Japan, currently based in New York. In my 15+ years of experience, I have been focusing on creating the best ideas and meaningfull creation for my clients.</p>\n<div class=\"categories\">\n  <span (click)=\"setCategory()\" [ngClass]=\"{selected: !currentCategory}\">All</span>\n  <span *ngFor=\"let category of categories\" (click)=\"setCategory(category)\" [ngClass]=\"{selected: currentCategory === category}\">{{ category | titlecase }}</span>\n</div>\n<h2>Projects</h2>\n<ul class=\"projects\">\n  <li *ngFor=\"let project of projects\" [ngStyle]=\"{'background-image':'url(' + project.thumbnailUrl + ')'}\" routerLink=\"{{ '/project/' + project.id }}\">\n    <span>{{ project.shortTitle }}</span>\n    <span class=\"category\">{{ project.category | titlecase }}</span>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  padding-bottom: 34px; }\n  @media (max-width: 960px) {\n    h1 {\n      padding-bottom: 25px; } }\n  p {\n  font-size: 4.4rem;\n  font-weight: 300;\n  line-height: 6.4rem; }\n  @media (max-width: 960px) {\n    p {\n      font-size: 2.7rem;\n      line-height: 3.4rem; } }\n  .projects {\n  display: flex;\n  margin-bottom: 24px; }\n  .projects li {\n    margin: 8px;\n    height: 100px;\n    width: 100px;\n    position: relative;\n    border: 1px solid #999;\n    background-size: auto 100%;\n    background-position: 50% 50%; }\n  .projects li:focus, .projects li:active {\n      outline: none; }\n  .projects li span {\n      position: absolute;\n      width: 100%;\n      bottom: -24px;\n      text-align: center; }\n  .projects li span.category {\n        bottom: auto;\n        top: -4px;\n        right: -4px;\n        padding: 2px 4px;\n        background: #000;\n        color: #fff;\n        width: auto; }\n  .categories > span {\n  display: inline-block;\n  padding: 8px 16px;\n  margin: 4px; }\n  .categories > span.selected {\n    background: #999;\n    color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWlvcm9hdi9EZXNrdG9wL1Byb2plY3RzL290aGVyL2FzYW1pLXBvcnRmb2xpby9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHFCQUFvQixFQUlyQjtFQUhDO0lBRkY7TUFHSSxxQkFBb0IsRUFFdkIsRUFBQTtFQUVEO0VBQ0Usa0JBQWlCO0VBQ2pCLGlCQUFnQjtFQUNoQixvQkFBbUIsRUFLcEI7RUFKQztJQUpGO01BS0ksa0JBQWlCO01BQ2pCLG9CQUFtQixFQUV0QixFQUFBO0VBRUQ7RUFDRSxjQUFhO0VBQ2Isb0JBQW1CLEVBNEJwQjtFQTlCRDtJQUlJLFlBQVc7SUFDWCxjQUFhO0lBQ2IsYUFBWTtJQUNaLG1CQUFrQjtJQUNsQix1QkFBc0I7SUFDdEIsMkJBQTBCO0lBQzFCLDZCQUE0QixFQW1CN0I7RUE3Qkg7TUFZTSxjQUFhLEVBQ2Q7RUFiTDtNQWVNLG1CQUFrQjtNQUNsQixZQUFXO01BQ1gsY0FBYTtNQUNiLG1CQUFrQixFQVVuQjtFQTVCTDtRQW9CUSxhQUFZO1FBQ1osVUFBUztRQUNULFlBQVc7UUFDWCxpQkFBZ0I7UUFDaEIsaUJBQWdCO1FBQ2hCLFlBQVc7UUFDWCxZQUFXLEVBQ1o7RUFLUDtFQUVJLHNCQUFxQjtFQUNyQixrQkFBaUI7RUFDakIsWUFBVyxFQUtaO0VBVEg7SUFNTSxpQkFBZ0I7SUFDaEIsWUFBVyxFQUNaIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnfmFzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzJztcblxuaDEge1xuICBwYWRkaW5nLWJvdHRvbTogMzRweDtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVhay1tZWRpdW0pIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgfVxufVxuXG5wIHtcbiAgZm9udC1zaXplOiA0LjRyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiA2LjRyZW07XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWstbWVkaXVtKSB7XG4gICAgZm9udC1zaXplOiAyLjdyZW07XG4gICAgbGluZS1oZWlnaHQ6IDMuNHJlbTtcbiAgfVxufVxuXG4ucHJvamVjdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBsaSB7XG4gICAgbWFyZ2luOiA4cHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMCU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgICAmOmZvY3VzLCAmOmFjdGl2ZSB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgICBzcGFuIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm90dG9tOiAtMjRweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICYuY2F0ZWdvcnkge1xuICAgICAgICBib3R0b206IGF1dG87XG4gICAgICAgIHRvcDogLTRweDtcbiAgICAgICAgcmlnaHQ6IC00cHg7XG4gICAgICAgIHBhZGRpbmc6IDJweCA0cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmNhdGVnb3JpZXMge1xuICA+IHNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICBtYXJnaW46IDRweDtcbiAgICAmLnNlbGVjdGVkIHtcbiAgICAgIGJhY2tncm91bmQ6ICM5OTk7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_datamanager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/datamanager.service */ "./src/app/datamanager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(dataManager) {
        this.dataManager = dataManager;
        this.projects = dataManager.getProjects();
        this.categories = dataManager.getCategories();
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.setCategory = function (category) {
        this.currentCategory = category;
        this.filterProjects(category);
    };
    HomeComponent.prototype.filterProjects = function (category) {
        if (!category) {
            this.projects = this.dataManager.getProjects();
        }
        else {
            this.projects = this.dataManager.getProjects().filter(function (item) { return item.category === category; });
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_datamanager_service__WEBPACK_IMPORTED_MODULE_1__["DataManagerService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <a routerLink=\"/\">Home</a>\n  <a routerLink=\"/about\">About</a>\n  <a routerLink=\"/contact\">Contact</a>\n</nav>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
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

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Page not found ¯\\_(ツ)_/¯ </h1>\n<img src=\"http://lorempixel.com/600/200/cats/8/\" />\n"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Vub3Rmb3VuZC9wYWdlbm90Zm91bmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
  \********************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
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

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagenotfound',
            template: __webpack_require__(/*! ./pagenotfound.component.html */ "./src/app/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__(/*! ./pagenotfound.component.scss */ "./src/app/pagenotfound/pagenotfound.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/project/project.component.html":
/*!************************************************!*\
  !*** ./src/app/project/project.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{ currentProject?.longTitle }}</h1>\n\n<!-- project image -->\n<img src=\"{{ currentProject.heroUrl }}\" />\n\n<!-- project client -->\n<section>\n  <strong>Client:</strong> {{ currentProject?.client }}\n</section>\n\n<!-- project duration -->\n<section>\n  <strong>Duration:</strong> {{ currentProject.startDate }} &mdash; {{ currentProject.endDate || 'current' }}\n</section>\n\n<!-- project description -->\n<strong>Description</strong>\n<div [innerHTML]=\"currentProject?.description\"></div>\n\n<section class=\"blocks\">\n  <div *ngFor=\"let block of currentProject.blocks\">\n    <h2 *ngIf=\"block.headline\" class=\"headline\">{{ block.headline }}</h2>\n    <div *ngIf=\"block.image\" class=\"images\">\n      <div *ngFor=\"let image of block.image\">\n        <img src=\"{{ image }}\" />\n      </div>\n    </div>\n    <div *ngIf=\"block.description\" class=\"description\">{{ block.description }}</div>\n  </div>\n</section>\n\n<!-- <ul class=\"gallery\">\n  <li *ngFor=\"let slide of currentProject.gallery\">\n    <img src=\"{{ slide.imageUrl }}\" />\n    <span>{{ slide.title }}</span>\n  </li>\n</ul> -->\n\n<ul class=\"related\">\n  <li *ngFor=\"let project of relatedProjects\" [ngStyle]=\"{'background-image':'url(' + project.thumbnailUrl + ')'}\" routerLink=\"{{ '/project/' + project.id }}\">\n    <span>{{ project.shortTitle }}</span>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/project/project.component.scss":
/*!************************************************!*\
  !*** ./src/app/project/project.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  height: 200px; }\n\n.blocks > div {\n  position: relative;\n  margin-bottom: 64px; }\n\n.blocks > div .images img {\n    margin-bottom: 24px; }\n\n.gallery {\n  display: flex;\n  margin-bottom: 24px;\n  overflow-x: auto;\n  overflow-y: hidden; }\n\n.gallery li {\n    position: relative; }\n\n.gallery li span {\n      width: 100%;\n      display: block;\n      padding: 8px 0 16px;\n      text-align: center; }\n\n.related {\n  display: flex;\n  margin-bottom: 24px; }\n\n.related li {\n    margin: 8px;\n    height: 100px;\n    width: 100px;\n    position: relative;\n    background-size: auto 100%;\n    background-position: 50% 50%; }\n\n.related li:focus, .related li:active {\n      outline: none; }\n\n.related li span {\n      position: absolute;\n      width: 100%;\n      bottom: -24px;\n      text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWlvcm9hdi9EZXNrdG9wL1Byb2plY3RzL290aGVyL2FzYW1pLXBvcnRmb2xpby9zcmMvYXBwL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWEsRUFDZDs7QUFFRDtFQUVJLG1CQUFrQjtFQUNsQixvQkFBbUIsRUFRcEI7O0FBWEg7SUFNUSxvQkFBbUIsRUFDcEI7O0FBT1A7RUFDRSxjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLGlCQUFnQjtFQUNoQixtQkFBa0IsRUFXbkI7O0FBZkQ7SUFNSSxtQkFBa0IsRUFRbkI7O0FBZEg7TUFTTSxZQUFXO01BQ1gsZUFBYztNQUNkLG9CQUFtQjtNQUNuQixtQkFBa0IsRUFDbkI7O0FBSUw7RUFDRSxjQUFhO0VBQ2Isb0JBQW1CLEVBa0JwQjs7QUFwQkQ7SUFJSSxZQUFXO0lBQ1gsY0FBYTtJQUNiLGFBQVk7SUFDWixtQkFBa0I7SUFDbEIsMkJBQTBCO0lBQzFCLDZCQUE0QixFQVU3Qjs7QUFuQkg7TUFXTSxjQUFhLEVBQ2Q7O0FBWkw7TUFjTSxtQkFBa0I7TUFDbEIsWUFBVztNQUNYLGNBQWE7TUFDYixtQkFBa0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uYmxvY2tzIHtcbiAgPiBkaXYge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiA2NHB4O1xuICAgIC5pbWFnZXMge1xuICAgICAgaW1nIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICAgIH1cbiAgICB9XG4gICAgJjphZnRlciB7XG4gICAgfVxuICB9XG59XG5cbi5nYWxsZXJ5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICBsaSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHNwYW4ge1xuICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBhZGRpbmc6IDhweCAwIDE2cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG59XG5cbi5yZWxhdGVkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgbGkge1xuICAgIG1hcmdpbjogOHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICAgICY6Zm9jdXMsICY6YWN0aXZlIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuICAgIHNwYW4ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3R0b206IC0yNHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/project/project.component.ts":
/*!**********************************************!*\
  !*** ./src/app/project/project.component.ts ***!
  \**********************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_datamanager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/datamanager.service */ "./src/app/datamanager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(router, route, dataManager) {
        this.router = router;
        this.route = route;
        this.dataManager = dataManager;
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.projects = this.dataManager.getProjects();
        this.currentProject = this.getProjectById(this.route.snapshot.params['id']);
        if (!this.currentProject) {
            this.router.navigate(['not-found'], { replaceUrl: true });
            return;
        }
        ;
    }
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.relatedProjects = this.currentProject.related.map(function (item) {
            return _this.getProjectById(item);
        });
    };
    ProjectComponent.prototype.getProjectById = function (id) {
        return this.projects.find(function (item) {
            return item.id === id;
        });
    };
    ProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.scss */ "./src/app/project/project.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _app_datamanager_service__WEBPACK_IMPORTED_MODULE_2__["DataManagerService"]])
    ], ProjectComponent);
    return ProjectComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/maioroav/Desktop/Projects/other/asami-portfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map