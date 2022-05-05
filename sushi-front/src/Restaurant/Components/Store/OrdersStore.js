import { makeAutoObservable } from "mobx";

class OrdersStore {
    orders = localStorage.getItem("orders") ? JSON.parse(localStorage.getItem("orders")) : [];

    constructor() {
        makeAutoObservable(this);
    }

    saveToLocalStorage() {
        localStorage.setItem("orders", JSON.stringify(this.orders));
    }

    makeOrder(items, price) {
        let newOrder = {};

        if (this.getOrdersCount() === 0) {
            newOrder.id = 1;
        } else {
            newOrder.id = this.orders[this.getOrdersCount() - 1].id + 1;
        }

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