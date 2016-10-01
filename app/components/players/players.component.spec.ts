// This shows a different way of testing a component, check about for a simpler one

import {TestBed, async} from '@angular/core/testing';
import { By }           from '@angular/platform-browser';


import PlayersComponent from './players.component';
import PawnComponent from '../pawn/pawn.component';
import {FaComponent} from 'angular2-fontawesome/components';
import {DebugElement} from '@angular/core';

describe('Players Component', () => {
    const html = '<mn-players></mn-players>';
    let fixture, comp;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PlayersComponent, PawnComponent, FaComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlayersComponent);
        comp = fixture.componentInstance
    });


    it ('should instanciate component', () => {

        expect(fixture.componentInstance instanceof PlayersComponent).toBe(true, 'should create PlayersComponent');

    });

    it('should have expected players', () => {

        comp.players = [
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
        ];

        comp.currentPlayer = 0;

        // Update layout component
        fixture.detectChanges();

        let query: DebugElement[] = fixture.debugElement.queryAll(By.css('.player'));

        expect(query.length).toBe(2, 'should have 2 players');

        let playerInfos = query[0].queryAll(By.css('.player-info'));

        expect(playerInfos[0].nativeElement.textContent).toContain('1,500 €', 'should have 1500 €');

    });
});
