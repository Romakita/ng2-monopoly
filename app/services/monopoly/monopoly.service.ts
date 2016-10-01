import {Injectable} from '@angular/core';
import PlayersService from '../players/players.service';
import {Observable, Subject, Subscription} from 'rxjs/Rx';

@Injectable()
export default class MonopolyService {

    private subjectDices: Subject<number>[];
    private subjectPlayers: Subject<IPlayer[]> = new Subject<IPlayer[]>();

    private currentPlayer: number = 1;
    private nbPlayers: number = 2;
    private nextAction: MonopolyAction;
    private nbDoubleRolled: number = 0;

    constructor(private playersService: PlayersService) {

        this.createDicesSequence();
    }

    /**
     * Create a new monopoly party.
     * @param players
     * @returns {Subscription}
     */
    public initializeGame(players: IPlayer[]) {

        players.map((p) => {
            p.money = 1500;
            p.location = 0;
        });

        return this
            .playersService
            .setPlayers(players);

    }

    /**
     * Get players and initialize observable players.
     * @returns {Observable<IPlayer[]>}
     */
    public initializePlayers(): Observable<IPlayer[]> {

        const observable = this.playersService.getPlayers();

        observable.subscribe((players: IPlayer[]) => {

            console.log('Monopoly.initializePlayers.subscribe() =>', players);

            this.nbPlayers = players.length;

            this.subjectPlayers.next(players);
        });

        return observable;
    }

    /**
     * Create a sequence to observe the change on two dices.
     * The sequence waits two dice are rolled to trigger the next event.
     * When the event is triggered, the rules are applied for the current player.
     * Finally, the players list are updated. The Subject players are updated too.
     */
    public createDicesSequence(): void {
        let dices;

        this.subjectDices = [
            new Subject<number>(),
            new Subject<number>()
        ];

        Observable
            .combineLatest(
                ...(this.subjectDices.map(o => o.asObservable()))
            )
            .switchMap((_dices_: number[]) => {

                dices = _dices_;

                console.log('Monopoly.createDicesSequence.switchMap() =>', dices);

                return this.playersService.getPlayers();
            })
            .switchMap((players) => {

                players = this.applyRules(this.currentPlayer, dices, players);

                return this.playersService.setPlayers(players);
            })
            .subscribe((result) => {

                console.log('Monopoly.createDicesSequence.subscribe() =>', result);

                this.subjectPlayers.next(result);

                this.createDicesSequence();

            });

    }

    /**
     *
     * @returns {Observable<IPlayer[]>}
     */
    get players(): Observable<IPlayer[]> {
        return this.subjectPlayers.asObservable();
    }

    /**
     *
     * @param diceIndex
     * @param diceValue
     * @returns {MonopolyService}
     */
    public setDice(diceIndex: number, diceValue: number) {

        console.log(`Monopoly.setDice(${diceIndex}) => ${diceValue}`);

        this.subjectDices[diceIndex].next(diceValue);

        return this;
    }

    /**
     * Apply rules when player take his turn.
     * @param playerId
     * @param dices
     * @param players
     */
    private applyRules(playerId: number, dices: number[], players: IPlayer[]): IPlayer[] {

        console.log('Monopoly.applyRules() =>', playerId, dices);

        let player = players[playerId];
        this.nextAction = MonopolyAction.NEXT_PLAYER;

        // Calculate next action
        if (dices[0] === dices[1]) { // DOUBLE
            this.nbDoubleRolled++;

            if(this.nbDoubleRolled < 3){
                this.nextAction = MonopolyAction.PLAY_AGAIN;
            }  else {
                this.nextAction = MonopolyAction.GOTO_PRISON;
                player.location = 30;
                this.nbDoubleRolled = 0;

                return;
            }

        }

        player.location += +dices[0] + +dices[1];

        if (player.location > 39) {
            player.money += 200;
        }

        player.location %= 40;

        return players;
    }

    /**
     *
     * @returns {MonopolyAction}
     */
    public getNextAction(): MonopolyAction {
        return this.nextAction;
    }
    /**
     * Update currentPlayer index.
     * @returns {number}
     */
    public nextPlayer(): number {
        return this.currentPlayer = (this.currentPlayer+1) % this.nbPlayers;
    }
}

export enum MonopolyAction {
    NEXT_PLAYER,
    GOTO_PRISON,
    PLAY_AGAIN
}