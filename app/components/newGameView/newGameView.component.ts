import {ViewEncapsulation, Component} from '@angular/core';
import PlayersService from '../../services/players/players.service';
import {PAWNS} from '../../constants/pawns.constant';
import {Router} from '@angular/router';

@Component({
    selector: 'mn-board-view',
    templateUrl: 'newGameView.component.html',
    styleUrls: ['newGameView.component.css'],
    moduleId: module.id,
    encapsulation: ViewEncapsulation.Emulated
})
export default class NewGameViewComponent {

    players: IPlayer[];
    PAWNS: IPawn[] = PAWNS;

    constructor(private playersService: PlayersService, private router: Router) { //

        playersService
            .getPlayers()
            .subscribe((players) => {

                this.players = Array
                    .from(Array(2))
                    .map<IPlayer>((player: IPlayer, index: number) => <IPlayer> {
                        id: index,
                        name: (players[index] ? players[index].name : "")
                    });

            });
    }


    /**
     * Determine if the pawnIcon is free.
     * @param pawnIcon
     * @param playerId
     * @returns {boolean}
     */
    private isFreePawn(pawnIcon: string, playerId: number): boolean {

        const find = this
            .players
            .find((player: IPlayer) => {

                if (player.id === playerId) {
                    return false;
                }

                return player.pawn && player.pawn.icon === pawnIcon;
            });


        return !find;
    }

    private addPlayer(){
        this.players.push(<IPlayer> {id: this.players.length});
    }

    private deletePlayer(index){
        this.players.splice(index, 1);
    }

    private submit() {
        this.playersService.setPlayers(this.players);
        this.router.navigateByUrl('/');
    }
}