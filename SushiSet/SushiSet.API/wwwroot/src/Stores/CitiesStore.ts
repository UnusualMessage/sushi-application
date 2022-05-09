import { makeAutoObservable } from "mobx";

class CitiesStore {
    cities : string[] = [];

    constructor() {
        makeAutoObservable(this);
    }
}

export default new CitiesStore();