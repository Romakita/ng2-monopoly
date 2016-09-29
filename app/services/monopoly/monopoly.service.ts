import {Injectable} from '@angular/core';
import PlayersService from '../players/players.service';
import {Observable} from 'rxjs/Rx';

@Injectable()
export default class MonopolyService {

    constructor(private playersService: PlayersService) {

    }

    public initializeGame(players: IPlayer[]): Observable<IPlayer[]>{

        players.map((p) => {
            p.money = 1500;
            p.location = 0;
        });

        return this.playersService.setPlayers(players);
    }

    /**
     *
     * @param playerId
     * @param dices
     * @returns {Uint8ClampedArray|JQuery|Int32Array|Float32Array|U[]|Float64Array|any}
     */
    public playerMoveTo(playerId: number, dices: number[]): Observable<IPlayer[]> {

        return Observable.fromPromise(this
            .playersService
            .getPlayers()
            .toPromise()
            .then((players: IPlayer[]) => {

                this.applyRules(playerId, dices, players);

                return this.playersService.setPlayers(players).toPromise();
            }));
    }

    /**
     *
     * @param playerId
     * @param dices
     * @param players
     */
    private applyRules(playerId: number, dices: number[], players: IPlayer[]) {

        console.log('players =>', playerId, dices);

        let player = players[playerId];

        player.location += +dices[0] + +dices[1];

        console.log(player);

        if (player.location > 39) {
            player.money += 200;
        }

        player.location %= 40;

    }
}