import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import AppComponent from './app.component';
import PlayersComponent from './components/players/players.component';
import PlayersService from './services/players/players.service';
import FakePlayersService from './services/players/fake-players.service';
import { HttpModule, JsonpModule } from '@angular/http';


@NgModule({

    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule
    ],

    // Components depedencies
    declarations: [
        AppComponent,
        PlayersComponent

    ],

    // Services depedencies
    providers: [
        {provide: PlayersService, useClass: FakePlayersService}
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
console.log('Loaded appModule')