import {Component, Inject, OnInit} from '@angular/core';

@Component({
    selector: 'mn-app',
    templateUrl: "app.component.html",
    moduleId: module.id
})
export default class AppComponent implements OnInit {

    version: number = 1.0;

    constructor() { //

    }

    ngOnInit(){

    }

}
