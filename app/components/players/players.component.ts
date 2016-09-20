import {Component, Inject, Input } from '@angular/core';
import {IPlayer} from '../../models/Player';

@Component({
    selector:'mn-players',
    template:`
    <div *ngFor="let player of players">
        {{player.name}}
    </div>
    `
})
export default class PlayersComponent {
    @Input()
    players: IPlayer[];

    constructor() {
        console.log(`inputs are ${this.players}`);
        console.log(this)
    }
}