import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';


@Injectable()
export default class PlayersService {

    constructor(private http: Http) {

    }

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
