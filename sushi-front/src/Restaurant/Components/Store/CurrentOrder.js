import { makeAutoObservable } from "mobx";
import OrdersStore from "./OrdersStore";

class CurrentOrder {
    order;

    constructor() {
        makeAutoObservable(this);

        this.order = localStorage.getItem("current_order") ? JSON.parse(localStorage.getItem("current_order")) : {};
    }

    accept(id) {
        this.order = OrdersStore.accept(id);
        localStorage.setItem("current_order", JSON.stringify(this.order));
    }
}

export default new CurrentOrder();