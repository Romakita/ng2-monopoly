import { Pipe, PipeTransform } from '@angular/core';

/**
 * Filter the players list for the current location case
 */
@Pipe({name: 'casePlayers'})
export class CasePlayersPipe implements PipeTransform {

    public transform(players: IPlayer[], location: number): IPlayer[] {
        return players ? players.filter(p => p.location === location) : [];
    }
}