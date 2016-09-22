import {Routes, RouterModule} from '@angular/router';
import PlayersViewComponent from './components/playersView/playersView.component';
import BoardViewComponent from './components/boardView/boardView.component';
import {ModuleWithProviders} from '@angular/core';

export const appRoutes: Routes = [
    { path: '', component: BoardViewComponent },
    { path: 'players', component: PlayersViewComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);