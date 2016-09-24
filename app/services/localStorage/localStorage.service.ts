import {Injectable} from '@angular/core';

export interface IStores<T> {
    [key: string]: Store<T>;
}

@Injectable()
export class LocalStorageService {

    private stores: IStores<any> = {};

    constructor() {

    }

    /**
     *
     * @param key
     * @returns {Store<any>}
     */
    private getStore(key) {
        return this.stores[key] || new Store<any>(key);
    }

    /**
     *
     * @param key
     * @param value
     * @returns {LocalStorageService}
     */
    public set(key: string, value: any): LocalStorageService {

        this.getStore(key).set(value);

        return this;
    }

    /**
     *
     * @param key
     * @returns {any}
     */
    public get<T>(key: string): T {
        return <T> this.getStore(key).get();
    }

    /**
     *
     * @param key
     * @returns {LocalStorage}
     */
    public remove(key: string): LocalStorageService {
        this.getStore(key).remove();
        delete this.stores[key];
        return this;
    }

    public clear(){
        localStorage.clear();
        this.stores = {};
        return this;
    }
}

export class Store<T> {

    constructor(private nameSpace) {

    }

    /**
     *
     * @param key
     * @param value
     * @returns {LocalStorage}
     */
    public set(value: T): Store<T> {
        localStorage.setItem(this.nameSpace, JSON.stringify(value));
        return this;
    }

    /**
     *
     * @param key
     * @returns {any}
     */
    public get(): T {
        return <any> JSON.parse(localStorage.getItem(this.nameSpace));
    }

    /**
     *
     * @param key
     * @returns {LocalStorage}
     */
    public remove(): Store<T> {
        localStorage.removeItem(this.nameSpace);
        return this;
    }

}