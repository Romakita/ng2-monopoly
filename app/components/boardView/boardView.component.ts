import {ViewEncapsulation, Component, ChangeDetectorRef} from '@angular/core';
import PlayersService from '../../services/players/players.service';
import CasesService from '../../services/cases/cases.service';
import {Observable} from 'rxjs/Rx';
import MonopolyService from '../../services/monopoly/monopoly.service';

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
    private dices: number[] = [];
    private showDices: boolean = false;
    private showBtnPlayDices: boolean = true;

    constructor(
        private playersService: PlayersService,
        private casesService: CasesService,
        private monopolyService: MonopolyService,
        private cd: ChangeDetectorRef
    ) { //


        this.players = playersService.getPlayers();
        this.cases = casesService.getCases().map((d) => {
            console.log('Case =>', d);
            return d;
        });

    }

    public playDices(){
        this.showDices = true;
        this.showBtnPlayDices = false;
        this.dices = [];
    }

    /**
     *
     * @param diceIndex
     * @param diceValue
     */
    public onDiceClicked(diceIndex: number, diceValue: number) {
        console.log("Dices", diceValue, diceIndex);

        this.dices[diceIndex] = diceValue;

        if (this.dices[0] && this.dices[1]) {
            this.showDices = false;

            this
                .monopolyService
                .playerMoveTo(this.currentPlayerIndex, this.dices)
                .subscribe((players: IPlayer[]) => {
                    setTimeout(() => {

                        this.currentPlayerIndex = (this.currentPlayerIndex+1) % players.length;

                        this.players = Observable.of(players);

                        this.showBtnPlayDices = true;

                    }, 1000);
                });
        }


    }

}