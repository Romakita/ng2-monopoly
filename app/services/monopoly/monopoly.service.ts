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
}