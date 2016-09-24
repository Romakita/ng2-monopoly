import {Routes, RouterModule} from '@angular/router';
import BoardViewComponent from './components/boardView/boardView.component';
import {ModuleWithProviders} from '@angular/core';
import NewGameViewComponent from './components/newGameView/newGameView.component';

export const appRoutes: Routes = [
    { path: '', component: BoardViewComponent },
    { path: 'new-game', component: NewGameViewComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);