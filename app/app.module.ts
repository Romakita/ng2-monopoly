import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import {routing, appRoutingProviders} from './app.routes';

import AppComponent from './app.component';
import PlayersComponent from './components/players/players.component';
import BoardComponent from './components/board/board.component';
import CaseComponent from './components/case/case.component';
import NavbarComponent from './components/navbar/navbar.component';
import BoardViewComponent from './components/boardView/boardView.component';
import NewGameViewComponent from './components/newGameView/newGameView.component';

import CasesService from './services/cases/cases.service';
import PlayersService from './services/players/players.service';
import FakePlayersService from './services/players/fakePlayers.service';
import {LocalStorageService} from './services/localStorage/localStorage.service';
import MonopolyService from './services/monopoly/monopoly.service';
import MaterializeInputDirective from './components/input/input.component';
import PawnComponent from './components/pawn/pawn.component';
import {FaComponent} from 'angular2-fontawesome/components';
import {CasePlayersPipe} from './pipes/casePlayers.pipe';

@NgModule({

    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        FormsModule,
        routing
    ],

    // Components depedencies
    declarations: [
        AppComponent,
        PlayersComponent,
        BoardComponent,
        CaseComponent,
        NavbarComponent,
        BoardViewComponent,
        NewGameViewComponent,
        MaterializeInputDirective,
        PawnComponent,
        FaComponent,
        CasePlayersPipe
    ],

    // Services depedencies
    providers: [
        {provide: PlayersService, useClass: FakePlayersService},
        CasesService,
        appRoutingProviders,
        LocalStorageService,
        MonopolyService
    ],

    // Main components
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

    constructor(){
        console.log('Start appModule')
    }
}