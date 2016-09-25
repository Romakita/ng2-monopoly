
import {
    Component,
    ViewEncapsulation,
    ViewChild,
    ElementRef,
    AfterViewInit,
    Input,
    ChangeDetectionStrategy,
    ChangeDetectorRef
} from '@angular/core';

@Component({
    selector: 'mn-board',
    templateUrl: 'board.component.html',
    styleUrls: ['board.component.css'],
    moduleId: module.id,
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class BoardComponent implements AfterViewInit {

    @Input()
    private cases: ICase[];

    @Input()
    private players: IPlayer[];

    @ViewChild('mnBoard')
    private mnBoardElement: ElementRef;

    @ViewChild('mnBoardWrapper')
    private mnBoardWrapperElement: ElementRef;

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