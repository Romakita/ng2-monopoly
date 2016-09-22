declare interface ICase {
    type: string;
    location: number;
}

declare interface ICaseCorner extends ICase {
    name: string;
}


declare interface ICaseCommunity extends ICase {

}

declare interface ICaseTax extends ICase {

}

declare interface ICaseLuck extends ICase {

}



declare interface ICaseProperty extends ICase {
    name: string;
    group: string;
    colors: string[];
    rents: number[];
    price: number;
    housePrice: number;
}

declare interface ICaseHolding extends ICase {
    name: string;
    rents: string[];
    price: number;
}



declare interface ICaseTrainStation extends ICase {
    name: string;
    colors: string[];
    rents: string[];
    price: number;
    housePrice: number;
}