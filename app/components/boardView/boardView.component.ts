import {ViewEncapsulation, Component, OnInit, AfterViewInit} from '@angular/core';
import CasesService from '../../services/cases/cases.service';
import {Observable} from 'rxjs/Rx';
import MonopolyService from '../../services/monopoly/monopoly.service';
import {MonopolyAction} from '../../services/monopoly/monopoly.service';
import {Router} from '@angular/router';

@Component({
    selector: 'mn-board-view',
    templateUrl: 'boardView.component.html',
    styleUrls:['boardView.component.css'],
    moduleId: module.id,
    encapsulation: ViewEncapsulation.Emulated
})
export default class BoardViewComponent implements OnInit, AfterViewInit {

    private players: Observable<IPlayer[]>;
    private cases: Observable<ICase[]>;

    private currentPlayerIndex: number = 0;
    private showDices: boolean = false;
    private showBtnPlayDices: boolean = true;

    constructor(
        private casesService: CasesService,
        private monopolyService: MonopolyService,
        private router: Router
    ) { //

    }

    /**
     *
     */
    public ngOnInit(): void {

        // Subscribe to players Observable
        this.players = this.monopolyService.players;

        // Get all Cases
        this.cases = this.casesService.getCases();

    }

    /**
     *
     */
    public ngAfterViewInit(): void {

        this.monopolyService
            .initializePlayers()
            .subscribe((players) => {

                if (players.length) {
                    this.players.subscribe(this.onPlayersUpdated);
                } else {
                    this.router.navigateByUrl('/new-game');
                }
            });

    }

    /**
     *
     */
    public playDices(){
        this.showDices = true;
        this.showBtnPlayDices = false;
    }

    /**
     *
     * @param diceIndex
     * @param diceValue
     */
    public onDiceClicked(diceIndex: number, diceValue: number): void {
        console.log(`BoardViewComponent.onDiceClicked(${diceIndex}) => ${diceValue}`);
        this.monopolyService.setDice(diceIndex, diceValue);
    }

    /**
     *
     * @param players
     */
    private onPlayersUpdated = (players: IPlayer[]): void => {

        console.log('BoardViewComponent.onPlayersUpdated() =>', players);

        switch(this.monopolyService.getNextAction()){

            case MonopolyAction.PLAY_AGAIN:
                this.showDices = false;
                this.showBtnPlayDices = true;
                break;

            case MonopolyAction.GOTO_PRISON:
            case MonopolyAction.NEXT_PLAYER:
                this.showDices = false;
                this.showBtnPlayDices = true;
                this.currentPlayerIndex = this.monopolyService.nextPlayer();
                break;
        }

        //

    }

}