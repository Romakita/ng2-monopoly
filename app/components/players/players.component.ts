import {Component, Inject, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'mn-players',
    templateUrl: 'players.component.html',
    styleUrls: ['players.component.css'],
    moduleId: module.id,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class PlayersComponent {

    @Input()
    players: IPlayer[];

    @Input()
    currentPlayerIndex: number;

    constructor() {

    }
}