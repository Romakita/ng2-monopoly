import {ViewEncapsulation, Component, ChangeDetectorRef, OnInit, AfterViewInit} from '@angular/core';
import PlayersService from '../../services/players/players.service';
import CasesService from '../../services/cases/cases.service';
import {Observable, Subject} from 'rxjs/Rx';
import MonopolyService from '../../services/monopoly/monopoly.service';

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
//    private dices: number[] = [];
    private showDices: boolean = false;
    private showBtnPlayDices: boolean = true;

    constructor(
        private playersService: PlayersService,
        private casesService: CasesService,
        private monopolyService: MonopolyService
    ) { //

    }

    /**
     *
     */
    public ngOnInit(): void {

        this.players = this.monopolyService.players;

        //this.players = this.playersService.getPlayers()

        //    .map(p => {
        //         console.log('p =>', p);
        //        return p;
        //    })
        //.switchMap(e => Observable.of(e))
        //.catch(e => (console.error(e)));

        //.subscribe(() =>{})


            /*this.monopolyService.players;

        this.players.switchMap((o) => {

            return Observable.from(o);
        });
*/
        //this.players.subscribe(o => console.log(o));

            //Observable.concat(this.monopolyService.players);

        // console.log('this.players', this.players);

        /*this.playersService
         .getPlayers()
         .subscribe((c) => {
         console.log('subscribeC', c);
         });

         this.players.subscribe((e) => {
         console.log('subscribe', e);

         });*/
/*
        this.players.subscribe({
         next: (e) => {console.log('nextPartial', e)},
         error: function (e) { throw e; }
         });
*/
        this.cases = this.casesService.getCases();

        console.log('This.cases', this.cases);
        /*
         this.players
         .map((c) => {
         console.log("c", c);
         return c;
         })
         .subscribe(this.onPlayersUpdated);*/

    }

    /**
     *
     */
    public ngAfterViewInit(): void {

        this.monopolyService
            .initializePlayers()
            .subscribe(() => {
                this.players.subscribe(this.onPlayersUpdated);
            });

    }

    public playDices(){
        this.showDices = true;
        this.showBtnPlayDices = false;
    }

    /**
     *
     * @param diceIndex
     * @param diceValue
     */
    public onDiceClicked(diceIndex: number, diceValue: number) {

        console.log('DiceIndex', diceIndex, 'diceValue', diceValue);

        this.monopolyService.setDice(diceIndex, diceValue);
    }

    /**
     *
     * @param players
     */
    private onPlayersUpdated = (players: IPlayer[]) => {

        console.log('onPlayersUpdated players', players);

        this.currentPlayerIndex = this.monopolyService.nextPlayer();
        this.showDices = false;
        this.showBtnPlayDices = true;
    }

}