import { makeAutoObservable } from "mobx";

class OrdersStore {
    currentId;
    orders;

    constructor() {
        makeAutoObservable(this);

        this.currentId = localStorage.getItem("current_id") ? Number(localStorage.getItem("current_id")) : 0;
        this.orders = localStorage.getItem("orders") ? JSON.parse(localStorage.getItem("orders")) : [];
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

    accept(id) {
        let acceptedOrder = this.getById(id);
        acceptedOrder.status = "Доставка";
        this.saveToLocalStorage();
        return acceptedOrder;
    }

    getById(id) {
        return this.orders.find(order => order.id === id);
    }

    getRandomOrder() {
        const randomIndex = Math.floor(Math.random() * this.orders.length);
        return this.orders[randomIndex];
    }

    isFirst(id) {
        return id === 1;
    }

    isLast(id) {
        return id === this.orders.length;
    }

    getFirst() {
        return this.orders[0];
    }

    getLast() {
        return this.orders[this.getOrdersCount() - 1];
    }

    getNext(id) {
        return this.orders[id];
    }

    getPrevious(id) {
        return this.orders[id - 2];
    }

    getOrdersCount() {
        return this.orders.length;
    }
}

export default new OrdersStore();