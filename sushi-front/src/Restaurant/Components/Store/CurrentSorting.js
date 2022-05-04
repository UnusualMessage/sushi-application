import { makeAutoObservable } from "mobx";

class CurrentSorting {
    ascending = true;

    constructor() {
        makeAutoObservable(this);
    }

    change() {
        this.ascending = !this.ascending;
    }
}

export default new CurrentSorting();