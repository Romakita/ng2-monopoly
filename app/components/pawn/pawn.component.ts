import {Component, Input, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'mn-pawn',
    template: `<div class="chip">
                   <i class="material-icons circle {{player?.pawn.color}}">{{player?.pawn.icon}}</i>
                   {{player?.name}}
                </div>`,
    styleUrls: ['pawn.component.css'],
    moduleId: module.id,
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class PawnComponent {

    @Input()
    private player: IPlayer;

    constructor(){

    }
}