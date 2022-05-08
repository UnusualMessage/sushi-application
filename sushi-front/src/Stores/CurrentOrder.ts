import { makeAutoObservable } from "mobx";

import IOrder from "../Interfaces/IOrder";

class CurrentOrder {
    order = localStorage.getItem("current_order") ? JSON.parse(localStorage.getItem("current_order")) : null;

    constructor() {
        makeAutoObservable(this);
    }

    saveToLocalStorage() {
        localStorage.setItem("current_order", JSON.stringify(this.order));
    }

    accept(order : IOrder) {
        this.order = order;
        this.saveToLocalStorage();
    }

    finish() {
        this.order = null;
        this.saveToLocalStorage();
    }

    isEmpty() : boolean {
        return !this.order;
    }

    exists() : boolean {
        return this.order;
    }
}

export default new CurrentOrder();