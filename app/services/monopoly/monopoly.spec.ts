import {inject, TestBed, async} from '@angular/core/testing';
import MonopolyService from './monopoly.service';
import PlayersService from '../players/players.service';
import FakePlayersService from '../players/fakePlayers.service';

describe('MonopolyService', () => {

    beforeEach(() => TestBed.configureTestingModule({
        providers: [
            MonopolyService,
            {provide: PlayersService, useClass: FakePlayersService}
        ]
    }));

    it('should initialize new game', async(inject([MonopolyService], (monopolyService: MonopolyService) => {


        monopolyService.players
            .subscribe((players) => {

                expect(players[0].name).toBe('Name 0');

            });

        monopolyService.initializeGame(<IPlayer[]> [
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
        ]);


    })));
});