import { makeAutoObservable } from "mobx";

class CartStore {
    items = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []; 

    constructor() {
        makeAutoObservable(this);
    }

    saveToLocalStorage() {
        localStorage.setItem("items", JSON.stringify(this.items));
    }

    add(newItem) {
        const check = this.items.find((item) => item.id === newItem.id);
        if (check) {
            check.count += 1;
        }
        else {
            this.items.push(newItem);
        }

        this.saveToLocalStorage();
    }

    remove(id) {
        this.items = this.items.filter((item) => item.id !== id);
        this.saveToLocalStorage();
    }

    clear() {
        localStorage.removeItem("count");
        localStorage.removeItem("items");

        this.items.clear();
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

    isEmpty() {
        return (this.items.length === 0) ? true : false;
    }
    
    getPrice() {
        return this.items.map(item => item.price * item.count).reduce((prev, curr) => prev + curr, 0);
    }

    getCount(id) {
        return this.items.find((item) => item.id === id).count;
    }

    getTotalCount() {
        return this.items.length;
    }
}

export default new CartStore();