import {Injectable} from '@angular/core';
import PlayersService from '../players/players.service';
import {Observable, Subject, Subscription} from 'rxjs/Rx';

@Injectable()
export default class MonopolyService {

    private subjectDices: Subject<number>[];
    private subjectPlayers: Subject<IPlayer[]> = new Subject<IPlayer[]>();

    private currentPlayer: number = 1;
    private nbPlayers: number = 2;

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
     *
     */
    public initializePlayers(): Observable<IPlayer[]> {

        const observable = this.playersService.getPlayers();

        observable.subscribe((players: IPlayer[]) => {

            console.log('initializePlayers =>', players);
            this.nbPlayers = players.length;

            this.subjectPlayers.next(players);
        });

        return observable;
    }

    /**
     *
     */
    public createDicesSequence(){
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

        console.log('players =>', playerId, dices);

        let player = players[playerId];

        player.location += +dices[0] + +dices[1];

        if (player.location > 39) {
            player.money += 200;
        }

        player.location %= 40;

        return players;
    }

    /**
     * Update currentPlayer index.
     * @returns {number}
     */
    public nextPlayer(): number {
        return this.currentPlayer = (this.currentPlayer+1) % this.nbPlayers;
    }
}