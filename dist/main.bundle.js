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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ngx_quill_editor__ = __webpack_require__("../../../../ngx-quill-editor/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_authentication_service_client__ = __webpack_require__("../../../../../src/app/services/authentication.service.client.ts");
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
            __WEBPACK_IMPORTED_MODULE_28__components_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_page_page_list_page_list_component__["a" /* PageListComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_29_ngx_quill_editor__["a" /* QuillEditorModule */],
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_test_service_client__["a" /* TestService */], __WEBPACK_IMPORTED_MODULE_22__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_23__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_24__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_25__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_32__services_flickr_service_client__["a" /* FlickrService */], __WEBPACK_IMPORTED_MODULE_33__services_shared_service_client__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_34__services_authentication_service_client__["a" /* AuthenticationService */]],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_authentication_service_client__ = __webpack_require__("../../../../../src/app/services/authentication.service.client.ts");
/**
* Created by sesha on 7/26/17.
*/

















var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_13__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__["a" /* TestComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_4__components_user_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/website', component: __WEBPACK_IMPORTED_MODULE_14__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/website/new', component: __WEBPACK_IMPORTED_MODULE_5__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/website/:wid', component: __WEBPACK_IMPORTED_MODULE_6__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/website/:wid/page', component: __WEBPACK_IMPORTED_MODULE_7__components_page_page_list_page_list_component__["a" /* PageListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/website/:wid/page/new', component: __WEBPACK_IMPORTED_MODULE_8__components_page_page_new_page_new_component__["a" /* PageNewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/website/:wid/page/:pid', component: __WEBPACK_IMPORTED_MODULE_9__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/website/:wid/page/:pid/widget', component: __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/website/:wid/page/:pid/widget/new', component: __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/website/:wid/page/:pid/widget/:wgid', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/website/:wid/page/:pid/widget/:wgid/flickr',
        component: __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__services_authentication_service_client__["a" /* AuthenticationService */]] }
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

module.exports = "\n<!--<!DOCTYPE html>-->\n<!--<html lang=\"en\">-->\n<!--<nav class =\"navbar navbar-default navbar-fixed-top\">-->\n<!--<div class =\"container-fluid navbar-brand row\">-->\n<!---->\n<!--</div>-->\n<!--</nav>-->\n<!--<head>-->\n  <!--<meta charset=\"UTF-8\">-->\n  <!--<meta name=\"viewport\" content=\"initial-scale=1.25, user-scalable=no\">-->\n  <!--<link rel=\"stylesheet\" href=\"../../vendors/bootstrap/dist/css/bootstrap.min.css\"/>-->\n<!---->\n  <!--<link rel=\"stylesheet\" href=\"../../style.css\"/>-->\n  <!--<script src = \"../../vendors/bootstrap/dist/js/bootstrap.min.js\"></script>-->\n  <!--<title>Edit Page</title>-->\n<!---->\n<!--</head>-->\n<!--<body>-->\n\n<!--<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid col-sm-3 hidden-xs navbar-default\">\n\n    &lt;!&ndash;heading on the nav bar&ndash;&gt;\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand\">\n        <b>Pages</b>\n      </a>\n    </p>\n\n    &lt;!&ndash;tick mark&ndash;&gt;\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink] = \"['/user',userId]\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n\n  <div class=\"navbar-default container-fluid col-sm-9\">\n\n    &lt;!&ndash;heading on the nav bar&ndash;&gt;\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand\">\n        <b>Edit Page</b>\n      </a>\n    </p>\n\n    &lt;!&ndash;tick mark&ndash;&gt;\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink] = \"['/user',userId]\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>-->\n\n<!--\n\n<nav class=\"navbar navbarBgColor navbar-fixed-top\">\n  <div class= \"container-fluid col-sm-3 hidden-xs navbarBgColor\">\n\n\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand navbarTextColor\" href=\"#\">\n        <b>Edit Pages</b>\n      </a>\n    </p>\n\n\n    &lt;!&ndash;tick mark&ndash;&gt;\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink] = \"['/user',userId]\" class=\"navbar-link navbarTextColor\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n  </div>\n\n  <div class =\"navbarBgColor container-fluid col-sm-9\" >\n    &lt;!&ndash;    <p class=\"navbar-text pull-left navbarBgColor\">\n          <a [routerLink] = \"['/user/:uid/website/:wid']\" class=\"navbar-link navbarTextColor\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>&ndash;&gt;\n\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand navbarTextColor\" href=\"#\">\n        <b>Edit Pages</b>\n      </a>\n    </p>\n\n    &lt;!&ndash;tick mark&ndash;&gt;\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink] = \"['/user/:uid/website']\" class=\"navbar-link navbarTextColor\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n\n-->\n\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class= \"container-fluid col-sm-3 hidden-xs navbar-default\">\n\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink] = \"['/user','website', websiteId, 'page']\" class=\"navbar-link \">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand\" href=\"#\">\n        <b>Pages</b>\n      </a>\n    </p>\n\n\n    <!--plus mark-->\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink] = \"['/user', 'website', websiteId, 'page', 'new']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n  </div>\n\n  <div class =\"navbar-default container-fluid col-sm-9\" >\n    <!--    <p class=\"navbar-text pull-left navbarBgColor\">\n          <a [routerLink] = \"['/user/:uid/website/:wid']\" class=\"navbar-link navbarTextColor\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>-->\n\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand\" href=\"#\">\n        <b>Edit Pages</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a (click) = 'updatePage(pageName,pageDescription)' class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n  <div class = \"row\">\n    <div class = \"col-sm-3 hidden-xs\">\n      <ul class=\"list-group\">\n        <div class=\"container-fluid dguobody\">\n          <ul class=\"list-group\">\n            <div class=\"container-fluid\">\n              <div *ngFor = \"let page of pages\">\n                <li class=\"list-group-item borderless\">\n                  <a [routerLink] = \"['/user', 'website', websiteId, 'page', page._id, 'widget']\">\n                    {{page.name}}\n                  </a>\n                  <a [routerLink] = \"['/user', 'website', websiteId, 'page', page._id]\">\n        <span class = \"glyphicon glyphicon-cog pull-right\">\n             </span>\n                  </a>\n                </li>\n              </div>\n            </div>\n          </ul>\n        </div>\n\n      </ul>\n    </div>\n\n  <div class = 'col-sm-9 dguobody'>\n  <div class=\"form-group\">\n    <form>\n      <label for=\"pageName-edit\">Name</label>\n      <input [(ngModel)] = \"pageName\"\n             name = \"pageName\"\n        placeholder=\"Blog Post\"\n             type=\"text\"\n             id=\"pageName-edit\"\n             class=\"form-control\"/>\n    </form>\n  </div>\n\n\n  <div class=\"form-group\">\n    <form>\n      <label for=\"pageDescription-edit\">Description</label>\n      <input [(ngModel)] = \"pageDescription\"\n             name = \"pageDescription\"\n        placeholder=\"Page Description\"\n             type=\"text\"\n             id=\"pageDescription-edit\"\n             class=\"form-control\"/>\n    </form>\n  </div>\n  <a (click) = \"deletePage(pageId)\" class=\"btn btn-danger btn-block\">\n\n    Delete\n  </a>\n\n</div>\n    </div>\n\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink] = \"['/user']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n    <!-- &lt;!&ndash;     <ul class=\"list-group\">\n        <li class=\"list-group-item borderless\">\n          Address Book App\n          <a [routerLink] = \"['/user/:uid/website/:wid']\">\n            <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n          </a>\n        </li>\n        <li class=\"list-group-item borderless\">\n          Blogger\n          <a [routerLink] = \"['/user/:uid/website/:wid']\">\n            <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n          </a>\n        </li>\n        <li class=\"list-group-item borderless\">\n          Blogging App\n          <a [routerLink] = \"['/user/:uid/website/:wid']\">\n            <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n          </a>\n        </li>\n        <li class=\"list-group-item borderless\">\n          Script Testing App\n          <a [routerLink] = \"['/user/:uid/website/:wid']\">\n            <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n          </a>\n        </li>\n      </ul>-->\n\n<!--</body>-->\n<!--</html>-->\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_page_model_client__ = __webpack_require__("../../../../../src/models/page.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function PageEditComponent(sharedService, pageService, activatedRoute, websiteService, userService, router) {
        this.sharedService = sharedService;
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.websiteService = websiteService;
        this.userService = userService;
        this.router = router;
        this.page = {};
        this.user = {};
        this.pages = [];
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe((function (params) {
            _this.pageId = params['pid'];
            _this.websiteId = params['wid'];
            _this.user = _this.sharedService.user;
            _this.userId = _this.user['_id'];
        }));
        this.pageService.findAllPagesForWebsite(this.websiteId)
            .subscribe(function (pages) {
            _this.pages = pages;
        });
        this.pageService.findPageById(this.pageId)
            .subscribe(function (page) {
            _this.page = page;
            _this.pageName = _this.page['name'];
            _this.pageDescription = _this.page['description'];
        });
    };
    PageEditComponent.prototype.deletePage = function (PageId) {
        var _this = this;
        this.pageService.deletePage(this.pageId)
            .subscribe(function (page) {
            _this.router.navigate(['/user', 'website', _this.websiteId, 'page']);
        });
    };
    PageEditComponent.prototype.updatePage = function (name, description) {
        var _this = this;
        var newPage = new __WEBPACK_IMPORTED_MODULE_4__models_page_model_client__["a" /* Page */](name, '', this.websiteId, description, [], new Date);
        if (name === '') {
            this.errorFlag = true;
            this.errorMsg = 'Invalid new website name!';
        }
        else {
            this.pageService.updatePage(this.pageId, newPage)
                .subscribe(function (status) {
                console.log(status);
                _this.router.navigate(['/user', 'website', _this.websiteId, 'page']);
            });
        }
        /*      this.pageService.updatePage(this.pageId, newPage)
                .subscribe((page: Page) => {
                  this.pageName = name;
                  this.pageDescription = description;
                });
            }*/
    };
    return PageEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], PageEditComponent.prototype, "PageEditForm", void 0);
PageEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-edit',
        template: __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_page_service_client__["a" /* PageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _g || Object])
], PageEditComponent);

var _a, _b, _c, _d, _e, _f, _g;
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

module.exports = "<!--<!DOCTYPE html>-->\n<!--<html lang=\"en\">-->\n<!--<head>-->\n  <!--<meta name=\"apple-mobile-web-app-capable\" content=\"yes\">-->\n  <!--<meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\">-->\n  <!--<meta name=\"viewport\" content=\"initial-scale=1.25, user-scalable=no\">-->\n<!---->\n  <!--<meta charset=\"UTF-8\">-->\n<!---->\n  <!--<title>Page List</title>-->\n  <!--<link rel=\"stylesheet\" href=\"../../vendors/bootstrap/dist/css/bootstrap.css\"/>-->\n  <!--<link rel=\"stylesheet\" href=\"../../style.css\"/>-->\n<!---->\n<!--</head>-->\n<!--<body>-->\n\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class= \"navbar-default container-fluid\">\n\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink] = \"['/user',  'website']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand\">\n        <b>Pages</b>\n      </a>\n    </p>\n\n\n    <!--plus mark-->\n    <p class=\"navbar-text pull-right\">\n         <a [routerLink] = \"['/user', 'website', websiteId, 'page','new']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n\n<!--navs and cog marks-->\n\n<ul class=\"list-group\">\n  <div class=\"container-fluid dguobody\">\n    <ul class=\"list-group\">\n      <div class=\"container-fluid\">\n        <div *ngFor = \"let page of pages\">\n          <li class=\"list-group-item borderless\">\n            <a [routerLink] = \"['/user','website', websiteId, 'page', page._id, 'widget']\">\n              {{page.name}}\n            </a>\n            <a [routerLink] = \"['/user', 'website', websiteId, 'page', page._id]\">\n        <span class = \"glyphicon glyphicon-cog pull-right\">\n             </span>\n            </a>\n          </li>\n        </div>\n      </div>\n    </ul>\n  </div>\n\n</ul>\n\n\n\n\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink] = \"['/user']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n<!--</body>-->\n<!--</html>-->\n\n\n<!--   <li class=\"list-group-item borderless toolbarColor1\"\n        [routerLink] = \"['/user/:uid/website/:wid/page/:pid/widget']\">\n      Blog Post\n      <a [routerLink] = \"['/user/:uid/website/:wid/page/:pid']\">\n        <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n      </a>\n    </li>\n    <li class=\"list-group-item borderless toolbarColor1\"\n        [routerLink] = \"['/user/:uid/website/:wid/page/:pid/widget']\">\n      <div class =\"row\">\n        <div class = \"col-xs-3\">\n        </div>\n      </div>\n      Blogs\n      <a [routerLink] = \"['/user/:uid/website/:wid/page/:pid']\">\n        <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n      </a>\n    </li>\n    <li class=\"list-group-item borderless toolbarColor1\"\n        [routerLink] = \"['/user/:uid/website/:wid/page/:pid/widget']\">\n      Home\n      <a [routerLink] = \"['/user/:uid/website/:wid/page/:pid']\">\n        <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n      </a>\n    </li>\n    <li class=\"list-group-item borderless toolbarColor1\"\n        [routerLink] = \"['/user/:uid/website/:wid/page/:pid/widget']\">\n      About\n      <a [routerLink] = \"['/user/:uid/website/:wid/page/:pid']\">\n        <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n      </a>\n    </li>\n    <li class=\"list-group-item borderless toolbarColor1\"\n        [routerLink] = \"['/user/:uid/website/:wid/page/:pid/widget']\">\n      Contact Us\n      <a [routerLink] = \"['/user/:uid/website/:wid/page/:pid']\">\n        <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n      </a>\n    </li>-->\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function PageListComponent(sharedService, pageService, userService, websiteService, router, activatedRoute) {
        this.sharedService = sharedService;
        this.pageService = pageService;
        this.userService = userService;
        this.websiteService = websiteService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.pages = [];
        this.page = {};
        this.user = {};
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe((function (params) {
            _this.websiteId = params['wid'];
            _this.user = _this.sharedService.user;
            _this.userId = _this.user['_id'];
        }));
        // this.pages = this.pageService.findAllPagesForWebsite(this.websiteId);
        this.pageService.findAllPagesForWebsite(this.websiteId)
            .subscribe(function (pages) {
            _this.pages = pages;
        });
    };
    return PageListComponent;
}());
PageListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-list',
        template: __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _f || Object])
], PageListComponent);

var _a, _b, _c, _d, _e, _f;
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

module.exports = "\n<!--<!DOCTYPE html>-->\n<!--<html lang=\"en\">-->\n<!--<nav class =\"navbar navbar-default navbar-fixed-top\">-->\n<!--<div class =\"container-fluid navbar-brand row\">-->\n<!---->\n<!--</div>-->\n<!--</nav>-->\n<!--<head>-->\n  <!--<meta charset=\"UTF-8\">-->\n  <!--<meta name=\"viewport\" content=\"initial-scale=1.25, user-scalable=no\">-->\n  <!--<link rel=\"stylesheet\" href=\"../../vendors/bootstrap/dist/css/bootstrap.min.css\"/>-->\n<!---->\n  <!--<link rel=\"stylesheet\" href=\"../../style.css\"/>-->\n  <!--<script src = \"../../vendors/bootstrap/dist/js/bootstrap.min.js\"></script>-->\n  <!--<title>New Page</title>-->\n<!---->\n<!--</head>-->\n<!--<body>-->\n\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink] = \"['/user', 'website', websiteId, 'page']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand\">\n        <b>New Page</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a (click) = \"createPage(pageName,pageDescription)\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n\n<div class=\"container dguobody\">\n\n\n  <div class=\"form-group\">\n    <form>\n      <label for=\"pageName-new\">Name</label>\n      <input [(ngModel)] = \"pageName\"\n            name = \"pageName\"\n        placeholder=\"Page Name\"\n             type=\"text\"\n             id=\"pageName-new\"\n             class=\"form-control\"/>\n    </form>\n  </div>\n\n\n  <div class=\"form-group\">\n    <form>\n      <label for=\"pageTitle-new\">Title</label>\n      <input [(ngModel)] = \"pageDescription\"\n             name = \"pageDescription\"\n        placeholder=\"Page Title\"\n             type=\"text\"\n             id=\"pageTitle-new\"\n             class=\"form-control\"/>\n    </form>\n  </div>\n\n\n</div>\n\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink] = \"['/user']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n<!--</body>-->\n<!--</html>-->\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    // properties: page edit should retrieve the information given from the page
    function PageNewComponent(sharedService, pageService, activatedRoute, websiteService, userService, router) {
        this.sharedService = sharedService;
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.websiteService = websiteService;
        this.userService = userService;
        this.router = router;
        this.user = {};
        this.page = {};
        this.pages = [];
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe((function (params) {
            // this.pageId = params['pid'];
            _this.user = _this.sharedService.user;
            _this.userId = _this.user['_id'];
            _this.websiteId = params['wid'];
            // this.pages = this.pageService.findAllPagesForWebsite(this.websiteId);
            // console.log(this.pageId);
            // this.page = this.pageService.findPageById(this.pageId);
            // console.log(this.page);
        }));
        this.pageService.findAllPagesForWebsite(this.websiteId)
            .subscribe(function (pages) {
            _this.pages = pages;
            _this.pageName = _this.page['name'];
            _this.pageDescription = _this.page['description'];
        });
    };
    /*  createPage(name, description) {
        const pageNew = {'_id': '123', 'name': name, 'websiteId': this.websiteId, 'description': description};
        console.log(pageNew);
        this.pageService.createPage(this.websiteId, pageNew);
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
      }*/
    PageNewComponent.prototype.createPage = function (name, description) {
        var _this = this;
        if (name === '' || description === '') {
            this.errorFlag = true;
            this.errorMsg = 'Invalid name or description';
        }
        else {
            this.pageService.findAllPagesForWebsite(this.websiteId)
                .subscribe(function (page) {
                var newPage = {
                    name: name,
                    title: '',
                    website: _this.websiteId,
                    description: description,
                    widgets: [],
                    dateCreated: new Date(),
                };
                _this.pageService.createPage(_this.websiteId, newPage)
                    .subscribe(function (Page) {
                    console.log(Page);
                    _this.router.navigate(['/user', 'website', _this.websiteId, 'page']);
                });
            });
        }
    };
    return PageNewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], PageNewComponent.prototype, "pageNewForm", void 0);
PageNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-new',
        template: __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _g || Object])
], PageNewComponent);

var _a, _b, _c, _d, _e, _f, _g;
/*      return this.pageService.createPage(this.websiteId, new Page('', name, this.websiteId, description))
        .subscribe((page: Page) => {
          this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
        });
    }*/
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

module.exports = "\n\n  <!--<cha&lt;!&ndash;&ndash;&gt;rset=\"UTF-8\">-->\n  <!--<name=\"viewport\" content=\"initial-scale=1.25, user-scalable=no\">-->\n  <!--<link rel=\"stylesheet\" href=\"../../vendors/bootstrap/dist/css/bootstrap.min.css\"/>&ndash;&gt;-->\n  <!--<link rel=\"stylesheet\" href=\"../../style.css\"/>&ndash;&gt;-->\n  <!--<script src = \"../../vendors/bootstrap/dist/js/bootstrap.min.js\"></script>&ndash;&gt;-->\n  <!--Login-->\n<!--<body>-->\n<div class=\"container-fluid dguobody\">\n\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n\n  <h1>Login</h1>\n\n  <!--<form (ngSubmit) = \"login()\" #f=\"ngForm\" method=\"GET\" action=\"/submit/to/some/server/api\">-->\n\n\n  <div class=\"form-group \">\n    <input placeholder=\"username\"\n           type=\"text\"\n           name=\"username\"\n           id=\"username\"\n           class=\"form-control\"\n           [(ngModel)]=\"username\">\n           <!--[(ngModel)]=\"username\"/>-->\n    <!--<span class=\"help-block\" *ngIf=\"! username.valid && username.touched\">-->\n      <!--Please enter username-->\n    <!--</span>-->\n  </div>\n\n  <div class=\"form-group\">\n    <input placeholder=\"password\"\n           type=\"password\"\n           name=\"username\"\n           id=\"password\"\n           class=\"form-control\"\n           [(ngModel)]=\"password\"\n           required/>\n  </div>\n\n  <!--<button [routerLink] = \"['/user/:uid']\" -->\n    <button (click)=\"login()\"\n            class=\"btn btn-primary btn-block\">Login\n  </button>\n  <!--<a href=\"register.html\" class=\"btn btn-success btn-block\">-->\n  <button [routerLink] = \"['/register']\"  class=\"btn btn-success btn-block\">\n    Register\n  </button>\n\n  <button href=\"facebook/login\" class=\"btn btn-primary btn-block\">\n    <span class=\"fa fa-facebook\"></span>\n    Facebook\n  </button>\n\n  <!--</form>-->\n</div>\n\n<!--</body>-->\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
var LoginComponent = (function () {
    function LoginComponent(router, userService, sharedService) {
        this.router = router;
        this.userService = userService;
        this.sharedService = sharedService;
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
        var _this = this;
        // this.username = this.loginForm.value.username;
        // this.password = this.loginForm.value.password;
        this.errorFlag = false;
        this.userService
            .login(this.username, this.password)
            .subscribe(function (user) {
            _this.sharedService.user = user;
            _this.router.navigate(['/user']);
        });
        /*    this.userService.findUserByCredential(this.username, this.password)
              .subscribe((user: User) => {
                if (user) {
                  this.router.navigate(['user/', user._id]);
                }
              });*/
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
/*
import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
// import {User} from '../../../models/user.model.client';
import {UserService} from '../../../services/user.service.client';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  @ViewChild('f') loginForm: NgForm;

  username: string;
  password: string;
  errorFlag: boolean;
  errorMsg: string;

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
  }

  /!*    this.activatedRoute.params
        .subscribe(
          (params: any) => {
            this.username = params['username'];
          }
        );
      this.user = this.userService.findUserByUsername(this.username);
    }*!/

    /!*
        this.userService.findUserByCredential(username, this.password)
          .subscribe((user: User) => {
            if (user) {
              this.router.navigate(['user/', user._id]);
            }
          });
      }*!/
  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this.errorFlag = false;

    const user = this.userService.findUserByUsername(this.username);
    if (user && user.password === this.password) {
      this.router.navigate(['user/', user._id]);
    } else {
      this.errorFlag = true;
      this.errorMsg = 'Invalid username or password!';

    }
  }
}

/!*
    } else {
      this.errorFlag = true;
      this.errorMsg = 'Invalid username or password!';
*!/




*/
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

module.exports = "<!--<!DOCTYPE html>-->\n<!--<html lang=\"en\">-->\n\n\n  <!--<meta charset=\"UTF-8\">-->\n  <!--<meta name=\"viewport\" content=\"initial-scale=1.25, user-scalable=no\">-->\n  <!--<link rel=\"stylesheet\" href=\"../../vendors/bootstrap/dist/css/bootstrap.min.css\"/>-->\n<!---->\n  <!--<link rel=\"stylesheet\" href=\"../../style.css\"/>-->\n  <!--<script src = \"../../vendors/bootstrap/dist/js/bootstrap.min.js\"></script>-->\n  <!--<title>Profile</title>-->\n\n\n<!--<body>-->\n\n\n<nav class=\"navbar navbarBgColor navbar-fixed-top\">\n  <div class= \"navbarBgColor container-fluid\">\n\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand navbarTextColor\" href=\"#\">\n        <b>Profile</b>\n      </a>\n    </p>\n\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"updateUser(username, email, firstName, lastName)\" class=\"navbar-link navbarTextColor\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n<!--\n<nav class=\"navbar navbarBgColor navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    &lt;!&ndash;heading on the nav bar&ndash;&gt;\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand navbarTextColor\">\n        <b>Profile</b>\n      </a>\n    </p>\n\n    &lt;!&ndash;tick mark&ndash;&gt;\n    <p class=\"navbar-text pull-right\">\n      <a href=\"profile.html\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n-->\n\n\n\n<div class=\"container dguobody\">\n\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n\n  <div class=\"form-group\">\n    <form>\n      <label for=\"username\">Username</label>\n      <input [(ngModel)]=\"username\"\n             type=\"text\"\n             name=\"username\"\n             id=\"username\"\n        placeholder=\"Alice\"\n             class=\"form-control\"/>\n    </form>\n  </div>\n\n  <div class=\"form-group\">\n    <form>\n      <label for=\"email-profile\">Email address</label>\n      <input [(ngModel)]=\"email\"\n        placeholder=\"email\"\n             name=\"email\"\n             type=\"email\"\n             id=\"email-profile\"\n             class=\"form-control\"/>\n    </form>\n  </div>\n\n\n  <div class=\"form-group\">\n    <form>\n      <label for=\"firstname-profile\">First Name</label>\n      <input placeholder=\"first name\"\n             name=\"firstName\"\n             [(ngModel)]=\"firstName\"\n             type=\"text\"\n             id=\"firstname-profile\"\n             class=\"form-control\"/>\n    </form>\n  </div>\n\n\n  <div class=\"form-group\">\n    <form>\n      <label for=\"lastname-profile\">Last Name</label>\n      <input [(ngModel)]=\"lastName\"\n             placeholder=\"last name\"\n             name=\"lastName\"\n             type=\"text\"\n             id=\"lastname-profile\"\n             class=\"form-control\"/>\n    </form>\n  </div>\n\n  <button (click)=\"findWebsites()\"\n          class=\"btn btn-primary btn-block\"\n          type=\"submit\" >\n    Websites\n  </button>\n\n  <button (click)=\"logout()\" class=\"btn btn-danger btn-block\">\n    Logout\n  </button>\n\n  <button (click)=\"deleteUser(userId)\" class=\"btn btn-danger btn-block\">\n    Delete\n  </button>\n\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink] = \"['user/']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<!--</body>-->\n<!--</html>-->\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user_model_client__ = __webpack_require__("../../../../../src/models/user.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function ProfileComponent(userService, websiteService, sharedService, route, router) {
        this.userService = userService;
        this.websiteService = websiteService;
        this.sharedService = sharedService;
        this.route = route;
        this.router = router;
        this.user = {};
    }
    ProfileComponent.prototype.ngOnInit = function () {
        /*    this.route.params.subscribe(
              (params: any) => {
                this.userId = params['uid'];
              }
            );*/
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.user = _this.sharedService.user;
        });
        console.log(this.user);
        this.userId = this.user['_id'];
        this.username = this.user['username'];
        this.password = this.user['password'];
        this.firstName = this.user['firstName'];
        this.lastName = this.user['lastName'];
        this.email = this.user['email'];
        /*    this.userService.findUserById(this.userId)
              .subscribe((user) => {
                this.user = this.sharedService.user;
                console.log(this.user);
                this.username = this.user['username'];
                this.password = this.user['password'];
                this.firstName = this.user['firstName'];
                this.lastName = this.user['lastName'];
                this.email = this.user['email'];
              });*/
    };
    /*
    Find the websites linked to a user account
     */
    ProfileComponent.prototype.findWebsites = function () {
        var _this = this;
        console.log(this.userId);
        this.websiteService.findAllWebsitesForUser(this.userId)
            .subscribe(function (websites) {
            console.log(websites);
            _this.router.navigate(['/user/website']);
        });
        /*    this.websiteService.findAllWebsitesForUser(this.userId)
              .subscribe((websites: Website[]) => {*/
        // this.router.navigate(['user/', this.userId, 'website']);
        // });
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (status) {
            _this.router.navigate(['login']);
        });
    };
    ProfileComponent.prototype.deleteUser = function (userId) {
        var _this = this;
        this.userService.deleteUser(userId)
            .subscribe(function (status) {
            console.log(status);
            _this.router.navigate(['login/']);
        });
    };
    /*  selectUser(userId) {
        this.userService.findUserById(this.userId)
          .subscribe((user: User) => {
          this.username = user.username;
          this.firstName = user.firstName;
          this.password = user.password;
          this.lastName = user.lastName;
          this.email = user.email;
          });
      }*/
    ProfileComponent.prototype.updateUser = function (username, email, firstName, lastName) {
        var newUser = new __WEBPACK_IMPORTED_MODULE_4__models_user_model_client__["a" /* User */](this.userId, username, email, this.password, firstName, lastName, '', [], new Date());
        this.userService.updateUser(newUser)
            .subscribe(function (status) {
            console.log(status);
        });
        /*    if (username === '') {
              this.errorFlag = true;
              this.errorMsg = 'Invalid new username!';
            } else {
              this.userService.updateUser(this.userId, newUser)
                .subscribe((user: User) => {
                  this.user = user;
                  this.username = username;
                  // this.router.navigate(['/user' + this.userId]);
                });
            }*/
    };
    return ProfileComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], ProfileComponent.prototype, "ProfileForm", void 0);
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _f || Object])
], ProfileComponent);

var _a, _b, _c, _d, _e, _f;
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

module.exports = "\n<!--<!DOCTYPE html>-->\n<!--<html lang=\"en\">-->\n<!--<head>-->\n  <!--<meta charset=\"UTF-8\">-->\n  <!--<meta name=\"viewport\" content=\"initial-scale=1.25, user-scalable=no\">-->\n  <!--<link rel=\"stylesheet\" href=\"../../vendors/bootstrap/dist/css/bootstrap.min.css\"/>-->\n  <!--<link rel=\"stylesheet\" href=\"../../style.css\"/>-->\n  <!--<script src = \"../../vendors/bootstrap/dist/js/bootstrap.min.js\"></script>-->\n  <!--<title>Register</title>-->\n<!--</head>-->\n<!--<body>-->\n<div class=\"container-fluid dguobody\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Register</h1>\n\n  <div class=\"form-group\">\n    <input [(ngModel)] = \"username\"\n           name = 'username'\n      placeholder=\"username\"\n           type=\"text\"\n           id=\"username\"\n           class=\"form-control\"/>\n  </div>\n\n  <div class=\"form-group\">\n    <input [(ngModel)] = \"password\"\n      name = \"password\"\n      placeholder=\"password\"\n           type=\"password\"\n           id=\"password\"\n           class=\"form-control\"/>\n  </div>\n\n  <div class=\"form-group\">\n    <input [(ngModel)] = \"verifyPassword\"\n           name = \"verifyPassword\"\n      placeholder=\"verify password\"\n           type=\"password\"\n           id=\"verify password\"\n           class=\"form-control\"/>\n  </div>\n\n  <a (click) = \"Register(username, password, verifyPassword)\" class=\"btn btn-primary btn-block\">Register\n  </a>\n  <a [routerLink] = \"['/login']\" class=\"btn btn-danger btn-block\">Cancel\n  </a>\n</div>\n<!--</body>-->\n<!--</html>-->\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import {User} from '../../../../models/user.model.client';
var RegisterComponent = (function () {
    /*  firstname: string;
      lastName: string;
      email: string;*/
    function RegisterComponent(userService, route, sharedService, router) {
        this.userService = userService;
        this.route = route;
        this.sharedService = sharedService;
        this.router = router;
        this.user = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    // write a function that determines if the verify password is the same as password and submit information to profile
    RegisterComponent.prototype.Register = function (username, password, verifyPassword) {
        var _this = this;
        this.username = username;
        this.password = password;
        console.log([this.username, this.password]);
        this.userService.register(this.username, this.password)
            .subscribe(function (user) {
            _this.sharedService.user = user;
            _this.router.navigate(['/user']);
        });
    };
    return RegisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], RegisterComponent.prototype, "RegisterForm", void 0);
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _e || Object])
], RegisterComponent);

var _a, _b, _c, _d, _e;
/*     this.route.params.subscribe(
     (params: any) => {
       this.userId = params['uid'];
       this.user = this.userService.findUserById(this.userId);
/!*         this.username = this.user['username'];
       this.password = this.user['password'];
       this.verifyPassword = this.user['verifyPassword'];*!/
     }
   );*/
/*    const userNew = {'_id': '123', 'username': username, 'email': '', 'password': password, 'firstname': '', 'lastname': ''};
    console.log(userNew);
    this.userService.createUser(userNew);
    this.router.navigate(['/user', userNew._id]);
  }*/
/*    if (username === '' || password === '' || password !== verifyPassword ) {
      this.errorFlag = true;
      this.errorMsg = 'Invalid username/password or password not the same!';
    } else {
      // asking the server to navigate at a time when it is convenient, while returning its own thing from client at the same time
      return this.userService.createUser(new User('', username, '', password, '', ''))
        .subscribe((user: User) => {
          this.router.navigate(['user/', user._id]);
        });
    }
  }*/
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

module.exports = "<!--<!DOCTYPE html>-->\n<!--<html lang=\"en\">-->\n<!--<head>-->\n  <!--<meta name=\"apple-mobile-web-app-capable\" content=\"yes\">-->\n  <!--<meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\">-->\n  <!--<meta name=\"viewport\" content=\"initial-scale=1.25, user-scalable=no\">-->\n<!---->\n  <!--<meta charset=\"UTF-8\">-->\n<!---->\n  <!--<title>Edit Website</title>-->\n  <!--<link rel=\"stylesheet\" href=\"../../vendors/bootstrap/dist/css/bootstrap.css\"/>-->\n  <!--<link rel=\"stylesheet\" href=\"../../style.css\"/>-->\n<!---->\n<!--</head>-->\n<!--<body>-->\n<div>\n\n<nav class=\"navbar navbarBgColor navbar-fixed-top\">\n  <div class= \"container-fluid col-sm-3 hidden-xs navbarBgColor\">\n\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink] = \"['/user', 'website']\" class=\"navbar-link navbarTextColor\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand navbarTextColor\" href=\"#\">\n        <b>Websites</b>\n      </a>\n    </p>\n\n\n    <!--plus mark-->\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink] = \"['/user', 'website', 'new']\" class=\"navbar-link navbarTextColor\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n  </div>\n\n  <div class =\"navbarBgColor container-fluid col-sm-9\" >\n<!--    <p class=\"navbar-text pull-left navbarBgColor\">\n      <a [routerLink] = \"['/user/:uid/website/:wid']\" class=\"navbar-link navbarTextColor\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>-->\n\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand navbarTextColor\" href=\"#\">\n        <b>Edit Websites</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a (click)='updateWebsite(websiteName,websiteDescription)' class=\"navbar-link navbarTextColor\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n   <!--<div class=\"container-fluid\">-->\n  <div class = \"row\">\n\n\n\n      <div class = \"col-sm-3 hidden-xs\">\n        <ul class=\"list-group\">\n          <div class=\"container-fluid dguobody\">\n\n            <div *ngFor = \"let website of websites\">\n              <li class=\"list-group-item borderless\">\n                <a [routerLink] = \"['/user', 'website',website._id, 'page']\">\n                  {{website.name}}\n                </a>\n                <a href=\"/user/website/{{website._id}}\">\n        <span class = \"glyphicon glyphicon-cog pull-right\">\n             </span>\n                </a>\n              </li>\n            </div>\n          </div>\n        </ul>\n    </div>\n\n    <div class = \"col-sm-9 dguobody\">\n      <div *ngIf=\"errorFlag\"\n           class=\"alert alert-danger\">\n        {{errorMsg}}\n      </div>\n\n      <!--header and input field-->\n      <form>\n        <div class = \"form-group\">\n          <label for = \"website-edit-name\">Website Name</label>\n          <input [(ngModel)] = \"websiteName\"\n                 name = \"websiteName\"\n            placeholder=\"Website Name\"\n                 type=\"text\"\n                 id = \"website-edit-name\"\n                 class=\"form-control\"/>\n        </div>\n\n      </form>\n      <form>\n        <div class = \"form-group\">\n          <label for = \"website-edit-description\">Website Description</label>\n          <textarea [(ngModel)] = \"websiteDescription\"\n                    name = \"websiteDescription\"\n                    class = \"form-control\"\n                    placeholder=\"Description\"\n                    id = \"website-edit-description\"\n                    rows=\"10\"></textarea>\n        </div>\n      </form>\n      <a (click)=\"deleteWebsite(websiteId)\" class=\"btn btn-danger btn-block \">Delete\n      </a>\n    </div>\n  </div>\n\n\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink] = \"['/user']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n</div>\n\n<!--</body>-->\n<!--</html>-->\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_website_model_client__ = __webpack_require__("../../../../../src/models/website.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function WebsiteEditComponent(sharedService, userService, websiteService, router, activatedRoute) {
        this.sharedService = sharedService;
        this.userService = userService;
        this.websiteService = websiteService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.user = {};
        this.websites = [];
        this.website = {};
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.user = _this.sharedService.user;
            _this.userId = _this.user['_id'];
        });
        this.activatedRoute.params.subscribe(function (params) {
            _this.websiteId = params['wid'];
            // this.websites = this.websiteService.findWebsitesByUser(this.userId);
        });
        this.websiteService.findWebsiteById(this.userId, this.websiteId)
            .subscribe(function (website) {
            _this.website = website;
            _this.websiteName = _this.website['name'];
            _this.websiteDescription = _this.website['description'];
            // console.log(this.websiteId);
        });
        this.websiteService.findAllWebsitesForUser(this.userId)
            .subscribe(function (websites) {
            _this.websites = websites;
        });
    };
    WebsiteEditComponent.prototype.deleteWebsite = function (websiteId) {
        var _this = this;
        this.websiteService.deleteWebsite(websiteId)
            .subscribe(function (status) {
            console.log(status);
            _this.router.navigate(['/user', 'website']);
        });
    };
    WebsiteEditComponent.prototype.updateWebsite = function (name, description) {
        var _this = this;
        var newWebsite = new __WEBPACK_IMPORTED_MODULE_4__models_website_model_client__["a" /* Website */](this.websiteId, name, this.userId, description, [], new Date);
        if (name === '') {
            this.errorFlag = true;
            this.errorMsg = 'Invalid new website name!';
        }
        else {
            this.websiteService.updateWebsite(this.websiteId, newWebsite)
                .subscribe(function (status) {
                console.log(status);
                _this.router.navigate(['/user', 'website']);
            });
        }
    };
    return WebsiteEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], WebsiteEditComponent.prototype, "ProfileForm", void 0);
WebsiteEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-edit',
        template: __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _f || Object])
], WebsiteEditComponent);

var _a, _b, _c, _d, _e, _f;
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

module.exports = "<!--<!DOCTYPE html>-->\n<!--<html lang=\"en\">-->\n<!--<head>-->\n  <!--<meta name=\"apple-mobile-web-app-capable\" content=\"yes\">-->\n  <!--<meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\">-->\n  <!--<meta name=\"viewport\" content=\"initial-scale=1.25, user-scalable=no\">-->\n<!---->\n  <!--<meta charset=\"UTF-8\">-->\n<!---->\n  <!--<title>Websites</title>-->\n  <!--<link rel=\"stylesheet\" href=\"../../vendors/bootstrap/dist/css/bootstrap.css\"/>-->\n  <!--<link rel=\"stylesheet\" href=\"../../style.css\"/>-->\n<!---->\n<!--</head>-->\n<!--<body>-->\n\n<nav class=\"navbar navbarBgColor navbar-fixed-top\">\n  <div class= \"navbarBgColor container-fluid\">\n\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink] = \"['/user']\" class=\"navbar-link navbarTextColor\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand navbarTextColor\">\n        <b>Websites</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a (click) = 'goToNewWebsite()' class=\"navbar-link navbarTextColor\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n\n\n\n\n<ul class=\"list-group\">\n  <div class=\"container-fluid dguobody\">\n    <div *ngFor = \"let website of websites\">\n      <li class=\"list-group-item borderless\">\n        <a [routerLink] = \"['/user', 'website',website._id, 'page']\">\n        {{website.name}}\n        </a>\n        <a [routerLink] = \"['/user', 'website', website._id]\">\n        <span class = \"glyphicon glyphicon-cog pull-right\">\n             </span>\n        </a>\n        </li>\n        </div>\n      </div>\n</ul>\n\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink] = \"['/user']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n<!--</body>-->\n<!--</html>-->\n\n\n<!--      Address Book App\n      <a [routerLink] = \"['/user/:uid/website/:wid']\">\n        <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n      </a>\n    </li>\n    <li class=\"list-group-item borderless\" [routerLink] = \"['/user/:uid/website/:wid/page']\">\n      <div class =\"row\">\n        <div class = \"col-xs-3\">\n        </div>\n      </div>\n      Blogger\n      <a [routerLink] = \"['/user/:uid/website/:wid']\">\n        <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n      </a>\n    </li>\n    <li class=\"list-group-item borderless\" [routerLink] = \"['/user/:uid/website/:wid/page']\">\n      Blogging App\n      <a [routerLink] = \"['/user/:uid/website/:wid']\">\n        <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n      </a>\n    </li>\n    <li class=\"list-group-item borderless\" [routerLink] = \"['/user/:uid/website/:wid/page']\">\n      Script Testing App\n      <a [routerLink] = \"['/user/:uid/website/:wid']\">\n        <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n      </a>-->\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function WebsiteListComponent(sharedService, websiteService, userService, activatedRoute, router) {
        this.sharedService = sharedService;
        this.websiteService = websiteService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.websites = [];
        this.user = {};
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.user = _this.sharedService.user;
        });
        this.userId = this.user['_id'];
        console.log(this.userId);
        this.router.navigate(['/user']);
        this.websiteService.findAllWebsitesForUser(this.userId)
            .subscribe(function (websites) {
            _this.websites = websites;
            _this.router.navigate(['/user/website']);
        });
    };
    WebsiteListComponent.prototype.goToNewWebsite = function () {
        this.router.navigate(['user/', 'website', 'new']);
    };
    return WebsiteListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], WebsiteListComponent.prototype, "websiteForm", void 0);
WebsiteListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-list',
        template: __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _f || Object])
], WebsiteListComponent);

var _a, _b, _c, _d, _e, _f;
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

module.exports = "<!--<!DOCTYPE html>-->\n<!--<html lang=\"en\">-->\n<!--<head>-->\n  <!--<meta name=\"apple-mobile-web-app-capable\" content=\"yes\">-->\n  <!--<meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\">-->\n  <!--<meta name=\"viewport\" content=\"initial-scale=1.25, user-scalable=no\">-->\n<!---->\n  <!--<meta charset=\"UTF-8\">-->\n<!---->\n  <!--<title>New Website</title>-->\n  <!--<link rel=\"stylesheet\" href=\"../../vendors/bootstrap/dist/css/bootstrap.css\"/>-->\n  <!--<link rel=\"stylesheet\" href=\"../../style.css\"/>-->\n<!---->\n<!--</head>-->\n<!--<body>-->\n\n\n<nav class=\"navbar navbarBgColor navbar-fixed-top\">\n  <div class= \"container-fluid col-sm-3 hidden-xs navbarBgColor\">\n\n<!--    <p class=\"navbar-text pull-left\">\n      <a [routerLink] = \"['/user/:uid/website']\" class=\"navbar-link navbarTextColor\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>-->\n\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink] = \"['/user', 'website']\" class=\"navbar-link navbarTextColor\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand navbarTextColor\" href=\"#\">\n        <b>Websites</b>\n      </a>\n    </p>\n\n\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink] = \"['/user','website']\" class=\"navbar-link navbarTextColor\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n  </div>\n\n  <div class =\"container-fluid col-sm-9 navbarBgColor\" >\n\n\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand navbarTextColor\" href=\"#\">\n        <b>New Websites</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a (click)= \"createWebsite(websiteName, websiteDescription)\"\n         class=\"navbar-link navbarTextColor\"\n         type=\"submit\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n\n\n<div class = \"row\">\n<div class=\"container-fluid\">\n\n\n  <div class = \"col-sm-3 hidden-xs\">\n    <ul class=\"list-group\">\n      <div class=\"container-fluid dguobody\">\n\n        <div *ngFor = \"let website of websites\">\n          <li class=\"list-group-item borderless\">\n            <a [routerLink] = \"['/user', 'website',website._id, 'page']\">\n              {{website.name}}\n            </a>\n            <a [routerLink] = \"['/user', 'website', website._id]\">\n        <span class = \"glyphicon glyphicon-cog pull-right\">\n             </span>\n            </a>\n          </li>\n        </div>\n      </div>\n    </ul>\n  </div>\n\n\n\n\n    <!--<div class = container-fluid>-->\n      <div class = \"col-sm-9\">\n\n\n\n        <form (ngSubmit) = \"createWebsite(websiteName,websiteDescription)\" #f=\"ngForm\">\n        <form>\n          <div class = \"form-group dguobody\">\n\n            <div *ngIf=\"errorFlag\"\n                 class=\"alert alert-danger\">\n              {{errorMsg}}\n            </div>\n            <label for = \"website-new-name\">Name</label>\n            <input [(ngModel)] = \"websiteName\"\n                   name = \"websiteName\"\n                   placeholder=\"Name\"\n                   type=\"text\"\n                   id = \"website-new-name\"\n                   class=\"form-control\"/>\n          </div>\n\n        </form>\n        <div class = \"form-group\">\n          <label for = \"website-description\">Description</label>\n          <textarea [(ngModel)] = \"websiteDescription\"\n                    name = \"websiteDescription\"\n                    class = \"form-control\"\n                    placeholder=\"Description\"\n                    id = \"website-description\"\n                    rows=\"10\"></textarea>\n        </div>\n        </form>\n      </div>\n    </div>\n\n  <!--</div>-->\n\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink] = \"['/user',userId]\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n<!--</body>-->\n<!--</html>-->\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    /*  websiteName: string;
      websiteDescription: string;*/
    function WebsiteNewComponent(sharedService, userService, websiteService, router, activatedRoute) {
        this.sharedService = sharedService;
        this.userService = userService;
        this.websiteService = websiteService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.user = {};
        this.websites = [];
        this.website = {};
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.user = _this.sharedService.user;
        });
        this.userId = this.user['_id'];
        this.activatedRoute.params.subscribe(function (params) {
            _this.websiteId = params['wid'];
        });
        this.websiteService.findAllWebsitesForUser(this.userId)
            .subscribe(function (websites) {
            _this.websites = websites;
        });
        /*    this.userService.findUserById(this.userId)
              .subscribe((user: User) => {
              this.user = user;
              });*/
        // this.websites = this.websiteService.findAllWebsitesForUser(this.userId);
        // this.websiteService.findWebsiteById(this.userId, this.websiteId);
    };
    WebsiteNewComponent.prototype.createWebsite = function (name, description) {
        var _this = this;
        this.websiteService.findAllWebsitesForUser(this.userId)
            .subscribe(function (website) {
            var newWebsite = {
                _id: '',
                name: name,
                developerId: _this.userId,
                description: description,
                pages: [],
                dateCreated: new Date(),
            };
            _this.websiteService.createWebsite(_this.userId, newWebsite)
                .subscribe(function (websiteFromServer) {
                console.log(websiteFromServer);
                _this.router.navigate(['/user', 'website']);
            });
        });
    };
    return WebsiteNewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], WebsiteNewComponent.prototype, "websiteNewForm", void 0);
WebsiteNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-new',
        template: __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _f || Object])
], WebsiteNewComponent);

var _a, _b, _c, _d, _e, _f;
/*  createWebsite(name, description) {
    if (name === '' || description === '') {
      this.errorFlag = true;
      this.errorMsg = 'Invalid name or description';
    } else {
      return this.websiteService.createWebsite(this.userId, new Website('', name, '', description))
        .subscribe((website: Website) => {
          this.router.navigate(['/user', this.userId, 'website']);
        });
    }
  }*/
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

module.exports = "<!--<!DOCTYPE html>-->\n<!--<html lang=\"en\">-->\n<!--<head>-->\n  <!--<meta name=\"apple-mobile-web-app-capable\" content=\"yes\">-->\n  <!--<meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\">-->\n  <!--<meta name=\"viewport\" content=\"initial-scale=1.25, user-scalable=no\">-->\n<!---->\n  <!--<meta charset=\"UTF-8\">-->\n<!---->\n  <!--<title>Choose Widget</title>-->\n  <!--<link rel=\"stylesheet\" href=\"../../vendors/bootstrap/dist/css/bootstrap.css\"/>-->\n  <!--<link rel=\"stylesheet\" href=\"../../style.css\"/>-->\n<!---->\n<!--</head>-->\n<!--<body>-->\n\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class= \"navbar-default container-fluid\">\n\n\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink] = \"['/user', 'website', websiteId, 'page', pageId, 'widget']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand\" href=\"#\">\n        <b>Choose Widget</b>\n      </a>\n    </p>\n  </div>\n</nav>\n\n\n<!--navs and cog marks-->\n\n<ul class=\"list-group\">\n  <div class=\"container-fluid dguobody\">\n    <li class=\"list-group-item borderless toolbarColor1\">\n        <a (click) = \"createWidget('HEADING')\">\n      Header\n      <!--<a [routerLink] = \"['/user/:uid/website/:wid/page/:pid/widget/:wgid']\">-->\n        <!--<span class=\"glyphicon glyphicon-cog pull-right\"></span>-->\n      <!--</a>-->\n        </a>\n    </li>\n    <li class=\"list-group-item borderless toolbarColor1\">\n      <a (click) = \"createWidget('IMAGE')\">\n      Image\n      <!--<a [routerLink] = \"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\">-->\n        <!--<span class=\"glyphicon glyphicon-cog pull-right\"></span>-->\n      <!--</a>-->\n      </a>\n    </li>\n    <li class=\"list-group-item borderless toolbarColor1\">\n      <a (click) = \"createWidget('YOUTUBE')\">\n      Youtube\n        <!--<span class=\"glyphicon glyphicon-cog pull-right\"></span>-->\n      </a>\n    </li>\n    <li class=\"list-group-item borderless toolbarColor1\">\n      <div class =\"row\">\n        <div class = \"col-xs-3\">\n        </div>\n      </div>\n      Label\n      <a [routerLink] = \"['/user', 'website', websiteId, 'widget', widgetId]\">\n        <!--<span class=\"glyphicon glyphicon-cog pull-right\"></span>-->\n      </a>\n    </li>\n    <li class=\"list-group-item borderless toolbarColor1\">\n      <a (click) = \"createWidget('HTML')\">\n        HTML\n        <!--<span class=\"glyphicon glyphicon-cog pull-right\"></span>-->\n      </a>\n    </li>\n    <li class=\"list-group-item borderless toolbarColor1\">\n      <a (click) = \"createWidget('TEXT')\">\n        Text\n        <!--<span class=\"glyphicon glyphicon-cog pull-right\"></span>-->\n      </a>\n    </li>\n    <li class=\"list-group-item borderless toolbarColor1\">\n      Link\n      <a [routerLink] = \"['/user', 'website', websiteId]\">\n        <!--<span class=\"glyphicon glyphicon-cog pull-right\"></span>-->\n      </a>\n    </li>\n    <li class=\"list-group-item borderless toolbarColor1\">\n      Button\n      <a [routerLink] = \"['/user', 'website', websiteId]\">\n        <!--<span class=\"glyphicon glyphicon-cog pull-right\"></span>-->\n      </a>\n    </li>\n    <li class=\"list-group-item borderless toolbarColor1\">\n      Data Table\n      <a [routerLink] = \"['/user', 'website', websiteId]\">\n        <!--<span class=\"glyphicon glyphicon-cog pull-right\"></span>-->\n      </a>\n    </li>\n    <li class=\"list-group-item borderless toolbarColor1\">\n      Repeater\n      <a [routerLink] = \"['/user', 'website', websiteId]\">\n        <!--<span class=\"glyphicon glyphicon-cog pull-right\"></span>-->\n      </a>\n    </li>\n  </div>\n</ul>\n\n\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink] = \"['/user']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n<!--</body>-->\n<!--</html>-->\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_widget_model_client__ = __webpack_require__("../../../../../src/models/widget.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function WidgetChooserComponent(sharedService, widgetService, userService, pageService, activatedRoute, router) {
        this.sharedService = sharedService;
        this.widgetService = widgetService;
        this.userService = userService;
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.user = _this.sharedService.user;
            _this.userId = _this.user['_id'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
        });
        this.widgetService.findWidgetsByPageId(this.pageId)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
            /*      this.widgetType = this.widget['widgetType'];
                  this.widgetSize = this.widget['size'];
                  this.widgetText = this.widget['text'];
                  this.widgetUrl = this.widget['url'];
                  this.widgetWidth = this.widget['width'];*/
        });
    };
    WidgetChooserComponent.prototype.createWidget = function (widgetType) {
        /*    if (name === '' || description === '') {
              this.errorFlag = true;
              this.errorMsg = 'Invalid name or description';
            } else {*/
        // const widgetNew = new Widget(widgetType, this.pageId, null, null, null, null, null);
        /*    const widgetNew = {'widgetType' : widgetType, 'page': this.pageId, 'size': null,
              'text': null, 'width': null, 'url': null, 'height': null, 'rows': null, 'formatted': false, placeholder: null};*/
        var _this = this;
        var widgetNew = new __WEBPACK_IMPORTED_MODULE_5__models_widget_model_client__["a" /* Widget */](widgetType, this.pageId, null, null, null, null, null, null, false, null, null);
        this.widgetService.createWidget(this.pageId, widgetNew)
            .subscribe(function (widget) {
            _this.router.navigate(['/user', 'website', _this.websiteId, 'page',
                _this.pageId, 'widget', widget._id]);
        });
    };
    return WidgetChooserComponent;
}());
WidgetChooserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-chooser',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _f || Object])
], WidgetChooserComponent);

var _a, _b, _c, _d, _e, _f;
/*
    this.widgetService.findWidgetsByPageId(this.pageId)
     .subscribe((widgets) => {
      if (widget)
      this.widgets = widgets;
      this.widget = this.widgets[widgets.length];
     }
       this.widgetService.createWidget(this.pageId, widgetNew)
         .subscribe((WidgetFromServer) => {
           console.log(WidgetFromServer);
           this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', WidgetFromServer._id]);
         }); */
// http://localhost:4200/user/5a02138ec1e0c306ce216ac8/website/5a03459cbd4d930c21524ba7/page/5a049c67e45454033e9cea2e/widget/new
/*   if (widgetType === 'HEADER') {
      return this.widgetService.createWidget(this.pageId, widgetHeaderNew)
        .subscribe((widget: Widget) => {
          this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', widget._id]);
        });
    } else {
     return this.widgetService.createWidget(this.pageId, widgetImageNew)
       .subscribe((widget: Widget) => {
       this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', widget._id]);
       });
   }*/
/*

  createWidget(widgetType) {
    const widgetNew = {'_id': '456', 'widgetType': widgetType, 'pageId': this.pageId, 'size': 2, 'text': ''};
    this.widgetService.createWidget(this.pageId, widgetNew);
    console.log(widgetNew);
    this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page',
      this.pageId, 'widget', widgetNew._id]);
  }
*/
/*

} else {
  this.widgetService.createWidget(this.pageId, widgetImageNew)
    .subscribe((imageWidgetFromServer) => {
      console.log(imageWidgetFromServer);
      this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    });*/
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

module.exports = "<div [ngSwitch] = \"widgetType\">\n  <div *ngSwitchCase=\"'HEADING'\">\n  <app-widget-header></app-widget-header>\n  </div>\n\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-widget-image></app-widget-image>\n  </div>\n\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n\n  <div *ngSwitchCase=\"'HTML'\">\n    <app-widget-html></app-widget-html>\n  </div>\n\n  <div *ngSwitchCase=\"'TEXT'\">\n    <app-widget-text></app-widget-text>\n  </div>\n\n\n</div>\n\n\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function WidgetEditComponent(sharedService, widgetService, userService, pageService, activatedRoute, router) {
        this.sharedService = sharedService;
        this.widgetService = widgetService;
        this.userService = userService;
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.user = _this.sharedService.user;
            _this.userId = _this.user['_id'];
            _this.pageId = params['pid'];
            _this.websiteId = params['wid'];
            _this.widgetId = params['wgid'];
            console.log(_this.widgetId);
        });
        this.widgetService.findWidgetById(this.widgetId)
            .subscribe(function (widget) {
            _this.widget = widget;
            console.log(_this.widget);
            _this.widgetType = _this.widget['widgetType'];
        });
    };
    return WidgetEditComponent;
}());
WidgetEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-edit',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _f || Object])
], WidgetEditComponent);

var _a, _b, _c, _d, _e, _f;
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

module.exports = "<!--<!DOCTYPE html>-->\n<!--<html lang=\"en\">-->\n<!--<head>-->\n  <!--<meta charset=\"UTF-8\">-->\n  <!--<meta name=\"viewport\" content=\"initial-scale=1.25, user-scalable=no\">-->\n  <!--<link rel=\"stylesheet\" href=\"../../vendors/bootstrap/dist/css/bootstrap.min.css\"/>-->\n<!---->\n  <!--<link rel=\"stylesheet\" href=\"../../style.css\"/>-->\n  <!--<script src = \"../../vendors/bootstrap/dist/js/bootstrap.min.js\"></script>-->\n  <!--<title>Widget Heading</title>-->\n<!---->\n<!--</head>-->\n<!--<body>-->\n\n\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink] = \"['/user','website', websiteId, 'page',pageId,'widget']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand\">\n        <b>Widget Edit</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <!--<a href=\"widget-list.html\" class=\"navbar-link\">-->\n      <a (click) = \"updateWidget(widgetText,widgetSize)\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n\n<div class=\"container dguobody\">\n\n\n  <div class=\"form-group\">\n    <form>\n      <label for=\"widgetName\">Name</label>\n      <input [(ngModel)] = \"widgetType\"\n        name = \"widgetType\"\n        placeholder=\"Name\"\n             type=\"text\"\n             id=\"widgetName\"\n             class=\"form-control\"/>\n    </form>\n  </div>\n\n\n  <div class=\"form-group\">\n    <form>\n      <label for=\"widgetText\">Text</label>\n      <input [(ngModel)] = \"widgetText\"\n             name = \"widgetText\"\n        placeholder=\"History of Florence\"\n             type=\"text\"\n             id=\"widgetText\"\n             class=\"form-control\"/>\n    </form>\n  </div>\n\n  <div class=\"form-group\">\n    <form>\n      <label for=\"widgetSize\">Size</label>\n      <input [(ngModel)] = \"widgetSize\"\n             name = \"widgetSize\"\n             placeholder=3\n             type=\"number\"\n             id=\"widgetSize\"\n             class=\"form-control\"/>\n    </form>\n  </div>\n\n\n  <a (click) = 'deleteWidget()' class=\"btn btn-danger btn-block\">\n    Delete\n  </a>\n</div>\n\n<!--</body>-->\n<!--</html>-->\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_widget_model_client__ = __webpack_require__("../../../../../src/models/widget.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function WidgetHeaderComponent(sharedService, widgetService, userService, pageService, activatedRoute, router) {
        this.sharedService = sharedService;
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
            _this.user = _this.sharedService.user;
            _this.userId = _this.user['_id'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.websiteId = params['wid'];
            console.log(_this.websiteId);
        });
        this.widgetService.findWidgetsByPageId(this.pageId)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
        });
        this.widgetService.findWidgetById(this.widgetId)
            .subscribe(function (widget) {
            _this.widget = widget;
            _this.widgetText = _this.widget['text'];
            _this.widgetType = _this.widget['widgetType'];
            _this.widgetSize = _this.widget['size'];
        });
    };
    WidgetHeaderComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (widget) {
            _this.router.navigate(['/user', 'website', _this.websiteId,
                'page', _this.pageId, 'widget']);
        });
    };
    WidgetHeaderComponent.prototype.updateWidget = function (widgetText, widgetSize) {
        var _this = this;
        var newWidget = new __WEBPACK_IMPORTED_MODULE_5__models_widget_model_client__["a" /* Widget */]('HEADING', this.pageId, widgetSize, widgetText, null, null, null, null, false, null, null);
        this.widgetService.updateWidget(this.widgetId, newWidget)
            .subscribe(function (widget) {
            _this.widgetSize = widgetSize;
            _this.widgetText = widgetText;
            _this.router.navigate(['/user', 'website', _this.websiteId, 'page', _this.pageId,
                'widget']);
        });
    };
    return WidgetHeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], WidgetHeaderComponent.prototype, "widgetForm", void 0);
WidgetHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-header',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _g || Object])
], WidgetHeaderComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=widget-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink] = \"['/user', 'website', websiteId, 'page',pageId,'widget']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand\">\n        <b>Widget Edit</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <!--<a href=\"widget-list.html\" class=\"navbar-link\">-->\n      <a (click) = \"updateWidget(widgetName, widgetText)\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n\n<div class=\"container dguobody\">\n\n  <!--\n    <div class=\"form-group\">\n      <form>\n        <label for=\"widgetText-text\">Name</label>\n        <input [(ngModel)]=\"widget.text\"\n               name = \"widget\"\n               id=\"widgetText-text\"\n               class=\"form-control\"/>\n      </form>\n    </div>-->\n\n  <div class=\"form-group\">\n    <form>\n      <label for=\"widgetText\">Name</label>\n      <input [(ngModel)] = \"widgetName\"\n             name = \"widgetText\"\n             placeholder=\"History of Florence\"\n             type=\"text\"\n             id=\"widgetText\"\n             class=\"form-control\"/>\n    </form>\n  </div>\n\n  <div class=\"form-group\">\n    <quill-editor [(ngModel)]=\"widgetText\"\n                  name=\"text\">\n    </quill-editor>\n  </div>\n\n\n\n\n  <a (click) = 'deleteWidget()' class=\"btn btn-danger btn-block\">\n    Delete\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHtmlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_widget_model_client__ = __webpack_require__("../../../../../src/models/widget.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var WidgetHtmlComponent = (function () {
    function WidgetHtmlComponent(sharedService, widgetService, userService, pageService, activatedRoute, router) {
        this.sharedService = sharedService;
        this.widgetService = widgetService;
        this.userService = userService;
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.user = _this.sharedService.user;
            _this.userId = _this.user['_id'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.websiteId = params['wid'];
            console.log(_this.websiteId);
        });
        this.widgetService.findWidgetsByPageId(this.pageId)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
        });
        this.widgetService.findWidgetById(this.widgetId)
            .subscribe(function (widget) {
            _this.widget = widget;
            console.log(_this.widget);
            _this.widgetText = _this.widget['text'];
            _this.widgetType = _this.widget['widgetType'];
            _this.widgetSize = _this.widget['size'];
            _this.widgetName = _this.widget['name'];
        });
    };
    WidgetHtmlComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (widget) {
            _this.router.navigate(['/user', 'website', _this.websiteId,
                'page', _this.pageId, 'widget']);
        });
    };
    WidgetHtmlComponent.prototype.updateWidget = function (widgetName, widgetText) {
        var _this = this;
        var newWidget = new __WEBPACK_IMPORTED_MODULE_6__models_widget_model_client__["a" /* Widget */]('HTML', this.pageId, null, widgetText, null, null, null, null, false, null, widgetName);
        this.widgetService.updateWidget(this.widgetId, newWidget)
            .subscribe(function (widget) {
            _this.widgetText = widgetText;
            _this.widgetName = widgetName;
            _this.router.navigate(['/user', 'website', _this.websiteId, 'page', _this.pageId,
                'widget']);
        });
    };
    return WidgetHtmlComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], WidgetHtmlComponent.prototype, "widgetForm", void 0);
WidgetHtmlComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-html',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _g || Object])
], WidgetHtmlComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=widget-html.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink] = \"['/user', userId, 'website', websiteId, 'page', pageId, 'widget']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand\">\n        <b>Flickr Search</b>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n<div class=\"container dguobody\">\n\n<div class=\"input-group\">\n  <input [(ngModel)]=\"searchText\" type=\"text\" class=\"form-control\">\n  <span class=\"input-group-btn\">\n         <a (click)=\"searchPhotos(searchText)\" class=\"btn btn-default\" type=\"button\">\n             <span class=\"glyphicon glyphicon-search\"></span>\n         </a>\n </span>\n</div>\n\n\n<div class=\"row\">\n  <div *ngFor = \"let pic of photo\"\n       class=\"col-xs-4\">\n    <img   (click)=\"selectPhoto(pic)\"\n         width=\"100%\"\n         [src] = \"['https://farm' + pic.farm + '.staticflickr.com/' + pic['server'] + '/' +   pic.id + '_' + pic.secret + '_s.jpg']\">\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrImageSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_widget_model_client__ = __webpack_require__("../../../../../src/models/widget.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FlickrImageSearchComponent = (function () {
    function FlickrImageSearchComponent(sharedService, widgetService, userService, pageService, activatedRoute, router, flickrService) {
        this.sharedService = sharedService;
        this.widgetService = widgetService;
        this.userService = userService;
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.flickrService = flickrService;
    }
    FlickrImageSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.user = _this.sharedService.user;
            _this.userId = _this.user['_id'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.websiteId = params['wid'];
        });
    };
    FlickrImageSearchComponent.prototype.searchPhotos = function (searchText) {
        var _this = this;
        this.flickrService
            .searchPhotos(searchText)
            .subscribe(function (data) {
            console.log(data);
            var val = data._body;
            val = val.replace('jsonFlickrApi(', '');
            val = val.substring(0, val.length - 1);
            val = JSON.parse(val);
            console.log(val);
            _this.photos = val.photos;
            _this.photo = _this.photos['photo'];
            console.log(_this.photo);
        });
    };
    FlickrImageSearchComponent.prototype.selectPhoto = function (photo) {
        var _this = this;
        var url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
        url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
        var widget = new __WEBPACK_IMPORTED_MODULE_6__models_widget_model_client__["a" /* Widget */]('IMAGE', this.pageId, null, null, '100%', url, null, null, false, null, null);
        this.widgetService.updateWidget(this.widgetId, widget)
            .subscribe(function (widgetFromServer) {
            _this.router.navigate(['/user', 'website', _this.websiteId,
                'page', _this.pageId, 'widget']);
        });
    };
    return FlickrImageSearchComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], FlickrImageSearchComponent.prototype, "widgetFlickrForm", void 0);
FlickrImageSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-flickr-image-search',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__services_flickr_service_client__["a" /* FlickrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_flickr_service_client__["a" /* FlickrService */]) === "function" && _h || Object])
], FlickrImageSearchComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
/*   this.widgetService
     .selectPhoto(photo)
     .subscribe((photoFromFlickr: any) => {
     this.photoFromFlickr = photoFromFlickr;
     });*/
//# sourceMappingURL=flickr-image-search.component.js.map

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

module.exports = "<!--<!DOCTYPE html>-->\n<!--<html lang=\"en\">-->\n<!---->\n<!--<head>-->\n  <!--<meta charset=\"UTF-8\">-->\n  <!--<meta name=\"viewport\" content=\"initial-scale=1.25, user-scalable=no\">-->\n  <!--<link rel=\"stylesheet\" href=\"../../vendors/bootstrap/dist/css/bootstrap.min.css\"/>-->\n<!---->\n  <!--<link rel=\"stylesheet\" href=\"../../style.css\"/>-->\n  <!--<script src = \"../../vendors/bootstrap/dist/js/bootstrap.min.js\"></script>-->\n  <!--<title>Widget Image</title>-->\n<!---->\n<!--</head>-->\n<!--<body>-->\n\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink] = \"['/user', 'website', websiteId, 'page', pageId, widget]\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand\">\n        <b>Widget Edit</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"updateWidget(widgetWidth, widgetUrl)\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n\n<div class=\"container dguobody\">\n\n\n  <div class=\"form-group\">\n    <form>\n      <label for=\"widgetName-image\">Name</label>\n      <input [(ngModel)] = \"widgetType\"\n             name = \"widgetType\"\n             placeholder=\"Name\"\n             type=\"text\"\n             id=\"widgetName-image\"\n             class=\"form-control\"/>\n    </form>\n  </div>\n\n\n  <div class=\"form-group\">\n    <form>\n      <label for=\"widgetText-image\">Text</label>\n      <input [(ngModel)] = \"widgetText\"\n        name = \"widgetText\"\n        placeholder=\"History of Florence\"\n             type=\"text\"\n             id=\"widgetText-image\"\n             class=\"form-control\"/>\n    </form>\n  </div>\n\n  <div class=\"form-group\">\n    <form>\n      <label for=\"widgetURL-image\">URL</label>\n      <input [(ngModel)] = \"widgetUrl\"\n             name = \"widgetUrl\"\n        placeholder=\"https://www.youtube.com/watching/GOAVRcI6mFU\"\n             type=\"url\"\n             id=\"widgetURL-image\"\n             class=\"form-control\"/>\n    </form>\n  </div>\n\n  <div class=\"form-group\">\n    <form>\n      <label for=\"widgetSize-image\">Width</label>\n      <input [(ngModel)] = \"widgetWidth\"\n             name = \"widgetWidth\"\n        placeholder=300\n             type=\"text\"\n             id=\"widgetSize-image\"\n             class=\"form-control\"/>\n    </form>\n  </div>\n<!--\n  <div class=\"form-group\">\n    <form>\n      <label for=\"widgetInputFile\">File input</label>\n      <input type=\"file\"\n             id=\"widgetInputFile\"\n             class=\"form-control\">\n    </form>\n  </div>-->\n\n  <form ngNoForm action=\"{{baseUrl}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\">\n    <label for=\"myFile\">File input</label>\n    <input  name=\"myFile\"\n            type=\"file\"\n            id = \"myFile\"\n            class=\"form-control\"/>\n    <input  name=\"widgetId\"\n            value=\"{{widgetId}}\"\n            style=\"display: none\"/>\n    <input  name=\"websiteId\"\n            value=\"{{websiteId}}\"\n            style=\"display: none\"/>\n    <input  name=\"pageId\"\n            value=\"{{pageId}}\"\n            style=\"display: none\"/>\n    <input  name=\"userId\"\n            value=\"{{userId}}\"\n            style=\"display: none\"/>\n\n    <button type=\"submit\" class=\"btn btn-block btn-primary\">Upload Image</button>\n    <br/>\n  </form>\n\n  <a (click)=\"deleteWidget()\" class=\"btn btn-danger btn-block\">\n  Delete\n</a>\n  <a [routerLink] = \"['/user', 'website', websiteId, 'page', pageId, 'widget', widgetId, 'flickr']\" class=\"btn btn-success btn-block\">\n    Search Flickr\n  </a>\n</div>\n\n<!--</body>-->\n<!--</html>-->\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_widget_model_client__ = __webpack_require__("../../../../../src/models/widget.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function WidgetImageComponent(sharedService, widgetService, userService, pageService, activatedRoute, router) {
        this.sharedService = sharedService;
        this.widgetService = widgetService;
        this.userService = userService;
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].baseUrl;
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.user = _this.sharedService.user;
            _this.userId = _this.user['_id'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.websiteId = params['wid'];
        });
        this.widgetService.findWidgetById(this.widgetId)
            .subscribe(function (widget) {
            _this.widget = widget;
            _this.widgetUrl = _this.widget['url'];
            _this.widgetType = _this.widget['widgetType'];
            _this.widgetWidth = _this.widget['width'];
        });
    };
    WidgetImageComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (widget) {
            _this.router.navigate(['/user', 'website', _this.websiteId,
                'page', _this.pageId, 'widget']);
        });
    };
    WidgetImageComponent.prototype.updateWidget = function (widgetWidth, widgetUrl) {
        var _this = this;
        var newWidget = new __WEBPACK_IMPORTED_MODULE_5__models_widget_model_client__["a" /* Widget */]('IMAGE', this.pageId, null, null, widgetWidth, widgetUrl, null, null, false, null, null);
        this.widgetService.updateWidget(this.widgetId, newWidget)
            .subscribe(function (widget) {
            _this.widgetWidth = widgetWidth;
            _this.widgetUrl = widgetUrl;
            console.log(_this.widgetUrl);
            _this.router.navigate(['/user', 'website', _this.websiteId,
                'page', _this.pageId, 'widget']);
        });
    };
    return WidgetImageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], WidgetImageComponent.prototype, "widget", void 0);
WidgetImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-image',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_shared_service_client__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _f || Object])
], WidgetImageComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=widget-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink] = \"['/user', 'website', websiteId, 'page',pageId,'widget']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand\">\n        <b>Widget Edit</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <!--<a href=\"widget-list.html\" class=\"navbar-link\">-->\n      <a (click) = \"updateWidget(widgetText, widgetRows, widgetPlaceholder, widgetFormatted)\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n\n<div class=\"container dguobody\">\n\n<!--\n  <div class=\"form-group\">\n    <form>\n      <label for=\"widgetText-text\">Name</label>\n      <input [(ngModel)]=\"widget.text\"\n             name = \"widget\"\n             id=\"widgetText-text\"\n             class=\"form-control\"/>\n    </form>\n  </div>-->\n  <div class=\"form-group\">\n    <form>\n      <label for=\"widgetName\">Name</label>\n      <input [(ngModel)] = \"widgetType\"\n             name = \"widgetType\"\n             placeholder=\"Name\"\n             type=\"text\"\n             id=\"widgetName\"\n             class=\"form-control\"/>\n    </form>\n  </div>\n\n  <div class=\"form-group\">\n    <form>\n      <label for=\"widgetText\">Text</label>\n      <input [(ngModel)] = \"widgetText\"\n             name = \"widgetText\"\n             placeholder=\"History of Florence\"\n             type=\"text\"\n             id=\"widgetText\"\n             class=\"form-control\"/>\n    </form>\n  </div>\n\n  <div class=\"form-group\">\n    <form>\n      <label for=\"widgetRows\">Size</label>\n      <input [(ngModel)]=\"widgetRows\"\n             name = \"widgetRows\"\n             class=\"form-control\"\n             id = \"widgetRows\"\n             type=\"number\"/>\n    </form>\n  </div>\n\n  <div class=\"form-group\">\n    <form>\n      <label for=\"widgetPlaceholder\">Placeholder</label>\n      <input [(ngModel)]=\"widgetPlaceholder\"\n             name = \"widgetPlaceholder\"\n             class=\"form-control\"\n             id = \"widgetPlaceholder\"\n             type=\"string\"/>\n    </form>\n  </div>\n\n\n  <div class=\"input-group\">\n        <input type=\"text\"\n               readonly\n               value=\"Formatted\"\n               class=\"form-control\"/>\n        <span class=\"input-group-addon\">\n     <input [(ngModel)]=\"widgetFormatted\"\n            type=\"checkbox\"/>\n        </span>\n      </div>\n\n\n\n  <a (click) = 'deleteWidget()' class=\"btn btn-danger btn-block\">\n    Delete\n  </a>\n</div>\n\n<!--</body>-->\n<!--</html>-->\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_widget_model_client__ = __webpack_require__("../../../../../src/models/widget.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var WidgetTextComponent = (function () {
    function WidgetTextComponent(sharedService, widgetService, userService, pageService, activatedRoute, router) {
        this.sharedService = sharedService;
        this.widgetService = widgetService;
        this.userService = userService;
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.
            subscribe(function (params) {
            _this.user = _this.sharedService.user;
            _this.userId = _this.user['_id'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.websiteId = params['wid'];
            console.log(_this.websiteId);
        });
        this.widgetService.findWidgetsByPageId(this.pageId)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
        });
        this.widgetService.findWidgetById(this.widgetId)
            .subscribe(function (widget) {
            _this.widget = widget;
            _this.widgetText = _this.widget['text'];
            _this.widgetType = _this.widget['widgetType'];
            _this.widgetSize = _this.widget['size'];
            _this.widgetPlaceholder = _this.widget['placeholder'];
            _this.widgetRows = _this.widget['rows'];
            _this.widgetFormatted = _this.widget['formatted'];
        });
    };
    WidgetTextComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (widget) {
            _this.router.navigate(['/user', 'website', _this.websiteId,
                'page', _this.pageId, 'widget']);
        });
    };
    WidgetTextComponent.prototype.updateWidget = function (widgetText, widgetRows, widgetPlaceholder, widgetFormatted) {
        var _this = this;
        var newWidget = new __WEBPACK_IMPORTED_MODULE_6__models_widget_model_client__["a" /* Widget */]('TEXT', this.pageId, '', widgetText, null, null, null, widgetRows, widgetFormatted, widgetPlaceholder, null);
        this.widgetService.updateWidget(this.widgetId, newWidget)
            .subscribe(function (widget) {
            _this.widgetText = widgetText;
            _this.widgetRows = widgetRows;
            _this.widgetPlaceholder = widgetPlaceholder;
            _this.widgetFormatted = widgetFormatted;
            _this.router.navigate(['/user', 'website', _this.websiteId, 'page', _this.pageId,
                'widget']);
        });
    };
    return WidgetTextComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], WidgetTextComponent.prototype, "widgetTextForm", void 0);
WidgetTextComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-text',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_page_service_client__["a" /* PageService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _g || Object])
], WidgetTextComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=widget-text.component.js.map

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

module.exports = "<!--<!DOCTYPE html>-->\n<!--<html lang=\"en\">-->\n<!--<head>-->\n  <!--<meta charset=\"UTF-8\">-->\n  <!--<meta name=\"viewport\" content=\"initial-scale=1.25, user-scalable=no\">-->\n  <!--<link rel=\"stylesheet\" href=\"../../vendors/bootstrap/dist/css/bootstrap.min.css\"/>-->\n<!---->\n  <!--<link rel=\"stylesheet\" href=\"../../style.css\"/>-->\n  <!--<script src = \"../../vendors/bootstrap/dist/js/bootstrap.min.js\"></script>-->\n  <!--<title>Widget Youtube</title>-->\n<!---->\n<!--</head>-->\n<!--<body>-->\n\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink] = \"['/user', 'website', websiteId, 'page', pageId, 'widget']\"  class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand\">\n        <b>Widget Edit</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a (click) =\"updateWidget(widgetWidth, widgetUrl)\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n\n<div class=\"container dguobody\">\n\n\n  <div class=\"form-group\">\n    <form>\n      <label for=\"widgetName-youtube\">Name</label>\n      <input [(ngModel)] = \"widgetType\"\n             name = \"widgetType\"\n             placeholder=\"Name\"\n             type=\"text\"\n             id=\"widgetName-youtube\"\n             class=\"form-control\"/>\n    </form>\n  </div>\n\n\n  <div class=\"form-group\">\n    <form>\n      <label for=\"widgetText-youtube\">Text</label>\n      <input [(ngModel)] = \"widgetText\"\n             name = \"widgetText\"\n        placeholder=\"History of Florence\"\n             type=\"text\"\n             id=\"widgetText-youtube\"\n             class=\"form-control\"/>\n    </form>\n  </div>\n\n  <div class=\"form-group\">\n    <form>\n      <label for=\"widgetURL-youtube\">URL</label>\n      <input [(ngModel)] = \"widgetUrl\"\n             name = \"widgetUrl\"\n        placeholder=\"https://www.youtube.com/watching/GOAVRcI6mFU\"\n             type=\"url\"\n             id=\"widgetURL-youtube\"\n             class=\"form-control\"/>\n    </form>\n  </div>\n\n  <div class=\"form-group\">\n    <form>\n      <label for=\"widgetSize-youtube\">Width</label>\n      <input [(ngModel)] = \"widgetWidth\"\n             name = \"widgetWidth\"\n        placeholder=300\n             type=\"text\"\n             id=\"widgetSize-youtube\"\n             class=\"form-control\"/>\n    </form>\n  </div>\n\n\n\n  <a (click) = \"deleteWidget()\" class=\"btn btn-danger btn-block\">\n    Delete\n  </a>\n</div>\n\n<!--</body>-->\n<!--</html>-->\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_widget_model_client__ = __webpack_require__("../../../../../src/models/widget.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function WidgetYoutubeComponent(sharedService, widgetService, userService, pageService, activatedRoute, router) {
        this.sharedService = sharedService;
        this.widgetService = widgetService;
        this.userService = userService;
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.
            subscribe(function (params) {
            _this.user = _this.sharedService.user;
            _this.userId = _this.user['_id'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.websiteId = params['wid'];
        });
        this.widget = this.widgetService.findWidgetById(this.widgetId)
            .subscribe(function (widget) {
            _this.widget = widget;
            _this.widgetUrl = _this.widget['url'];
            _this.widgetType = _this.widget['widgetType'];
            _this.widgetWidth = _this.widget['width'];
        });
        // console.log(this.widgetWidth);
    };
    WidgetYoutubeComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (widget) {
            _this.router.navigate(['/user', 'website', _this.websiteId,
                'page', _this.pageId, 'widget']);
        });
    };
    WidgetYoutubeComponent.prototype.updateWidget = function (widgetWidth, widgetUrl) {
        var _this = this;
        var newWidget = new __WEBPACK_IMPORTED_MODULE_5__models_widget_model_client__["a" /* Widget */]('YOUTUBE', this.pageId, null, null, widgetWidth, widgetUrl, null, null, false, null, null);
        this.widgetService.updateWidget(this.widgetId, newWidget)
            .subscribe(function (widget) {
            _this.widgetWidth = widgetWidth;
            _this.widgetUrl = widgetUrl;
            _this.router.navigate(['/user', 'website', _this.websiteId,
                'page', _this.pageId, 'widget']);
        });
    };
    return WidgetYoutubeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], WidgetYoutubeComponent.prototype, "widget", void 0);
WidgetYoutubeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-youtube',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _f || Object])
], WidgetYoutubeComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=widget-youtube.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".youtube-widget {\n  position: relative;\n  padding-bottom: 56.25%; /* 16:9 */\n  height: 0;\n}\n.youtube-widget iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<!DOCTYPE html>-->\n<!--<html lang=\"en\">-->\n<!--<head>-->\n  <!--<meta name=\"apple-mobile-web-app-capable\" content=\"yes\">-->\n  <!--<meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\">-->\n  <!--<meta name=\"viewport\" content=\"initial-scale=1.25, user-scalable=no\">-->\n<!---->\n  <!--<meta charset=\"UTF-8\">-->\n<!---->\n  <!--<title>Widget List</title>-->\n  <!--<link rel=\"stylesheet\" href=\"../../vendors/bootstrap/dist/css/bootstrap.css\"/>-->\n  <!--<link rel=\"stylesheet\" href=\"../../style.css\"/>-->\n<!---->\n<!--</head>-->\n\n\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class= \"navbar-default container-fluid\">\n\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink] = \"['/user', 'website', websiteId, 'page']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand\" href=\"#\">\n        <b>Widgets</b>\n      </a>\n    </p>\n\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink] = \"['/user', 'website', websiteId, 'page', pageId, 'widget', 'new']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n\n<div class = \"container-fluid widgetBody\">\n  <div class=\"widget-content\" >\n    <ul class=\"widget-ul\" *ngFor=\"let widget of widgets\" [ngSwitch]=\"widget.widgetType\">\n\n      <div *ngSwitchCase = \"'HEADING'\" >\n        <div [ngSwitch] = \"widget.size\">\n          <h1 *ngSwitchCase = \"1\">{{widget.text}}</h1>\n          <h2 *ngSwitchCase = \"2\">{{widget.text}}</h2>\n          <h3 *ngSwitchCase = \"3\">{{widget.text}}</h3>\n          <h4 *ngSwitchCase = \"4\">{{widget.text}}</h4>\n          <div class =  jga-toolbar>\n            <a [routerLink] = \"['/user', 'website', websiteId, 'page', pageId, 'widget', widget._id]\" class=\"navbar-link\">\n          <span class = \"glyphicon glyphicon-cog\"></span>\n            </a>\n          <span class = \"glyphicon glyphicon-menu-hamburger\"></span>\n          </div>\n        </div>\n      </div>\n      <div *ngSwitchCase = \"'IMAGE'\">\n        <!--<img class = \"jga-content\" src='http://localhost:3100/assets/uploads/16631d47c481a51be1f784ef8d9b2161' [style.width] = \"widget.width\">-->\n        <img class = \"jga-content\" src='{{widget.url}}' [style.width] = \"widget.width\">\n        <div class =  jga-toolbar>\n          <a [routerLink] = \"['/user', 'website', websiteId, 'page', pageId, 'widget', widget._id]\" class=\"navbar-link\">\n          <span class = \"glyphicon glyphicon-cog\"></span>\n          </a>\n          <span class = \"glyphicon glyphicon-menu-hamburger\"></span>\n        </div>\n      </div>\n      <div *ngSwitchCase = \"'YOUTUBE'\" class = \"youtube-widget\">\n        <iframe [src]=\"cleanURL('https://www.youtube.com/embed/'+ widget.url.substring(17,28))\"\n        frameborder=\"0\" height = '315' width = '560'\n        allowfullscreen\n        [style.width] = \"widget.width\">\n        </iframe>\n        <div class =  jga-toolbar>\n          <a [routerLink] = \"['/user', 'website', websiteId, 'page', pageId, 'widget', widget._id]\" class=\"navbar-link\">\n          <span class = \"glyphicon glyphicon-cog\"></span>\n          </a>\n          <span class = \"glyphicon glyphicon-menu-hamburger\"></span>\n        </div>\n      </div>\n      <div *ngSwitchCase=\"'TEXT'\">\n        <div *ngIf=\"widget.formatted\">\n          <quill-editor [(ngModel)]=\"widget.text\" name=\"text\"></quill-editor>\n        </div>\n\n        <input *ngIf=\"!widget.formatted && (!widget.rows || widget.rows===1)\"\n               placeholder=\"{{widget.placeholder}}\" class=\"form-control\"/>\n\n        <textarea *ngIf=\"!widget.formatted && (widget.rows > 1)\"\n                  rows=\"{{widget.rows}}\" placeholder=\"{{widget.placeholder}}\"\n                  class=\"form-control\">{{widget.text}}\n        </textarea>\n        <div class =  jga-toolbar>\n          <a [routerLink] = \"['/user', 'website', websiteId, 'page', pageId, 'widget', widget._id]\" class=\"navbar-link\">\n            <span class = \"glyphicon glyphicon-cog\"></span>\n          </a>\n          <span class = \"glyphicon glyphicon-menu-hamburger\"></span>\n        </div>\n      </div>\n      <div *ngSwitchCase=\"'HTML'\">\n        <div innerHTML =\n        {{widget.text}}></div>\n        <div class =  jga-toolbar>\n          <a [routerLink] = \"['/user', 'website', websiteId, 'page', pageId, 'widget', widget._id]\" class=\"navbar-link\">\n            <span class = \"glyphicon glyphicon-cog\"></span>\n          </a>\n          <span class = \"glyphicon glyphicon-menu-hamburger\"></span>\n        </div>\n      </div>\n\n\n  </ul>\n</div>\n</div>\n\n\n\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink] = \"['/user', userId]\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n<!--</body>-->\n<!--</html>-->\n\n\n<!--<  <h1>Florence</h1>\n  <div class=\"jga-widget \">\n    <div class = \"jga-toolbar\">\n      <a [routerLink] = \"['/user/:uid/website/:wid/page/:pid/widget/:wgid']\">\n        <span class = \"glyphicon glyphicon-cog\"></span>\n      </a>\n      <span class = \"glyphicon glyphicon-menu-hamburger\"></span>\n    </div>\n    <h3>History of Florence</h3>\n    <div class=\"jga-widget \">\n    <div class = \"jga-toolbar\">\n      <a [routerLink] = \"['/user/:uid/website/:wid/page/:pid/widget/:wgid']\">\n        <span class = \"glyphicon glyphicon-cog\"></span>\n      </a>\n      <span class = \"glyphicon glyphicon-menu-hamburger\"></span>\n    </div>\n    <img class = \"jga-content\" src=\"https://images.walks.org/italy/florence-duomo-tour/florence-duomo-climb-featured.jpg\">\n    <div class = \"jga-toolbar\">\n      <a [routerLink] = \"['/user/:uid/website/:wid/page/:pid/widget/:wgid']\">\n        <span class = \"glyphicon glyphicon-cog\"></span>\n      </a>\n      <span class = \"glyphicon glyphicon-menu-hamburger\"></span>\n    </div>\n    <h4>  Florence was a centre of medieval European trade and finance and one of the wealthiest cities of that era. It is considered the birthplace of the Renaissance,\n      and has been called \"the Athens of the Middle Ages\". A turbulent political history includes periods of rule by the powerful Medici family and numerous religious and republican revolutions.</h4>\n    &lt;!&ndash;<div class=\"jga-widget \">&ndash;&gt;\n    <div class = \"jga-toolbar\">\n      <a [routerLink] = \"['/user/:uid/website/:wid/page/:pid/widget/:wgid']\">\n        <span class = \"glyphicon glyphicon-cog\"></span>\n      </a>\n      <span class = \"glyphicon glyphicon-menu-hamburger\"></span>\n    </div>\n    <h3>The Medici: Godfathers of the Renaissance</h3>&ndash;&gt;-->\n    <!--<div class=\"jga-widget \">&ndash;&gt;\n    <div class = \"jga-toolbar\">\n      <a [routerLink] = \"['/user/:uid/website/:wid/page/:pid/widget/:wgid']\">\n        <span class = \"glyphicon glyphicon-cog\"></span>\n      </a>\n      <span class = \"glyphicon glyphicon-menu-hamburger\"></span>\n    </div>\n    <iframe width=\"420\" height=\"315\"\n            src=\"https://www.youtube.com/embed/GOAVRcI6mFU\">\n    </iframe>\n    <div class = \"jga-toolbar\">\n      <a [routerLink] = \"['/user/:uid/website/:wid/page/:pid/widget/:wgid']\">\n        <span class = \"glyphicon glyphicon-cog\"></span>\n      </a>\n      <span class = \"glyphicon glyphicon-menu-hamburger\"></span>\n    </div>-->\n\n\n\n<!--<li class=\"widget-li\" >-->\n<!--        <div class=\"widget-toolbar\">\n          <button class=\"widget-toolbar-btn glyphicon glyphicon-cog\"></button>\n          <button class=\"widget-toolbar-btn glyphicon glyphicon-align-justify\"></button>\n        </div>-->\n<!--          <app-widget-header *ngSwitchCase=\"'HEADING'\" [widget]=\"widget\"></app-widget-header>\n          <app-widget-image *ngSwitchCase=\"'IMAGE'\" [widget]=\"widget\"></app-widget-image>\n          <app-widget-youtube *ngSwitchCase=\"'YOUTUBE'\" [widget]=\"widget\"></app-widget-youtube>\n        </li>-->\n<!--\n  <div *ngSwitchCase = \"'HEADING'\">\n    <app-widget-header></app-widget-header>\n  </div>\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube></app-widget-youtube>\n\n  </div>\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-widget-image></app-widget-image>-->\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function WidgetListComponent(sharedService, widgetService, userService, pageService, activatedRoute, router, sanitizer) {
        this.sharedService = sharedService;
        this.widgetService = widgetService;
        this.userService = userService;
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sanitizer = sanitizer;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].baseUrl;
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.
            subscribe(function (params) {
            _this.user = _this.sharedService.user;
            _this.userId = _this.user['_id'];
            _this.pageId = params['pid'];
            _this.websiteId = params['wid'];
        });
        this.widgetService.findWidgetsByPageId(this.pageId)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
            // this.widgetType = this.widget['widgetType'];
            // this.widgetSize = this.widget['size'];
            // this.widgetText = this.widget['text'];
            // this.widgetUrl = this.widget['url'];
            // this.widgetWidth = this.widget['width'];
        });
    };
    WidgetListComponent.prototype.cleanURL = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    return WidgetListComponent;
}());
WidgetListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-list',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_shared_service_client__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _g || Object])
], WidgetListComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=widget-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/authentication.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationService = (function () {
    function AuthenticationService(userService) {
        this.userService = userService;
    }
    AuthenticationService.prototype.canActivate = function () {
        return this.userService.loggedIn();
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service_client__["a" /* UserService */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/flickr.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrService; });
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




var baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
var key = 'a1ba8bdfdacce3f809b80995f95f85ca';
var secret = 'fa0bb8b04e7a9acb';
var urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';
var FlickrService = (function () {
    function FlickrService(http) {
        this.http = http;
    }
    FlickrService.prototype.searchPhotos = function (searchTerm) {
        var url = urlBase
            .replace('API_KEY', key)
            .replace('TEXT', searchTerm);
        return this.http.get(url);
    };
    return FlickrService;
}());
FlickrService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], FlickrService);

var _a;
//# sourceMappingURL=flickr.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
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




var baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
// Injecting service into Module
var PageService = (function () {
    function PageService(http) {
        this.http = http;
        /*  pages = [
            { _id: '321', name: 'Post 1' , websiteId: '456', 'description': 'Lorem' },
            { '_id': '432', 'name': 'Post 2' , 'websiteId': '456', 'description': 'Lorem' },
            { '_id': '543', 'name': 'Post 3' , 'websiteId': '456', 'description': 'Lorem' },
        
          ]*/
        this.api = {
            'createPage': this.createPage,
            'findPagesByWebsiteId': this.findAllPagesForWebsite,
            'findPageById': this.findPageById,
            'updatePage': this.updatePage,
            'deletePage': this.deletePage
        };
    }
    PageService.prototype.createPage = function (websiteId, page) {
        /*    page._id = Math.random().toString();
            page.websiteId = websiteId;
            this.pages.push(page);
            return page;*/
        // page._id = (new Date()).getTime() + '';
        var url = baseUrl + '/api/website/' + websiteId + '/page';
        return this.http.post(url, page)
            .map(function (response) {
            return response.json();
        });
    };
    PageService.prototype.findAllPagesForWebsite = function (websiteId) {
        var url = baseUrl + '/api/website/' + websiteId + '/page';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    PageService.prototype.findPageById = function (pageId) {
        var url = baseUrl + '/api/page/' + pageId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    PageService.prototype.updatePage = function (pageId, newPage) {
        var url = baseUrl + '/api/page/' + pageId;
        return this.http.put(url, newPage)
            .map(function (response) {
            return response.json();
        });
    };
    PageService.prototype.deletePage = function (pageId) {
        var url = baseUrl + '/api/page/' + pageId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    return PageService;
}());
PageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PageService);

var _a;
//# sourceMappingURL=page.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/shared.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SharedService = (function () {
    function SharedService() {
        this.user = '';
    }
    return SharedService;
}());
SharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], SharedService);

//# sourceMappingURL=shared.service.client.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
// Injecting service into Module
var UserService = (function () {
    function UserService(sharedService, router, http) {
        this.sharedService = sharedService;
        this.router = router;
        this.http = http;
        // turn on security
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */];
        /*  users = [
            {_id: '123', username: 'alice', email: 'alice@wonderland.com', password: 'alice', firstName: 'Alice', lastName: 'Wonder'},
            {_id: '234', username: 'bob', email: 'bob@marley.com', password: 'bob', firstName: 'Bob', lastName: 'Marley'},
            {_id: '345', username: 'charly', email: 'charly@garcia.com', password: 'charly', firstName: 'Charly', lastName: 'Garcia'},
            {_id: '456', username: 'jannunzi', email: 'jose@annunzi.com', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi'}
          ];*/
        this.api = {
            'createUser': this.createUser,
            'findUserById': this.findUserById,
            'findUserByUsername': this.findUserByUsername,
            'findUserByCredential': this.findUserByCredential,
            'updateUser': this.updateUser,
            'deleteUser': this.deleteUser,
            'register': this.register,
            'login': this.login,
            'logout': this.logout,
            'loggedIn': this.loggedIn,
        };
    }
    /*
      findAllUsers() {
        const url = 'http://localhost:3000/api/admin/user';
        this.options.withCredentials = true;
        return this.http.get(url, this.options)
          .map((res: Response) => {
            return res.json();
          });
      }
    */
    UserService.prototype.loggedIn = function () {
        var _this = this;
        var url = baseUrl + '/api/loggedIn';
        this.options.withCredentials = true;
        return this.http.post(url, '', this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0) {
                _this.sharedService.user = user;
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    UserService.prototype.logout = function () {
        var url = baseUrl + '/api/logout';
        this.options.withCredentials = true;
        return this.http.post(url, '', this.options)
            .map(function (status) {
            return status;
        });
    };
    UserService.prototype.register = function (username, password) {
        var url = baseUrl + '/api/register';
        var credentials = {
            username: username,
            password: password
        };
        this.options.withCredentials = true;
        return this.http.post(url, credentials, this.options)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.login = function (username, password) {
        var url = baseUrl + '/api/login';
        var credentials = {
            username: username,
            password: password
        };
        this.options.withCredentials = true;
        return this.http.post(url, credentials, this.options)
            .map(function (response) {
            console.log(response.json());
            return response.json();
        });
    };
    UserService.prototype.createUser = function (user) {
        var url = baseUrl + '/api/user';
        return this.http.post(url, user)
            .map(function (response) {
            return response.json();
        });
        /*    user._id = (new Date()).getTime() + '';
            console.log(user);
              const url = baseUrl + '/api/user';
              return this.http.post(url, user) // construct user as json string and pass into http request
                .map((response: Response) => {
                return response.json();
            });*/
    };
    UserService.prototype.findUserById = function (userId) {
        var url = baseUrl + '/api/user/' + userId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        var url = baseUrl + '/api/user?username=' + username;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserByCredential = function (username, password) {
        var url = baseUrl + '/api/user?username=' + username + '&password=' + password;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    // updates the user in local users array whose id matches the userID parameter
    UserService.prototype.updateUser = function (newUser) {
        var url = baseUrl + '/api/user/' + newUser._id;
        return this.http.put(url, newUser)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        var url = baseUrl + '/api/user/' + userId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_service_client__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
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




var baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
// Injecting service into Module
var WebsiteService = (function () {
    function WebsiteService(http) {
        this.http = http;
        /*
          websites = [
            { '_id': '123', 'name': 'Facebook' , 'developerId': '456', 'description': 'Lorem' },
            { '_id': '234', 'name': 'Tweeter' , 'developerId': '456', 'description': 'Lorem' },
            { '_id': '456', 'name': 'Gizmodo' , 'developerId': '456', 'description': 'Lorem' },
            { '_id': '890', 'name': 'Go' , 'developerId': '123', 'description': 'Lorem' },
            { '_id': '567', 'name': 'Tic Tac Toe' , 'developerId': '123', 'description': 'Lorem' },
            { '_id': '678', 'name': 'Checkers' , 'developerId': '123', 'description': 'Lorem' },
            { '_id': '789', 'name': 'Chess' , 'developerId': '234', 'description': 'Lorem' },
          ]*/
        this.api = {
            'createWebsite': this.createWebsite,
            'findAllWebsitesForUser': this.findAllWebsitesForUser,
            'findWebsiteById': this.findWebsiteById,
            'updateWebsite': this.updateWebsite,
            'deleteWebsite': this.deleteWebsite
        };
    }
    // add the website parameter instance to the local websites array. the new website's developerID is set to the
    // userId parameter
    WebsiteService.prototype.createWebsite = function (userId, website) {
        // website._id = (new Date()).getTime() + '';
        var url = baseUrl + '/api/user/' + userId + '/website';
        return this.http.post(url, website)
            .map(function (response) {
            return response.json();
        });
    };
    // Retrieves the websites in local websites array whose developerId matches the parameter userId
    WebsiteService.prototype.findAllWebsitesForUser = function (userId) {
        var url = baseUrl + '/api/user/' + userId + '/website';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    // retrieves the website in local websites array whose _id matches the websiteId parameter
    WebsiteService.prototype.findWebsiteById = function (userId, websiteId) {
        var url = baseUrl + '/api/website/' + websiteId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    // updates the user in local users array whose id matches the userID parameter
    WebsiteService.prototype.updateWebsite = function (websiteId, newWebsite) {
        var url = baseUrl + '/api/website/' + websiteId;
        return this.http.put(url, newWebsite)
            .map(function (response) {
            return response.json();
        });
    };
    // removes the website from local websites array whose _id matches the websiteId parameter
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        var url = baseUrl + '/api/website/' + websiteId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    return WebsiteService;
}());
WebsiteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], WebsiteService);

var _a;
//# sourceMappingURL=website.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
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




var baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
// Injecting service into Module
var WidgetService = (function () {
    function WidgetService(http) {
        this.http = http;
        /*
           widgets = [
          { '_id': '123', 'widgetType': 'HEADING', 'pageId': '321', 'size': 2, 'text': 'GIZMODO'},
          { '_id': '234', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
          { '_id': '345', 'widgetType': 'IMAGE', 'pageId': '321', 'width': '100%',
            'url': 'http://lorempixel.com/400/200/'},
          { '_id': '456', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'},
          { '_id': '567', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
          { '_id': '678', 'widgetType': 'YOUTUBE', 'pageId': '321', 'width': '100%',
            'url': 'https://youtu.be/AM2Ivdi9c4E' },
          { '_id': '789', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'}];
        */
        this.api = {
            'createWidget': this.createWidget,
            'findWidgetsByPageId': this.findWidgetsByPageId,
            'findWidgetById': this.findWidgetById,
            'updateWidget': this.updateWidget,
            'deleteWidget': this.deleteWidget,
            'uploadImage': this.uploadImage,
        };
    }
    // upload an widget image, post a file to the widget list page
    WidgetService.prototype.uploadImage = function (widget) {
        var url = baseUrl + '/api/upload';
        return this.http.post(url, widget)
            .map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.createWidget = function (pageId, widget) {
        var url = baseUrl + '/api/page/' + pageId + '/widget';
        return this.http.post(url, widget)
            .map(function (response) {
            return response.json();
        });
    };
    // Retrieves the widgets in local widgets array whose developerId matches the parameter pageId
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        var url = baseUrl + '/api/page/' + pageId + '/widget';
        return this.http.get(url)
            .map(function (response) {
            console.log(response.json());
            return response.json();
        });
    };
    // retrieves the widget in local widgets array whose _id matches the widgetId parameter
    WidgetService.prototype.findWidgetById = function (widgetId) {
        var url = baseUrl + '/api/widget/' + widgetId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    // updates the page in local pages array whose id matches the pageID parameter
    WidgetService.prototype.updateWidget = function (widgetId, newWidget) {
        var url = baseUrl + '/api/widget/' + widgetId;
        return this.http.put(url, newWidget)
            .map(function (response) {
            return response.json();
        });
    };
    // removes the widget from local widgets array whose _id matches the widgetId parameter
    WidgetService.prototype.deleteWidget = function (widgetId) {
        var url = baseUrl + '/api/widget/' + widgetId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.selectPhoto = function (photo) {
        var url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server +
            '/' + photo.id + '_' + photo.secret + '_b.jpg';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    return WidgetService;
}());
WidgetService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], WidgetService);

var _a;
/*

  createWidget(pageId, widget) {
    widget._id = Math.random().toString();
    widget.pageId = pageId;
    this.widgets.push(widget);
    return widget;
  }

  findWidgetsByPageId(pageId: string) {
    const w = [];
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x].pageId === pageId) {
        w.push(this.widgets[x]);
      }
    }
    return w;
  }

  findWidgetById(widgetId: string) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
        return this.widgets[x];
      }
    }
  }

  updateWidget(widgetId, widget) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
        this.widgets[x] = widget;
      }
    }
  }

  deleteWidget(pageId) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === pageId) {
        this.widgets.splice(x, 1);
      }
    }
  }
}
*/
// return this.widgets.filter(widgets => widgets.developerId === pageId);
//# sourceMappingURL=widget.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: '',
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

/***/ "../../../../../src/models/page.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page; });
var Page = (function () {
    // email: String;
    // address; String;
    // constructor(_id, username, password) {
    //   this._id = _id;
    //   this.username = username;
    //   this.password = password;
    // }
    function Page(name, title, website, description, widgets, dateCreated) {
        this.name = name;
        this.title = title;
        this.website = website;
        this.description = description;
        this.widgets = widgets;
        this.dateCreated = dateCreated;
    }
    return Page;
}());

//# sourceMappingURL=page.model.client.js.map

/***/ }),

/***/ "../../../../../src/models/user.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    // email: String;
    // address; String;
    // constructor(_id, username, password) {
    //   this._id = _id;
    //   this.username = username;
    //   this.password = password;
    // }
    function User(_id, username, email, password, firstName, lastName, phone, websites, dateCreated) {
        this._id = _id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.websites = websites;
        this.dateCreated = dateCreated;
    }
    return User;
}());

//# sourceMappingURL=user.model.client.js.map

/***/ }),

/***/ "../../../../../src/models/website.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Website; });
/*var mongoose = require(Mongoose);
var websiteSchema = require('/website.schema');
var websiteModel = mongoose.model('WebsiteModel')

websiteModel.createWebsite;*/
var Website = (function () {
    // email: String;
    // address; String;
    // constructor(_id, username, password) {
    //   this._id = _id;
    //   this.username = username;
    //   this.password = password;
    // }
    function Website(_id, name, developerId, description, pages, dateCreated) {
        this._id = _id;
        this.name = name;
        this.developerId = developerId;
        this.description = description;
        this.pages = pages;
        this.dateCreated = dateCreated;
    }
    return Website;
}());

//# sourceMappingURL=website.model.client.js.map

/***/ }),

/***/ "../../../../../src/models/widget.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Widget; });
var Widget = (function () {
    // email: String;
    // address; String;
    // constructor(_id, username, password) {
    //   this._id = _id;
    //   this.username = username;
    //   this.password = password;
    // }
    function Widget(widgetType, page, size, text, width, url, height, rows, formatted, placeholder, name) {
        this.widgetType = widgetType;
        this.page = page;
        this.size = size;
        this.text = text;
        this.width = width;
        this.url = url;
        this.height = height;
        this.rows = rows;
        this.formatted = formatted;
        this.placeholder = placeholder;
        this.name = name;
    }
    return Widget;
}());

//# sourceMappingURL=widget.model.client.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map