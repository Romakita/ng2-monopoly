
import {Component, Inject, ViewEncapsulation, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import CasesService from '../../services/cases/cases.service';

@Component({
    selector: 'mn-board',
    templateUrl: 'board.component.html',
    styleUrls: ['board.component.css'],
    moduleId: module.id,
    encapsulation: ViewEncapsulation.Emulated
})
export default class BoardComponent implements OnInit, AfterViewInit {

    private cases: ICase[];

    @ViewChild('mnBoard')
    private mnBoardElement: ElementRef;
    @ViewChild('mnBoardWrapper')
    private mnBoardWrapperElement: ElementRef;

    private boardHeight: number;

    private scale: string;

    constructor(private casesService: CasesService){

    }

    /**
     * Called when component is initialized with all input data.
     */
    ngOnInit(){
        this.getCases();
    }

    /**
     * Called when view component is initialized.
     */
    ngAfterViewInit(){
        setTimeout(this.resize);
    }

    /**
     * Get all cases an build board.
     * @returns {Subscription}
     */
    private getCases(){
        return this
            .casesService
            .getCases()
            .subscribe((cases) => {
                this.cases = cases;
            });
    }

    /**
     * Triggered when Window are resized.
     * @param $event
     */
    private onResize($event) {
        this.resize();
    }

    /**
     * Calculate viewport of the board.
     */
    private resize = ()=> {
        console.log('Board height', this.mnBoardElement.nativeElement.offsetWidth);

        const width = +this.mnBoardElement.nativeElement.offsetWidth;
        const widthWrapper = +this.mnBoardWrapperElement.nativeElement.offsetWidth;

        this.boardHeight = +this.mnBoardElement.nativeElement.offsetWidth;

        this.scale = `scale(${width/widthWrapper})`;

    }
}