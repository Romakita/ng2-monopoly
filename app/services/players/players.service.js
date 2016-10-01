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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var PlayersService = (function () {
    function PlayersService(http) {
        this.http = http;
    }
    /**
     *
     * @param players
     * @returns {Observable<R>}
     */
    PlayersService.prototype.setPlayers = function (players) {
        return this.http
            .post("rest/players", { players: players })
            .map(function (response) { return response.json(); })
            .map(function (players, index) {
            players[index] = index;
            return players;
        });
    };
    /**
     *
     */
    PlayersService.prototype.getPlayers = function () {
        return this.http
            .get("rest/players")
            .map(function (response) { return response.json(); })
            .map(function (players) {
            return players.forEach(function (player, index) {
                player.id = index;
            });
        });
    };
    PlayersService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PlayersService);
    return PlayersService;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PlayersService;
//# sourceMappingURL=players.service.js.map