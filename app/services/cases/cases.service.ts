import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';


@Injectable()
export default class CasesService {

    constructor(private http: Http) {

    }

    /**
     *
     */
    getCases = (): Observable<ICase[]> => {
        return this.http
            .get(`app/data/cases.json`)
            .map((response: Response) => response.json())
            .map(cases => {

                cases.forEach((theCase: ICaseProperty) => {

                    if (theCase.price){
                        theCase.price /= 10;
                    }

                    if (theCase.housePrice){
                        theCase.housePrice /= 10;
                    }

                    if (theCase.rents){
                        theCase.rents.map((rent: number) => {return rent / 10});
                    }
                });

                return cases;
            })
    }
}
