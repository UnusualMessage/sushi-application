import { makeAutoObservable } from "mobx";
import CurrentCity from "./CurrentCity";

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
        newOrder.city = CurrentCity.city

        this.orders.push(newOrder);
        this.saveToLocalStorage();
    }

    set(orders) {
        this.orders = orders.slice(0);
    }

    remove(id) {
        this.orders = this.orders.filter((order) => order.id !== id);
        this.saveToLocalStorage();
    }

    accept(id) {
        let acceptedOrder = this.getById(id);
        acceptedOrder.status = "Доставка";
        this.saveToLocalStorage();
        return acceptedOrder;
    }

    canBeDeleted(id) {
        const temp = this.orders.find(order => order.id === id);
        return temp.status.toLowerCase() === "доставлен";
    }

    isFirst(id) {
        const temp = this.orders.filter(order => CurrentCity.city === order.city);
        
        return id === temp[0].id;
    }

    isLast(id) {
        const temp = this.orders.filter(order => CurrentCity.city === order.city);
        return id === temp[this.getOrdersCountInCity() - 1].id;
    }

    getSorted(ascending) {
        let sortedItems = this.get();

        if (ascending) {
            return sortedItems.sort((a, b) => a.price > b.price ? 1 : -1);
        } else {
            return sortedItems.sort((a, b) => a.price < b.price ? 1 : -1);
        }
    }

    get() {
        return this.orders.slice(0);
    }

    getById(id) {
        return this.orders.find(order => order.id === id);
    }

    getRandomOrder() {
        const randomIndex = Math.floor(Math.random() * this.getOrdersCountInCity());
        return this.orders.filter(order => CurrentCity.city === order.city)[randomIndex];
    }

    getFirst() {
        return this.orders.filter(order => CurrentCity.city === order.city)[0];
    }

    getLast() {
        return this.orders.filter(order => CurrentCity.city === order.city)[this.getOrdersCountInCity() - 1];
    }

    getNext(id) {
        const temp = this.orders.filter(order => CurrentCity.city === order.city);
        const orderIndex = temp.map(item => item.id).indexOf(id);

        return temp[orderIndex + 1];
    }

    getPrevious(id) {
        const temp = this.orders.filter(order => CurrentCity.city === order.city);
        const orderIndex = temp.map(item => item.id).indexOf(id);

        return temp[orderIndex - 1];
    }

    getOrdersCount() {
        return this.orders.length;
    }

    getOrdersCountInCity() {
        return this.orders.filter(order => CurrentCity.city === order.city).length;
    }
}

export default new OrdersStore();