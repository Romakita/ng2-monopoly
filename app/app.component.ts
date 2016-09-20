import {Component, Inject, OnInit} from '@angular/core';
import {IPlayer} from './models/Player';
import PlayersService from './services/players/players.service';

@Component({
    selector: 'mn-app',
    template: `
        <h1>Monopoly v{{version | number}} </h1>
        <mn-players [players]="players"></mn-players>
        `
})
export default class AppComponent implements OnInit {

    version: number = 1.0;
    players: IPlayer[];

    constructor(private playersService: PlayersService) { //

        playersService
            .getPlayers()
            .subscribe((players) => {
                this.players = players;
            })
    }

    ngOnInit(){

    }

}
