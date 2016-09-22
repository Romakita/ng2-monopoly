
import {Component, Inject, ViewEncapsulation, Output, Input,EventEmitter} from '@angular/core';


@Component({
    selector: 'mn-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css'],
    moduleId: module.id,
    encapsulation: ViewEncapsulation.Emulated
})
export default class NavbarComponent {

    @Output() onZoomChange: EventEmitter<number> = new EventEmitter<number>();


    @Input()
    public zoomValue: number;

    constructor(){

    }

    /**
     *
     */
    private onZoomValueChange($event){
        console.log($event);
        //this.onZoomChange.emit(this.zoomValue);
    }
}