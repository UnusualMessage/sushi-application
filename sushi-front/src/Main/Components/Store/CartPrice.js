import { makeAutoObservable } from "mobx";

class CartPrice {
    price = localStorage.getItem("price");

    constructor() {
        makeAutoObservable(this);

        if (this.price === null) {
            this.price = "0";
        }
    }

    add(additionalPrice) {
        this.price = (Number(this.price) + Number(additionalPrice)).toString();
        localStorage.setItem("price", this.price);
    }
}

export default new CartPrice();