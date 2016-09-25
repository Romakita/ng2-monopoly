import {ViewEncapsulation, Component, ChangeDetectorRef} from '@angular/core';
import PlayersService from '../../services/players/players.service';
import CasesService from '../../services/cases/cases.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'mn-board-view',
    templateUrl: 'boardView.component.html',
    styleUrls:['boardView.component.css'],
    moduleId: module.id,
    encapsulation: ViewEncapsulation.Emulated
})
export default class BoardViewComponent {

    private players: Observable<IPlayer[]>;
    private cases: Observable<ICase[]>;
    private currentPlayerIndex: number = 0;

    constructor(
        private playersService: PlayersService,
        private casesService: CasesService,
        private cd: ChangeDetectorRef
    ) { //


        this.players = playersService.getPlayers();
        this.cases = casesService.getCases();

        /*setTimeout(() => {

            this.players
                .subscribe((players) => {

                    players[0] = Object.assign(players[0], {location: 10});
                    return players.concat([]);
                });

        }, 2000);*/
    }
}