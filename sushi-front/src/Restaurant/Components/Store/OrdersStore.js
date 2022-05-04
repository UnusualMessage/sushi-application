import { makeAutoObservable } from "mobx";

class OrdersStore {
    currentId = localStorage.getItem("current_id") ? Number(localStorage.getItem("current_id")) : 0;
    orders = localStorage.getItem("orders") ? JSON.parse(localStorage.getItem("orders")) : [];

    constructor() {
        makeAutoObservable(this);
    }

    saveToLocalStorage() {
        localStorage.setItem("orders", JSON.stringify(this.orders));
        localStorage.setItem("current_id", this.currentId);
    }

    makeOrder(items, price) {
        let newOrder = {};

        newOrder.id = this.currentId + 1;
        this.currentId += 1;

        newOrder.date = "04.05.22";
        newOrder.status = "Оформлен";
        newOrder.price = price;
        newOrder.items = items.slice(0);

        this.orders.push(newOrder);
        this.saveToLocalStorage();
    }

    removeOrder(id) {
        this.orders = this.orders.filter((order) => order.id !== id);
        this.saveToLocalStorage();
    }
}

export default new OrdersStore();