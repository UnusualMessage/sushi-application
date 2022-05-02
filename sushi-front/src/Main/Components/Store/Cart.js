import { makeAutoObservable } from "mobx";

class Cart {
    price = localStorage.getItem("price") ? Number(localStorage.getItem("price")) : "0"; 
    uniqueCount = localStorage.getItem("count") ? localStorage.getItem("count") : 0;
    items = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []; 

    constructor() {
        makeAutoObservable(this);
    }

    saveToLocalStorage() {
        localStorage.setItem("price", this.price);
        localStorage.setItem("count", this.uniqueCount);
        localStorage.setItem("items", JSON.stringify(this.items));
    }

    isEmpty() {
        return (this.uniqueCount === 0) ? true : false;
    }

    add(newItem) {
        const check = this.items.find((item) => item.id === newItem.id);
        if (check) {
            check.count += 1;
        }
        else {
            this.items.push(newItem);
            this.uniqueCount += 1;
        }

        this.price = this.getPrice().toString();
        this.saveToLocalStorage();
    }

    remove(id) {
        this.items = this.items.filter((item) => item.id !== id);
        this.price = this.getPrice().toString();
        this.uniqueCount -= 1;
        this.saveToLocalStorage();
    }

    getPrice() {
        return this.items.map(item => Number(item.price) * item.count).reduce((prev, curr) => prev + curr, 0);
    }

    getCount(id) {
        return this.items.find((item) => item.id === id).count.toString();
    }

    minusCount(id) {
        const temp = this.items.find((item) => item.id === id);

        if (temp.count !== 1) {
            temp.count -= 1;
        }
        this.saveToLocalStorage();
    }

    plusCount(id) {
        const temp = this.items.find((item) => item.id === id);
        temp.count += 1;
        this.saveToLocalStorage();
    }
}

export default new Cart();