webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: "<router-outlet></router-outlet>",
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        // Declare components here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_page_page_list_page_list_component__["a" /* PageListComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */]
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_test_service_client__["a" /* TestService */], __WEBPACK_IMPORTED_MODULE_22__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_23__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_24__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_25__services_widget_service_client__["a" /* WidgetService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/**
* Created by sesha on 7/26/17.
*/















var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_13__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__["a" /* TestComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user/:uid', component: __WEBPACK_IMPORTED_MODULE_4__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'user/:uid/website', component: __WEBPACK_IMPORTED_MODULE_14__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */] },
    { path: 'user/:uid/website/new', component: __WEBPACK_IMPORTED_MODULE_5__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */] },
    { path: 'user/:uid/website/:wid', component: __WEBPACK_IMPORTED_MODULE_6__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */] },
    { path: 'user/:uid/website/:wid/page', component: __WEBPACK_IMPORTED_MODULE_7__components_page_page_list_page_list_component__["a" /* PageListComponent */] },
    { path: 'user/:uid/website/:wid/page/new', component: __WEBPACK_IMPORTED_MODULE_8__components_page_page_new_page_new_component__["a" /* PageNewComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid', component: __WEBPACK_IMPORTED_MODULE_9__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */] },
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <h1>\n    Angular 4 MEAN stack app\n  </h1>\n\n\n  <h3>\n    App works\n  </h3>\n\n\n  <h4>\n    <a href=\"test\">Test MongoDB</a>\n  </h4>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--<!DOCTYPE html>-->\n<!--<html lang=\"en\">-->\n<!--<nav class =\"navbar navbar-default navbar-fixed-top\">-->\n<!--<div class =\"container-fluid navbar-brand row\">-->\n<!---->\n<!--</div>-->\n<!--</nav>-->\n<!--<head>-->\n  <!--<meta charset=\"UTF-8\">-->\n  <!--<meta name=\"viewport\" content=\"initial-scale=1.25, user-scalable=no\">-->\n  <!--<link rel=\"stylesheet\" href=\"../../vendors/bootstrap/dist/css/bootstrap.min.css\"/>-->\n<!---->\n  <!--<link rel=\"stylesheet\" href=\"../../style.css\"/>-->\n  <!--<script src = \"../../vendors/bootstrap/dist/js/bootstrap.min.js\"></script>-->\n  <!--<title>Edit Page</title>-->\n<!---->\n<!--</head>-->\n<!--<body>-->\n\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid col-sm-3 hidden-xs navbar-default\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand\">\n        <b>Pages</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink] = \"['/user',userId]\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n\n  <div class=\"navbar-default container-fluid col-sm-9\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand\">\n        <b>Edit Page</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink] = \"['/user',userId]\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n\n<div class=\"container dguobody\">\n\n\n  <div class=\"container-fluid\">\n    <div class = \"row\">\n      <div class = \"col-sm-3 hidden-xs dguobody\">\n        <app-page-list></app-page-list>\n      </div>\n\n  <div class = 'col-sm-9 dguobody'>\n  <div class=\"form-group\">\n    <form>\n      <label for=\"pageName-edit\">Name</label>\n      <input [(ngModel)] = \"pageName\"\n             name = \"pageName\"\n        placeholder=\"Blog Post\"\n             type=\"text\"\n             id=\"pageName-edit\"\n             class=\"form-control\"/>\n    </form>\n  </div>\n\n\n  <div class=\"form-group\">\n    <form>\n      <label for=\"pageDescription-edit\">Description</label>\n      <input [(ngModel)] = \"pageDescription\"\n             name = \"pageDescription\"\n        placeholder=\"Page Description\"\n             type=\"text\"\n             id=\"pageDescription-edit\"\n             class=\"form-control\"/>\n    </form>\n  </div>\n  <a [routerLink] = \"['/user/:uid/website/:wid/page']\" class=\"btn btn-danger btn-block\">\n    Delete\n  </a>\n\n</div>\n    </div>\n\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink] = \"['/user/:uid']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n    <!-- &lt;!&ndash;     <ul class=\"list-group\">\n        <li class=\"list-group-item borderless\">\n          Address Book App\n          <a [routerLink] = \"['/user/:uid/website/:wid']\">\n            <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n          </a>\n        </li>\n        <li class=\"list-group-item borderless\">\n          Blogger\n          <a [routerLink] = \"['/user/:uid/website/:wid']\">\n            <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n          </a>\n        </li>\n        <li class=\"list-group-item borderless\">\n          Blogging App\n          <a [routerLink] = \"['/user/:uid/website/:wid']\">\n            <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n          </a>\n        </li>\n        <li class=\"list-group-item borderless\">\n          Script Testing App\n          <a [routerLink] = \"['/user/:uid/website/:wid']\">\n            <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n          </a>\n        </li>\n      </ul>-->\n\n<!--</body>-->\n<!--</html>-->\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageEditComponent = (function () {
    // properties: page edit should retrieve the information given from the page
    function PageEditComponent(pageService, activatedRoute, userService) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.page = {};
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe((function (params) {
            _this.pageId = params['pid'];
            _this.userId = params['uid'];
        }));
        this.page = this.pageService.findPageById(this.pageId);
        this.pageName = this.page['name'];
        this.pageDescription = this.page['description'];
        console.log(this.pageDescription);
    };
    return PageEditComponent;
}());
PageEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-edit',
        template: __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object])
], PageEditComponent);

var _a, _b, _c;
//# sourceMappingURL=page-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<!DOCTYPE html>-->\n<!--<html lang=\"en\">-->\n<!--<head>-->\n  <!--<meta name=\"apple-mobile-web-app-capable\" content=\"yes\">-->\n  <!--<meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\">-->\n  <!--<meta name=\"viewport\" content=\"initial-scale=1.25, user-scalable=no\">-->\n<!---->\n  <!--<meta charset=\"UTF-8\">-->\n<!---->\n  <!--<title>Page List</title>-->\n  <!--<link rel=\"stylesheet\" href=\"../../vendors/bootstrap/dist/css/bootstrap.css\"/>-->\n  <!--<link rel=\"stylesheet\" href=\"../../style.css\"/>-->\n<!---->\n<!--</head>-->\n<!--<body>-->\n\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class= \"navbar-default container-fluid\">\n\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink] = \"['/user', userId, 'website']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand\">\n        <b>Pages</b>\n      </a>\n    </p>\n\n\n    <!--plus mark-->\n    <p class=\"navbar-text pull-right\">\n         <a [routerLink] = \"['/user', userId, 'website', websiteId, 'page','new']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n\n<!--navs and cog marks-->\n\n<ul class=\"list-group\">\n  <div class=\"container-fluid dguobody\">\n    <ul class=\"list-group\">\n      <div class=\"container-fluid\">\n        <div *ngFor = \"let page of pages\">\n          <li class=\"list-group-item borderless\">\n            <a [routerLink] = \"['/user',userId, 'website',page.websiteId, 'page', page._id, 'widget']\">\n              {{page.name}}\n            </a>\n            <a [routerLink] = \"['/user',userId, 'website', page.websiteId, 'page', page._id]\">\n        <span class = \"glyphicon glyphicon-cog pull-right\">\n             </span>\n            </a>\n          </li>\n        </div>\n      </div>\n    </ul>\n  </div>\n\n</ul>\n\n\n\n\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink] = \"['/user',userId]\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n<!--</body>-->\n<!--</html>-->\n\n\n<!--   <li class=\"list-group-item borderless toolbarColor1\"\n        [routerLink] = \"['/user/:uid/website/:wid/page/:pid/widget']\">\n      Blog Post\n      <a [routerLink] = \"['/user/:uid/website/:wid/page/:pid']\">\n        <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n      </a>\n    </li>\n    <li class=\"list-group-item borderless toolbarColor1\"\n        [routerLink] = \"['/user/:uid/website/:wid/page/:pid/widget']\">\n      <div class =\"row\">\n        <div class = \"col-xs-3\">\n        </div>\n      </div>\n      Blogs\n      <a [routerLink] = \"['/user/:uid/website/:wid/page/:pid']\">\n        <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n      </a>\n    </li>\n    <li class=\"list-group-item borderless toolbarColor1\"\n        [routerLink] = \"['/user/:uid/website/:wid/page/:pid/widget']\">\n      Home\n      <a [routerLink] = \"['/user/:uid/website/:wid/page/:pid']\">\n        <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n      </a>\n    </li>\n    <li class=\"list-group-item borderless toolbarColor1\"\n        [routerLink] = \"['/user/:uid/website/:wid/page/:pid/widget']\">\n      About\n      <a [routerLink] = \"['/user/:uid/website/:wid/page/:pid']\">\n        <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n      </a>\n    </li>\n    <li class=\"list-group-item borderless toolbarColor1\"\n        [routerLink] = \"['/user/:uid/website/:wid/page/:pid/widget']\">\n      Contact Us\n      <a [routerLink] = \"['/user/:uid/website/:wid/page/:pid']\">\n        <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n      </a>\n    </li>-->\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PageListComponent = (function () {
    function PageListComponent(pageService, userService, websiteService, router, activatedRoute) {
        this.pageService = pageService;
        this.userService = userService;
        this.websiteService = websiteService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.pages = [];
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe((function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
        }));
        this.pages = this.pageService.findPagesByWebsiteId(this.websiteId);
    };
    return PageListComponent;
}());
PageListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-list',
        template: __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object])
], PageListComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=page-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--<!DOCTYPE html>-->\n<!--<html lang=\"en\">-->\n<!--<nav class =\"navbar navbar-default navbar-fixed-top\">-->\n<!--<div class =\"container-fluid navbar-brand row\">-->\n<!---->\n<!--</div>-->\n<!--</nav>-->\n<!--<head>-->\n  <!--<meta charset=\"UTF-8\">-->\n  <!--<meta name=\"viewport\" content=\"initial-scale=1.25, user-scalable=no\">-->\n  <!--<link rel=\"stylesheet\" href=\"../../vendors/bootstrap/dist/css/bootstrap.min.css\"/>-->\n<!---->\n  <!--<link rel=\"stylesheet\" href=\"../../style.css\"/>-->\n  <!--<script src = \"../../vendors/bootstrap/dist/js/bootstrap.min.js\"></script>-->\n  <!--<title>New Page</title>-->\n<!---->\n<!--</head>-->\n<!--<body>-->\n\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink] = \"['/user/:uid']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand\">\n        <b>New Page</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink] = \"['/user/:uid/website/:wid/page']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n\n<div class=\"container dguobody\">\n\n\n  <div class=\"form-group\">\n    <form>\n      <label for=\"pageName-new\">Name</label>\n      <input placeholder=\"Page Name\"\n             type=\"text\"\n             id=\"pageName-new\"\n             class=\"form-control\"/>\n    </form>\n  </div>\n\n\n  <div class=\"form-group\">\n    <form>\n      <label for=\"pageTitle-new\">Title</label>\n      <input placeholder=\"Page Title\"\n             type=\"text\"\n             id=\"pageTitle-new\"\n             class=\"form-control\"/>\n    </form>\n  </div>\n\n\n</div>\n\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink] = \"['/user/:uid']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n<!--</body>-->\n<!--</html>-->\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNewComponent = (function () {
    function PageNewComponent() {
    }
    PageNewComponent.prototype.ngOnInit = function () {
    };
    return PageNewComponent;
}());
PageNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-new',
        template: __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageNewComponent);

//# sourceMappingURL=page-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <h1>Test</h1>\n\n  <div *ngIf=\"alertMessage\"\n       class=\"alert alert-danger\">\n    \"Failed to create\"\n  </div>\n\n  <div *ngIf=\"successMessage\"\n       class=\"alert alert-success\">\n    \"Succesfully created/deleted\"\n  </div>\n\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th>Test Message</th>\n      <th>&nbsp;</th>\n    </tr>\n\n\n    <tr>\n      <td>\n        <input [(ngModel)]=\"message\"\n               placeholder=\"message\"\n               class=\"form-control\"/>\n      </td>\n\n\n      <td>\n        <button (click)=\"createMessage()\"\n                class=\"btn btn-primary pull-right\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </button>\n      </td>\n    </tr>\n    </thead>\n\n\n    <tbody>\n    <tr *ngFor=\"let message of messages\">\n      <td>\n        {{message.message}}\n      </td>\n      <td>\n        <button (click)=\"deleteMessage(message._id)\"\n                class=\"btn btn-danger pull-right\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = (function () {
    function TestComponent(_testService) {
        this._testService = _testService;
        this.alertMessage = false;
        this.successMessage = false;
        this.messages = [];
    }
    TestComponent.prototype.ngOnInit = function () {
        this.findAllMessages();
    };
    TestComponent.prototype.findAllMessages = function () {
        var _this = this;
        return this._testService.findAllMessages()
            .subscribe(function (data) {
            _this.messages = data;
        });
    };
    TestComponent.prototype.createMessage = function () {
        var _this = this;
        return this._testService.createMessage(this.message)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
            _this.message = null;
        });
    };
    TestComponent.prototype.deleteMessage = function (messageId) {
        var _this = this;
        return this._testService.deleteMessage(messageId)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
        });
    };
    return TestComponent;
}());
TestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-test',
        template: __webpack_require__("../../../../../src/app/components/test/test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/test/test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */]) === "function" && _a || Object])
], TestComponent);

var _a;
//# sourceMappingURL=test.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n  <!--<cha&lt;!&ndash;&ndash;&gt;rset=\"UTF-8\">-->\n  <!--<name=\"viewport\" content=\"initial-scale=1.25, user-scalable=no\">-->\n  <!--<link rel=\"stylesheet\" href=\"../../vendors/bootstrap/dist/css/bootstrap.min.css\"/>&ndash;&gt;-->\n  <!--<link rel=\"stylesheet\" href=\"../../style.css\"/>&ndash;&gt;-->\n  <!--<script src = \"../../vendors/bootstrap/dist/js/bootstrap.min.js\"></script>&ndash;&gt;-->\n  <!--Login-->\n<!--<body>-->\n<div class=\"container-fluid dguobody\">\n\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n\n  <h1>Login</h1>\n\n  <form (ngSubmit) = \"login()\" #f=\"ngForm\">\n\n\n  <div class=\"form-group \">\n    <input placeholder=\"username\"\n           name=\"username\"\n           type=\"text\"\n           id=\"username\"\n           class=\"form-control\"\n           ngModel\n           required\n           #username = \"ngModel\">\n           <!--[(ngModel)]=\"username\"/>-->\n    <span class=\"help-block\" *ngIf=\"! username.valid && username.touched\">\n      Please enter username\n    </span>\n  </div>\n\n  <div class=\"form-group\">\n    <input placeholder=\"password\"\n           name=\"password\"\n           type=\"password\"\n           id=\"password\"\n           class=\"form-control\"\n           ngModel\n           required\n           #password = \"ngModel\"/>\n  </div>\n\n  <!--<button [routerLink] = \"['/user/:uid']\" -->\n    <button (click)=\"login()\"\n            class=\"btn btn-primary btn-block\"\n            type=\"submit\"\n            [disabled]=\"!f.valid\">Login\n  </button>\n  <!--<a href=\"register.html\" class=\"btn btn-success btn-block\">-->\n  <button [routerLink] = \"['/register']\"  class=\"btn btn-success btn-block\">\n    Register\n  </button>\n  </form>\n</div>\n\n<!--</body>-->\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    /*    this.activatedRoute.params
          .subscribe(
            (params: any) => {
              this.username = params['username'];
            }
          );
        this.user = this.userService.findUserByUsername(this.username);
      }*/
    LoginComponent.prototype.login = function () {
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.errorFlag = false;
        var user = this.userService.findUserByUsername(this.username);
        if (user && user.password === this.password) {
            this.router.navigate(['user/', user._id]);
        }
        else {
            this.errorFlag = true;
            this.errorMsg = 'Invalid username or password!';
        }
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<!DOCTYPE html>-->\n<!--<html lang=\"en\">-->\n\n\n  <!--<meta charset=\"UTF-8\">-->\n  <!--<meta name=\"viewport\" content=\"initial-scale=1.25, user-scalable=no\">-->\n  <!--<link rel=\"stylesheet\" href=\"../../vendors/bootstrap/dist/css/bootstrap.min.css\"/>-->\n<!---->\n  <!--<link rel=\"stylesheet\" href=\"../../style.css\"/>-->\n  <!--<script src = \"../../vendors/bootstrap/dist/js/bootstrap.min.js\"></script>-->\n  <!--<title>Profile</title>-->\n\n\n<!--<body>-->\n\n\n<nav class=\"navbar navbarBgColor navbar-fixed-top\">\n  <div class= \"navbarBgColor container-fluid\">\n\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand navbarTextColor\" href=\"#\">\n        <b>Profile</b>\n      </a>\n    </p>\n\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink] = \"['/user/:uid']\" class=\"navbar-link navbarTextColor\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n<!--\n<nav class=\"navbar navbarBgColor navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    &lt;!&ndash;heading on the nav bar&ndash;&gt;\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand navbarTextColor\">\n        <b>Profile</b>\n      </a>\n    </p>\n\n    &lt;!&ndash;tick mark&ndash;&gt;\n    <p class=\"navbar-text pull-right\">\n      <a href=\"profile.html\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n-->\n\n\n\n<div class=\"container dguobody\">\n\n\n  <div class=\"form-group\">\n    <form>\n      <label for=\"username\">Username</label>\n      <input [(ngModel)]=\"username\"\n             type=\"text\"\n             name=\"username\"\n             id=\"username\"\n        placeholder=\"Alice\"\n             class=\"form-control\"/>\n    </form>\n  </div>\n\n\n  <div class=\"form-group\">\n    <form>\n      <label for=\"email-profile\">Email address</label>\n      <input [(ngModel)]=\"email\"\n        placeholder=\"email\"\n             name=\"email\"\n             type=\"email\"\n             id=\"email-profile\"\n             class=\"form-control\"/>\n    </form>\n  </div>\n\n\n  <div class=\"form-group\">\n    <form>\n      <label for=\"firstname-profile\">First Name</label>\n      <input placeholder=\"first name\"\n             name=\"firstname\"\n             [(ngModel)]=\"firstname\"\n             type=\"text\"\n             id=\"firstname-profile\"\n             class=\"form-control\"/>\n    </form>\n  </div>\n\n\n  <div class=\"form-group\">\n    <form>\n      <label for=\"lastname-profile\">Last Name</label>\n      <input [(ngModel)]=\"lastName\"\n             placeholder=\"last name\"\n             name=\"lastName\"\n             type=\"text\"\n             id=\"lastname-profile\"\n             class=\"form-control\"/>\n    </form>\n  </div>\n\n  <button (click)=\"findWebsites()\"\n          class=\"btn btn-primary btn-block\"\n          type=\"submit\" >\n    Websites\n  </button>\n\n  <button [routerLink] = \"['/login']\" class=\"btn btn-danger btn-block\">\n    Logout\n  </button>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink] = \"['user/:uid']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<!--</body>-->\n<!--</html>-->\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = (function () {
    function ProfileComponent(userService, websiteService, route, router) {
        this.userService = userService;
        this.websiteService = websiteService;
        this.route = route;
        this.router = router;
        this.user = {};
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this.user = this.userService.findUserById(this.userId);
        this.username = this.user['username'];
        this.firstname = this.user['firstname'];
        this.lastName = this.user['lastName'];
        this.email = this.user['email'];
    };
    /*
    Find the websites linked to a user account
     */
    ProfileComponent.prototype.findWebsites = function () {
        /*    const Websites = this.websiteService.findWebsitesByUser(this.userId);
            for (const Website of Websites) {
              if (Website.developerId === this.userId) {*/
        this.router.navigate(['user/', this.userId, 'website']);
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--<!DOCTYPE html>-->\n<!--<html lang=\"en\">-->\n<!--<head>-->\n  <!--<meta charset=\"UTF-8\">-->\n  <!--<meta name=\"viewport\" content=\"initial-scale=1.25, user-scalable=no\">-->\n  <!--<link rel=\"stylesheet\" href=\"../../vendors/bootstrap/dist/css/bootstrap.min.css\"/>-->\n  <!--<link rel=\"stylesheet\" href=\"../../style.css\"/>-->\n  <!--<script src = \"../../vendors/bootstrap/dist/js/bootstrap.min.js\"></script>-->\n  <!--<title>Register</title>-->\n<!--</head>-->\n<!--<body>-->\n<div class=\"container-fluid dguobody\">\n\n  <h1>Register</h1>\n\n  <div class=\"form-group\">\n    <input placeholder=\"username\"\n           type=\"text\"\n           id=\"username\"\n           class=\"form-control\"/>\n  </div>\n\n  <div class=\"form-group\">\n    <input placeholder=\"password\"\n           type=\"password\"\n           id=\"password\"\n           class=\"form-control\"/>\n  </div>\n\n  <div class=\"form-group\">\n    <input placeholder=\"verify password\"\n           type=\"password\"\n           id=\"verify password\"\n           class=\"form-control\"/>\n  </div>\n\n  <a [routerLink] = \"['/user/:uid']\" class=\"btn btn-primary btn-block\">Register\n  </a>\n  <a [routerLink] = \"['/login']\" class=\"btn btn-danger btn-block\">Cancel\n  </a>\n</div>\n<!--</body>-->\n<!--</html>-->\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RegisterComponent);

//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<!DOCTYPE html>-->\n<!--<html lang=\"en\">-->\n<!--<head>-->\n  <!--<meta name=\"apple-mobile-web-app-capable\" content=\"yes\">-->\n  <!--<meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\">-->\n  <!--<meta name=\"viewport\" content=\"initial-scale=1.25, user-scalable=no\">-->\n<!---->\n  <!--<meta charset=\"UTF-8\">-->\n<!---->\n  <!--<title>Edit Website</title>-->\n  <!--<link rel=\"stylesheet\" href=\"../../vendors/bootstrap/dist/css/bootstrap.css\"/>-->\n  <!--<link rel=\"stylesheet\" href=\"../../style.css\"/>-->\n<!---->\n<!--</head>-->\n<!--<body>-->\n\n\n\n<nav class=\"navbar navbarBgColor navbar-fixed-top\">\n  <div class= \"container-fluid col-sm-3 hidden-xs navbarBgColor\">\n\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink] = \"['/user/:uid/website']\" class=\"navbar-link navbarTextColor\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand navbarTextColor\" href=\"#\">\n        <b>Websites</b>\n      </a>\n    </p>\n\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink] = \"['/user/:uid/website']\" class=\"navbar-link navbarTextColor\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n  </div>\n\n  <div class =\"navbarBgColor container-fluid col-sm-9\" >\n<!--    <p class=\"navbar-text pull-left navbarBgColor\">\n      <a [routerLink] = \"['/user/:uid/website/:wid']\" class=\"navbar-link navbarTextColor\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>-->\n\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand navbarTextColor\" href=\"#\">\n        <b>Edit Websites</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink] = \"['/user/:uid/website']\" class=\"navbar-link navbarTextColor\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n\n  <div class = \"row\">\n    <div class = \"col-sm-3 hidden-xs\">\n      <app-website-list></app-website-list>\n\n<!-- &lt;!&ndash;     <ul class=\"list-group\">\n        <li class=\"list-group-item borderless\">\n          Address Book App\n          <a [routerLink] = \"['/user/:uid/website/:wid']\">\n            <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n          </a>\n        </li>\n        <li class=\"list-group-item borderless\">\n          Blogger\n          <a [routerLink] = \"['/user/:uid/website/:wid']\">\n            <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n          </a>\n        </li>\n        <li class=\"list-group-item borderless\">\n          Blogging App\n          <a [routerLink] = \"['/user/:uid/website/:wid']\">\n            <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n          </a>\n        </li>\n        <li class=\"list-group-item borderless\">\n          Script Testing App\n          <a [routerLink] = \"['/user/:uid/website/:wid']\">\n            <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n          </a>\n        </li>\n      </ul>-->\n  </div>\n\n\n    <div class=\"container-fluid\">\n    <div class = \"col-sm-9 dguobody\">\n\n      <!--header and input field-->\n      <form>\n        <div class = \"form-group\">\n          <label for = \"website-edit-name\">Website Name</label>\n          <input [(ngModel)] = \"websiteName\"\n                 name = \"websiteName\"\n            placeholder=\"Website Name\"\n                 type=\"text\"\n                 id = \"website-edit-name\"\n                 class=\"form-control\"/>\n        </div>\n\n      </form>\n      <form>\n        <div class = \"form-group\">\n          <label for = \"website-edit-description\">Website Description</label>\n          <textarea [(ngModel)] = \"websiteDescription\"\n                    name = \"websiteDescription\"\n                    class = \"form-control\"\n                    placeholder=\"Description\"\n                    id = \"website-edit-description\"\n                    rows=\"10\"></textarea>\n        </div>\n      </form>\n      <a [routerLink] = \"['/user/:uid/website']\" class=\"btn btn-danger btn-block \">Delete\n      </a>\n    </div>\n\n  </div>\n</div>\n\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink] = \"['/user/:uid']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n<!--</body>-->\n<!--</html>-->\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteEditComponent = (function () {
    function WebsiteEditComponent(userService, websiteService, router, activatedRoute) {
        this.userService = userService;
        this.websiteService = websiteService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.user = {};
        this.website = {};
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.
            subscribe(function (params) {
            _this.websiteId = params['wid'];
        });
        console.log(this.websiteId);
        this.website = this.websiteService.findWebsiteById(this.websiteId);
        this.websiteName = this.website['name'];
        this.websiteDescription = this.website['description'];
    };
    return WebsiteEditComponent;
}());
WebsiteEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-edit',
        template: __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], WebsiteEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=website-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<!DOCTYPE html>-->\n<!--<html lang=\"en\">-->\n<!--<head>-->\n  <!--<meta name=\"apple-mobile-web-app-capable\" content=\"yes\">-->\n  <!--<meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\">-->\n  <!--<meta name=\"viewport\" content=\"initial-scale=1.25, user-scalable=no\">-->\n<!---->\n  <!--<meta charset=\"UTF-8\">-->\n<!---->\n  <!--<title>Websites</title>-->\n  <!--<link rel=\"stylesheet\" href=\"../../vendors/bootstrap/dist/css/bootstrap.css\"/>-->\n  <!--<link rel=\"stylesheet\" href=\"../../style.css\"/>-->\n<!---->\n<!--</head>-->\n<!--<body>-->\n\n<nav class=\"navbar navbarBgColor navbar-fixed-top\">\n  <div class= \"navbarBgColor container-fluid\">\n\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink] = \"['/user', userId]\" class=\"navbar-link navbarTextColor\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand navbarTextColor\">\n        <b>Websites</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink] = \"['/user',userId, 'website','new']\" class=\"navbar-link navbarTextColor\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n\n\n\n\n<ul class=\"list-group\">\n  <div class=\"container-fluid dguobody\">\n    <div *ngFor = \"let website of websites\">\n      <li class=\"list-group-item borderless\">\n        <a [routerLink] = \"['/user',website.developerId, 'website',website._id, 'page']\">\n        {{website.name}}\n        </a>\n        <a [routerLink] = \"['/user',website.developerId, 'website', website._id]\">\n        <span class = \"glyphicon glyphicon-cog pull-right\">\n             </span>\n        </a>\n        </li>\n        </div>\n      </div>\n</ul>\n\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink] = \"['/user',userId]\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n<!--</body>-->\n<!--</html>-->\n\n\n<!--      Address Book App\n      <a [routerLink] = \"['/user/:uid/website/:wid']\">\n        <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n      </a>\n    </li>\n    <li class=\"list-group-item borderless\" [routerLink] = \"['/user/:uid/website/:wid/page']\">\n      <div class =\"row\">\n        <div class = \"col-xs-3\">\n        </div>\n      </div>\n      Blogger\n      <a [routerLink] = \"['/user/:uid/website/:wid']\">\n        <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n      </a>\n    </li>\n    <li class=\"list-group-item borderless\" [routerLink] = \"['/user/:uid/website/:wid/page']\">\n      Blogging App\n      <a [routerLink] = \"['/user/:uid/website/:wid']\">\n        <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n      </a>\n    </li>\n    <li class=\"list-group-item borderless\" [routerLink] = \"['/user/:uid/website/:wid/page']\">\n      Script Testing App\n      <a [routerLink] = \"['/user/:uid/website/:wid']\">\n        <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n      </a>-->\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WebsiteListComponent = (function () {
    function WebsiteListComponent(websiteService, userService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.websites = [];
        this.user = {};
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
        });
        this.websites = this.websiteService.findWebsitesByUser(this.userId);
    };
    return WebsiteListComponent;
}());
WebsiteListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-list',
        template: __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], WebsiteListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=website-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<!DOCTYPE html>-->\n<!--<html lang=\"en\">-->\n<!--<head>-->\n  <!--<meta name=\"apple-mobile-web-app-capable\" content=\"yes\">-->\n  <!--<meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\">-->\n  <!--<meta name=\"viewport\" content=\"initial-scale=1.25, user-scalable=no\">-->\n<!---->\n  <!--<meta charset=\"UTF-8\">-->\n<!---->\n  <!--<title>New Website</title>-->\n  <!--<link rel=\"stylesheet\" href=\"../../vendors/bootstrap/dist/css/bootstrap.css\"/>-->\n  <!--<link rel=\"stylesheet\" href=\"../../style.css\"/>-->\n<!---->\n<!--</head>-->\n<!--<body>-->\n\n\n<nav class=\"navbar navbarBgColor navbar-fixed-top\">\n  <div class= \"container-fluid col-sm-3 hidden-xs navbarBgColor\">\n\n<!--    <p class=\"navbar-text pull-left\">\n      <a [routerLink] = \"['/user/:uid/website']\" class=\"navbar-link navbarTextColor\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>-->\n\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand navbarTextColor\" href=\"#\">\n        <b>Websites</b>\n      </a>\n    </p>\n\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink] = \"['/user/:uid/website']\" class=\"navbar-link navbarTextColor\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n  </div>\n\n  <div class =\"container-fluid col-sm-9 navbarBgColor\" >\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink] = \"['/user/:uid/website/wid']\" class=\"navbar-link navbarTextColor\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand navbarTextColor\" href=\"#\">\n        <b>New Websites</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink] = \"['/user/:uid/website']\" class=\"navbar-link navbarTextColor\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n\n\n\n<div class=\"container-fluid\">\n  <div class = \"row\">\n\n\n\n    <div class = \"col-sm-3 hidden-xs dguobody\">\n      <app-website-list></app-website-list>\n\n\n<!--      <ul class=\"list-group\">\n        <li class=\"list-group-item borderless toolbarColor1\">\n          Address Book App\n          <a [routerLink] = \"['/user/:uid/website/wid']\">\n            <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n          </a>\n        </li>\n        <li class=\"list-group-item borderless toolbarColor1\">\n          Blogger\n          <a [routerLink] = \"['/user/:uid/website/wid']\">\n            <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n          </a>\n        </li>\n        <li class=\"list-group-item borderless toolbarColor1\">\n          Blogging App\n          <a [routerLink] = \"['/user/:uid/website/wid']\">\n            <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n          </a>\n        </li>\n        <li class=\"list-group-item borderless toolbarColor1\">\n          Script Testing App\n          <a [routerLink] = \"['/user/:uid/website/wid']\">\n            <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n          </a>\n        </li>\n      </ul>-->\n    </div>\n\n\n    <div class = container-fluid>\n      <div class = \"col-sm-9\">\n\n        <!--header and input field-->\n        <form>\n          <div class = \"form-group dguobody\">\n            <label for = \"website-new-name\">Name</label>\n            <input placeholder=\"Name\"\n                   type=\"text\"\n                   id = \"website-new-name\"\n                   class=\"form-control\"/>\n          </div>\n\n        </form>\n        <div class = \"form-group\">\n          <label for = \"website-description\">Description</label>\n          <textarea class = \"form-control\"\n                    placeholder=\"Description\"\n                    id = \"website-description\"\n                    rows=\"10\"></textarea>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink] = \"['/user/:uid']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n<!--</body>-->\n<!--</html>-->\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebsiteNewComponent = (function () {
    function WebsiteNewComponent() {
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
    };
    return WebsiteNewComponent;
}());
WebsiteNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-new',
        template: __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WebsiteNewComponent);

//# sourceMappingURL=website-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<!DOCTYPE html>-->\n<!--<html lang=\"en\">-->\n<!--<head>-->\n  <!--<meta name=\"apple-mobile-web-app-capable\" content=\"yes\">-->\n  <!--<meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\">-->\n  <!--<meta name=\"viewport\" content=\"initial-scale=1.25, user-scalable=no\">-->\n<!---->\n  <!--<meta charset=\"UTF-8\">-->\n<!---->\n  <!--<title>Choose Widget</title>-->\n  <!--<link rel=\"stylesheet\" href=\"../../vendors/bootstrap/dist/css/bootstrap.css\"/>-->\n  <!--<link rel=\"stylesheet\" href=\"../../style.css\"/>-->\n<!---->\n<!--</head>-->\n<!--<body>-->\n\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class= \"navbar-default container-fluid\">\n\n\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink] = \"['/user/:uid/website/:wid/page:pid/widget']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand\" href=\"#\">\n        <b>Choose Widget</b>\n      </a>\n    </p>\n  </div>\n</nav>\n\n\n<!--navs and cog marks-->\n\n<ul class=\"list-group\">\n  <div class=\"container-fluid dguobody\">\n    <li class=\"list-group-item borderless toolbarColor1\"\n        a [routerLink] = \"['/user/:uid/website/:wid/page/:pid/widget/:wgid']\">\n      Header\n      <!--<a [routerLink] = \"['/user/:uid/website/:wid/page/:pid/widget/:wgid']\">-->\n        <!--<span class=\"glyphicon glyphicon-cog pull-right\"></span>-->\n      <!--</a>-->\n    </li>\n    <li class=\"list-group-item borderless toolbarColor1\">\n      <div class =\"row\">\n        <div class = \"col-xs-3\">\n        </div>\n      </div>\n      Label\n      <a [routerLink] = \"['/user/:uid/website/:wid/page/:pid/widget/:wgid']\">\n        <!--<span class=\"glyphicon glyphicon-cog pull-right\"></span>-->\n      </a>\n    </li>\n    <li class=\"list-group-item borderless toolbarColor1\">\n      HTML\n      <a [routerLink] = \"['/user/:uid/website/:wid']\">\n        <!--<span class=\"glyphicon glyphicon-cog pull-right\"></span>-->\n      </a>\n    </li>\n    <li class=\"list-group-item borderless toolbarColor1\">\n      Text Input\n      <a [routerLink] = \"['/user/:uid/website/:wid']\">\n        <!--<span class=\"glyphicon glyphicon-cog pull-right\"></span>-->\n      </a>\n    </li>\n    <li class=\"list-group-item borderless toolbarColor1\">\n      Link\n      <a [routerLink] = \"['/user/:uid/website/:wid']\">\n        <!--<span class=\"glyphicon glyphicon-cog pull-right\"></span>-->\n      </a>\n    </li>\n    <li class=\"list-group-item borderless toolbarColor1\">\n      Button\n      <a [routerLink] = \"['/user/:uid/website/:wid']\">\n        <!--<span class=\"glyphicon glyphicon-cog pull-right\"></span>-->\n      </a>\n    </li>\n    <li class=\"list-group-item borderless toolbarColor1\">\n      Image\n      <a [routerLink] = \"['/user/:uid/website/:wid/page/:pid/widget/:wgid']\">\n        <!--<span class=\"glyphicon glyphicon-cog pull-right\"></span>-->\n      </a>\n    </li>\n    <li class=\"list-group-item borderless toolbarColor1\">\n      Youtube\n      <a [routerLink] = \"['/user/:uid/website/wid/page/:pid/widget/:wgid']\">\n        <!--<span class=\"glyphicon glyphicon-cog pull-right\"></span>-->\n      </a>\n    </li>\n    <li class=\"list-group-item borderless toolbarColor1\">\n      Data Table\n      <a [routerLink] = \"['/user/:uid/website/:wid']\">\n        <!--<span class=\"glyphicon glyphicon-cog pull-right\"></span>-->\n      </a>\n    </li>\n    <li class=\"list-group-item borderless toolbarColor1\">\n      Repeater\n      <a [routerLink] = \"['/user/:uid/website/:wid']\">\n        <!--<span class=\"glyphicon glyphicon-cog pull-right\"></span>-->\n      </a>\n    </li>\n  </div>\n</ul>\n\n\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink] = \"['/user/:uid']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n<!--</body>-->\n<!--</html>-->\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetChooserComponent = (function () {
    function WidgetChooserComponent() {
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
    };
    return WidgetChooserComponent;
}());
WidgetChooserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-chooser',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetChooserComponent);

//# sourceMappingURL=widget-chooser.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch] = \"widget.widgetType\">\n  <div *ngSwitchCase=\"'HEADING'\">\n  <app-widget-header></app-widget-header>\n  </div>\n\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-widget-image></app-widget-image>\n  </div>\n\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n\n  <div *ngSwitchCase=\"'HTML'\">\n  </div>\n\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WidgetEditComponent = (function () {
    function WidgetEditComponent(widgetService, userService, pageService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.userService = userService;
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.
            subscribe(function (params) {
            _this.userId = params['uid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wid'];
        });
        this.widget = this.widgetService.findWidgetById(this.widgetId);
        this.widgetType = this.widget['widgetType'];
    };
    return WidgetEditComponent;
}());
WidgetEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-edit',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _e || Object])
], WidgetEditComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=widget-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<!DOCTYPE html>-->\n<!--<html lang=\"en\">-->\n<!--<head>-->\n  <!--<meta charset=\"UTF-8\">-->\n  <!--<meta name=\"viewport\" content=\"initial-scale=1.25, user-scalable=no\">-->\n  <!--<link rel=\"stylesheet\" href=\"../../vendors/bootstrap/dist/css/bootstrap.min.css\"/>-->\n<!---->\n  <!--<link rel=\"stylesheet\" href=\"../../style.css\"/>-->\n  <!--<script src = \"../../vendors/bootstrap/dist/js/bootstrap.min.js\"></script>-->\n  <!--<title>Widget Heading</title>-->\n<!---->\n<!--</head>-->\n<!--<body>-->\n\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink] = \"['/user',userId, 'website']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand\">\n        <b>Widget Edit</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <!--<a href=\"widget-list.html\" class=\"navbar-link\">-->\n      <a [routerLink] = \"['/user',userId, 'website', websiteId, 'widget', widgetId]\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n\n<div class=\"container dguobody\">\n\n\n  <div class=\"form-group\">\n    <form>\n      <label for=\"widgetName\">Name</label>\n      <input [(ngModel)] = \"widgetName\"\n        name = \"widgetName\"\n        placeholder=\"Name\"\n             type=\"text\"\n             id=\"widgetName\"\n             class=\"form-control\"/>\n    </form>\n  </div>\n\n\n  <div class=\"form-group\">\n    <form>\n      <label for=\"widgetText\">Text</label>\n      <input [(ngModel)] = \"widgetText\"\n             name = \"widgetText\"\n        placeholder=\"History of Florence\"\n             type=\"text\"\n             id=\"widgetText\"\n             class=\"form-control\"/>\n    </form>\n  </div>\n\n  <div class=\"form-group\">\n    <form>\n      <label for=\"widgetSize\">Size</label>\n      <input [(ngModel)] = \"widgetSize\"\n             name = \"widgetSize\"\n             placeholder=3\n             type=\"number\"\n             id=\"widgetSize\"\n             class=\"form-control\"/>\n    </form>\n  </div>\n\n\n  <a [routerLink] = \"['/user',userId,'website',websiteId]\" class=\"btn btn-danger btn-block\">\n    Delete\n  </a>\n</div>\n\n<!--</body>-->\n<!--</html>-->\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WidgetHeaderComponent = (function () {
    function WidgetHeaderComponent(widgetService, userService, pageService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.userService = userService;
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.
            subscribe(function (params) {
            _this.userId = params['uid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.websiteId = params['wid'];
        });
        this.widget = this.widgetService.findWidgetById(this.widgetId);
        this.widgetSize = this.widget['size'];
        this.widgetText = this.widget['text'];
        this.widgetName = this.widget['name'];
    };
    return WidgetHeaderComponent;
}());
WidgetHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-header',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _e || Object])
], WidgetHeaderComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=widget-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<!DOCTYPE html>-->\n<!--<html lang=\"en\">-->\n<!---->\n<!--<head>-->\n  <!--<meta charset=\"UTF-8\">-->\n  <!--<meta name=\"viewport\" content=\"initial-scale=1.25, user-scalable=no\">-->\n  <!--<link rel=\"stylesheet\" href=\"../../vendors/bootstrap/dist/css/bootstrap.min.css\"/>-->\n<!---->\n  <!--<link rel=\"stylesheet\" href=\"../../style.css\"/>-->\n  <!--<script src = \"../../vendors/bootstrap/dist/js/bootstrap.min.js\"></script>-->\n  <!--<title>Widget Image</title>-->\n<!---->\n<!--</head>-->\n<!--<body>-->\n\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink] = \"['/user/:uid/website/:wid/page/:pid/widget']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand\">\n        <b>Widget Edit</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink] = \"['/user/:uid/website/:wid/page/:pid/widget']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n\n<div class=\"container dguobody\">\n\n\n  <div class=\"form-group\">\n    <form>\n      <label for=\"widgetName-image\">Name</label>\n      <input placeholder=\"Name\"\n             type=\"text\"\n             id=\"widgetName-image\"\n             class=\"form-control\"/>\n    </form>\n  </div>\n\n\n  <div class=\"form-group\">\n    <form>\n      <label for=\"widgetText-image\">Text</label>\n      <input placeholder=\"History of Florence\"\n             type=\"text\"\n             id=\"widgetText-image\"\n             class=\"form-control\"/>\n    </form>\n  </div>\n\n  <div class=\"form-group\">\n    <form>\n      <label for=\"widgetURL-image\">URL</label>\n      <input placeholder=\"https://www.youtube.com/watching/GOAVRcI6mFU\"\n             type=\"url\"\n             id=\"widgetURL-image\"\n             class=\"form-control\"/>\n    </form>\n  </div>\n\n  <div class=\"form-group\">\n    <form>\n      <label for=\"widgetSize-image\">Width</label>\n      <input placeholder=300\n             type=\"number\"\n             id=\"widgetSize-image\"\n             class=\"form-control\"/>\n    </form>\n  </div>\n\n  <div class=\"form-group\">\n    <form>\n      <label for=\"widgetInputFile\">File input</label>\n      <input type=\"file\"\n             id=\"widgetInputFile\"\n             class=\"form-control\">\n    </form>\n  </div>\n\n\n  <a [routerLink] = \"['register']\" class=\"btn btn-primary btn-block\">\n    Upload Image\n  </a>\n  <a [routerLink] = \"['/user/:uid/website/:wid/page/:pid/widget']\" class=\"btn btn-danger btn-block\">\n    Delete\n  </a>\n</div>\n\n<!--</body>-->\n<!--</html>-->\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetImageComponent = (function () {
    function WidgetImageComponent() {
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
    };
    return WidgetImageComponent;
}());
WidgetImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-image',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetImageComponent);

//# sourceMappingURL=widget-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<!DOCTYPE html>-->\n<!--<html lang=\"en\">-->\n<!--<head>-->\n  <!--<meta charset=\"UTF-8\">-->\n  <!--<meta name=\"viewport\" content=\"initial-scale=1.25, user-scalable=no\">-->\n  <!--<link rel=\"stylesheet\" href=\"../../vendors/bootstrap/dist/css/bootstrap.min.css\"/>-->\n<!---->\n  <!--<link rel=\"stylesheet\" href=\"../../style.css\"/>-->\n  <!--<script src = \"../../vendors/bootstrap/dist/js/bootstrap.min.js\"></script>-->\n  <!--<title>Widget Youtube</title>-->\n<!---->\n<!--</head>-->\n<!--<body>-->\n\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <p class=\"navbar-text pull-left\">\n      <a href=\"widget-list.html\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand\">\n        <b>Widget Edit</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a href=\"widget-list.html\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n\n<div class=\"container dguobody\">\n\n\n  <div class=\"form-group\">\n    <form>\n      <label for=\"widgetName-youtube\">Name</label>\n      <input placeholder=\"Name\"\n             type=\"text\"\n             id=\"widgetName-youtube\"\n             class=\"form-control\"/>\n    </form>\n  </div>\n\n\n  <div class=\"form-group\">\n    <form>\n      <label for=\"widgetText-youtube\">Text</label>\n      <input placeholder=\"History of Florence\"\n             type=\"text\"\n             id=\"widgetText-youtube\"\n             class=\"form-control\"/>\n    </form>\n  </div>\n\n  <div class=\"form-group\">\n    <form>\n      <label for=\"widgetURL-youtube\">URL</label>\n      <input placeholder=\"https://www.youtube.com/watching/GOAVRcI6mFU\"\n             type=\"url\"\n             id=\"widgetURL-youtube\"\n             class=\"form-control\"/>\n    </form>\n  </div>\n\n  <div class=\"form-group\">\n    <form>\n      <label for=\"widgetSize-youtube\">Width</label>\n      <input placeholder=300\n             type=\"number\"\n             id=\"widgetSize-youtube\"\n             class=\"form-control\"/>\n    </form>\n  </div>\n\n\n\n  <a href=\"widget-list.html\" class=\"btn btn-danger btn-block\">\n    Delete\n  </a>\n</div>\n\n<!--</body>-->\n<!--</html>-->\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetYoutubeComponent = (function () {
    function WidgetYoutubeComponent() {
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
    };
    return WidgetYoutubeComponent;
}());
WidgetYoutubeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-youtube',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetYoutubeComponent);

//# sourceMappingURL=widget-youtube.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<!DOCTYPE html>-->\n<!--<html lang=\"en\">-->\n<!--<head>-->\n  <!--<meta name=\"apple-mobile-web-app-capable\" content=\"yes\">-->\n  <!--<meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\">-->\n  <!--<meta name=\"viewport\" content=\"initial-scale=1.25, user-scalable=no\">-->\n<!---->\n  <!--<meta charset=\"UTF-8\">-->\n<!---->\n  <!--<title>Widget List</title>-->\n  <!--<link rel=\"stylesheet\" href=\"../../vendors/bootstrap/dist/css/bootstrap.css\"/>-->\n  <!--<link rel=\"stylesheet\" href=\"../../style.css\"/>-->\n<!---->\n<!--</head>-->\n\n\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class= \"navbar-default container-fluid\">\n\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink] = \"['/user/:uid/website/:wid/page']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand\" href=\"#\">\n        <b>Widgets</b>\n      </a>\n    </p>\n\n\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink] = \"['/user/:uid/website/:wid/page/:pid/widget/new']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n\n\n<div class = \"container-fluid widgetBody\">\n  <div [ngSwitch] = \"widget.WidgetType\">\n  <div *ngSwitchCase = \"'HEADING'\">\n    <app-widget-header></app-widget-header>\n  </div>\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-widget-image></app-widget-image>\n\n  </div>\n  </div>\n\n\n\n\n</div>\n\n\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink] = \"['/user/:uid']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n<!--</body>-->\n<!--</html>-->\n\n\n<!--  <h1>Florence</h1>\n  <div class=\"jga-widget \">\n    <div class = \"jga-toolbar\">\n      <a [routerLink] = \"['/user/:uid/website/:wid/page/:pid/widget/:wgid']\">\n        <span class = \"glyphicon glyphicon-cog\"></span>\n      </a>\n      <span class = \"glyphicon glyphicon-menu-hamburger\"></span>\n    </div>\n    <h3>History of Florence</h3>\n    &lt;!&ndash;<div class=\"jga-widget \">&ndash;&gt;\n    <div class = \"jga-toolbar\">\n      <a [routerLink] = \"['/user/:uid/website/:wid/page/:pid/widget/:wgid']\">\n        <span class = \"glyphicon glyphicon-cog\"></span>\n      </a>\n      <span class = \"glyphicon glyphicon-menu-hamburger\"></span>\n    </div>\n    <img class = \"jga-content\" src=\"https://images.walks.org/italy/florence-duomo-tour/florence-duomo-climb-featured.jpg\">\n    <div class = \"jga-toolbar\">\n      <a [routerLink] = \"['/user/:uid/website/:wid/page/:pid/widget/:wgid']\">\n        <span class = \"glyphicon glyphicon-cog\"></span>\n      </a>\n      <span class = \"glyphicon glyphicon-menu-hamburger\"></span>\n    </div>\n    <h4>  Florence was a centre of medieval European trade and finance and one of the wealthiest cities of that era. It is considered the birthplace of the Renaissance,\n      and has been called \"the Athens of the Middle Ages\". A turbulent political history includes periods of rule by the powerful Medici family and numerous religious and republican revolutions.</h4>\n    &lt;!&ndash;<div class=\"jga-widget \">&ndash;&gt;\n    <div class = \"jga-toolbar\">\n      <a [routerLink] = \"['/user/:uid/website/:wid/page/:pid/widget/:wgid']\">\n        <span class = \"glyphicon glyphicon-cog\"></span>\n      </a>\n      <span class = \"glyphicon glyphicon-menu-hamburger\"></span>\n    </div>\n    <h3>The Medici: Godfathers of the Renaissance</h3>\n    &lt;!&ndash;<div class=\"jga-widget \">&ndash;&gt;\n    <div class = \"jga-toolbar\">\n      <a [routerLink] = \"['/user/:uid/website/:wid/page/:pid/widget/:wgid']\">\n        <span class = \"glyphicon glyphicon-cog\"></span>\n      </a>\n      <span class = \"glyphicon glyphicon-menu-hamburger\"></span>\n    </div>\n    <iframe width=\"420\" height=\"315\"\n            src=\"https://www.youtube.com/embed/GOAVRcI6mFU\">\n    </iframe>\n    <div class = \"jga-toolbar\">\n      <a [routerLink] = \"['/user/:uid/website/:wid/page/:pid/widget/:wgid']\">\n        <span class = \"glyphicon glyphicon-cog\"></span>\n      </a>\n      <span class = \"glyphicon glyphicon-menu-hamburger\"></span>\n    </div>-->\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WidgetListComponent = (function () {
    function WidgetListComponent(widgetService, userService, pageService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.userService = userService;
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.
            subscribe(function (params) {
            _this.userId = params['uid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wid'];
        });
        this.widget = this.widgetService.findWidgetById(this.widgetId);
        this.widgetType = this.widget['widgetType'];
    };
    return WidgetListComponent;
}());
WidgetListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-list',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _e || Object])
], WidgetListComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=widget-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Injecting service into Module
var PageService = (function () {
    function PageService() {
        this.pages = [
            { '_id': '321', 'name': 'Post 1', 'websiteId': '456', 'description': 'Lorem' },
            { '_id': '432', 'name': 'Post 2', 'websiteId': '456', 'description': 'Lorem' },
            { '_id': '543', 'name': 'Post 3', 'websiteId': '456', 'description': 'Lorem' },
        ];
        this.api = {
            'createPage': this.createPage,
            'findPagesByWebsiteId': this.findPagesByWebsiteId,
            'findPageById': this.findPageById,
            'updatePage': this.updatePage,
            'deletePage': this.deletePage
        };
    }
    PageService.prototype.createPage = function (websiteId, page) {
        page._id = Math.random();
        page.websiteId = websiteId;
        this.pages.push(page);
        return page;
    };
    PageService.prototype.findPagesByWebsiteId = function (websiteId) {
        var p = [];
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x].websiteId === websiteId) {
                p.push(this.pages[x]);
            }
        }
        return p;
    };
    PageService.prototype.findPageById = function (pageId) {
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                return this.pages[x];
            }
        }
    };
    PageService.prototype.updatePage = function (pageId, page) {
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                this.pages[x] = page;
            }
        }
    };
    PageService.prototype.deletePage = function (pageId) {
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                this.pages.splice(x, 1);
            }
        }
    };
    return PageService;
}());
PageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PageService);

//# sourceMappingURL=page.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/test.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestService = (function () {
    function TestService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    TestService.prototype.findAllMessages = function () {
        console.log(this.baseUrl);
        return this._http.get(this.baseUrl + '/api/test')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.createMessage = function (message) {
        var obj = {
            message: message
        };
        return this._http.post(this.baseUrl + '/api/test', obj)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.deleteMessage = function (messageId) {
        return this._http.delete(this.baseUrl + '/api/test/' + messageId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return TestService;
}());
TestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], TestService);

var _a;
//# sourceMappingURL=test.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Injecting service into Module
var UserService = (function () {
    function UserService() {
        this.users = [
            { _id: '123', username: 'alice', email: 'alice@wonderland.com', password: 'alice', firstname: 'Alice', lastName: 'Wonder' },
            { _id: '234', username: 'bob', email: 'bob@marley.com', password: 'bob', firstname: 'Bob', lastName: 'Marley' },
            { _id: '345', username: 'charly', email: 'charly@garcia.com', password: 'charly', firstName: 'Charly', lastName: 'Garcia' },
            { _id: '456', username: 'jannunzi', email: 'jose@annunzi.com', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi' }
        ];
        this.api = {
            'createUser': this.createUser,
            'findUserById': this.findUserById,
            'findUserByUsername': this.findUserByUsername,
            'updateUser': this.updateUser,
            'deleteUser': this.deleteUser
        };
    }
    UserService.prototype.createUser = function (user) {
        user._id = Math.random();
        this.users.push(user);
        return user;
    };
    UserService.prototype.findUserById = function (userId) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                return this.users[x];
            }
        }
    };
    UserService.prototype.findUserByUsername = function (username) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x].username === username) {
                return this.users[x];
            }
        }
    };
    // updates the user in local users array whose id matches the userID parameter
    UserService.prototype.updateUser = function (userId, user) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                this.users[x] = user;
            }
        }
    };
    UserService.prototype.deleteUser = function (userId) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                this.users.splice(x, 1);
            }
        }
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UserService);

//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Injecting service into Module
var WebsiteService = (function () {
    function WebsiteService() {
        this.websites = [
            { '_id': '123', 'name': 'Facebook', 'developerId': '456', 'description': 'Lorem' },
            { '_id': '234', 'name': 'Tweeter', 'developerId': '456', 'description': 'Lorem' },
            { '_id': '456', 'name': 'Gizmodo', 'developerId': '456', 'description': 'Lorem' },
            { '_id': '890', 'name': 'Go', 'developerId': '123', 'description': 'Lorem' },
            { '_id': '567', 'name': 'Tic Tac Toe', 'developerId': '123', 'description': 'Lorem' },
            { '_id': '678', 'name': 'Checkers', 'developerId': '123', 'description': 'Lorem' },
            { '_id': '789', 'name': 'Chess', 'developerId': '234', 'description': 'Lorem' },
        ];
        this.api = {
            'createWebsite': this.createWebsite,
            'findWebsitesByUser': this.findWebsitesByUser,
            'findWebsiteById': this.findWebsiteById,
            'updateWebsite': this.updateWebsite,
            'deleteWebsite': this.deleteWebsite
        };
    }
    // add the website parameter instance to the local websites array. the new website's developerID is set to the
    // userId parameter
    WebsiteService.prototype.createWebsite = function (userId, website) {
        website._id = Math.random();
        website.developerId = userId;
        this.websites.push(website);
        return website;
    };
    // Retrieves the websites in local websites array whose developerId matches the parameter userId
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        var sites = [];
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x].developerId === userId) {
                sites.push(this.websites[x]);
            }
        }
        return sites;
    };
    // retrieves the website in local websites array whose _id matches the websiteId parameter
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id === websiteId) {
                return this.websites[x];
            }
        }
    };
    // updates the user in local users array whose id matches the userID parameter
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id === websiteId) {
                this.websites[x] = website;
            }
        }
    };
    // removes the website from local websites array whose _id matches the websiteId parameter
    WebsiteService.prototype.deleteWebsite = function (userId) {
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id === userId) {
                this.websites.splice(x, 1);
            }
        }
    };
    return WebsiteService;
}());
WebsiteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WebsiteService);

// return this.websites.filter(websites => websites.developerId === userId);
//# sourceMappingURL=website.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Injecting service into Module
var WidgetService = (function () {
    function WidgetService() {
        this.widgets = [
            { '_id': '123', 'widgetType': 'HEADING', 'pageId': '321', 'size': 2, 'text': 'GIZMODO' },
            { '_id': '234', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum' },
            { '_id': '345', 'widgetType': 'IMAGE', 'pageId': '321', 'width': '100%',
                'url': 'http://lorempixel.com/400/200/' },
            { '_id': '456', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>' },
            { '_id': '567', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum' },
            { '_id': '678', 'widgetType': 'YOUTUBE', 'pageId': '321', 'width': '100%',
                'url': 'https://youtu.be/AM2Ivdi9c4E' },
            { '_id': '789', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>' }
        ];
        this.api = {
            'createWidget': this.createWidget,
            'findWidgetsByPageId': this.findWidgetsByPageId,
            'findWidgetById': this.findWidgetById,
            'updateWidget': this.updateWidget,
            'deleteWidget': this.deleteWidget
        };
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        widget._id = Math.random();
        widget.pageId = pageId;
        this.widgets.push(widget);
        return widget;
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        var w = [];
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x].pageId === pageId) {
                w.push(this.widgets[x]);
            }
        }
        return w;
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id === widgetId) {
                return this.widgets[x];
            }
        }
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id === widgetId) {
                this.widgets[x] = widget;
            }
        }
    };
    WidgetService.prototype.deleteWidget = function (userId) {
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id === userId) {
                this.widgets.splice(x, 1);
            }
        }
    };
    return WidgetService;
}());
WidgetService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WidgetService);

// return this.widgets.filter(widgets => widgets.developerId === userId);
//# sourceMappingURL=widget.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: ''
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map