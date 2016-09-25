
import {
    Component,
    ViewEncapsulation,
    ViewChild,
    ElementRef,
    AfterViewInit,
    Input,
    ChangeDetectorRef, OnChanges, SimpleChanges
} from '@angular/core';

@Component({
    selector: 'mn-board',
    templateUrl: 'board.component.html',
    styleUrls: ['board.component.css'],
    moduleId: module.id,
    encapsulation: ViewEncapsulation.Emulated
})
export default class BoardComponent implements AfterViewInit, OnChanges {

    @Input()
    private cases: ICase[];

    @Input()
    private players: IPlayer[];

    @Input()
    private currentPlayerIndex: number = 0;

    @ViewChild('mnBoard')
    private mnBoardElement: ElementRef;

    @ViewChild('mnBoardWrapper')
    private mnBoardWrapperElement: ElementRef;

    private currentCaseIndex: number = 0;

    constructor(
        private cd: ChangeDetectorRef
    ) {

    }

    ngAfterViewInit(){
        this.resize();
    }

    /**
     * Triggered when Window are resized.
     * @param $event
     */
    private onResize($event) {
        this.resize();
    }


    public ngOnChanges(changes: SimpleChanges): void {

        if ("players" in changes) {
            this.updateCurrentCase();
        }

        if ("currentPlayer" in changes) {
            this.updateCurrentCase();
        }

        if ("cases" in changes) {
            this.updateCurrentCase();
        }

    }

    private updateCurrentCase(){

        if (this.players && this.cases && this.currentPlayerIndex !== undefined) {

            const currentPlayer = this.players[this.currentPlayerIndex];

            this.currentCaseIndex = currentPlayer.location;

        }
    }

    /**
     * Calculate viewport of the board.
     */
    private resize = ()=> {

        const width = +this.mnBoardElement.nativeElement.offsetWidth;
        const height = +this.mnBoardElement.nativeElement.offsetHeight;
        const widthWrapper = +this.mnBoardWrapperElement.nativeElement.offsetWidth;
        const ref = Math.min(width, height);

        this.mnBoardWrapperElement.nativeElement.style.transform = `scale(${ref/widthWrapper})`;
    };

}