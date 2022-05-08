import { makeAutoObservable } from "mobx";

class CurrentsShop {
    shop : string = localStorage.getItem("shop") ? localStorage.getItem("shop") : "";

    constructor() {
        makeAutoObservable(this);
    }

    set(newShop : string) {
        this.shop = newShop;
        localStorage.setItem("shop", newShop);
    }
}

export default new CurrentsShop();