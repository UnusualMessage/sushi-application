import { makeAutoObservable } from "mobx";

class ShopsStore {
    shops : string[] = [];

    constructor() {
        makeAutoObservable(this);
    }
}

export default new ShopsStore();