import { makeAutoObservable } from "mobx";

class CurrentSorting {
    itemCardsAscending = true;
    ordersAscending = true;

    constructor() {
        makeAutoObservable(this);
    }

    changeItemCardsSorting() {
        this.itemCardsAscending = !this.itemCardsAscending;
    }

    changeOrdersSorting() {
        this.ordersAscending = !this.ordersAscending;
    }
}

export default new CurrentSorting();