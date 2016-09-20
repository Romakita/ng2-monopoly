
import {Component, Inject } from '@angular/core';


@Component({
    selector: 'mn-app',
    template: `<h1>Monopoly v{{version | number}} </h1>
               <!--<button (click)="list()">http</button>-->
               <val-races (newRaceAvailble)="onNewRace()"></val-races>
                <!--<val-ponies></val-ponies>-->`,
    // directives: [RacesComponent, Ponies],
    // providers: [RaceService]
})
class BoardComponent {

}