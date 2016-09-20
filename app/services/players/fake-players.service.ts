import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import {IPlayer} from '../../models/Player';


@Injectable()
export default class FakePlayersService {

    constructor() {

    }

    /**
     *
     */
    getPlayers = (): Observable<IPlayer[]> => {

        return Observable.of<IPlayer[]>([
            {name: "John"},
            {name: "Lili"},
            {name: "Elios"},
        ]);
    }
}
