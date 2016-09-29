import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';
import {IPlayersService} from './players.interface';


@Injectable()
export default class PlayersService implements IPlayersService {

    constructor(private http: Http) {

    }

    /**
     *
     * @param players
     * @returns {Observable<R>}
     */
    setPlayers(players: IPlayer[]): Observable<IPlayer[]> {
        return this.http
            .post(`rest/players`, {players: players})
            .map((response: Response) => response.json())
            .map((players) => {
                return players.forEach((player, index) => {
                    player.id = index;
                });
            });
    }

    /**
     *
     */
    getPlayers(): Observable<IPlayer[]> {
        return this.http
            .get(`rest/players`)
            .map((response: Response) => response.json())
            .map((players) => {
                return players.forEach((player, index) => {
                    player.id = index;
                });
            });
    }
}
