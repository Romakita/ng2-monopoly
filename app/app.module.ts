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
import PlayersViewComponent from './components/playersView/playersView.component';

import CasesService from './services/cases/cases.service';
import PlayersService from './services/players/players.service';
import FakePlayersService from './services/players/fake-players.service';

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
        PlayersViewComponent
    ],

    // Services depedencies
    providers: [
        {provide: PlayersService, useClass: FakePlayersService},
        CasesService,
        appRoutingProviders
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