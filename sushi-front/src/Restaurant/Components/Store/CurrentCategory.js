import { makeAutoObservable } from "mobx";

class CurrentCategory {
    category = "сеты";

    constructor() {
        makeAutoObservable(this);
    }

    set(newCategory) {
        this.category = newCategory.toLowerCase();
    }
}

export default new CurrentCategory();