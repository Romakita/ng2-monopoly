
import {Directive, AfterViewInit, ElementRef, Renderer} from '@angular/core';

@Directive({
    selector:'input'
})
export default class MaterializeInputDirective implements AfterViewInit {

    constructor(el: ElementRef, renderer: Renderer){

    }

    public ngAfterViewInit(): void {
        Materialize.updateTextFields();
    }
}