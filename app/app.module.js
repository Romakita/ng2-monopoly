"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var players_component_1 = require('./components/players/players.component');
var players_service_1 = require('./services/players/players.service');
var fake_players_service_1 = require('./services/players/fake-players.service');
var http_1 = require('@angular/http');
var AppModule = (function () {
    function AppModule() {
        console.log('Start appModule');
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                http_1.JsonpModule
            ],
            // Components depedencies
            declarations: [
                app_component_1.default,
                players_component_1.default
            ],
            // Services depedencies
            providers: [
                { provide: players_service_1.default, useClass: fake_players_service_1.default }
            ],
            // Main components
            bootstrap: [
                app_component_1.default
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
console.log('Loaded appModule');
//# sourceMappingURL=app.module.js.map