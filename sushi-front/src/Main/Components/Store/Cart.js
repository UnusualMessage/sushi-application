import { makeAutoObservable } from "mobx";

class Cart {
    price = "0"; 
    uniqueCount = 0;
    items = []; 

    constructor() {
        makeAutoObservable(this);
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
    }

    remove(id) {
        this.items = this.items.filter((item) => item.id !== id);
        this.price = this.getPrice().toString();
        this.uniqueCount -= 1;
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
    }

    plusCount(id) {
        const temp = this.items.find((item) => item.id === id);
        temp.count += 1;
    }
}

export default new Cart();