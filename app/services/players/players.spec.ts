import {inject, TestBed, async} from '@angular/core/testing';
import PlayersService from '../players/players.service';
import FakePlayersService from '../players/fakePlayers.service';

describe('PlayersService', () => {

    beforeEach(() => TestBed.configureTestingModule({
        providers: [
            {provide: PlayersService, useClass: FakePlayersService}
        ]
    }));

    it('should initialize new players', async(inject([PlayersService], (playersService: PlayersService) => {


        playersService.setPlayers(<IPlayer[]>[
            {
                id:0,
                name: 'Name 0',
                pawn: {icon:'test', color: 'red'},
                money: 1500,
                location: 0
            },
            {
                id:1,
                name: 'Name 1',
                pawn: {icon:'test', color: 'blue'},
                money: 1500,
                location: 0
            }
        ])
            .toPromise()
            .then(() => playersService.getPlayers().toPromise())
            .then((players) => {

                expect(players[0].name).toBe('Name 0');
                expect(players[1].name).toBe('Name 1');
            });

    })));
});