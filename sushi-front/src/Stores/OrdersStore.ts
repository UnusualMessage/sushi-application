import { makeAutoObservable } from "mobx";

import IOrder from "../Interfaces/IOrder";
import CurrentCity from "./CurrentCity";
import ICustomerContacts from "../Interfaces/ICustomerContacts";
import CurrentShop from "./CurrentShop";
import IAddress from "../Interfaces/IAddress";
import CartStore from "./CartStore";

class OrdersStore {
    orders : IOrder[] = localStorage.getItem("orders") ? JSON.parse(localStorage.getItem("orders")) : [];

    constructor() {
        makeAutoObservable(this);
    }

    saveToLocalStorage() {
        localStorage.setItem("orders", JSON.stringify(this.orders));
    }

    getCurrentDate() : string {
        const currentDate = new Date();

        const date : number = currentDate.getDate();
        const month : number = currentDate.getMonth() + 1;
        const year : number = currentDate.getFullYear();

        let correctDate : string;
        if (date < 10) {
            correctDate = "0" + date.toString();
        } else {
            correctDate = date.toString();
        }

        let correctMonth : string;
        if (month < 10) {
            correctMonth = "0" + month.toString();
        } else {
            correctMonth = month.toString();
        }

        return correctDate + "." + correctMonth + "." + year.toString();
    }

    makeOrder(customer : ICustomerContacts, isDelivery : boolean, address? : IAddress) {
        let newOrder : IOrder = {
            id: 1,
            date: this.getCurrentDate(),
            status: "Оформлен",
            price: CartStore.getPrice(),

            city: CurrentCity.city,
            shop: CurrentShop.shop,

            isDelivery: isDelivery,

            address: address,
            customer: customer,
            items: CartStore.get(),
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

    finish(id) {
        let finishedOrder = this.getById(id);
        finishedOrder.status = "Доставлен";
        this.saveToLocalStorage();
    }

    canBeDeleted(id) {
        const temp : IOrder = this.orders.find((order : IOrder) => order.id === id);
        return temp.status.toLowerCase() === "доставлен";
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

    getOrdersCount() {
        return this.orders.length;
    }

    getOrdersCountInCity() {
        return this.getByCity().length;
    }

    getForCourier() {
        return this.orders.filter((order : IOrder) => CurrentCity.city === order.city && order.isDelivery && order.status.toLowerCase() === "оформлен");
    }
}

export default new OrdersStore();