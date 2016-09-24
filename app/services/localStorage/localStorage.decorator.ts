import {Store} from './localStorage.service';

export function LocalStore(name?: string): any {
    return (target: any, propertyName: string) => {

        const store =  new Store<any>(name || propertyName);
        const descriptor = Object.defineProperty(target, propertyName, {
            enumerable: true,
            configurable: true,
            get: () => store.get(),
            set: (v: any) => store.set(v)
        });

        return descriptor;
    };
}