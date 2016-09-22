import {Component, Inject, Input } from '@angular/core';

@Component({
    selector: 'mn-players',
    templateUrl: 'players.component.html',
    moduleId: module.id
})
export default class PlayersComponent {
    @Input()
    players: IPlayer[];

    constructor() {
        console.log(`inputs are ${this.players}`);
        console.log(this)
    }
}