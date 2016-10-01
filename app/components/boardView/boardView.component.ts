import {ViewEncapsulation, Component, OnInit, AfterViewInit, OnDestroy} from '@angular/core';
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
export default class BoardViewComponent implements OnInit, AfterViewInit, OnDestroy {

    private players: Observable<IPlayer[]>;
    private playerSubcribtion;

    private cases: Observable<ICase[]>;

    private currentPlayerIndex;
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
                if (players.length === 0) {
                    this.router.navigateByUrl('/new-game');
                }
            });

        this.playerSubcribtion = this.players.subscribe(this.onPlayersUpdated);
        this.currentPlayerIndex = this.monopolyService.getCurrentPlayerIndex();
    }


    public ngOnDestroy(): void {

        console.log('boardView.ngOnDestroy');
        this.playerSubcribtion.unsubscribe();

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

        console.log('BoardViewComponent.onPlayersUpdated() =>', MonopolyAction[this.monopolyService.getNextAction()]);

        switch(this.monopolyService.getNextAction()){

            case MonopolyAction.PLAY_AGAIN:

                this.hideDices()
                    .then(() => {
                        setTimeout(() => {
                            alert('DOUBLE ! Play again');
                        }, 500);
                    });

                break;

            case MonopolyAction.GOTO_PRISON:
            case MonopolyAction.NEXT_PLAYER:

                this.hideDices()
                    .then(() => {
                        this.currentPlayerIndex = this.monopolyService.nextPlayer();
                    });

                break;
        }

        //

    };

    /**
     *
     * @returns {Promise<T>}
     */
    private hideDices() {

        return new Promise((resolve) => {
            setTimeout(() => {
                this.showDices = false;
                this.showBtnPlayDices = true;
                resolve();
            }, 1000);
        });
    }

}