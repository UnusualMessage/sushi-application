import { makeAutoObservable } from "mobx";

class CurrentCategory {
    category = "Сеты";

    constructor() {
        makeAutoObservable(this);
    }

    set(newCategory) {
        this.category = newCategory;
    }
}

export default new CurrentCategory();