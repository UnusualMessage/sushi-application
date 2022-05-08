import { makeAutoObservable } from "mobx";
import IItem from "../Interfaces/IItem";

class CartStore {
    items : IItem[] = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []; 

    constructor() {
        makeAutoObservable(this);
    }

    saveToLocalStorage() {
        localStorage.setItem("items", JSON.stringify(this.items));
    }

    add(newItem : IItem) {
        const foundItem : IItem = this.items.find((item : IItem) => item.id === newItem.id);
        if (foundItem) {
            foundItem.count += 1;
        }
        else {
            this.items.push(newItem);
        }

        this.saveToLocalStorage();
    }

    remove(id) {
        this.items = this.items.filter((item : IItem) => item.id !== id);
        this.saveToLocalStorage();
    }

    clear() {
        localStorage.removeItem("count");
        localStorage.removeItem("items");

        while (this.items.length) {
            this.items.pop();
        }
    }

    minusCount(id) {
        const temp = this.items.find((item : IItem) => item.id === id);

        if (temp.count !== 1) {
            temp.count -= 1;
        }
        this.saveToLocalStorage();
    }

    plusCount(id) {
        const temp = this.items.find((item : IItem) => item.id === id);
        temp.count += 1;
        this.saveToLocalStorage();
    }

    isEmpty() {
        return (this.items.length === 0) ? true : false;
    }
    
    getPrice() {
        return this.items.map((item : IItem) => item.price * item.count).reduce((prev : number, curr : number) => prev + curr, 0);
    }

    getCount(id) {
        return this.items.find((item : IItem) => item.id === id).count;
    }

    getTotalCount() {
        return this.items.length;
    }

    get() {
        return this.items.slice(0);
    }
}

export default new CartStore();