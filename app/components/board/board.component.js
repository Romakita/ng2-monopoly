"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var BoardComponent = (function () {
    function BoardComponent(cd) {
        var _this = this;
        this.cd = cd;
        /**
         * Calculate viewport of the board.
         */
        this.resize = function () {
            var width = +_this.mnBoardElement.nativeElement.offsetWidth;
            var height = +_this.mnBoardElement.nativeElement.offsetHeight;
            var widthWrapper = +_this.mnBoardWrapperElement.nativeElement.offsetWidth;
            var ref = Math.min(width, height);
            _this.mnBoardWrapperElement.nativeElement.style.transform = "scale(" + ref / widthWrapper + ")";
        };
    }
    BoardComponent.prototype.ngAfterViewInit = function () {
        this.resize();
    };
    /**
     * Triggered when Window are resized.
     * @param $event
     */
    BoardComponent.prototype.onResize = function ($event) {
        this.resize();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], BoardComponent.prototype, "cases", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], BoardComponent.prototype, "players", void 0);
    __decorate([
        core_1.ViewChild('mnBoard'), 
        __metadata('design:type', core_1.ElementRef)
    ], BoardComponent.prototype, "mnBoardElement", void 0);
    __decorate([
        core_1.ViewChild('mnBoardWrapper'), 
        __metadata('design:type', core_1.ElementRef)
    ], BoardComponent.prototype, "mnBoardWrapperElement", void 0);
    BoardComponent = __decorate([
        core_1.Component({
            selector: 'mn-board',
            templateUrl: 'board.component.html',
            styleUrls: ['board.component.css'],
            moduleId: module.id,
            encapsulation: core_1.ViewEncapsulation.Emulated,
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [core_1.ChangeDetectorRef])
    ], BoardComponent);
    return BoardComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BoardComponent;
//# sourceMappingURL=board.component.js.map