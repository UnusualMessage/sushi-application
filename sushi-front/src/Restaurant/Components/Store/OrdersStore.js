import { makeAutoObservable } from "mobx";

class OrdersStore {
    currentId = 0;
    orders = [];

    constructor() {
        makeAutoObservable(this);
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
    }
}

export default new OrdersStore();