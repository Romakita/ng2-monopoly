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
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var app_routes_1 = require('./app.routes');
var app_component_1 = require('./app.component');
var players_component_1 = require('./components/players/players.component');
var board_component_1 = require('./components/board/board.component');
var case_component_1 = require('./components/case/case.component');
var navbar_component_1 = require('./components/navbar/navbar.component');
var boardView_component_1 = require('./components/boardView/boardView.component');
var newGameView_component_1 = require('./components/newGameView/newGameView.component');
var cases_service_1 = require('./services/cases/cases.service');
var players_service_1 = require('./services/players/players.service');
var fakePlayers_service_1 = require('./services/players/fakePlayers.service');
var localStorage_service_1 = require('./services/localStorage/localStorage.service');
var input_component_1 = require('./components/input/input.component');
var AppModule = (function () {
    function AppModule() {
        console.log('Start appModule');
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                forms_1.FormsModule,
                app_routes_1.routing
            ],
            // Components depedencies
            declarations: [
                app_component_1.default,
                players_component_1.default,
                board_component_1.default,
                case_component_1.default,
                navbar_component_1.default,
                boardView_component_1.default,
                newGameView_component_1.default,
                input_component_1.default
            ],
            // Services depedencies
            providers: [
                { provide: players_service_1.default, useClass: fakePlayers_service_1.default },
                cases_service_1.default,
                app_routes_1.appRoutingProviders,
                localStorage_service_1.LocalStorageService
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
//# sourceMappingURL=app.module.js.map