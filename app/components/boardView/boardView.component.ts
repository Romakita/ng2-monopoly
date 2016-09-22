import {ViewEncapsulation,Component} from '@angular/core';
import PlayersService from '../../services/players/players.service';

@Component({
    selector: 'mn-board-view',
    templateUrl: 'boardView.component.html',
    moduleId: module.id,
    encapsulation: ViewEncapsulation.Emulated
})
export default class BoardViewComponent {
    players: IPlayer[];

    constructor(private playersService: PlayersService) { //


        playersService
            .getPlayers()
            .subscribe((players) => {
                this.players = players;
            });
    }
}