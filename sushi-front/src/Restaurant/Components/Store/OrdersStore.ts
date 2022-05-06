import { makeAutoObservable } from "mobx";

import IOrder from "../Interfaces/IOrder";
import IItem from "../Interfaces/IItem";
import CurrentCity from "./CurrentCity";

class OrdersStore {
    orders : IOrder[] = localStorage.getItem("orders") ? JSON.parse(localStorage.getItem("orders")) : [];

    constructor() {
        makeAutoObservable(this);
    }

    saveToLocalStorage() {
        localStorage.setItem("orders", JSON.stringify(this.orders));
    }

    makeOrder(items : IItem[], price : number) {
        let newOrder : IOrder = {
            id: 1,
            date: "04.05.22",
            status: "Оформлен",
            price: price,
            items: items.slice(0),
            city: CurrentCity.city
        };

        if (this.getOrdersCount() !== 0) {
            newOrder.id = this.orders[this.getOrdersCount() - 1].id + 1;
        }

        this.orders.push(newOrder);
        this.saveToLocalStorage();
    }

    set(orders : IOrder[]) {
        this.orders = orders.slice(0);
    }

    remove(id) {
        this.orders = this.orders.filter((order : IOrder) => order.id !== id);
        this.saveToLocalStorage();
    }

    accept(id) {
        let acceptedOrder = this.getById(id);
        acceptedOrder.status = "Доставка";
        this.saveToLocalStorage();
        return acceptedOrder;
    }

    canBeDeleted(id) {
        const temp : IOrder = this.orders.find((order : IOrder) => order.id === id);
        return temp.status.toLowerCase() === "доставлен";
    }

    isFirst(id) {
        const temp = this.orders.filter((order : IOrder) => CurrentCity.city.toLowerCase() === order.city.toLowerCase());
        
        return id === temp[0].id;
    }

    isLast(id) {
        const temp = this.orders.filter((order : IOrder) => CurrentCity.city.toLowerCase() === order.city.toLowerCase());
        return id === temp[this.getOrdersCountInCity() - 1].id;
    }

    isEmpty() {
        return this.getByCity().length === 0;
    }

    getSorted(ascending : boolean) {
        let sortedItems = this.get();

        if (ascending) {
            return sortedItems.sort((a : IOrder, b : IOrder) => a.price > b.price ? 1 : -1);
        } else {
            return sortedItems.sort((a : IOrder, b : IOrder) => a.price < b.price ? 1 : -1);
        }
    }

    get() {
        return this.orders.slice(0);
    }

    getById(id) {
        return this.orders.find((order : IOrder) => order.id === id);
    }
    
    getByCity() {
        return this.orders.filter((order : IOrder) => CurrentCity.city === order.city)
    }

    getRandomOrder() {
        const randomIndex = Math.floor(Math.random() * this.getOrdersCountInCity());
        return this.getByCity()[randomIndex];
    }

    getFirst() {
        return this.getByCity()[0];
    }

    getLast() {
        return this.getByCity()[this.getOrdersCountInCity() - 1];
    }

    getNext(id) {
        const temp = this.getByCity();
        const orderIndex = temp.map((order : IOrder) => order.id).indexOf(id);

        return temp[orderIndex + 1];
    }

    getPrevious(id) {
        const temp = this.getByCity();
        const orderIndex = temp.map((order : IOrder) => order.id).indexOf(id);

        return temp[orderIndex - 1];
    }

    getOrdersCount() {
        return this.orders.length;
    }

    getOrdersCountInCity() {
        return this.getByCity().length;
    }
}

export default new OrdersStore();