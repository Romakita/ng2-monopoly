
import {Component, Inject, ViewEncapsulation, Input} from '@angular/core';

@Component({
    selector: 'mn-case',
    templateUrl: 'case.component.html',
    styleUrls: ['case.component.css'],
    moduleId: module.id,
    encapsulation: ViewEncapsulation.Emulated
})
export default class CaseComponent {

    private _caseInfo: ICase;

    @Input()
    private players: IPlayer[];

    private backgroundColor: string;
    private name: string;
    private svg: string;
    private isCaseCorner: boolean;

    constructor(){

    }

    /**
     *
     * @param value
     */
    @Input()
    set caseInfo(value: ICase) {
        this._caseInfo = value;

        switch(value.type){
            // Case corner
            case "start":
            case "special":
            case "prison":
            case "parking":
                let caseCorner = <ICaseCorner> value;
                this.name = caseCorner.name;
                this.svg = caseCorner.type;
                this.isCaseCorner = true;
                break;

            case "property":
                let caseProperty = <ICaseProperty> value;
                this.backgroundColor = caseProperty.colors[0];
                this.name = caseProperty.name;
                break;

            case "trainStation":
                let caseTrainStation = <ICaseTrainStation> value;
                this.backgroundColor = caseTrainStation.colors[0];
                this.name = caseTrainStation.name;
                this.svg = caseTrainStation.type;
                break;

            case "holding":
                let caseHolding = <ICaseHolding> value;
                this.name = caseHolding.name;
                this.svg = caseHolding.type;
                break;

            case "community":
                let caseCommunity = <ICaseCommunity> value;
                this.name = "Communauté";
                this.svg = caseCommunity.type;
                break;

            case "tax":
                let caseTax = <ICaseTax> value;
                this.name = "Taxe";
                break;

            case "luck":
                let caseLuck = <ICaseLuck> value;
                this.name = "Chance";
                this.svg = caseLuck.type;
                break;

        }
    }

    /**
     *
     * @returns {ICase}
     */
    get caseInfo(){
        return this._caseInfo;
    }

}