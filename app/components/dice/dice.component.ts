import {Component, ViewEncapsulation, ViewChild, ElementRef, Output, EventEmitter, AfterViewInit, Input} from '@angular/core';

@Component({
    selector: 'mn-dice',
    templateUrl: 'dice.component.html',
    styleUrls: ['dice.component.css'],
    moduleId: module.id,
    encapsulation: ViewEncapsulation.Emulated
})
export default class DiceComponent implements AfterViewInit {

    private diceNumber: number = 1;

    @Input()
    private stop: boolean = false;

    @ViewChild('mnDiceNumber')
    private mnDiceNumber: ElementRef;

    @Output()
    onDiceClicked: EventEmitter<number> = new EventEmitter<number>();

    constructor(){

    }

    public ngAfterViewInit(): void {
        this.animate();
    }

    private onClick() {

        if (!this.stop) {
            this.stop = true;
        }
    }

    /**
     *
     */
    private random = () => Math.floor(Math.random() * 6) + 1;

    /**
     *
     */
    private animate(){

        setTimeout(() => {
            this.diceNumber = this.random();
            this.mnDiceNumber.nativeElement.innerHTML = this.diceNumber;

            if(!this.stop){
                this.animate();
            } else {
                this.onDiceClicked.emit(this.diceNumber);
            }
        }, 100);

    }

}