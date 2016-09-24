import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import {LocalStore} from '../localStorage/localStorage.decorator';

@Injectable()
export default class FakePlayersService {

    @LocalStore()
    private players: IPlayer[];

    constructor() {


    }

    /**
     * Update list of the players.
     * @param players
     * @returns {any}
     */
    setPlayers(players: IPlayer[]): Observable<IPlayer[]> {

        this.players = players.map((p, index) => {
            p.id = index;
            return p;
        });

        return Observable.of(this.players);
    }

    /**
     * Return all players in Game.
     * @returns {any}
     */
    public getPlayers(): Observable<IPlayer[]> {

        return Observable.of<IPlayer[]>(
             this.players || []
        );
    }
}
