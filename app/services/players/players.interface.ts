
import {Observable} from 'rxjs';

export interface IPlayersService {

    /**
     *
     * @param players
     * @returns {Observable<R>}
     */
    setPlayers(players: IPlayer[]): Observable<IPlayer[]>;

    /**
     *
     */
    getPlayers(): Observable<IPlayer[]>;
}
